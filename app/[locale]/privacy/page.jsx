export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <div className="h-1 w-20 bg-accent mb-8"></div>
        
        <div className="space-y-8 text-white/80">
          <section>
            <p className="text-sm text-white/50 mb-6">Last updated: January 20, 2025</p>
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit or use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Controller</h2>
            <p>
              Responsible for data processing on this website:
            </p>
            <div className="mt-3 pl-4 border-l-2 border-accent/30">
              <p>Alexej Krasnokutskij</p>
              <p>Email: alexeykrasnokutskiy@gmail.com</p>
              <p>Location: Portugal</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Data Collection and Usage</h2>
            
            <h3 className="text-xl font-medium text-accent mt-6 mb-3">2.1 Contact Form</h3>
            <p>
              When you use the contact form on this website, we collect the following information:
            </p>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message content</li>
            </ul>
            <p className="mt-3">
              This data is sent directly to my email address (alexeykrasnokutskiy@gmail.com) via Gmail and is used solely to respond to your inquiry. The data is not stored in any database on this website.
            </p>
            <p className="mt-3">
              <span className="text-accent font-medium">Legal basis:</span> The processing is based on your consent (Art. 6(1)(a) GDPR) when you submit the contact form.
            </p>

            <h3 className="text-xl font-medium text-accent mt-6 mb-3">2.2 Hosting and Server Logs</h3>
            <p>
              This website is hosted on Vercel. When you visit this website, Vercel may automatically collect certain technical information, including:
            </p>
            <ul className="list-disc list-inside ml-4 mt-3 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referrer URL</li>
              <li>Date and time of access</li>
            </ul>
            <p className="mt-3">
              This data is collected for technical purposes to ensure the functionality and security of the website. For more information, please refer to Vercel's Privacy Policy at: <a href="https://vercel.com/legal/privacy-policy" className="text-accent hover:text-accent-hover underline transition-colors" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</a>
            </p>
            <p className="mt-3">
              <span className="text-accent font-medium">Legal basis:</span> Legitimate interest (Art. 6(1)(f) GDPR) in ensuring website functionality and security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Cookies and Tracking</h2>
            <p>
              This website does not use cookies or tracking technologies such as Google Analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Services</h2>
            <p>
              This website does not use third-party services such as Google Fonts, social media plugins, or analytics tools. All styling is handled by Tailwind CSS and Next.js, which are processed locally.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Retention</h2>
            <p>
              Contact form submissions are sent directly to my email and are retained only as long as necessary to respond to your inquiry. You may request deletion of your data at any time by contacting me at alexeykrasnokutskiy@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p className="mb-3">
              Under the GDPR, you have the following rights regarding your personal data:
            </p>
            <ul className="space-y-3 ml-4">
              <li><span className="text-accent font-medium">Right of access:</span> You can request information about the personal data we process.</li>
              <li><span className="text-accent font-medium">Right to rectification:</span> You can request correction of inaccurate data.</li>
              <li><span className="text-accent font-medium">Right to erasure:</span> You can request deletion of your personal data.</li>
              <li><span className="text-accent font-medium">Right to restriction:</span> You can request restriction of processing.</li>
              <li><span className="text-accent font-medium">Right to data portability:</span> You can request your data in a structured format.</li>
              <li><span className="text-accent font-medium">Right to object:</span> You can object to the processing of your data.</li>
              <li><span className="text-accent font-medium">Right to withdraw consent:</span> You can withdraw your consent at any time.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact me at <a href="mailto:alexeykrasnokutskiy@gmail.com" className="text-accent hover:text-accent-hover underline transition-colors">alexeykrasnokutskiy@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Right to Lodge a Complaint</h2>
            <p>
              You have the right to lodge a complaint with a supervisory authority if you believe that the processing of your personal data violates the GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact me at:
            </p>
            <p className="mt-3">
              Email: <a href="mailto:alexeykrasnokutskiy@gmail.com" className="text-accent hover:text-accent-hover underline transition-colors">alexeykrasnokutskiy@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}