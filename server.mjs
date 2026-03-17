import 'dotenv/config';
import express from 'express';

const app = express();
app.use(express.json());

const BREVO_API_KEY = process.env.BREVO_API_KEY;

app.post('/api/demo-request', async (req, res) => {
  const { firstName, lastName, email, phone, venueName, interest } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    'api-key': BREVO_API_KEY,
  };

  try {
    // 1. Create/update contact in Brevo
    const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: firstName, LASTNAME: lastName, STADIUM: venueName, INTEREST: interest },
        listIds: [5],
        updateEnabled: true,
      }),
    });
    const contactData = await contactRes.json().catch(() => ({}));
    console.log('Contact created:', contactRes.status, contactData);

    // 2. Send confirmation email to requester
    const confirmRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        sender: { name: 'Fancard', email: 'info@fancard.me' },
        to: [{ email, name: `${firstName} ${lastName}` }],
        subject: 'Demo Request Received — Fancard',
        htmlContent: getConfirmationHtml(firstName),
      }),
    });
    const confirmData = await confirmRes.json();
    console.log('Confirmation email:', confirmRes.status, confirmData);

    // 3. Notify Dennis
    const notifyRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        sender: { name: 'Fancard Website', email: 'info@fancard.me' },
        to: [{ email: 'dennis@ve2max.com', name: 'Dennis' }],
        subject: `New Demo Request: ${firstName} ${lastName} — ${venueName}`,
        htmlContent: getNotificationHtml({ firstName, lastName, email, phone, venueName, interest }),
      }),
    });
    const notifyData = await notifyRes.json();
    console.log('Notification email:', notifyRes.status, notifyData);

    return res.json({ success: true });
  } catch (error) {
    console.error('Brevo API error:', error);
    return res.status(500).json({ error: 'Failed to process demo request' });
  }
});

app.listen(3001, () => {
  console.log('API server running on http://localhost:3001');
});

function getConfirmationHtml(firstName) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<style>@import url('https://fonts.googleapis.com/css2?family=TikTok+Sans:wght@400;600;700&display=swap');</style>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f4f4f4;">
<tr><td align="center" style="padding:24px 0;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
<tr><td style="background-color:#6FE866;height:4px;font-size:0;line-height:0;">&nbsp;</td></tr>
<tr><td style="background-color:#ffffff;padding:32px 40px;text-align:center;">
<img src="https://img.mailinblue.com/10817867/images/content_library/original/69b950b5aae2acf9140c873f.png" alt="Fancard" width="160" style="display:inline-block;width:160px;max-width:100%;height:auto;">
</td></tr>
<tr><td style="background-color:#2A2A2A;padding:32px 40px 40px;text-align:center;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
<tr><td style="font-family:'TikTok Sans',Arial,sans-serif;font-size:28px;font-weight:700;line-height:1.2;color:#ffffff;padding-bottom:12px;">Demo Request Received</td></tr>
<tr><td style="font-family:'TikTok Sans',Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.6;color:#cccccc;">
Hi ${firstName}, thanks for your interest in Fancard. We've received your request and will reach out to you within <strong style="color:#ffffff;">24 hours</strong> to schedule your demo.
</td></tr>
</table></td></tr>
<tr><td style="padding:40px 40px 16px;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
<tr><td style="font-family:'TikTok Sans',Arial,sans-serif;font-size:20px;font-weight:700;color:#2A2A2A;padding-bottom:24px;">What happens next</td></tr>
</table></td></tr>
<tr><td style="padding:0 40px;"><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tr>
<td width="48" valign="top" style="padding-right:16px;"><div style="width:40px;height:40px;border-radius:8px;background-color:#6FE866;text-align:center;line-height:40px;font-family:'TikTok Sans',Arial,sans-serif;font-size:18px;font-weight:700;color:#2A2A2A;">1</div></td>
<td valign="top" style="padding-bottom:20px;">
<p style="margin:0 0 4px;font-family:'TikTok Sans',Arial,sans-serif;font-size:16px;font-weight:600;color:#2A2A2A;">We'll reach out</p>
<p style="margin:0;font-family:'TikTok Sans',Arial,sans-serif;font-size:14px;color:#666666;line-height:1.5;">A member of our team will contact you within 24 hours to find a time that works for you.</p>
</td></tr></table></td></tr>
<tr><td style="padding:0 40px;"><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tr>
<td width="48" valign="top" style="padding-right:16px;"><div style="width:40px;height:40px;border-radius:8px;background-color:#6FE866;text-align:center;line-height:40px;font-family:'TikTok Sans',Arial,sans-serif;font-size:18px;font-weight:700;color:#2A2A2A;">2</div></td>
<td valign="top" style="padding-bottom:20px;">
<p style="margin:0 0 4px;font-family:'TikTok Sans',Arial,sans-serif;font-size:16px;font-weight:600;color:#2A2A2A;">Tailored walkthrough</p>
<p style="margin:0;font-family:'TikTok Sans',Arial,sans-serif;font-size:14px;color:#666666;line-height:1.5;">We'll show you how Fancard captures live fan engagement and turns it into structured, actionable data — tailored to your use case.</p>
</td></tr></table></td></tr>
<tr><td style="padding:0 40px;"><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tr>
<td width="48" valign="top" style="padding-right:16px;"><div style="width:40px;height:40px;border-radius:8px;background-color:#6FE866;text-align:center;line-height:40px;font-family:'TikTok Sans',Arial,sans-serif;font-size:18px;font-weight:700;color:#2A2A2A;">3</div></td>
<td valign="top" style="padding-bottom:20px;">
<p style="margin:0 0 4px;font-family:'TikTok Sans',Arial,sans-serif;font-size:16px;font-weight:600;color:#2A2A2A;">Next steps together</p>
<p style="margin:0;font-family:'TikTok Sans',Arial,sans-serif;font-size:14px;color:#666666;line-height:1.5;">After the demo, we'll outline a clear path to getting started — no pressure, just clarity.</p>
</td></tr></table></td></tr>
<tr><td style="padding:24px 40px 0;text-align:center;">
<img src="https://img.mailinblue.com/10817867/images/content_library/original/69b950bbb16af72ae84aa626.png" alt="Fancard in action" width="520" style="display:block;width:520px;max-width:100%;height:auto;border-radius:8px;margin:0 auto;">
</td></tr>
<tr><td style="padding:24px 40px 0;"><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td style="border-top:1px solid #e8e8e8;height:1px;font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr>
<tr><td style="padding:24px 40px 40px;text-align:center;">
<p style="margin:0;font-family:'TikTok Sans',Arial,sans-serif;font-size:14px;color:#666666;line-height:1.6;">Have questions in the meantime? Just reply to this email — we're happy to help.</p>
</td></tr>
<tr><td style="background-color:#f4f4f4;padding:32px 40px;text-align:center;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
<tr><td align="center" style="padding-bottom:12px;"><img src="https://img.mailinblue.com/10817867/images/content_library/original/69b950b5aae2acf9140c873f.png" alt="Fancard" width="120" style="display:inline-block;width:120px;max-width:100%;height:auto;"></td></tr>
<tr><td style="font-family:'TikTok Sans',Arial,sans-serif;font-size:12px;color:#999999;line-height:1.6;padding-bottom:16px;">Capturing fan engagement. Converting it into value.</td></tr>
<tr><td style="font-family:'TikTok Sans',Arial,sans-serif;font-size:11px;color:#666666;line-height:1.6;">You received this email because you requested a demo on fancard.com.</td></tr>
</table></td></tr>
<tr><td style="background-color:#6FE866;height:4px;font-size:0;line-height:0;">&nbsp;</td></tr>
</table></td></tr></table>
</body></html>`;
}

function getNotificationHtml(data) {
  const timestamp = new Date().toLocaleString('en-GB', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit',
  });
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,sans-serif;">
<table role="presentation" width="100%" style="background-color:#f4f4f4;">
<tr><td align="center" style="padding:24px 0;">
<table role="presentation" width="560" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
<tr><td style="background-color:#6FE866;height:4px;">&nbsp;</td></tr>
<tr><td style="background-color:#2A2A2A;padding:24px 32px;">
<p style="margin:0;font-size:20px;font-weight:700;color:#ffffff;">New Demo Request</p>
<p style="margin:8px 0 0;font-size:14px;color:#999999;">${timestamp}</p>
</td></tr>
<tr><td style="padding:32px;">
<table role="presentation" width="100%" style="font-size:15px;color:#333;">
<tr><td style="padding:8px 0;font-weight:600;width:140px;color:#666;">Name</td><td style="padding:8px 0;">${data.firstName} ${data.lastName}</td></tr>
<tr><td style="padding:8px 0;font-weight:600;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${data.email}" style="color:#2A2A2A;">${data.email}</a></td></tr>
<tr><td style="padding:8px 0;font-weight:600;color:#666;">Phone</td><td style="padding:8px 0;"><a href="tel:${data.phone}" style="color:#2A2A2A;">${data.phone}</a></td></tr>
<tr><td style="padding:8px 0;font-weight:600;color:#666;">Venue</td><td style="padding:8px 0;">${data.venueName}</td></tr>
<tr><td style="padding:8px 0;font-weight:600;color:#666;">Interest</td><td style="padding:8px 0;">${data.interest}</td></tr>
</table>
<div style="margin-top:24px;padding-top:24px;border-top:1px solid #e8e8e8;">
<a href="mailto:${data.email}" style="display:inline-block;background-color:#6FE866;color:#2A2A2A;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:6px;font-size:15px;">Reply to ${data.firstName}</a>
</div></td></tr>
<tr><td style="background-color:#6FE866;height:4px;">&nbsp;</td></tr>
</table></td></tr></table>
</body></html>`;
}
