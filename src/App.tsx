import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import BlogAdmin from './components/BlogAdmin';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RocketFollower from './components/RocketFollower';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (showAdmin) {
    return (
      <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 pointer-events-none z-0"></div>
        <Header onAdminClick={() => setShowAdmin(false)} />
        <BlogAdmin />
        <RocketFollower mousePosition={mousePosition} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 pointer-events-none z-0"></div>
      
      <Header onAdminClick={() => setShowAdmin(true)} />
      <Hero mousePosition={mousePosition} />
      <Services />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
      
      <RocketFollower mousePosition={mousePosition} />
    </div>
  );
}

export default App;