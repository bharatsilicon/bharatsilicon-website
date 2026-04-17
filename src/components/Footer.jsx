import { Link } from "react-router-dom";
import { navigationLinks } from "../data/siteContent";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-sky-100 bg-white">
      <div className="mx-auto flex w-[min(1180px,calc(100%-1.5rem))] flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <BrandMark />
          <p className="max-w-md text-sm leading-7 text-slate-500">
            Premium verification services for automotive SoCs spanning UVM, formal, GLS, and
            sign-off readiness.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm md:items-end">
          <div className="flex flex-wrap gap-5">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-slate-500 transition-colors duration-200 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/services"
              className="text-slate-500 transition-colors duration-200 hover:text-slate-900"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-primary/40 bg-sky-50 px-3 py-1 text-primary transition-all duration-200 hover:border-primary/70 hover:bg-sky-100"
            >
              Contact
            </Link>
          </div>
          <div className="flex gap-4 text-xs text-slate-400">
            <Link to="/privacy" className="hover:text-slate-600 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-600 transition-colors duration-200">
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
            © 2026 Bharat Silicon
          </p>
        </div>
      </div>
    </footer>
  );
}
