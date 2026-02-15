import { Link } from "react-router-dom";
import { ArrowRight, Code, Cpu, Wrench, Cog, Bot, CircuitBoard } from "lucide-react";

const techStack = [
  { name: "Python", icon: Code },
  { name: "C++", icon: Cpu },
  { name: "MATLAB", icon: Cog },
  { name: "CAD", icon: Wrench },
  { name: "ROS", icon: Bot },
  { name: "Circuits", icon: CircuitBoard },
];

const Index = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="brutal-border brutal-shadow-primary inline-block px-4 py-1 mb-6 bg-primary text-primary-foreground">
              <span className="font-mono text-sm font-bold">MECHATRONICS ENGINEER</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Building the Bridge Between{" "}
              <span className="text-primary">Hardware</span> and{" "}
              <span className="text-primary">Software.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              Mechatronics Engineering student passionate about robotics, embedded systems, 
              and creating intelligent machines that interact with the physical world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="brutal-btn flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="brutal-btn-outline flex items-center gap-2">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 border-t-[3px] border-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">
            TECH STACK<span className="text-primary">_</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="brutal-card p-6 flex flex-col items-center gap-3 cursor-default"
              >
                <tech.icon size={32} className="text-foreground" />
                <span className="font-mono font-bold text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
