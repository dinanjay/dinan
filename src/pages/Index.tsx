import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, ArrowRight, ExternalLink, Code, Cpu, Wrench, Cog, Bot, CircuitBoard, Database, Terminal, Wifi } from "lucide-react";
import { timelineEntries } from "@/data/experience";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
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
      <section className="border-t-[3px] border-foreground py-12 overflow-hidden">
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

      {/* Featured Projects */}
      <section className="border-t-[3px] border-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="brutal-border brutal-shadow-primary inline-block px-4 py-1 mb-8 bg-primary text-primary-foreground">
            <span className="font-mono text-sm font-bold">FEATURED PROJECTS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <article key={project.id} className="brutal-card flex flex-col">
                <div className="h-48 bg-secondary border-b-[3px] border-foreground flex items-center justify-center">
                  <span className="font-mono text-muted-foreground text-sm">[ thumbnail ]</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="brutal-border px-2 py-0.5 text-xs font-mono font-bold bg-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.sourceUrl} className="brutal-btn-outline flex items-center gap-2 !py-2 !px-4 text-sm flex-1 justify-center">
                      <Github size={14} /> Source
                    </a>
                    <a href={project.demoUrl} className="brutal-btn flex items-center gap-2 !py-2 !px-4 text-sm flex-1 justify-center">
                      <ExternalLink size={14} /> Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/projects" className="brutal-btn-outline inline-flex items-center gap-2">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="border-t-[3px] border-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="brutal-border brutal-shadow-primary inline-block px-4 py-1 mb-8 bg-primary text-primary-foreground">
            <span className="font-mono text-sm font-bold">LATEST POSTS</span>
          </div>
          <div className="space-y-6 max-w-4xl pb-2 pr-2">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="brutal-card block p-6 group"
              >
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono font-bold text-primary">
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-muted-foreground font-mono ml-auto">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>
                <span className="font-mono text-sm font-bold text-primary flex items-center gap-1">
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/blog" className="brutal-btn-outline inline-flex items-center gap-2">
              View All Posts <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
