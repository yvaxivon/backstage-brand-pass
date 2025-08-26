import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import IDBadge from "./IDeBadge";

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-hero relative overflow-hidden">
      <Navigation />
      
      {/* Corner Logo */}
      <div className="absolute top-6 left-6">
        <div className="bg-yellow-400 text-black px-3 py-2 rounded font-bold text-sm transform -rotate-12">
          MADE WITH<br />FRANCE
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute top-6 right-6 flex space-x-3">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">@</span>
        </div>
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">Be</span>
        </div>
      </div>

      <div className="container mx-auto px-6 h-screen flex flex-col justify-between">
        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h1 className="hero-headline text-black mb-4">
                  YOUR BRAND'S<br />
                  BACKSTAGE PASS
                </h1>
                <p className="hero-tagline text-black/80 max-w-md">
                  Let's find your authentic voice and get your brand ready to rock the stage!
                </p>
              </div>

              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-6 text-base font-semibold"
              >
                Available for new projects
              </Button>
            </div>

            {/* Right Content - ID Badge */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Lanyard positioned on the right side */}
                <div className="absolute -top-16 right-32 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                <div className="absolute -top-20 right-32 w-6 h-6 border-2 border-gray-300 rounded-full bg-gray-200 transform -translate-x-1/2"></div>
                <IDBadge />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Large Name */}
        <div className="pb-8">
          <h2 className="brand-name text-black text-center lg:text-left">
            JAZ YVONNE BALUARTE
          </h2>
        </div>

        {/* Footer Credit */}
        <div className="absolute bottom-6 right-6">
          <p className="text-black/60 text-xs">Made with Readymag</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;