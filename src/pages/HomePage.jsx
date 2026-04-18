import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Bot, BrainCircuit, CheckCircle2, Mail, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { CircuitDecoration } from "../components/CircuitDecoration";
import { Counter } from "../components/Counter";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { SignalWaveform } from "../components/SignalWaveform";
import {
  dashboardMetrics,
  methodologySteps,
  services,
  stats,
  technologyStack,
} from "../data/siteContent";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <CircuitDecoration
        instanceId="hero"
        className="pointer-events-none absolute right-[-4%] top-[-14%] hidden w-[560px] opacity-[0.10] lg:block"
      />

      <div className="mx-auto grid w-[min(1180px,calc(100%-1.5rem))] gap-12 py-10 md:grid-cols-[1.15fr_0.85fr] md:py-20">
        <Reveal className="space-y-8">
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 font-mono text-[0.74rem] uppercase tracking-[0.24em] text-sky-700"
            animate={{
              boxShadow: [
                "0 0 0px rgba(2,132,199,0)",
                "0 0 16px rgba(2,132,199,0.18)",
                "0 0 0px rgba(2,132,199,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            IP &amp; SoC Verification Experts
          </motion.div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-6xl lg:text-7xl">
              <span className="animate-gradient-text">AI-Driven</span>{" "}
              Verification for{" "}
              <span className="text-outline">Automotive Silicon</span>
            </h1>

            {/* AI feature strip */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "ML-Assisted Coverage Closure" },
                { label: "AI Bug Triage" },
                { label: "Intelligent Regression" },
                { label: "LLM-Aided Assertion Gen" },
              ].map(({ label }) => (
                <motion.span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-secondary/25 bg-indigo-50 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-indigo-600"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {label}
                </motion.span>
              ))}
            </div>

            <p className="max-w-2xl text-pretty text-lg leading-8 text-slate-600">
              Bharat Silicon combines AI-assisted tooling with deep UVM, formal, and GLS expertise
              to help automotive teams reach sign-off faster and with higher confidence.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_24px_rgba(2,132,199,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(2,132,199,0.45)]"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-primary/50 hover:bg-sky-50 hover:text-primary"
            >
              Explore Services
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <SignalWaveform />
        </Reveal>

        <Reveal delay={0.15} className="flex items-center">
          <div className="card-gradient-border relative w-full overflow-hidden rounded-[2rem] border border-sky-100 bg-white p-6 shadow-[0_12px_50px_rgba(14,165,233,0.12)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.06),transparent_34%),radial-gradient(circle_at_90%_10%,rgba(79,70,229,0.04),transparent_28%)]" />
            <div className="pointer-events-none absolute right-5 top-5 flex flex-col items-end gap-[5px] opacity-30">
              <div className="h-px w-16 rounded-full bg-gradient-to-l from-primary to-transparent" />
              <div className="h-px w-10 rounded-full bg-gradient-to-l from-secondary to-transparent" />
              <div className="h-px w-20 rounded-full bg-gradient-to-l from-primary/60 to-transparent" />
            </div>
            <div className="pointer-events-none absolute bottom-5 left-5 flex flex-col gap-[5px] opacity-30">
              <div className="h-px w-12 rounded-full bg-gradient-to-r from-secondary to-transparent" />
              <div className="h-px w-8 rounded-full bg-gradient-to-r from-primary to-transparent" />
            </div>

            <div className="relative space-y-6">
              <div className="flex items-center justify-between border-b border-sky-100 pb-4">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                    Verification Command Layer
                  </div>
                  <div className="mt-2 font-display text-2xl text-slate-900">
                    First-pass silicon, engineered deliberately.
                  </div>
                </div>
                <motion.div
                  className="rounded-full border border-primary/25 bg-sky-50 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-sky-700"
                  animate={{ borderColor: ["rgba(2,132,199,0.25)", "rgba(79,70,229,0.5)", "rgba(2,132,199,0.25)"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  ISO 26262
                </motion.div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Methodology", "Plan-to-sign-off verification architecture"],
                  ["Protocols", "AXI · AHB · APB · SPI · I2C · I3C · UART · CAN · PCIe"],
                  ["Tools", "Xcelium, Jasper, vManager"],
                  ["Automation", "Python, TCL, regression orchestration"],
                ].map(([label, detail]) => (
                  <motion.div
                    key={label}
                    className="rounded-3xl border border-sky-100 bg-sky-50/60 p-4 transition-colors duration-300 hover:border-sky-200 hover:bg-sky-50"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                      {label}
                    </div>
                    <div className="mt-3 text-lg leading-7 text-slate-800">{detail}</div>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-[1.6rem] border border-sky-100 bg-sky-50/60 p-5">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                  Engagement Focus
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {[
                    "Reusable UVM environments for IP, subsystem, and SoC programs.",
                    "Formal-driven bug finding to accelerate closure on control-intensive logic.",
                    "GLS sign-off campaigns for boot, reset, timing, and safety scenarios.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 text-primary" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <Reveal className="mx-auto mt-2 w-[min(1180px,calc(100%-1.5rem))]">
      <div className="grid gap-4 rounded-[2rem] border border-sky-100 bg-white p-6 shadow-[0_4px_30px_rgba(14,165,233,0.08)] md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="rounded-[1.4rem] border border-sky-100 bg-sky-50/70 p-5 transition-all duration-300 hover:border-sky-200 hover:shadow-[0_0_20px_rgba(2,132,199,0.10)]"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              className="bg-gradient-to-r from-primary via-sky-500 to-secondary bg-clip-text font-mono text-4xl font-bold text-transparent"
            />
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </Reveal>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Verification programs built for safety, scale, and schedule."
          description="From architecture definition through sign-off closure, Bharat Silicon supports the workflows that matter most for automotive SoC verification."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Reveal key={service.title} delay={index * 0.06}>
              <motion.article
                className="card-gradient-border group relative h-full overflow-hidden rounded-[1.75rem] border border-sky-100 bg-white p-6 shadow-[0_4px_24px_rgba(14,165,233,0.08)]"
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <motion.div
                  className="absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(14,165,233,0.04), transparent 60%)" }}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-sky-50 text-primary"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={20} />
                  </motion.div>
                  <div className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-sky-700">
                    {service.tag}
                  </div>
                </div>
                <h3 className="relative mt-6 font-display text-3xl leading-tight text-slate-900">
                  {service.title}
                </h3>
                <p className="relative mt-4 text-base leading-8 text-slate-600">
                  {service.description}
                </p>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function MethodologySection() {
  return (
    <section id="methodology" className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-12">
      <Reveal>
        <SectionHeading
          eyebrow="Methodology"
          title="A verification flow that stays disciplined from plan to closure."
          description="Each engagement is structured to reduce ambiguity, accelerate debug, and keep sign-off criteria measurable."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-4">
        {methodologySteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08}>
            <motion.div
              className="relative h-full rounded-[1.75rem] border border-sky-100 bg-white p-6 lg:before:absolute lg:before:right-0 lg:before:top-8 lg:before:h-[calc(100%-4rem)] lg:before:w-px lg:before:bg-sky-100 last:lg:before:hidden"
              whileHover={{ y: -3, borderColor: "rgba(2,132,199,0.35)", transition: { duration: 0.25 } }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-full w-full rounded-full bg-primary/20 blur-sm" />
                  <motion.span
                    className="relative h-3 w-3 rounded-full bg-primary"
                    animate={{ boxShadow: ["0 0 0px rgba(2,132,199,0)", "0 0 8px rgba(2,132,199,0.7)", "0 0 0px rgba(2,132,199,0)"] }}
                    transition={{ duration: 2.5, delay: index * 0.4, repeat: Infinity }}
                  />
                </span>
                <div className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">
                  Step {index + 1}
                </div>
              </div>
              <h3 className="font-display text-3xl text-slate-900">{step.title}</h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-secondary">
                {step.subtitle}
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">{step.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function toneClasses(tone) {
  switch (tone) {
    case "green":
      return { text: "text-primary", bar: "from-primary to-cyan-400" };
    case "amber":
      return { text: "text-warning", bar: "from-warning to-amber-400" };
    case "gradient":
      return {
        text: "bg-gradient-to-r from-primary via-sky-400 to-secondary bg-clip-text text-transparent",
        bar: "from-primary via-sky-400 to-secondary",
      };
    default:
      return { text: "text-primary", bar: "from-primary to-sky-400" };
  }
}

function VerificationDashboard() {
  return (
    <section className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Dashboard"
          title="A sign-off view engineered for quick decision making."
          description="A terminal-inspired status layer keeps the most important verification metrics visible to stakeholders and engineering leads."
        />
      </Reveal>

      <Reveal delay={0.12} className="mt-12">
        <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-[0_4px_30px_rgba(14,165,233,0.10)]">
          <div className="flex items-center gap-2 border-b border-sky-100 px-6 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
              verification_status.log
            </span>
          </div>

          <div className="grid gap-5 p-6 md:grid-cols-2">
            {dashboardMetrics.map((metric, index) => {
              const tone = toneClasses(metric.tone);

              return (
                <motion.div
                  key={metric.label}
                  className="rounded-[1.5rem] border border-sky-100 bg-sky-50/60 p-5 transition-colors duration-300 hover:border-sky-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                      {metric.label}
                    </div>
                    <div className={`font-mono text-lg font-bold ${tone.text}`}>
                      {metric.value.toFixed(1)}%
                    </div>
                  </div>

                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-sky-100">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${tone.bar} shadow-[0_0_8px_rgba(2,132,199,0.3)]`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true, amount: 0.75 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function TechnologySection() {
  return (
    <section id="technology" className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-12">
      <Reveal>
        <SectionHeading
          eyebrow="Technology Stack"
          title="Tooling and protocols matched to modern automotive verification needs."
          description="The stack spans simulation, formal, automation, and protocol expertise across the environments verification teams rely on every day."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {technologyStack.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.name} delay={index * 0.04}>
              <motion.div
                className="group rounded-[1.55rem] border border-sky-100 bg-white p-5 min-h-[160px]"
                whileHover={{
                  y: -4,
                  borderColor: "rgba(2,132,199,0.4)",
                  boxShadow: "0 0 24px rgba(2,132,199,0.12)",
                  transition: { duration: 0.25 },
                }}
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-sky-50 text-primary"
                    whileHover={{ scale: 1.12, rotate: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={18} />
                  </motion.div>
                  <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-slate-500">
                    {item.type}
                  </span>
                </div>
                <h3 className={["mt-5 font-medium text-slate-900", item.name.length > 15 ? "text-base" : "text-xl"].join(" ")}>{item.name}</h3>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-10 pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.2rem] border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-6 py-12 shadow-[0_8px_60px_rgba(14,165,233,0.12)] sm:px-10 md:px-14">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[110px]" />

          <CircuitDecoration
            instanceId="cta"
            className="pointer-events-none absolute -right-16 -top-16 w-72 opacity-[0.10]"
          />

          <div className="pointer-events-none absolute left-6 top-6 flex flex-col gap-[6px] opacity-40">
            <div className="h-px w-14 rounded-full bg-gradient-to-r from-primary to-transparent" />
            <div className="h-px w-9 rounded-full bg-gradient-to-r from-secondary to-transparent" />
            <div className="h-px w-18 rounded-full bg-gradient-to-r from-sky-400/60 to-transparent" />
          </div>

          <div className="relative z-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-600">
                Let&apos;s talk silicon readiness
              </p>
              <h2 className="mt-4 text-balance font-display text-4xl leading-tight text-slate-900 md:text-5xl">
                Ready to achieve first-pass silicon success?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Engage Bharat Silicon for verification strategy, execution, and closure support on
                your next automotive SoC program.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="mailto:admin.bharatsilicon@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-medium text-white shadow-[0_0_24px_rgba(2,132,199,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(2,132,199,0.50)]"
                whileHover={{ scale: 1.02 }}
              >
                <Mail size={16} />
                admin.bharatsilicon@gmail.com
              </motion.a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const AI_CAPABILITIES = [
  {
    icon: BrainCircuit,
    title: "ML-Assisted Coverage Closure",
    description:
      "Machine learning models analyse coverage holes and recommend targeted stimulus to close gaps faster than manual triage.",
  },
  {
    icon: Bot,
    title: "AI Bug Triage & Root Cause",
    description:
      "Automated classification of simulation failures using pattern recognition — reducing debug cycle time significantly.",
  },
  {
    icon: Sparkles,
    title: "LLM-Aided Assertion Generation",
    description:
      "Large language models assist in generating SVA properties from natural-language specifications and RTL intent.",
  },
  {
    icon: Zap,
    title: "Intelligent Regression Pruning",
    description:
      "AI-driven test selection identifies the minimal regression set that maximises coverage signal for each build.",
  },
];

function AISection() {
  return (
    <section className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 px-8 py-12 shadow-[0_8px_60px_rgba(79,70,229,0.10)] md:px-14">
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-sky-200/30 blur-[80px]" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-indigo-50 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.24em] text-indigo-600">
                  <BrainCircuit size={12} />
                  AI-Driven Verification
                </div>
                <h2 className="mt-4 max-w-xl text-balance font-display text-4xl leading-[1.08] tracking-[-0.025em] text-slate-900 md:text-5xl">
                  Verification intelligence,{" "}
                  <span className="animate-gradient-text">built in.</span>
                </h2>
                <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
                  Bharat Silicon integrates AI tooling across the verification lifecycle —
                  from coverage closure to assertion generation — so your team moves faster
                  without trading correctness for speed.
                </p>
              </div>
            </div>

            {/* Capability cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {AI_CAPABILITIES.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <Reveal key={cap.title} delay={index * 0.07}>
                    <motion.div
                      className="flex h-full flex-col rounded-[1.5rem] border border-indigo-100 bg-white p-5 shadow-sm"
                      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(79,70,229,0.12)", transition: { duration: 0.2 } }}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-secondary/20 bg-indigo-50 text-secondary">
                        <Icon size={18} />
                      </div>
                      <h3 className="mt-4 text-base font-semibold leading-snug text-slate-900">
                        {cap.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-500">{cap.description}</p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AISection />
      <ServicesSection />
      <MethodologySection />
      <VerificationDashboard />
      <TechnologySection />
      <CTASection />
    </>
  );
}
