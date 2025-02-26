
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              Welcome to SkillSense AI. These Terms of Service ("Terms") govern your access to and use of the SkillSense AI platform, including our website, applications, and services (collectively, the "Service"). By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
            <p className="text-muted-foreground">
              You must be at least 16 years old to use the Service. By using the Service, you represent and warrant that you meet all eligibility requirements. If you are using the Service on behalf of an entity, organization, or company, you represent and warrant that you have the authority to bind that entity to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            <p className="text-muted-foreground">
              To access certain features of the Service, you may need to create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>Providing accurate, current, and complete information during registration</li>
              <li>Maintaining the security and confidentiality of your login credentials</li>
              <li>All activities that occur under your account</li>
              <li>Promptly notifying us of any unauthorized use of your account</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              We reserve the right to disable any user account if we believe you have violated these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground">
              When using our Service, you agree to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>Provide accurate and truthful information about your skills, experience, and background</li>
              <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
              <li>Not use the Service to transmit any malicious code or attempt to interfere with its functionality</li>
              <li>Not attempt to gain unauthorized access to any part of the Service or its related systems</li>
              <li>Not copy, modify, distribute, sell, or lease any part of the Service</li>
              <li>Not use automated methods to access or interact with the Service without our permission</li>
              <li>Respect the intellectual property rights of SkillSense AI and other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
            <p className="text-muted-foreground">
              The Service and its original content, features, and functionality are owned by SkillSense AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="text-muted-foreground mt-2">
              SkillSense AI grants you a limited, non-exclusive, non-transferable, and revocable license to use the Service for your personal or internal business purposes. This license does not include the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>Modify, reproduce, or create derivative works based on the Service</li>
              <li>Use any data mining, robots, or similar data gathering methods</li>
              <li>Remove any copyright, trademark, or other proprietary notices</li>
              <li>Use the Service in any manner that could disable, overburden, or impair the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Content</h2>
            <p className="text-muted-foreground">
              By submitting content to our Service (such as assessment responses, profile information, or feedback), you grant SkillSense AI a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such content for the purpose of providing and improving our Service.
            </p>
            <p className="text-muted-foreground mt-2">
              You represent and warrant that you own or have the necessary rights to the content you submit, and that such content does not violate the rights of any third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Service Limitations and Modifications</h2>
            <p className="text-muted-foreground">
              SkillSense AI reserves the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>Modify, suspend, or discontinue any part of the Service at any time</li>
              <li>Limit certain features or restrict access to parts of the Service</li>
              <li>Establish general practices and limits concerning use of the Service</li>
              <li>Update the Service to address security concerns or add functionality</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              We will make reasonable efforts to notify you of significant changes to the Service, but we are not obligated to provide notice of minor or administrative changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SKILLSENSE AI, ITS AFFILIATES, AND THEIR RESPECTIVE DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE, OR SYSTEM FAILURE, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
            </p>
            <p className="text-muted-foreground mt-2">
              You acknowledge that the AI-powered skill assessments and recommendations provided by SkillSense AI:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>Are based on the information you provide and our algorithms</li>
              <li>Are not guaranteed to be 100% accurate or comprehensive</li>
              <li>Should be considered as suggestions rather than definitive evaluations</li>
              <li>Are not a substitute for professional advice in specialized fields</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to defend, indemnify, and hold harmless SkillSense AI, its affiliates, and their respective directors, officers, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-muted-foreground">
              SkillSense AI may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will cease immediately.
            </p>
            <p className="text-muted-foreground mt-2">
              You may also terminate your account at any time by following the instructions in your account settings or by contacting us. Termination of your account may result in the deletion of your profile and content, and the forfeiture of any pending or future assessments or recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within [Jurisdiction] for the resolution of any disputes arising from these Terms or your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may revise these Terms from time to time. The most current version will always be posted on our website. By continuing to access or use the Service after revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new Terms, you must stop using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions, concerns, or feedback regarding these Terms, please contact us at:
            </p>
            <p className="mt-2 font-medium">legal@skillsense.ai</p>
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

export default TermsOfService;
