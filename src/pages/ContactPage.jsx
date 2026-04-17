import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { contactDetails } from "../data/siteContent";

const initialForm = { email: "", message: "" };

export function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="mx-auto w-[min(1020px,calc(100%-1.5rem))] pb-24">
      <section className="py-10 md:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Start the conversation with a leaner, email-first workflow."
            description="Share your verification scope and Bharat Silicon will follow up over email with the right engagement model for your SoC, subsystem, or IP program."
            align="center"
          />
        </Reveal>
      </section>

      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-[0_4px_24px_rgba(14,165,233,0.09)]"
          >
            <div className="space-y-0 divide-y divide-sky-100">
              <div className="px-6 py-5 md:px-8">
                <label htmlFor="email" className="block">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                    Email
                  </span>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    required
                    placeholder="you@company.com"
                    className="mt-3 block w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </label>
              </div>

              <div className="px-6 py-5 md:px-8">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                  Focus Area
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-2 text-sm text-sky-700">
                    <Building2 size={15} className="text-primary" />
                    End-to-end automotive SoC verification
                  </span>
                  {["UVM", "Formal", "GLS"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sky-100 bg-sky-50/60 px-3 py-2 text-sm text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 py-5 md:px-8">
                <label htmlFor="message" className="block">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                    Message
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    placeholder="Tell us about your SoC, verification scope, timeline, and current challenges."
                    rows={6}
                    required
                    className="mt-3 block w-full resize-none bg-transparent text-base leading-8 text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-5 border-t border-sky-100 bg-sky-50/50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
              <p className="text-sm leading-7 text-slate-500">
                Bharat Silicon works with teams across UVM, formal verification, GLS,
                coverage closure, and ISO 26262-oriented methodology.
              </p>
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-medium text-white shadow-[0_0_20px_rgba(2,132,199,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(2,132,199,0.45)]"
              >
                Send Inquiry
                <Send size={16} />
              </button>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-6 mb-5 rounded-[1.2rem] border border-primary/25 bg-sky-50 px-4 py-3 text-sm text-sky-700 md:mx-8"
              >
                Thanks for reaching out. Bharat Silicon will follow up through email.
              </motion.div>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-[0_4px_24px_rgba(14,165,233,0.09)]">
            <div className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
              Direct Contact
            </div>

            <div className="mt-5 space-y-4">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="flex items-start justify-between gap-3 rounded-[1.4rem] border border-sky-100 bg-sky-50/60 px-4 py-4 transition-all duration-200 hover:border-sky-200 hover:bg-sky-50"
                >
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                      {detail.label}
                    </div>
                    <div className="mt-2 break-all text-sm leading-6 text-slate-800">
                      {detail.value}
                    </div>
                  </div>
                  <ArrowUpRight className="mt-0.5 shrink-0 text-primary" size={16} />
                </a>
              ))}
            </div>

            <div className="mt-5 rounded-[1.4rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-indigo-50 p-5">
              <div className="space-y-4 text-sm leading-7 text-slate-600">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 shrink-0 text-primary" size={16} />
                  <span>Primary response channel for new project discussions.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 shrink-0 text-sky-600" size={16} />
                  <span>Share your verification scope, timeline, and current blocker.</span>
                </div>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
