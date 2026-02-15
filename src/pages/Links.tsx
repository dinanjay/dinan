import { Linkedin, Github, Download, ExternalLink, Bot, CircuitBoard } from "lucide-react";

const links = [
  { label: "LinkedIn", icon: Linkedin, url: "#", color: "bg-primary text-primary-foreground" },
  { label: "GitHub", icon: Github, url: "#", color: "bg-foreground text-background" },
  { label: "Download Resume", icon: Download, url: "#", color: "bg-primary text-primary-foreground" },
  { label: "ROS2 Navigation Stack", icon: Bot, url: "#", color: "bg-background text-foreground" },
  { label: "IoT Sensor Dashboard", icon: CircuitBoard, url: "#", color: "bg-background text-foreground" },
  { label: "Portfolio Website", icon: ExternalLink, url: "#", color: "bg-background text-foreground" },
];

const Links = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen flex items-start justify-center">
      <div className="w-full max-w-md mx-auto px-4">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-28 h-28 brutal-border brutal-shadow bg-secondary flex items-center justify-center mb-4">
            <span className="font-mono font-bold text-3xl text-primary">ME</span>
          </div>
          <h1 className="text-2xl font-bold">MECH_FOLIO</h1>
          <p className="text-muted-foreground font-mono text-sm mt-1">Mechatronics Engineer</p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className={`brutal-border brutal-shadow flex items-center gap-4 px-6 py-4 font-mono font-bold text-sm w-full transition-all duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none ${link.color}`}
              onClick={(e) => e.preventDefault()}
            >
              <link.icon size={20} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Links;
