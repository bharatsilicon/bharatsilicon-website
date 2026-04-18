import {
  Activity,
  Binary,
  Blocks,
  Bot,
  BrainCircuit,
  CheckCheck,
  CircuitBoard,
  Cpu,
  DatabaseZap,
  GitBranch,
  Layers3,
  ShieldCheck,
  Sigma,
  TerminalSquare,
} from "lucide-react";

export const navigationLinks = [
  { label: "Services", to: "/#services" },
  { label: "Methodology", to: "/#methodology" },
  { label: "Technology", to: "/#technology" },
];

export const stats = [
  { value: 100, suffix: "%", label: "Coverage Closure" },
  { value: 50, suffix: "+", label: "IP Blocks Verified" },
  { value: 10, suffix: "x", label: "Faster Bug Detection" },
  { value: 0, suffix: "", label: "Silicon Respins" },
];

export const services = [
  {
    icon: ShieldCheck,
    title: "UVM Functional Verification",
    tag: "Safety-Critical",
    description:
      "Reusable UVM environments, scoreboards, sequences, and protocol-aware VIP integration for automotive-grade SoC programs.",
  },
  {
    icon: Sigma,
    title: "Formal Verification",
    tag: "Property Driven",
    description:
      "Assertion authoring, deadlock analysis, X-prop checks, CDC-focused proofs, and coverage closure acceleration using formal apps.",
  },
  {
    icon: Activity,
    title: "Gate-Level Simulation",
    tag: "Sign-Off Ready",
    description:
      "Post-synthesis and post-layout GLS with reset, power-up, timing, and bring-up scenarios mapped to silicon risk reduction.",
  },
  {
    icon: Layers3,
    title: "Testbench Architecture",
    tag: "ISO 26262",
    description:
      "Scalable verification architecture definition spanning block, subsystem, and SoC with traceability to safety goals and requirements.",
  },
  {
    icon: CheckCheck,
    title: "Coverage Closure",
    tag: "Metric Driven",
    description:
      "Functional, code, assertion, and cross coverage analysis with targeted stimulus refinement and sign-off dashboards.",
  },
  {
    icon: Bot,
    title: "Regression Automation",
    tag: "Continuous Quality",
    description:
      "Regression orchestration, triage workflows, vManager reporting, and Python/TCL automation to keep feedback loops fast and stable.",
  },
];

export const methodologySteps = [
  {
    title: "Define",
    subtitle: "Verification Planning",
    description:
      "Requirements decomposition, feature coverage models, assertion strategy, and traceability aligned to automotive SoC intent.",
  },
  {
    title: "Build",
    subtitle: "Environment Development",
    description:
      "Layered UVC integration, reusable sequences, scoreboards, checkers, and a testbench architecture built for scale.",
  },
  {
    title: "Verify",
    subtitle: "Test Execution",
    description:
      "Formal apps, constrained-random regressions, protocol stress, and GLS campaigns to expose corner-case issues early.",
  },
  {
    title: "Close",
    subtitle: "Coverage Sign-off",
    description:
      "Coverage gap closure, debug convergence, waiver discipline, and sign-off reporting for first-pass silicon confidence.",
  },
];

export const dashboardMetrics = [
  { label: "Functional Coverage", value: 98.7, tone: "green" },
  { label: "Code Coverage", value: 95.2, tone: "blue" },
  { label: "Assertion Pass Rate", value: 100, tone: "gradient" },
  { label: "GLS Regression", value: 87.4, tone: "amber" },
];

export const technologyStack = [
  { name: "SystemVerilog", type: "Language", icon: Binary },
  { name: "UVM", type: "Methodology", icon: Layers3 },
  { name: "SVA", type: "Assertion", icon: Sigma },
  { name: "Cadence Xcelium", type: "Simulator", icon: Cpu },
  { name: "Cadence Jasper", type: "Formal", icon: BrainCircuit },
  { name: "Cadence vManager", type: "Analytics", icon: DatabaseZap },
  { name: "Verilog", type: "RTL", icon: CircuitBoard },
  { name: "Python / TCL", type: "Automation", icon: TerminalSquare },
  { name: "AXI · AHB · APB", type: "Bus Protocols", icon: GitBranch },
  { name: "SPI · I2C · I3C · UART · CAN · PCIe", type: "Serial Protocols", icon: Blocks },
  { name: "Git / GitLab", type: "Collaboration", icon: GitBranch },
  { name: "Linux", type: "Execution", icon: TerminalSquare },
];

export const serviceDetails = [
  {
    title: "UVM Functional Verification",
    summary:
      "Build complete constrained-random and directed-random verification environments for safety-conscious SoC programs.",
    useCases: [
      "Protocol-compliant verification for AXI, AHB, APB, SPI, I2C, I3C, UART, CAN, and PCIe IP and subsystems.",
      "Subsystem-level verification with reusable UVCs, scoreboards, and coverage collectors.",
      "Automotive feature validation where reset, interrupt, safety monitor, and power management behavior must be proven.",
    ],
    deliverables: [
      "Verification plan and feature matrix aligned to requirements.",
      "Layered UVM environment, agents, sequences, scoreboards, and checkers.",
      "Regression suites, debug dashboards, and sign-off quality reports.",
    ],
  },
  {
    title: "Formal Verification",
    summary:
      "Use property-driven verification to uncover corner-case bugs faster and complement simulation-based closure.",
    useCases: [
      "Protocol compliance proofs and assertion-based bug hunting for control-heavy logic.",
      "Deadlock, unreachable state, X-propagation, and safety mechanism validation.",
      "Exhaustive checks for arbitration, ordering, handshake, and low-power intent scenarios.",
    ],
    deliverables: [
      "SVA libraries, proof plans, and Jasper app configuration.",
      "Assertion coverage analysis and proof convergence reports.",
      "Formal results packaged with debug-ready counterexamples and waivers.",
    ],
  },
  {
    title: "Gate-Level Simulation",
    summary:
      "Run sign-off focused GLS campaigns that reduce bring-up surprises and timing-related escapes.",
    useCases: [
      "Post-synthesis and post-layout regressions for reset, boot, clocking, and timing-sensitive flows.",
      "Netlist validation under SDF back-annotation and initialization stress scenarios.",
      "X-checking and RTL-to-netlist behavior correlation for high-risk SoC paths.",
    ],
    deliverables: [
      "GLS test plan covering smoke, stress, and corner scenarios.",
      "Waveform-based debug analysis and failure classification.",
      "Readiness summary with risk notes and closure recommendations.",
    ],
  },
  {
    title: "Testbench Architecture",
    summary:
      "Define robust testbench architecture that scales from IP to full SoC while staying maintainable and auditable.",
    useCases: [
      "Greenfield verification setup for new automotive SoCs and subsystem programs.",
      "Refactoring fragmented environments into layered, reusable UVM architecture.",
      "ISO 26262-oriented traceability between requirements, tests, coverage, and review artifacts.",
    ],
    deliverables: [
      "Architecture blueprint covering agents, virtual sequences, scoreboards, and checkers.",
      "Reuse strategy spanning block, subsystem, and SoC verification layers.",
      "Methodology guidelines for coding style, review gates, and safety documentation.",
    ],
  },
  {
    title: "Coverage Closure",
    summary:
      "Drive systematic closure across functional, code, assertion, and cross coverage with metrics that matter.",
    useCases: [
      "Late-stage projects needing focused closure plans without noisy regressions.",
      "Coverage gap analysis across multiple IP teams and verification branches.",
      "Sign-off readiness tracking for reviews, audits, and customer milestones.",
    ],
    deliverables: [
      "Coverage triage matrix for holes, exclusions, and action items.",
      "Targeted stimulus additions and gap-specific regression campaigns.",
      "Executive-ready coverage dashboards and closure sign-off reports.",
    ],
  },
  {
    title: "Regression Automation",
    summary:
      "Streamline regressions so verification throughput improves without sacrificing debug clarity or traceability.",
    useCases: [
      "Nightly and milestone regressions managed across large test matrices.",
      "Automated triage workflows for recurring failures and flaky tests.",
      "Custom reporting pipelines integrating simulation, coverage, and issue trends.",
    ],
    deliverables: [
      "Python and TCL utilities for run management, parsing, and report generation.",
      "vManager-aligned regression dashboards and notification hooks.",
      "Stable automation framework for faster root-cause isolation and reruns.",
    ],
  },
];

export const contactDetails = [
  {
    label: "Email",
    value: "admin.bharatsilicon@gmail.com",
    href: "mailto:admin.bharatsilicon@gmail.com",
  },
];
