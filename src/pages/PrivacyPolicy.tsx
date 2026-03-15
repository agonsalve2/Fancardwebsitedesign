import { motion } from 'motion/react';

export function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-gray-50 border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-gray-900 mb-4 text-4xl md:text-5xl lg:text-6xl">
            Data Privacy Policy
          </h1>
          <p className="text-gray-500">Latest update: 10 May 2025</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="relative py-12 px-6 pb-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-none"
          >
            <div className="space-y-10 text-gray-600">

              {/* 1. Applicability */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">1. Applicability</h2>
                <p className="leading-relaxed mb-4">
                  This data privacy policy applies to the Fancard application (<strong className="text-gray-900">"Application"</strong>) with all content, functions, and services and the corresponding websites{' '}
                  <a href="https://fancard.me" className="text-[#6FE866] hover:underline" target="_blank" rel="noopener noreferrer">fancard.me</a>.{' '}
                  Fancard B.V. (<strong className="text-gray-900">"Fancard"</strong>) has developed and exploits the Application and acts as responsible body for the lawfulness of the processing of your Personal Data under data protection laws. Please find our contact details below:
                </p>
                <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
                  <p><span className="text-gray-900 font-semibold">Fancard B.V.</span></p>
                  <p>Stroombaan 4</p>
                  <p>1181 VX Amstelveen</p>
                  <p>The Netherlands</p>
                  <p className="mt-2">
                    In case you have any questions relating to data protection, please contact us via{' '}
                    <a href="mailto:info@fancard.me" className="text-[#6FE866] hover:underline">info@fancard.me</a>
                  </p>
                </div>
              </section>

              {/* 2. Personal Data */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">2. Personal Data</h2>
                <p className="leading-relaxed mb-6">
                  While using the Application, we process the following personal data from users:
                </p>

                <h3 className="text-gray-900 text-lg mb-3 font-semibold">A. Device Data</h3>
                <p className="leading-relaxed mb-3">
                  Certain information when you use the Application that may identify you as an individual, but the purpose of which is to identify the device you use to access the services, such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                  <li><span className="text-gray-900 font-medium">Technical Data</span>, such as your IP-address, time zone setting and location, browser type and version, browsing action, browser plug-in types, operating system, platform, and other technologies on the devices you use with the Application.</li>
                  <li><span className="text-gray-900 font-medium">Usage Data</span>, how you use the Application.</li>
                  <li><span className="text-gray-900 font-medium">Device Data</span>, language setting, device model, device operating system version, application version.</li>
                  <li><span className="text-gray-900 font-medium">Aggregated Data</span>, such as statistical or demographic data, which is not considered to be personal data.</li>
                </ul>

                <h3 className="text-gray-900 text-lg mb-3 font-semibold">B. Identity Data and Contact Data</h3>
                <p className="leading-relaxed mb-3">
                  We collect information which relates directly to you (such as your mobile number, username, e-mail address and password) when you sign up and register for the service.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                  <li><span className="text-gray-900 font-medium">Profile Data</span> — the data you voluntarily add to your profile and/or content (such as first and last name, picture).</li>
                  <li><span className="text-gray-900 font-medium">User Content</span> (e.g., photos, comments, and other materials) that you post to the Service.</li>
                  <li><span className="text-gray-900 font-medium">Communications</span> between you and Fancard. For example, we may send you Service-related emails (e.g., account verification, changes/updates to features of the Service, technical and security notices).</li>
                  <li><span className="text-gray-900 font-medium">Cookies</span> — when you visit our website, cookies are placed. Cookies are small text files placed on your computer when you visit a website. They ensure that the site functions optimally and collect data to make the information shown as relevant as possible for you. Functional and analytical cookies are placed automatically; other cookies (including traceable analytical and marketing cookies) are only placed after you have given your consent.</li>
                </ul>

                <h3 className="text-gray-900 text-lg mb-3 font-semibold">C. Finding Your Friends on Fancard</h3>
                <p className="leading-relaxed mb-3">
                  If you choose, you can use our "Find friends" feature to locate other people with Fancard accounts either through (i) your contacts list, (ii) third-party social media sites, or (iii) through a search of names and usernames on Fancard.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>If you choose to find your friends through <strong className="text-gray-900">(i) your device's contacts list</strong>, then Fancard will access your contacts list to determine whether someone associated with your contact is using Fancard.</li>
                  <li>If you choose to find your friends through a <strong className="text-gray-900">(ii) third-party social media site</strong>, then you will be prompted to set up a link to the third-party service and you understand that any information that such service may provide to us will be governed by this Privacy Policy.</li>
                  <li>If you choose to find your friends <strong className="text-gray-900">(iii) through a search of names or usernames</strong> on Fancard, then simply type a name to search and we will perform a search on our Service.</li>
                </ul>
                <p className="leading-relaxed text-gray-500 italic">
                  Note about "Invite Friends" feature: If you choose to invite someone to the Service through our "Invite friends" feature, you may select a person directly from the contacts list on your device and send a text or email from your personal account. You understand and agree that you are responsible for any charges that apply to communications sent from your device, and because this invitation is coming directly from your personal account, Fancard does not have access to or control this communication.
                </p>
              </section>

              {/* 3. Purpose */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">3. Purpose</h2>
                <p className="leading-relaxed mb-4">
                  The main purpose for which we collect the above-mentioned data is to offer you the service. We need the data as mentioned under 2.a. to optimize the service for optimal user experience. We need the data as mentioned under 2.b. and 2.c. to be able to identify you as a user to give you access to the service. Other data is provided by you when using the service.
                </p>
                <p className="leading-relaxed">
                  We do not share your personal data with third parties, unless there is a situation as mentioned below in paragraph 5, or in case you give your consent for third party cookies (see cookie policy).
                </p>
              </section>

              {/* 4. Legal Basis */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">4. Legal Basis and Role Division</h2>
                <p className="leading-relaxed mb-4">
                  We process the data as mentioned in order to be able to execute the agreement we have concluded with you and to give you an optimal user experience. The legal basis on which we process other personal data (provided by you) is your consent. The Application is not designed for or intentionally targeted at children 16 years of age or younger. Children under 16 years of age cannot give legally valid consent and need the consent of their parent(s) to download and use the Application. You can withdraw your given consent at any time by deleting your account. Deleting your account will also delete all information and personal data associated with your account.
                </p>
                <p className="leading-relaxed">
                  Fancard, which qualifies as a processor within the meaning of the GDPR, processes personal data on behalf of the user who qualifies as a controller within the meaning of the GDPR when providing the Service. The basic rule is that the controller is primarily responsible for ensuring that the data is processed on the basis of a correct legal basis.
                </p>
              </section>

              {/* 5. Third Parties */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">5. Third Parties</h2>
                <p className="leading-relaxed">
                  We will not transfer your personal data to third parties without your explicit consent, unless this is necessary to comply with a judicial proceeding, court order or legal process. In addition, parties with whom we collaborate to make the services possible (so-called sub-processors), such as the party that hosts the data, have access to your personal data in certain cases. We have made agreements with these parties about, among other things, the way in which personal data is processed and the security requirements. In all cases, the processing of personal data takes place within the EEA, and data (including your content/pictures) is stored on servers that are located within the EEA.
                </p>
              </section>

              {/* 6. Security and Data Retention */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">6. Security and Data Retention</h2>
                <p className="leading-relaxed mb-4">
                  We take appropriate security measures to protect your personal data against unauthorized access to or unauthorized alteration, disclosure, or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, as well as physical security measures to guard against unauthorized access to systems where we store personal data. In the agreements with the third parties we work with, we have agreed to the same measures to ensure that their security level is also sufficient to protect your personal data.
                </p>
                <p className="leading-relaxed">
                  We will retain your personal data for as long as necessary to fulfil the purposes we collected it for (e.g. such as providing you with access to the Application), including for the purpose of satisfying any legal, accounting, or reporting requirements. Where it is no longer necessary to process your personal data, we will delete it or anonymize it. This means among others that we retain your personal data for the time your account is active. If you delete your account, all your personal data will also be deleted automatically.
                </p>
              </section>

              {/* 7. User Rights */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">7. User Rights</h2>
                <p className="leading-relaxed mb-4">
                  Under the General Data Protection Regulation (GDPR) users may exercise certain rights regarding their personal data:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4 mb-4">
                  <li><span className="text-gray-900 font-medium">Withdraw consent:</span> You can withdraw your consent at any time by sending us an email, or by deleting your account.</li>
                  <li><span className="text-gray-900 font-medium">Access:</span> You have the right to access your personal data.</li>
                  <li><span className="text-gray-900 font-medium">Rectification:</span> If it appears that your personal data is incorrect, you can ask us to update or correct your data.</li>
                  <li><span className="text-gray-900 font-medium">Restrict:</span> Under circumstances you have the right to ask us not to process your data for any purpose other than just storing it.</li>
                  <li><span className="text-gray-900 font-medium">Delete:</span> You can also request us to delete personal data and stop using it.</li>
                  <li><span className="text-gray-900 font-medium">Data portability:</span> You have the right to receive your data to have it transmitted to another controller.</li>
                  <li><span className="text-gray-900 font-medium">Object:</span> You have the right to object to the processing of your data if the processing is conducted on a legal basis other than consent.</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  If you have a question about the processing of your personal data, or in case you want to exercise the above-mentioned rights, please contact us via{' '}
                  <a href="mailto:info@fancard.me" className="text-[#6FE866] hover:underline">info@fancard.me</a>.
                  Your requests shall be exercised free of charge and will be addressed by us as early as possible and always within one month.
                </p>
                <p className="leading-relaxed">
                  If you are not satisfied with the way in which we handle your personal data or related requests and/or questions, you can also submit a complaint to the Dutch Data Protection Authority via:{' '}
                  <a href="https://autoriteitpersoonsgegevens.nl" className="text-[#6FE866] hover:underline" target="_blank" rel="noopener noreferrer">autoriteitpersoonsgegevens.nl</a>.
                </p>
              </section>

              {/* 8. Legal Information */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">8. Legal Information / Version</h2>
                <p className="leading-relaxed">
                  This privacy statement has been prepared based on provisions of relevant privacy and data protection legislations, including the General Data Protection Regulation.
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}