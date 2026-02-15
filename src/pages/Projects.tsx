import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
          PROJECTS<span className="text-primary">_</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          A collection of engineering projects spanning robotics, embedded systems, and software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project.id} className="brutal-card flex flex-col">
              <div className="h-48 bg-secondary border-b-[3px] border-foreground flex items-center justify-center">
                <span className="font-mono text-muted-foreground text-sm">[ thumbnail ]</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="brutal-border px-2 py-0.5 text-xs font-mono font-bold bg-secondary"
                    >
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
      </div>
    </main>
  );
};

export default Projects;
