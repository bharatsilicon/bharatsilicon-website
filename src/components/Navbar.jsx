import { AnimatePresence, motion } from "framer-motion";
import { Menu, MoveRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navigationLinks } from "../data/siteContent";
import { BrandMark } from "./BrandMark";

const navLinkClass = ({ isActive }) =>
  [
    "transition-colors duration-200",
    isActive ? "text-white" : "text-slate-300 hover:text-white",
  ].join(" ");

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      animate={{
        paddingTop: isScrolled ? 12 : 20,
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto w-[min(1220px,calc(100%-1.25rem))] rounded-[1.7rem] border border-white/10 px-4 sm:px-6">
        <motion.div
          className="absolute inset-0 rounded-[1.7rem] border border-white/8"
          animate={{
            backgroundColor: isScrolled
              ? "rgba(11, 18, 33, 0.92)"
              : "rgba(11, 18, 33, 0.72)",
            backdropFilter: isScrolled ? "blur(22px)" : "blur(14px)",
          }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative z-10 grid min-h-[76px] w-full grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[260px_1fr_260px]">
          <Link to="/" aria-label="Bharat Silicon home" className="justify-self-start">
            <BrandMark compact />
          </Link>

          <nav className="hidden items-center justify-center gap-10 text-sm md:flex md:justify-self-center">
            {navigationLinks.map((item) => (
              <NavLink key={item.label} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="relative z-10 hidden items-center gap-4 md:flex md:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(122,162,255,0.3)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact
              <MoveRight size={16} />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-auto mt-3 w-[min(1220px,calc(100%-1.25rem))] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[rgba(11,18,33,0.96)] p-4 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-2">
              {navigationLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-2xl px-4 py-3 text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-4 py-3 font-medium text-white"
              >
                Contact
                <MoveRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
