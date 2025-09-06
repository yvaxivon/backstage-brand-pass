import profilePhoto from "@/assets/cartoon-profile.jpg";
import { useState } from "react";

const IDBadge = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrag = (e: React.DragEvent) => {
    if (e.clientX !== 0 && e.clientY !== 0) {
      setPosition({ x: e.clientX - 160, y: e.clientY - 200 });
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
        className={`badge-3d badge-sway bg-white rounded-xl p-6 w-80 relative overflow-hidden shadow-2xl border border-gray-100 cursor-move transition-all duration-200 ${isDragging ? 'scale-105 rotate-2' : ''}`}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        style={{
          transform: isDragging ? `translate(${position.x}px, ${position.y}px) rotate(2deg) scale(1.05)` : undefined
        }}
      >
        {/* Header with Pass Card Title */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="text-lg font-bold text-black tracking-wide">PASS CARD</div>
          </div>
          <div className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">001</div>
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
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Brand:</div>
              <div className="text-sm font-semibold text-black">Jaz Yvonne Baluarte</div>
            </div>
            
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Season:</div>
              <div className="text-sm font-semibold text-black">2024/25</div>
            </div>

            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Style:</div>
              <div className="text-sm font-semibold text-black">Multidisciplinary Designer</div>
            </div>

            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Type:</div>
              <div className="text-sm font-semibold text-black">Excl.Pass</div>
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
            #JYB2024-001
          </div>
        </div>

        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default IDBadge;