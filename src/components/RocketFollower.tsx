import React from 'react';
import { Rocket } from 'lucide-react';

interface RocketFollowerProps {
  mousePosition: { x: number; y: number };
}

const RocketFollower: React.FC<RocketFollowerProps> = ({ mousePosition }) => {
  // Calculate offset position (100px right, 50px down from cursor)
  const offsetX = mousePosition.x + 100;
  const offsetY = mousePosition.y + 50;

  return (
    <div 
      className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
      style={{
        left: `${offsetX}px`,
        top: `${offsetY}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="relative">
        {/* Rocket Trail Effect */}
        <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-orange-500/40 to-red-500/40 rounded-full blur-lg animate-pulse"></div>
        
        {/* Main Rocket */}
        <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl border-2 border-white/20">
          <Rocket className="h-6 w-6 text-white" style={{ transform: 'rotate(-20deg)' }} />
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
};

export default RocketFollower;