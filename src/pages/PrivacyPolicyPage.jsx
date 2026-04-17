import { Reveal } from "../components/Reveal";

function Section({ title, children }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl text-slate-900">{title}</h2>
      <div className="space-y-3 text-base leading-8 text-slate-600">{children}</div>
    </div>
  );
}

export function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-[min(820px,calc(100%-1.5rem))] pb-24">
      <section className="py-10 md:py-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-sky-700">
            Legal
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.04] tracking-[-0.03em] text-slate-900 md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 font-mono text-sm text-slate-500">
            Effective date: 1 January 2026 &nbsp;·&nbsp; Last updated: 18 April 2026
          </p>
        </Reveal>
      </section>

      <Reveal>
        <div className="space-y-10 rounded-[2rem] border border-sky-100 bg-white p-8 shadow-[0_4px_24px_rgba(14,165,233,0.08)] md:p-12">
          <Section title="1. Who We Are">
            <p>
              Bharat Silicon ("we", "us", or "our") is an automotive SoC verification services
              firm based in Bangalore, India. Our primary contact is{" "}
              <a
                href="mailto:admin.bharatsilicon@gmail.com"
                className="text-primary hover:underline"
              >
                admin.bharatsilicon@gmail.com
              </a>
              .
            </p>
            <p>
              This Privacy Policy explains what personal information we collect through this
              website and our contact channels, how we use it, and your rights regarding it.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="2. Information We Collect">
            <p>We collect only the minimum information necessary to respond to enquiries:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong className="text-slate-800">Contact form submissions</strong> — your email
                address and the message body you provide.
              </li>
              <li>
                <strong className="text-slate-800">Direct email correspondence</strong> — any
                information you voluntarily share when emailing us.
              </li>
              <li>
                <strong className="text-slate-800">Usage data</strong> — standard server/CDN
                logs (IP address, browser type, pages visited, timestamps) retained for security
                and performance purposes.
              </li>
            </ul>
            <p>
              We do not use tracking pixels, advertising networks, or third-party analytics
              scripts. We do not collect sensitive personal data.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="3. How We Use Your Information">
            <ul className="ml-6 list-disc space-y-2">
              <li>To respond to your project enquiry or support request.</li>
              <li>To understand the general nature of interest in our services.</li>
              <li>To comply with applicable legal obligations.</li>
            </ul>
            <p>
              We will never sell, rent, or trade your personal information to any third party.
              We do not use your data for automated decision-making or profiling.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="4. Legal Basis for Processing (GDPR)">
            <p>
              Where the General Data Protection Regulation applies, we process personal data
              under the following lawful bases:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong className="text-slate-800">Legitimate interests</strong> — responding to
                business enquiries and maintaining website security.
              </li>
              <li>
                <strong className="text-slate-800">Contractual necessity</strong> — communicating
                with clients during an active engagement.
              </li>
              <li>
                <strong className="text-slate-800">Legal obligation</strong> — complying with
                applicable law.
              </li>
            </ul>
          </Section>

          <hr className="border-sky-100" />

          <Section title="5. Data Retention">
            <p>
              Enquiry emails and contact form submissions are retained for up to 24 months for
              follow-up and business continuity purposes, then deleted. Server logs are retained
              for no longer than 90 days.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="6. Data Sharing">
            <p>
              We do not share personal data with third parties except where strictly necessary:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong className="text-slate-800">Hosting infrastructure</strong> — our website
                host processes access logs as a data processor on our behalf.
              </li>
              <li>
                <strong className="text-slate-800">Legal requirements</strong> — where disclosure
                is required by law or court order.
              </li>
            </ul>
          </Section>

          <hr className="border-sky-100" />

          <Section title="7. Your Rights">
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, delete,
              or restrict processing of your personal data, or to object to its use. To exercise
              any of these rights, contact us at{" "}
              <a
                href="mailto:admin.bharatsilicon@gmail.com"
                className="text-primary hover:underline"
              >
                admin.bharatsilicon@gmail.com
              </a>
              . We will respond within 30 days.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="8. Cookies">
            <p>
              This website does not set any first-party or third-party cookies for tracking or
              advertising. Browser-native session storage may be used for UI state and is never
              transmitted to our servers.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="9. Security">
            <p>
              Data in transit is protected by TLS. We apply reasonable administrative and
              technical measures to protect the personal information we hold. No transmission
              over the internet is completely secure; if you have security concerns, contact us
              directly by email.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="10. Changes to This Policy">
            <p>
              We may update this policy occasionally. When we do, we will revise the "Last
              updated" date above. Continued use of the website after changes are posted
              constitutes acceptance of the revised policy.
            </p>
          </Section>

          <hr className="border-sky-100" />

          <Section title="11. Contact">
            <p>
              Questions about this Privacy Policy should be directed to{" "}
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
