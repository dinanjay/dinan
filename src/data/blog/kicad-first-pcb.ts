import kicadPcbImg from "@/assets/images/blog/kicad-pcb.jpg";
import type { BlogPost } from "./index";

export const kicadFirstPcbPost: BlogPost = {
  slug: "kicad-first-pcb",
  title: "Designing My First PCB in KiCad: From Schematic to Fabrication",
  date: "2025-10-14",
  tags: ["Embedded Systems", "CAD"],
  excerpt: "The complete journey of designing, ordering, and assembling a custom motor driver PCB using KiCad 8.",
  coverImage: kicadPcbImg,
  content: `## Why Custom PCBs?

Breadboards are great for prototyping, but they fail at higher currents and frequencies. For my robot's motor drivers, I needed something **reliable**.

## Schematic Design

I designed a dual H-bridge using **IRF540N MOSFETs** with bootstrap drivers. KiCad's schematic editor made it straightforward to lay out the circuit.

Key components:
- 4x IRF540N N-channel MOSFETs per channel
- IR2110 bootstrap gate drivers
- ACS712 current sense ICs
- TVS diodes for ESD protection

## PCB Layout

The layout was the hardest part. Routing high-current traces requires careful consideration of:

- **Trace width** — 2mm minimum for 5A paths
- **Thermal relief** — Proper pad connections to ground plane
- **Ground planes** — Solid copper fill for heat dissipation

\`\`\`
Design Rules:
  Track width (signal): 0.25mm
  Track width (power):  2.0mm
  Clearance:            0.2mm
  Via size:             0.8mm / 0.4mm drill
\`\`\`

## Fabrication

I ordered from JLCPCB — **5 boards for under $10** including shipping. The turnaround was about 2 weeks.

## Assembly and Testing

Soldering SMD components was challenging but rewarding. The board worked on the first try, delivering clean **12V/5A** power to each motor channel.`,
};
