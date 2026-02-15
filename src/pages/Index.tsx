import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, ArrowRight, Code, Cpu, Wrench, Cog, Bot, CircuitBoard, Database, Terminal, Wifi } from "lucide-react";
import { timelineEntries } from "@/data/experience";
import JourneyTimeline from "@/components/JourneyTimeline";
import JourneyMap from "@/components/JourneyMap";

const techStack = [
  { name: "Python", icon: Code },
  { name: "C++", icon: Cpu },
  { name: "MATLAB", icon: Cog },
  { name: "CAD", icon: Wrench },
  { name: "ROS", icon: Bot },
  { name: "Circuits", icon: CircuitBoard },
  { name: "Embedded", icon: Terminal },
  { name: "IoT", icon: Wifi },
  { name: "SQL", icon: Database },
];

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <p className="font-mono text-muted-foreground text-lg mb-2">Hi there! 👋 I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                Mech<span className="text-primary">_</span>Folio
              </h1>
              <div className="brutal-border brutal-shadow-primary inline-block px-4 py-1 mb-6 bg-primary text-primary-foreground">
                <span className="font-mono text-sm font-bold">MECHATRONICS ENGINEER</span>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Mechatronics Engineering student passionate about robotics, embedded systems,
                and creating intelligent machines that interact with the physical world.
                I build the bridge between hardware and software.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mb-8">
                <a href="#" onClick={(e) => e.preventDefault()} className="brutal-border brutal-shadow p-3 bg-background hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-all duration-150">
                  <Github size={22} />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="brutal-border brutal-shadow p-3 bg-background hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-all duration-150">
                  <Linkedin size={22} />
                </a>
              </div>

              <Link to="/contact" className="brutal-btn flex items-center gap-2 w-fit">
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right Column — Avatar */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative accent block */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-primary border-[3px] border-foreground" />
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 brutal-border bg-secondary flex items-center justify-center z-10">
                  <span className="font-mono font-bold text-6xl text-primary">ME</span>
                </div>
                {/* Small decorative dot */}
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary border-[3px] border-foreground z-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="border-t-[3px] border-foreground overflow-hidden py-6">
        <div className="marquee-container">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="brutal-border bg-card px-6 py-4 flex items-center gap-3 shrink-0"
              >
                <tech.icon size={24} className="text-primary" />
                <span className="font-mono font-bold text-sm whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="border-t-[3px] border-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="brutal-border brutal-shadow-primary inline-block px-4 py-1 mb-8 bg-primary text-primary-foreground">
            <span className="font-mono text-sm font-bold">MY JOURNEY</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6">
            <JourneyTimeline
              entries={timelineEntries}
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
            />
            <JourneyMap
              entries={timelineEntries}
              activeIndex={activeIndex}
              onMarkerClick={setActiveIndex}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
