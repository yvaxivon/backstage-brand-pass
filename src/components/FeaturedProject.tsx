import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronUp, ChevronDown } from "lucide-react";

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
      "An innovative app and approach for taking advantage of unused internet from people's devices. Simple, functional, and built to earn extra income.",
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
    cta: "View Case",
    stat1Label: "Engagement",
    stat1Value: "—",
    stat2Label: "Retention",
    stat2Value: "—",
  },
  {
    title: "Project Title Three",
    description:
      "Placeholder description for your third featured project. This is a reusable template card.",
    cta: "View Case",
    stat1Label: "Metric A",
    stat1Value: "—",
    stat2Label: "Metric B",
    stat2Value: "—",
  },
];

const FeaturedProject = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, axis: "y", align: "center", dragFree: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
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
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Vertical loop carousel */}
          <div
            className="overflow-hidden flex-1 h-[560px] sm:h-[520px] md:h-[480px]"
            ref={emblaRef}
          >
            <div className="flex flex-col h-full">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] min-h-0 h-full px-1 sm:px-2"
                >
                  <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-950/70 backdrop-blur-xl p-6 sm:p-10 md:p-14 shadow-2xl">
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
                          <button className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs sm:text-sm hover:bg-white/10 transition-colors">
                            {item.cta}
                          </button>
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls + indicators */}
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 flex items-center justify-center transition"
              aria-label="Previous"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <div className="flex flex-col gap-2 py-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`w-1.5 rounded-full transition-all ${
                    selected === i ? "h-6 bg-white/80" : "h-1.5 bg-white/25"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 flex items-center justify-center transition"
              aria-label="Next"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;

