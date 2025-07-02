import React from 'react';
import { ArrowRight, Sparkles, Zap, Palette } from 'lucide-react';
import SpaceObjects from './SpaceObjects';

interface HeroProps {
  mousePosition: { x: number; y: number };
}

const Hero: React.FC<HeroProps> = ({ mousePosition }) => {
  const parallaxX = (mousePosition.x - window.innerWidth / 2) * 0.02;
  const parallaxY = (mousePosition.y - window.innerHeight / 2) * 0.02;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <SpaceObjects />
        
        {/* 3D Floating Elements */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full morphing-shape blur-xl"
          style={{
            transform: `translate(${parallaxX}px, ${parallaxY}px)`,
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-full morphing-shape blur-xl"
          style={{
            transform: `translate(${-parallaxX}px, ${-parallaxY}px)`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="hero-3d">
          {/* Animated Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="animate-bounce-slow">
              <Sparkles className="h-8 w-8 text-purple-400" />
            </div>
            <div className="animate-pulse-slow">
              <Zap className="h-8 w-8 text-blue-400" />
            </div>
            <div className="animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
              <Palette className="h-8 w-8 text-teal-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient neon-glow">Tulpar Media</span>
            <br />
            <span className="text-gray-300">Dijital Danışmanlık</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Web tasarım, grafik tasarım, UI/UX, sosyal medya reklam yönetimi ve daha fazlası ile 
            dijital dünyada <span className="text-purple-400 font-semibold">markanızı zirveye taşıyoruz</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <span>Projeni Başlat</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="group glass-effect px-8 py-4 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Portföyümüzü İncele
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;