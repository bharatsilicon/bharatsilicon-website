import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { contactDetails } from "../data/siteContent";

const initialForm = {
  email: "",
  message: "",
};

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

      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(22,35,66,0.9),rgba(9,15,29,0.97))] p-6 shadow-[0_18px_60px_rgba(2,6,23,0.45)] md:p-8"
          >
            <div className="space-y-5">
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@company.com"
              />

              <div className="rounded-[1.4rem] border border-white/8 bg-[rgba(8,14,30,0.56)] px-4 py-4">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                  Focus Area
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-sm text-sky-100">
                    <Building2 size={16} className="text-primary" />
                    End-to-end automotive SoC verification
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                    UVM
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                    Formal
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                    GLS
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[1.4rem] border border-white/8 bg-[rgba(8,14,30,0.56)] px-4 py-4">
              <label
                htmlFor="message"
                className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={updateField}
                placeholder="Tell us about your SoC, verification scope, timeline, and current challenges."
                rows={6}
                required
                className="mt-3 w-full resize-none bg-transparent text-base leading-8 text-white outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="mt-6 flex flex-col gap-5 border-t border-white/8 pt-6 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-xl text-sm leading-7 text-slate-400">
                Bharat Silicon works with teams across UVM, formal verification, GLS, coverage
                closure, and ISO 26262-oriented methodology.
              </p>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-medium text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] sm:w-auto"
              >
                Send Inquiry
                <Send size={16} />
              </button>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-[1.2rem] border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-sky-100"
              >
                Thanks for reaching out. Bharat Silicon will follow up through email.
              </motion.div>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(22,35,66,0.88),rgba(9,15,29,0.96))] p-6 shadow-[0_18px_60px_rgba(2,6,23,0.45)]">
            <div className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
              Direct Contact
            </div>

            <div className="mt-5 space-y-4">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="flex items-center justify-between rounded-[1.4rem] border border-white/8 bg-[rgba(8,14,30,0.56)] px-4 py-4 transition-colors hover:border-primary/35"
                >
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                      {detail.label}
                    </div>
                    <div className="mt-2 break-words text-sm text-white sm:text-base">
                      {detail.value}
                    </div>
                  </div>
                  <ArrowUpRight className="shrink-0 text-primary" size={18} />
                </a>
              ))}
            </div>

            <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(150deg,rgba(122,162,255,0.16),rgba(10,14,22,0.92),rgba(154,124,255,0.14))] p-5">
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 shrink-0 text-primary" size={18} />
                  <span>Primary response channel for new project discussions.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 shrink-0 text-sky-300" size={18} />
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

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <label className="rounded-[1.4rem] border border-white/8 bg-[rgba(8,14,30,0.56)] px-4 py-4">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent text-base text-white outline-none placeholder:text-slate-500"
      />
    </label>
  );
}
