const FeaturedProject = () => {
  return (
    <section className="bg-background py-24 px-4 relative overflow-hidden">
      {/* Ambient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Stacked cards behind */}
        <div className="relative">
          <div className="absolute -top-6 left-6 right-6 h-12 rounded-2xl bg-white/[0.02] border border-white/5" />
          <div className="absolute -top-3 left-3 right-3 h-12 rounded-2xl bg-white/[0.03] border border-white/5" />

          {/* Main card */}
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl p-10 md:p-14 shadow-2xl">
            {/* Subtle top edge gradient */}
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left: Text */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                  UI Design for Internet Sharing App
                </h3>
                <p className="text-white/60 leading-relaxed">
                  An innovative app and approach for taking advantage of unused
                  internet from people's devices. It differs from others because
                  of its simplicity, functions, and ways to earn extra money.
                </p>
                <button className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 transition-colors">
                  Coming Soon
                </button>
              </div>

              {/* Right: Visual + stats */}
              <div className="space-y-6">
                <div className="aspect-video rounded-xl bg-black border border-white/10 overflow-hidden flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)]" />
                  <div className="relative w-48 h-48 rounded-full border-2 border-cyan-400/40 animate-pulse">
                    <div className="absolute inset-4 rounded-full border-2 border-cyan-400/30" />
                    <div className="absolute inset-8 rounded-full border-2 border-cyan-400/20" />
                    <div className="absolute inset-12 rounded-full border-2 border-cyan-400/10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-white/50 mb-1">Conversion Rate</p>
                    <p className="text-3xl md:text-4xl font-light text-white">20%</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">User Satisfaction</p>
                    <p className="text-3xl md:text-4xl font-light text-white">95%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
