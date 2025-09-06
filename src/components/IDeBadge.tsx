import profilePhoto from "@/assets/cartoon-profile.jpg";
import { useState, useRef } from "react";

const IDBadge = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;
      
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({
          x: e.clientX - rect.left - rect.width / 2 - offsetX,
          y: e.clientY - rect.top - rect.height / 2 - offsetY
        });
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        // Spring back to original position
        setPosition({ x: 0, y: 0 });
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  return (
    <div className="relative">
      {/* Lanyard/Lace */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-1 h-12 bg-gray-400 rounded-full shadow-sm"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full mx-auto -mt-1 shadow-sm"></div>
      </div>
      
      {/* Modern Pass Card Design */}
      <div 
        ref={cardRef}
        className={`badge-3d bg-white rounded-xl p-6 w-80 relative overflow-hidden shadow-2xl border border-gray-100 cursor-move select-none transition-all duration-300 ${isDragging ? 'scale-105 z-50' : ''}`}
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) ${isDragging ? 'rotate(5deg)' : ''}`,
          transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        {/* Header with Portfolio ID Title */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="text-lg font-bold text-black tracking-wide">PORTFOLIO ID</div>
          </div>
          <div className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">2024</div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Profile Photo */}
          <div className="col-span-1">
            <div className="w-20 h-24 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
              <img 
                src={profilePhoto} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="col-span-2 space-y-3">
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Developer:</div>
              <div className="text-sm font-semibold text-black">Yazivonn</div>
            </div>
            
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Year:</div>
              <div className="text-sm font-semibold text-black">2024</div>
            </div>

            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Stack:</div>
              <div className="text-sm font-semibold text-black">Full-Stack Dev</div>
            </div>

            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Status:</div>
              <div className="text-sm font-semibold text-black">Available</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          {/* Barcode */}
          <div className="flex space-x-px h-8 w-24">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="bg-black flex-1"
                style={{
                  opacity: Math.random() > 0.3 ? 1 : 0,
                  height: Math.random() > 0.5 ? '100%' : '70%'
                }}
              />
            ))}
          </div>
          
          {/* QR Code Placeholder */}
          <div className="w-12 h-12 border-2 border-black bg-white grid grid-cols-4 gap-px p-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={Math.random() > 0.5 ? 'bg-black' : 'bg-white'}
              />
            ))}
          </div>

          {/* Serial Number */}
          <div className="text-xs font-mono text-gray-500">
            #YAZ2024-DEV
          </div>
        </div>

        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default IDBadge;