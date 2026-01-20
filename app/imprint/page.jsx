export default function Imprint() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Imprint</h1>
        <div className="h-1 w-20 bg-accent mb-8"></div>
        
        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Information According to § 5 TMG</h2>
            <p className="mb-4">
              This website is operated by:
            </p>
            <div className="pl-4 border-l-2 border-accent/30 space-y-2">
              <p><span className="text-accent font-medium">Name:</span> Alexej Krasnokutskij</p>
              <p><span className="text-accent font-medium">Location:</span> Portugal</p>
              <p><span className="text-accent font-medium">Email:</span> <a href="mailto:alexeykrasnokutskiy@gmail.com" className="text-accent hover:text-accent-hover underline transition-colors">alexeykrasnokutskiy@gmail.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Purpose of This Website</h2>
            <p>
              This website serves as a personal portfolio to showcase my skills, projects, and experience as a Junior Developer. It is operated on a non-commercial basis for informational and professional networking purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <p>
              For any inquiries regarding this website, please contact me at:
            </p>
            <p className="mt-3">
              <a href="mailto:alexeykrasnokutskiy@gmail.com" className="text-accent hover:text-accent-hover underline transition-colors">alexeykrasnokutskiy@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
            
            <h3 className="text-xl font-medium text-accent mt-6 mb-3">Liability for Content</h3>
            <p>
              The contents of this website have been created with the utmost care. However, I cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, I am responsible for my own content on these pages in accordance with general law. However, I am not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
            </p>

            <h3 className="text-xl font-medium text-accent mt-6 mb-3">Liability for Links</h3>
            <p>
              This website may contain links to external websites over which I have no control. Therefore, I cannot accept any responsibility for their content. The respective provider or operator of the linked pages is always responsible for the content of those pages. The linked pages were checked for possible legal violations at the time of linking. No illegal content was identified at that time. However, permanent monitoring of the content of linked pages is not reasonable without concrete evidence of a legal violation. If I become aware of any legal violations, I will remove such links immediately.
            </p>

            <h3 className="text-xl font-medium text-accent mt-6 mb-3">Copyright</h3>
            <p>
              The content and works on this website are subject to copyright law. The reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this website are only permitted for private, non-commercial use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">EU Dispute Resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" className="text-accent hover:text-accent-hover underline transition-colors" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
            </p>
            <p className="mt-3">
              I am not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}