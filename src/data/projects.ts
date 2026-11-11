export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  sourceUrl?: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    id: "flowfloor-twinworks",
    title: "Smart Factory AGV Digital Twin",
    description:
      "Interactive digital twin and control room simulator for a smart factory material-handling system. Simulates real-time AGV fleet routing, mission dispatching, workstation inventory buffers, interactive fault injection, and incident replay.",
    tags: ["Digital Twin", "AGV Fleet Control", "Industry 4.0", "React", "Simulation"],
    image: "/images/flowfloor-twinworks.png",
    demoUrl: "https://flowfloor-twinworks.lovable.app",
  },
];
