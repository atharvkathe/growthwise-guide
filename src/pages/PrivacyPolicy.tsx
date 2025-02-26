
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              At SkillSense AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered skill analysis platform. We collect personal information to provide you with personalized skill assessments, growth recommendations, and to improve our services. By accessing or using SkillSense AI, you consent to the data practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Personal Information</h3>
                <p className="text-muted-foreground">
                  We may collect personal information that you voluntarily provide when creating an account or using our services, including:
                </p>
                <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Professional background and experience</li>
                  <li>Educational history and qualifications</li>
                  <li>Skills and competencies</li>
                  <li>Career goals and preferences</li>
                  <li>Assessment responses and results</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Usage Information</h3>
                <p className="text-muted-foreground">
                  We automatically collect certain information about your device and how you interact with our platform, including:
                </p>
                <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                  <li>IP address and device identifiers</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and features used</li>
                  <li>Time spent on pages and interaction patterns</li>
                  <li>Referring websites and search terms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Cookies and Similar Technologies</h3>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to collect information about your browsing activities and to remember your preferences. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our platform.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>Providing and personalizing our skill assessment and development services</li>
              <li>Analyzing your skills and generating tailored growth recommendations</li>
              <li>Creating and maintaining your account</li>
              <li>Communicating with you about your account and our services</li>
              <li>Sending notifications, updates, and marketing messages (if you opt in)</li>
              <li>Improving and optimizing our platform and algorithms</li>
              <li>Detecting and preventing fraudulent or unauthorized activity</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, accidental loss, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p className="text-muted-foreground mt-2">
              Our security measures include:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security assessments and vulnerability testing</li>
              <li>Access controls and authentication requirements</li>
              <li>Staff training on data protection and security practices</li>
              <li>Regular backups and disaster recovery protocols</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
            <p className="text-muted-foreground">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>Accessing, correcting, or updating your personal information</li>
              <li>Deleting your personal information and account</li>
              <li>Restricting or objecting to our use of your information</li>
              <li>Requesting a copy of your personal data in a portable format</li>
              <li>Withdrawing consent for processing your data (where applicable)</li>
              <li>Opting out of marketing communications</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including providing our services, complying with legal obligations, resolving disputes, and enforcing our agreements. When personal information is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground">
              Our platform may contain links to third-party websites or services that are not owned or controlled by SkillSense AI. We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mt-2 font-medium">privacy@skillsense.ai</p>
          </section>

          <div className="border-t pt-4 text-sm text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
