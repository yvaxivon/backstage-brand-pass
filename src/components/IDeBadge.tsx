import profilePhoto from "@/assets/profile-photo.jpg";

const IDBadge = () => {
  return (
    <div className="relative">      
      {/* Badge */}
      <div className="badge-3d badge-sway bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg p-4 w-64 relative overflow-hidden">
        {/* Badge Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="text-xs font-mono text-black opacity-70">001</div>
        </div>

        {/* Main Content */}
        <div className="space-y-3">
          <div>
            <h3 className="text-black font-black text-sm tracking-wider uppercase leading-tight">
              MULTIDISCIPLINARY<br />DESIGNER
            </h3>
          </div>

          {/* Profile Section */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded overflow-hidden border-2 border-black/20">
              <img 
                src={profilePhoto} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-black font-bold text-sm">Jaz Yvonne</div>
              <div className="text-black font-bold text-sm">Baluarte</div>
            </div>
          </div>

          {/* Barcode */}
          <div className="mt-4">
            <div className="flex space-x-px h-6">
              {Array.from({ length: 25 }).map((_, i) => (
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
            <div className="text-xs font-mono text-black mt-1 opacity-70">
              #BRP2024-KM-001
            </div>
          </div>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default IDBadge;