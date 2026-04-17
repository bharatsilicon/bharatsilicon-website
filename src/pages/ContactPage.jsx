import { motion } from "framer-motion";
import { ArrowUpRight, Building2, CheckCircle2, Clock, Mail, Send, User } from "lucide-react";
import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { contactDetails } from "../data/siteContent";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeevgzbq";

const initialForm = { name: "", email: "", message: "" };

const FOCUS_TAGS = ["UVM", "Formal Verification", "GLS", "Coverage Closure", "ISO 26262", "Methodology"];

export function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [selectedTags, setSelectedTags] = useState([]);
  const [status, setStatus] = useState("idle");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const toggleTag = (tag) => {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]
    );
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          focus: selectedTags.join(", ") || "Not specified",
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
        setSelectedTags([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto w-[min(1100px,calc(100%-1.5rem))] pb-24">
      <section className="py-10 md:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Start the conversation."
            description="Share your verification scope and we'll follow up with the right engagement model for your programme."
            align="center"
          />
        </Reveal>
      </section>

      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        {/* ── Form ── */}
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-[0_4px_32px_rgba(14,165,233,0.10)]"
          >
            {/* Name + Email row */}
            <div className="grid gap-0 divide-y divide-sky-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="group px-6 py-5 transition-colors duration-200 focus-within:bg-sky-50/60 md:px-7">
                <label htmlFor="name" className="block">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                    <User size={12} className="text-primary" />
                    Name
                  </div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    required
                    placeholder="Your full name"
                    className="mt-3 block w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </label>
              </div>
              <div className="group border-t border-sky-100 px-6 py-5 transition-colors duration-200 focus-within:bg-sky-50/60 sm:border-t-0 md:px-7">
                <label htmlFor="email" className="block">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                    <Mail size={12} className="text-primary" />
                    Work Email
                  </div>
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
            </div>

            {/* Focus area chips */}
            <div className="border-t border-sky-100 px-6 py-5 md:px-7">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                Focus Area <span className="normal-case tracking-normal text-slate-400">(select all that apply)</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {FOCUS_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={[
                      "rounded-full border px-3 py-1.5 text-sm transition-all duration-200",
                      selectedTags.includes(tag)
                        ? "border-primary bg-primary text-white shadow-[0_0_14px_rgba(2,132,199,0.3)]"
                        : "border-sky-200 bg-sky-50 text-slate-600 hover:border-primary/50 hover:bg-sky-100 hover:text-primary",
                    ].join(" ")}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="group border-t border-sky-100 px-6 py-5 transition-colors duration-200 focus-within:bg-sky-50/40 md:px-7">
              <label htmlFor="message" className="block">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                  Message
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  placeholder="Describe your SoC programme, verification scope, timeline, and current challenges."
                  rows={6}
                  required
                  className="mt-3 block w-full resize-none bg-transparent text-base leading-8 text-slate-900 outline-none placeholder:text-slate-400"
                />
              </label>
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-4 border-t border-sky-100 bg-sky-50/50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-7">
              <p className="text-sm leading-6 text-slate-500">
                We typically respond within <span className="font-medium text-slate-700">1 business day</span>.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 font-medium text-white shadow-[0_0_20px_rgba(2,132,199,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(2,132,199,0.45)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === "sending" ? "Sending…" : "Send Inquiry"}
                {status !== "sending" && <Send size={15} />}
              </button>
            </div>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-6 mb-5 flex items-center gap-3 rounded-[1.2rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 md:mx-7"
              >
                <CheckCircle2 size={16} className="shrink-0" />
                Message sent. Bharat Silicon will follow up through email.
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-6 mb-5 rounded-[1.2rem] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 md:mx-7"
              >
                Something went wrong. Email us directly at admin.bharatsilicon@gmail.com
              </motion.div>
            )}
          </form>
        </Reveal>

        {/* ── Sidebar ── */}
        <Reveal delay={0.08}>
          <div className="flex flex-col gap-5">
            {/* Direct contact */}
            <div className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-[0_4px_24px_rgba(14,165,233,0.09)]">
              <div className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                Direct Contact
              </div>
              <div className="mt-4 space-y-3">
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
                      <div className="mt-1.5 break-all text-sm leading-6 text-slate-800">
                        {detail.value}
                      </div>
                    </div>
                    <ArrowUpRight className="mt-0.5 shrink-0 text-primary" size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* What to expect */}
            <div className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-[0_4px_24px_rgba(14,165,233,0.09)]">
              <div className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                What to Expect
              </div>
              <ul className="mt-4 space-y-4">
                {[
                  {
                    icon: Clock,
                    title: "Response within 24 hours",
                    body: "We review every enquiry and follow up with relevant context.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "No obligation",
                    body: "An initial call is exploratory — scoping and pricing come after.",
                  },
                  {
                    icon: Building2,
                    title: "Bangalore-based team",
                    body: "Direct engineering conversations — no account managers in between.",
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-primary">
                      <Icon size={13} />
                    </span>
                    <div>
                      <div className="text-sm font-medium text-slate-800">{title}</div>
                      <div className="mt-0.5 text-sm leading-6 text-slate-500">{body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
