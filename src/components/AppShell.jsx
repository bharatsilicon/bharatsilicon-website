import { CircuitDecoration } from "./CircuitDecoration";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

function CircuitBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="circuit-grid absolute inset-0 opacity-90" />
      {/* Sky blue ambient blobs */}
      <div className="absolute -left-28 top-[4.5rem] h-96 w-96 rounded-full bg-[rgba(56,189,248,0.22)] blur-[130px]" />
      <div className="absolute right-[-8rem] top-[18rem] h-[34rem] w-[34rem] rounded-full bg-[rgba(129,140,248,0.16)] blur-[160px]" />
      <div className="absolute bottom-[-8rem] left-[32%] h-[24rem] w-[24rem] rounded-full bg-[rgba(14,165,233,0.14)] blur-[140px]" />
      {/* Logo-inspired circuit decoration — top right */}
      <CircuitDecoration
        instanceId="bg-tr"
        className="absolute right-[2%] top-[3%] w-[min(580px,50vw)] opacity-[0.16]"
      />
      {/* Secondary circuit decoration — bottom left, smaller */}
      <CircuitDecoration
        instanceId="bg-bl"
        className="absolute -bottom-[10%] -left-[5%] w-[min(360px,35vw)] opacity-[0.10] rotate-180"
      />
    </div>
  );
}

export function AppShell({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-slate-800">
      <CircuitBackground />
      <Navbar />
      <main className="relative z-10 pt-28">{children}</main>
      <Footer />
    </div>
  );
}
