import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
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
      {/* Circuit decoration — background accent matching logo */}
      <CircuitDecoration
        instanceId="hero"
        className="pointer-events-none absolute right-[-4%] top-[-14%] hidden w-[560px] opacity-[0.13] lg:block"
      />

      <div className="mx-auto grid w-[min(1180px,calc(100%-1.5rem))] gap-12 py-10 md:grid-cols-[1.15fr_0.85fr] md:py-20">
        <Reveal className="space-y-8">
          {/* Animated badge */}
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 font-mono text-[0.74rem] uppercase tracking-[0.24em] text-sky-100"
            animate={{
              boxShadow: [
                "0 0 0px rgba(122,162,255,0)",
                "0 0 20px rgba(122,162,255,0.3)",
                "0 0 0px rgba(122,162,255,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            Automotive SoC Verification Experts
          </motion.div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl leading-[0.94] text-white sm:text-6xl lg:text-7xl">
              End-to-End{" "}
              <span className="animate-gradient-text italic">Verification</span> for Next-Gen{" "}
              <span className="text-outline">Silicon</span>
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-slate-300">
              Bharat Silicon helps automotive teams reach sign-off with confidence through UVM,
              formal verification, gate-level simulation, and scalable testbench architecture.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_30px_rgba(122,162,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(122,162,255,0.55)]"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.05] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_24px_rgba(122,162,255,0.18)]"
            >
              Explore Services
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <SignalWaveform />
        </Reveal>

        <Reveal delay={0.15} className="flex items-center">
          <div className="card-gradient-border relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(165deg,rgba(24,38,72,0.96),rgba(18,32,59,0.9),rgba(8,14,28,0.96))] p-6 shadow-[0_30px_100px_rgba(5,10,28,0.7)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(122,162,255,0.18),transparent_34%),radial-gradient(circle_at_90%_10%,rgba(154,124,255,0.12),transparent_28%)]" />
            {/* PCB trace accent lines — top-right corner */}
            <div className="pointer-events-none absolute right-5 top-5 flex flex-col items-end gap-[5px] opacity-40">
              <div className="h-px w-16 rounded-full bg-gradient-to-l from-primary to-transparent" />
              <div className="h-px w-10 rounded-full bg-gradient-to-l from-secondary to-transparent" />
              <div className="h-px w-20 rounded-full bg-gradient-to-l from-primary/60 to-transparent" />
            </div>
            {/* PCB trace accent lines — bottom-left corner */}
            <div className="pointer-events-none absolute bottom-5 left-5 flex flex-col gap-[5px] opacity-40">
              <div className="h-px w-12 rounded-full bg-gradient-to-r from-secondary to-transparent" />
              <div className="h-px w-8 rounded-full bg-gradient-to-r from-primary to-transparent" />
            </div>

            <div className="relative space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                    Verification Command Layer
                  </div>
                  <div className="mt-2 font-display text-2xl text-white">
                    First-pass silicon, engineered deliberately.
                  </div>
                </div>
                <motion.div
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-sky-200"
                  animate={{ borderColor: ["rgba(122,162,255,0.2)", "rgba(154,124,255,0.5)", "rgba(122,162,255,0.2)"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  ISO 26262
                </motion.div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Methodology", "Plan-to-sign-off verification architecture"],
                  ["Protocols", "AHB, AXI, APB, safety interfaces"],
                  ["Tools", "Xcelium, Jasper, vManager"],
                  ["Automation", "Python, TCL, regression orchestration"],
                ].map(([label, detail]) => (
                  <motion.div
                    key={label}
                    className="rounded-3xl border border-white/[0.08] bg-[rgba(8,14,30,0.58)] p-4 transition-colors duration-300 hover:border-primary/30 hover:bg-[rgba(8,14,30,0.75)]"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                      {label}
                    </div>
                    <div className="mt-3 text-lg leading-7 text-slate-100">{detail}</div>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-[1.6rem] border border-white/[0.08] bg-[rgba(8,14,30,0.62)] p-5">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                  Engagement Focus
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
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
      <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(155deg,rgba(20,33,61,0.88),rgba(9,15,29,0.95))] p-6 shadow-[0_20px_80px_rgba(2,6,23,0.55)] md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="rounded-[1.4rem] border border-white/[0.08] bg-[rgba(8,14,30,0.55)] p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_24px_rgba(122,162,255,0.12)]"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              className="bg-gradient-to-r from-sky-200 via-primary to-secondary bg-clip-text font-mono text-4xl font-bold text-transparent"
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
                className="card-gradient-border group relative h-full overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[linear-gradient(165deg,rgba(24,38,72,0.86),rgba(9,15,29,0.96))] p-6 shadow-[0_18px_40px_rgba(2,6,23,0.4)]"
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <motion.div
                  className="absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(122,162,255,0.08), transparent 60%)" }}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={20} />
                  </motion.div>
                  <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-sky-100">
                    {service.tag}
                  </div>
                </div>
                <h3 className="relative mt-6 font-display text-3xl leading-tight text-white">
                  {service.title}
                </h3>
                <p className="relative mt-4 text-base leading-8 text-slate-300">
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
              className="relative h-full rounded-[1.75rem] border border-white/10 bg-[linear-gradient(165deg,rgba(20,33,61,0.8),rgba(9,15,29,0.96))] p-6 lg:before:absolute lg:before:right-0 lg:before:top-8 lg:before:h-[calc(100%-4rem)] lg:before:w-px lg:before:bg-white/10 last:lg:before:hidden"
              whileHover={{ y: -3, borderColor: "rgba(122,162,255,0.35)", transition: { duration: 0.25 } }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-full w-full rounded-full bg-primary/30 blur-sm" />
                  <motion.span
                    className="relative h-3 w-3 rounded-full bg-primary"
                    animate={{ boxShadow: ["0 0 0px rgba(122,162,255,0)", "0 0 10px rgba(122,162,255,0.8)", "0 0 0px rgba(122,162,255,0)"] }}
                    transition={{ duration: 2.5, delay: index * 0.4, repeat: Infinity }}
                  />
                </span>
                <div className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                  Step {index + 1}
                </div>
              </div>
              <h3 className="font-display text-3xl text-white">{step.title}</h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-secondary">
                {step.subtitle}
              </p>
              <p className="mt-5 text-base leading-8 text-slate-300">{step.description}</p>
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
      return { text: "text-sky-300", bar: "from-primary to-cyan-300" };
    case "amber":
      return { text: "text-warning", bar: "from-warning to-amber-300" };
    case "gradient":
      return {
        text: "bg-gradient-to-r from-primary via-sky-300 to-secondary bg-clip-text text-transparent",
        bar: "from-primary via-sky-400 to-secondary",
      };
    default:
      return { text: "text-primary", bar: "from-primary to-sky-300" };
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
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(155deg,rgba(20,33,61,0.92),rgba(9,15,29,0.98))] shadow-[0_24px_80px_rgba(2,6,23,0.65)]">
          <div className="flex items-center gap-2 border-b border-white/[0.08] px-6 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
              verification_status.log
            </span>
          </div>

          <div className="grid gap-5 p-6 md:grid-cols-2">
            {dashboardMetrics.map((metric, index) => {
              const tone = toneClasses(metric.tone);

              return (
                <motion.div
                  key={metric.label}
                  className="rounded-[1.5rem] border border-white/[0.08] bg-[rgba(8,14,30,0.58)] p-5 transition-colors duration-300 hover:border-primary/25"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                      {metric.label}
                    </div>
                    <div className={`font-mono text-lg font-bold ${tone.text}`}>
                      {metric.value.toFixed(1)}%
                    </div>
                  </div>

                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${tone.bar} shadow-[0_0_8px_rgba(122,162,255,0.4)]`}
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
                className="group rounded-[1.55rem] border border-white/[0.08] bg-[linear-gradient(165deg,rgba(20,33,61,0.82),rgba(9,15,29,0.96))] p-5"
                whileHover={{
                  y: -4,
                  borderColor: "rgba(122,162,255,0.5)",
                  boxShadow: "0 0 30px rgba(122,162,255,0.18)",
                  transition: { duration: 0.25 },
                }}
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary"
                    whileHover={{ scale: 1.12, rotate: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={18} />
                  </motion.div>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-slate-400">
                    {item.type}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-medium text-white">{item.name}</h3>
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
        <div className="relative overflow-hidden rounded-[2.2rem] border border-primary/20 bg-[linear-gradient(145deg,rgba(122,162,255,0.22),rgba(12,20,39,0.96),rgba(154,124,255,0.18))] px-6 py-12 shadow-[0_30px_120px_rgba(30,64,175,0.24)] sm:px-10 md:px-14">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.18] blur-[110px]" />

          {/* Circuit decoration in CTA corner */}
          <CircuitDecoration
            instanceId="cta"
            className="pointer-events-none absolute -right-16 -top-16 w-72 opacity-[0.14]"
          />

          {/* PCB trace accents */}
          <div className="pointer-events-none absolute left-6 top-6 flex flex-col gap-[6px] opacity-50">
            <div className="h-px w-14 rounded-full bg-gradient-to-r from-primary to-transparent" />
            <div className="h-px w-9 rounded-full bg-gradient-to-r from-secondary to-transparent" />
            <div className="h-px w-18 rounded-full bg-gradient-to-r from-sky-300/60 to-transparent" />
          </div>

          <div className="relative z-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-300">
                Let&apos;s talk silicon readiness
              </p>
              <h2 className="mt-4 text-balance font-display text-4xl leading-tight text-white md:text-5xl">
                Ready to achieve first-pass silicon success?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Engage Bharat Silicon for verification strategy, execution, and closure support on
                your next automotive SoC program.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="mailto:admin.bharatsilicon@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
                whileHover={{ boxShadow: "0 10px 40px rgba(255,255,255,0.25)" }}
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

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <MethodologySection />
      <VerificationDashboard />
      <TechnologySection />
      <CTASection />
    </>
  );
}
