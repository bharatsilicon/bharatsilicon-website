import { Link } from "react-router-dom";
import { navigationLinks } from "../data/siteContent";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[rgba(11,18,33,0.65)]">
      <div className="mx-auto flex w-[min(1180px,calc(100%-1.5rem))] flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <BrandMark />
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Premium verification services for automotive SoCs spanning UVM, formal, GLS, and sign-off readiness.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-slate-300 md:items-end">
          <div className="flex flex-wrap gap-5">
            {navigationLinks.map((link) => (
              <Link key={link.label} to={link.to} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link to="/services" className="transition-colors hover:text-white">
              Services Page
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
            © 2026 Bharat Silicon
          </p>
        </div>
      </div>
    </footer>
  );
}
