import { timelineEntries } from "@/data/experience";

const Experience = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
          EXPERIENCE<span className="text-primary">_</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-12">
          My journey through Mechatronics Engineering.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-foreground md:-translate-x-[1.5px]" />

          <div className="space-y-12">
            {timelineEntries.map((entry, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-start">
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary brutal-border rounded-full -translate-x-[6.5px] md:-translate-x-[8px] mt-6 z-10" />

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] brutal-card p-5 ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <span className="font-mono text-xs font-bold text-primary">{entry.date}</span>
                    <h3 className="text-lg font-bold mt-1 mb-2">{entry.title}</h3>
                    <p className="text-muted-foreground text-sm">{entry.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;
