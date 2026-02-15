import { MapPin } from "lucide-react";
import { TimelineEntry } from "@/data/experience";

interface JourneyTimelineProps {
  entries: TimelineEntry[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const JourneyTimeline = ({ entries, activeIndex, onSelect }: JourneyTimelineProps) => {
  return (
    <div className="brutal-scrollbar overflow-y-auto h-[500px] pr-2">
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-0 bottom-0 w-[3px] bg-foreground" />

        <div className="space-y-6">
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                onClick={() => onSelect(index)}
                className="relative cursor-pointer group"
              >
                {/* Dot on line */}
                <div
                  className={`absolute -left-8 top-4 w-5 h-5 border-[3px] border-foreground z-10 transition-colors ${
                    isActive ? "bg-primary" : "bg-secondary group-hover:bg-primary/50"
                  }`}
                />

                {/* Card */}
                <div
                  className={`brutal-border p-4 transition-all duration-150 ${
                    isActive
                      ? "bg-card shadow-[6px_6px_0px_0px_hsl(var(--primary))] -translate-x-[2px] -translate-y-[2px]"
                      : "bg-card brutal-shadow hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground))]"
                  }`}
                >
                  <div className="brutal-border inline-block px-3 py-0.5 bg-primary text-primary-foreground mb-2">
                    <span className="font-mono text-xs font-bold">{entry.date}</span>
                  </div>
                  <h3 className="font-mono font-bold text-base mb-1">{entry.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                    {entry.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                    <MapPin size={14} className="text-primary" />
                    {entry.location}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;
