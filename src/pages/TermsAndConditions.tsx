import { motion } from 'motion/react';

export function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          <p className="text-gray-500">Version: 10 May 2025</p>
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

              {/* Intro */}
              <section>
                <p className="leading-relaxed">
                  Fancard B.V., Stroombaan 4 (1181 VX) Amstelveen, the Netherlands (<strong className="text-gray-900">"Fancard"</strong>) is a Dutch company that develops and exploits software products for consumers, such as the Fancard application (<strong className="text-gray-900">"Application"</strong>) and the corresponding websites{' '}
                  <a href="https://www.fancard.me" className="text-[#6FE866] hover:underline" target="_blank" rel="noopener noreferrer">www.fancard.me</a> and{' '}
                  <a href="https://app.fancard.me" className="text-[#6FE866] hover:underline" target="_blank" rel="noopener noreferrer">app.fancard.me</a>.
                  The Application provides insights to prepare for meetings efficiently. The Application is a web-based service which is digitally offered to users from 16 years and older. The use of the Application is subject to the terms and conditions below. Using the Application constitutes acceptance of these terms and conditions.
                </p>
                <p className="leading-relaxed mt-4">
                  Deviations from these terms and conditions are possible only by means of written confirmation by Fancard.
                </p>
              </section>

              {/* Use of the Application */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">Use of the Application</h2>
                <p className="leading-relaxed mb-4">
                  The Application is designed for users that are 16 years of age or older. Users under the age of 16 years need permission from their parents or legal guardians to download and register (see below) the Application.
                </p>
                <p className="leading-relaxed mb-4">
                  To use the Application, you first need to register with your email address and password. After entering a code that is received via a confirmation email, registration can be completed.
                </p>
                <p className="leading-relaxed mb-4">
                  After successful registration you will be granted a personal usage right for the Application.
                </p>
                <p className="leading-relaxed mb-4">
                  You must secure access to your account using the username and password against third parties. In particular you must keep the password strictly confidential. Fancard may assume that all actions undertaken from your account after logging in with your username and password are authorized and supervised by you. This means you are liable for these actions, unless and until you have notified Fancard that someone else knows and/or uses your password.
                </p>
                <p className="leading-relaxed">
                  The Application processes your personal data and data of your device. Consult the privacy statement and cookie policy for more information about how we use your personal data.
                </p>
              </section>

              {/* Terms of Use */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">Terms of Use</h2>
                <p className="leading-relaxed mb-4">
                  It is not permitted to use the Application for any purpose that violates Dutch or other applicable law or regulation. This includes (among others) the storage or transmission of data and/or posting of content using the service that is violent, hateful, sexually suggestive, discriminatory, slanderous, libelous, or racist.
                </p>
                <p className="leading-relaxed mb-3">It is not permitted to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Decompile or reverse engineer the source code of the application, except to the extent permitted by mandatory law.</li>
                  <li>Supply copies of the application to third parties.</li>
                  <li>Sublicense the application or to make the application available to third parties, by rental, Software-as-a-Service constructs or otherwise.</li>
                  <li>Modify the application, except to the extent permitted by mandatory law.</li>
                  <li>Solicit, collect or use the login credentials of other Fancard users.</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  Should Fancard discover that you violate any of the above, or receive a complaint alleging the same, then Fancard may intervene to end the violation.
                </p>
                <p className="leading-relaxed mb-4">
                  If in the opinion of Fancard the continued functioning of the computer systems or network of Fancard or third parties is actually or under threat of being damaged or jeopardized, for example through excessive transmission of e-mail or other data, leaks of personal data or virus activity, Fancard may take all steps it deems reasonably necessary to end or avert such damage or jeopardy.
                </p>
                <p className="leading-relaxed mb-4">
                  Fancard is at all times entitled to file a criminal complaint for any offenses committed through or using the service.
                </p>
                <p className="leading-relaxed">
                  Fancard may recoup from you all damages it suffers as a result of your violation of these terms of use. You agree and hold harmless Fancard from all third-party claims arising out of your violation of these terms of use.
                </p>
              </section>

              {/* Availability and Maintenance */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">Availability and Maintenance</h2>
                <p className="leading-relaxed mb-4">
                  Fancard uses its best efforts to always have the service available but makes no guarantees about uninterrupted availability.
                </p>
                <p className="leading-relaxed mb-4">
                  Fancard actively maintains the Application. Maintenance can take place at any time, even if this may negatively impact the availability of the service. Maintenance is announced in advance whenever possible and appropriate.
                </p>
                <p className="leading-relaxed">
                  Fancard may from time to time adapt the Application. Your feedback and suggestions are welcome but ultimately Fancard decides which adaptations to carry out (or not).
                </p>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">Intellectual Property</h2>
                <p className="leading-relaxed mb-4">
                  The Application, the accompanying software as well as all information and content on the website is the intellectual property of Fancard. None of these items may be copied or used without prior written permission of Fancard, except and to the extent permitted by mandatory law.
                </p>
                <p className="leading-relaxed">
                  The information you store or process using the service is and remains your property (or the property of your suppliers or licensors). Fancard receives a limited license to use this information for the service, including for future aspects thereof. You can cancel this license by removing the information in question and/or terminating the agreement.
                </p>
              </section>

              {/* Compensation */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">Compensation for the Service</h2>
                <p className="leading-relaxed">
                  Using the Application is free of charge.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">Limitation of Liability</h2>
                <p className="leading-relaxed mb-4">
                  Except in case of intentional misconduct or gross negligence Fancard shall not be liable for the use of the Application or any damages in connection therewith.
                </p>
                <p className="leading-relaxed mb-4">
                  Fancard in no event is liable for indirect damages, consequential damages, lost profits, missed savings or damages through business interruption.
                </p>
                <p className="leading-relaxed mb-4">
                  Damages may only be claimed if reported in writing to Fancard at most two months after discovery.
                </p>
                <p className="leading-relaxed">
                  In case of force majeure Fancard is never required to compensate you for the damage suffered by you. Force majeure includes among other disruptions or unavailability of the internet, telecommunication infrastructure, power interruptions, riots, traffic jams, strikes, company disruptions, interruptions in supply, fires, and floods.
                </p>
              </section>

              {/* Term and Termination */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">Term and Termination</h2>
                <p className="leading-relaxed mb-4">
                  This agreement enters into force as soon as you first use the service and then remains in force until terminated. You can terminate this agreement at any time with immediate effect by deleting the Application from your mobile device.
                </p>
                <p className="leading-relaxed">
                  Fancard is entitled to terminate the agreement if you have not used the service at all in the last 18 months. In such an event Fancard shall first send a reminder mail to the e-mail address connected to your account.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">Changes to Terms</h2>
                <p className="leading-relaxed mb-4">
                  Fancard may change or add to these terms and conditions as well as any prices at any time.
                </p>
                <p className="leading-relaxed mb-4">
                  Fancard strives to announce changes or additions via the service as soon as possible before they come into effect.
                </p>
                <p className="leading-relaxed">
                  If you do not want to accept a change or addition, you can terminate the agreement until the date the changes take effect. Use of the Application after the date of effect shall constitute your acceptance of the changed or added-to terms and conditions.
                </p>
              </section>

              {/* Miscellaneous */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">Miscellaneous Provisions</h2>
                <p className="leading-relaxed mb-4">
                  Dutch law applies to this agreement.
                </p>
                <p className="leading-relaxed mb-4">
                  Except to the extent determined otherwise by mandatory applicable law, all disputes arising in connection with the Application shall be brought before the competent Dutch court for the principal place of business of Fancard.
                </p>
                <p className="leading-relaxed mb-4">
                  For any clause in these terms and conditions that demands that a statement must be done "in writing" to be legally valid, a statement by e-mail shall be sufficient provided with sufficient certainty the authenticity of the sender can be established and the integrity of the statement has not been compromised.
                </p>
                <p className="leading-relaxed mb-4">
                  The version of any communication of information as recorded by Fancard shall be deemed to be authentic unless you supply proof to the contrary.
                </p>
                <p className="leading-relaxed mb-4">
                  In case any part of these terms and conditions are declared legally invalid, this shall not affect the validity of the whole of the agreement. The parties shall in such an event agree on one or more replacement provisions that approximate the original intent of the invalid provision(s) within the limits of the law.
                </p>
                <p className="leading-relaxed">
                  Fancard is entitled to transfer its rights and obligations under this agreement to a third party as part of an acquisition of the Application or the associated business activities.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-gray-900 text-2xl mb-4">Contact</h2>
                <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                  <p className="mb-1"><span className="text-gray-900 font-semibold">Fancard B.V.</span></p>
                  <p className="mb-1">Stroombaan 4</p>
                  <p className="mb-1">1181 VX Amstelveen</p>
                  <p>The Netherlands</p>
                </div>
              </section>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}