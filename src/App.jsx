import { Link, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { ScrollManager } from "./components/ScrollManager";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";

function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">404</p>
      <h1 className="font-display text-5xl text-white">Page not found</h1>
      <p className="text-slate-400">That route doesn&apos;t exist in our verification plan.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(122,162,255,0.3)] transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollManager />
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </>
  );
}

export default App;
