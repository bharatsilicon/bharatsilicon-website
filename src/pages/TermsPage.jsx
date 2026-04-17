import { Reveal } from "../components/Reveal";

function Section({ title, children }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl text-slate-900">{title}</h2>
      <div className="space-y-3 text-base leading-8 text-slate-600">{children}</div>
    </div>
  );
}

export function TermsPage() {
  return (
    <div className="mx-auto w-[min(820px,calc(100%-1.5rem))] pb-24">
      <section className="py-10 md:py-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-sky-700">
            Legal
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.04] tracking-[-0.03em] text-slate-900 md:text-6xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 font-mono text-sm text-slate-500">
            Effective date: 1 January 2026 &nbsp;·&nbsp; Last updated: 18 April 2026
          </p>
        </Reveal>
      </section>

      <Reveal>
        <div className="space-y-10 rounded-[2rem] border border-sky-100 bg-white p-8 shadow-[0_4px_24px_rgba(14,165,233,0.08)] md:p-12">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the Bharat Silicon website (bharatsilicon.com) you agree to
              be bound by these Terms and Conditions. If you do not agree, please do not use the
              site.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="2. Services Description">
            <p>
              Bharat Silicon provides professional automotive SoC verification services including
              UVM testbench development, formal verification, gate-level simulation, coverage
              closure, and verification methodology consulting. The specific scope, deliverables,
              timeline, and fees for any engagement are defined exclusively in a separately
              executed Statement of Work or services agreement.
            </p>
            <p>
              Nothing on this website constitutes a binding offer or guarantee of service
              availability, pricing, or timelines.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="3. Intellectual Property">
            <p>
              All content on this website — including text, graphics, logos, and code — is the
              property of Bharat Silicon or its licensors and is protected by applicable
              intellectual property laws.
            </p>
            <p>
              You may view and print pages for personal, non-commercial reference. You may not
              reproduce, redistribute, or create derivative works without our prior written
              consent.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="4. Client Engagements">
            <p>
              All professional engagements are governed by the applicable Statement of Work and
              master services agreement signed between Bharat Silicon and the client. In the
              event of a conflict between these Terms and a signed engagement agreement, the
              engagement agreement takes precedence.
            </p>
            <p>
              Bharat Silicon retains ownership of general methodologies, frameworks, and
              know-how developed during engagements unless explicitly assigned in writing.
              Client-specific deliverables and work products are governed by the terms of the
              relevant services agreement.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="5. Confidentiality">
            <p>
              Information shared with Bharat Silicon during pre-engagement discussions (including
              contact form messages and email correspondence) will be treated as confidential and
              used solely to evaluate and respond to the enquiry. Formal confidentiality
              obligations for active engagements are established via Non-Disclosure Agreements.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="6. Disclaimers">
            <p>
              This website is provided "as is" without warranties of any kind, either express or
              implied. Bharat Silicon does not warrant that the site will be uninterrupted,
              error-free, or free of viruses or other harmful components.
            </p>
            <p>
              Content on this website is for informational purposes only and does not constitute
              professional engineering advice for any specific project.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="7. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, Bharat Silicon shall not be
              liable for any indirect, incidental, special, or consequential damages arising from
              your use of, or inability to use, this website or any content on it.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="8. Third-Party Links">
            <p>
              This website may contain links to third-party websites. Bharat Silicon is not
              responsible for the content, privacy practices, or availability of those sites.
              Links do not imply endorsement.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="9. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of India.
              Any disputes arising under these Terms shall be subject to the exclusive
              jurisdiction of the courts located in Bangalore, Karnataka.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="10. Changes to These Terms">
            <p>
              We reserve the right to update these Terms at any time. Changes become effective
              upon posting with an updated "Last updated" date. Continued use of the site
              constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="11. Contact">
            <p>
              Questions about these Terms should be directed to{" "}
              <a
                href="mailto:admin.bharatsilicon@gmail.com"
                className="text-primary hover:underline"
              >
                admin.bharatsilicon@gmail.com
              </a>
              .
            </p>
          </Section>
        </div>
      </Reveal>
    </div>
  );
}
