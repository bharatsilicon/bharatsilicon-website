import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { serviceDetails } from "../data/siteContent";

export function ServicesPage() {
  return (
    <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] pb-24">
      <section className="py-10 md:py-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-primary">
            Service Portfolio
          </div>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[0.96] text-white md:text-6xl">
            Automotive verification services that move from architecture to sign-off.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Bharat Silicon supports end-to-end verification programs for automotive SoCs with
            practical delivery across UVM, formal, GLS, automation, and methodology definition.
          </p>
        </Reveal>
      </section>

      <section className="grid gap-6">
        {serviceDetails.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.05}>
            <article className="grid gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(22,35,66,0.88),rgba(9,15,29,0.96))] p-6 shadow-[0_18px_60px_rgba(2,6,23,0.45)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.24em] text-secondary">
                  Service {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-4 font-display text-4xl leading-tight text-white">
                  {service.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">{service.summary}</p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/8 bg-[rgba(8,14,30,0.56)] p-5">
                  <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                    Use Cases
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    {service.useCases.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[1.5rem] border border-white/8 bg-[rgba(8,14,30,0.56)] p-5">
                  <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-sky-200">
                    Deliverables
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="grid gap-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Why Bharat Silicon"
            title="Built for verification teams that need clarity under schedule pressure."
            description="The engagement model combines hands-on engineering depth with pragmatic communication for project leads, DV managers, and safety stakeholders."
          />
        </Reveal>
        <Reveal delay={0.12}>
          <div className="grid gap-4">
            {[
              "Bangalore-based partner with focused automotive verification expertise.",
              "Coverage-driven sign-off mindset anchored in metrics and debug velocity.",
              "Direct familiarity with AXI, AHB, APB, ISO 26262, Xcelium, Jasper, and vManager workflows.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(160deg,rgba(22,35,66,0.82),rgba(9,15,29,0.94))] p-5 text-base leading-8 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal>
        <div className="rounded-[2rem] border border-primary/20 bg-[linear-gradient(145deg,rgba(122,162,255,0.18),rgba(10,14,22,0.96),rgba(154,124,255,0.16))] p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                Next step
              </div>
              <h2 className="mt-3 font-display text-4xl text-white">
                Need a verification partner for your next milestone?
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-medium text-white"
            >
              Start the conversation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
