import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ScripturesPage from './ScripturesPage';
import DynastiesPage from './DynastiesPage';
import ArchitecturePage from './ArchitecturePage';
import PhilosophyPage from './PhilosophyPage';
import SciencePage from './SciencePage';
import CulturePage from './CulturePage';
import Navigation from './Navigation';
import ScrollToTop from './ScrollToTop';
import ScrollToTopOnRouteChange from './ScrollToTopOnRouteChange';
import Footer from './Footer';

const Router = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
      // Escape to close search
      if (event.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTopOnRouteChange />
      <Navigation 
        isOpen={isMenuOpen} 
        toggleMenu={toggleMenu}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/scriptures" element={<ScripturesPage />} />
        <Route path="/dynasties" element={<DynastiesPage />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/culture" element={<CulturePage />} />
        {/* Add more routes as needed */}
      </Routes>
      
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Router;