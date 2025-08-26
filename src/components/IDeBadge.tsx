import profilePhoto from "@/assets/profile-photo.jpg";

const IDBadge = () => {
  return (
    <div className="relative">      
      {/* Modern Pass Card Design */}
      <div className="badge-3d badge-sway bg-white rounded-xl p-6 w-80 relative overflow-hidden shadow-2xl border border-gray-100">
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