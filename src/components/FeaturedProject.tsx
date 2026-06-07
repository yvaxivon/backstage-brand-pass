import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface FeaturedItem {
  title: string;
  description: string;
  cta?: string;
  stat1Label: string;
  stat1Value: string;
  stat2Label: string;
  stat2Value: string;
}

// Template placeholders — replace with real content later
const items: FeaturedItem[] = [
  {
    title: "UI Design for Internet Sharing App",
    description:
      "An innovative app and approach for taking advantage of unused internet from people's devices. It differs from others because of its simplicity, functions, and ways to earn extra money.",
    cta: "Coming Soon",
    stat1Label: "Conversion Rate",
    stat1Value: "20%",
    stat2Label: "User Satisfaction",
    stat2Value: "95%",
  },
  {
    title: "Project Title Two",
    description:
      "Placeholder description for your second featured project. Swap this for the real story when ready.",
    cta: "Coming Soon",
    stat1Label: "Engagement",
    stat1Value: "—",
    stat2Label: "Retention",
    stat2Value: "—",
  },
  {
    title: "Project Title Three",
    description:
      "Placeholder description for your third featured project. This is a reusable template card.",
    cta: "Coming Soon",
    stat1Label: "Metric A",
    stat1Value: "—",
    stat2Label: "Metric B",
    stat2Value: "—",
  },
];

const FeaturedProject = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    axis: "y",
    align: "center",
    duration: 32,
  });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[60vw] max-w-[600px] h-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] max-w-[500px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Stacked cards behind for depth */}
        <div className="relative">
          <div className="absolute -top-6 left-6 right-6 h-12 rounded-2xl bg-white/[0.02] border border-white/5" />
          <div className="absolute -top-3 left-3 right-3 h-12 rounded-2xl bg-white/[0.03] border border-white/5" />

          {/* Vertical loop carousel — click card to swipe up */}
          <div
            className="overflow-hidden h-[600px] sm:h-[540px] md:h-[480px] rounded-2xl"
            ref={emblaRef}
          >
            <div className="flex flex-col h-full">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] min-h-0 h-full"
                  onClick={() => emblaApi?.scrollNext()}
                >
                  <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl p-6 sm:p-10 md:p-14 shadow-2xl cursor-pointer group">
                    <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center h-full">
                      <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                          {item.description}
                        </p>
                        {item.cta && (
                          <span className="inline-block px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs sm:text-sm group-hover:bg-white/10 transition-colors">
                            {item.cta}
                          </span>
                        )}
                      </div>

                      <div className="space-y-4 sm:space-y-6">
                        <div className="aspect-video rounded-xl bg-black/60 border border-white/10 overflow-hidden flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)]" />
                          <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full border-2 border-cyan-400/40 animate-pulse">
                            <div className="absolute inset-3 sm:inset-4 rounded-full border-2 border-cyan-400/30" />
                            <div className="absolute inset-6 sm:inset-8 rounded-full border-2 border-cyan-400/20" />
                            <div className="absolute inset-9 sm:inset-12 rounded-full border-2 border-cyan-400/10" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <p className="text-xs sm:text-sm text-white/50 mb-1">{item.stat1Label}</p>
                            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white">{item.stat1Value}</p>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-white/50 mb-1">{item.stat2Label}</p>
                            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white">{item.stat2Value}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* slide counter */}
                    <div className="absolute bottom-4 right-5 text-[10px] sm:text-xs text-white/30 tracking-widest">
                      {String(selected + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
