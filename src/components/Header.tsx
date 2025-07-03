import React, { useState, useEffect } from 'react';
import { Menu, X, Settings } from 'lucide-react';

interface HeaderProps {
  onAdminClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={scrollToHome}
              className="hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="/beyaz logo.png" 
                alt="Tulpar Media Logo" 
                className="h-12 w-auto object-contain filter brightness-110"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Ana Sayfa', id: 'home', isHome: true },
              { name: 'Hizmetler', id: 'services' },
              { name: 'Hakkımızda', id: 'about' },
              { name: 'Portföy', id: 'portfolio' },
              { name: 'Blog', id: 'blog' },
              { name: 'İletişim', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => item.isHome ? scrollToHome() : scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Admin Button */}
            {onAdminClick && (
              <button
                onClick={onAdminClick}
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-gray-300 hover:text-white"
                title="Admin Panel"
              >
                <Settings className="h-4 w-4" />
                <span>Admin</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect rounded-b-lg">
            <nav className="py-4">
              {[
                { name: 'Ana Sayfa', id: 'home', isHome: true },
                { name: 'Hizmetler', id: 'services' },
                { name: 'Hakkımızda', id: 'about' },
                { name: 'Portföy', id: 'portfolio' },
                { name: 'Blog', id: 'blog' },
                { name: 'İletişim', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => item.isHome ? scrollToHome() : scrollToSection(item.id)}
                  className="block w-full text-left px-6 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              {onAdminClick && (
                <button
                  onClick={() => {
                    onAdminClick();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Admin Panel
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;