import { useState, useEffect } from 'react';
import './Navigation.css';

interface NavigationProps {
  artistName: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Navigation({ artistName, theme, onToggleTheme }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-links">
          <button onClick={() => scrollToSection('hero')}>Home</button>
          <button onClick={() => scrollToSection('gallery')}>Character Design</button>
          <button onClick={() => scrollToSection('books')}>Books</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
        
        <div className="nav-right">
          <button 
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3V1M10 19V17M17 10H19M1 10H3M15.657 4.343L17.071 2.929M2.929 17.071L4.343 15.657M15.657 15.657L17.071 17.071M2.929 2.929L4.343 4.343M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.293 13.293C16.5518 13.7595 15.7001 14.0031 14.8333 14C11.6117 14 9 11.3883 9 8.16667C9 6.49028 9.62541 4.96869 10.6574 3.83398C6.49373 4.16131 3.16667 7.67372 3.16667 12C3.16667 16.6024 6.89763 20.3333 11.5 20.3333C15.1819 20.3333 18.2645 17.8677 19.341 14.4596C18.7133 14.0868 18.0312 13.7994 17.293 13.293Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <div className="artist-name-container">
            <h1 className="artist-name">{artistName}</h1>
          </div>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection('hero')}>Home</button>
          <button onClick={() => scrollToSection('gallery')}>Character Design</button>
          <button onClick={() => scrollToSection('books')}>Books</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      )}
    </nav>
  );
}
