
import React, { useState, useCallback, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@acweb/components/ui/button';
import { UserTypeContext } from '@acweb/contexts/UserTypeContext';

/**
 * Valid list of allowed hash anchors for security
 */
const ALLOWED_HASHES = ['features', 'pricing', 'about', 'contact', 'for-anesthesia-providers', 'provider-faqs', 'employer-faqs', 'faq', 'how-it-works'];

/**
 * Validates hash anchor to prevent XSS attacks
 */
const isValidHash = (hash: string): boolean => {
  if (!hash) return false;
  // Remove leading # if present
  const cleanHash = hash.startsWith('#') ? hash.slice(1) : hash;
  // Only allow alphanumeric characters and hyphens
  return /^[a-zA-Z0-9-]+$/.test(cleanHash) && ALLOWED_HASHES.includes(cleanHash);
};

/**
 * Renders a responsive header component with navigation links and CTA buttons.
 * Navigation: Providers | Employers | Residents & Programs | Jobs
 */
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Safely access UserTypeContext - may not be available on all pages
  const userTypeContext = useContext(UserTypeContext);
  const userType = userTypeContext?.userType;
  const setUserType = userTypeContext?.setUserType;

  /**
   * Scrolls to a target section with proper header offset
   * Security: Validates hash before scrolling
   */
  const scrollToSection = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate total offset: header height + tabs height
      const headerElement = document.querySelector('header');
      const tabsElement = document.querySelector('[data-user-type-tabs]') as HTMLElement;
      
      const headerHeight = headerElement ? headerElement.offsetHeight : 160;
      const tabsHeight = tabsElement ? tabsElement.offsetHeight : 88;
      const totalOffset = headerHeight + tabsHeight;
      
      // Get element position
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      // Smooth scroll to target with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without triggering scroll
      window.history.pushState(null, '', `#${targetId}`);
    }
  }, []);

  /**
   * Handles tab switch + optional navigation
   */
  const handleSwitchTab = useCallback((type: 'provider' | 'employer' | 'resident') => {
    setIsOpen(false);
    if (setUserType) setUserType(type);
    if (location.pathname !== '/') {
      navigate('/');
    }
  }, [setUserType, location.pathname, navigate]);

  /**
   * Handles section navigation from main header
   */
  const handleNavSectionClick = useCallback((targetId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
    } else {
      scrollToSection(targetId);
    }
  }, [location.pathname, navigate, scrollToSection]);

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-[100] w-full shadow-sm" style={{ display: 'block' }}>
      <div className="container-ac">
        <div className="flex items-center justify-between py-4">
          {/* Logo and company name */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/anesthesia-connect-logo.png" 
              alt="Anesthesia Connect Logo" 
              className="w-10 h-10 rounded-full object-contain"
            />
            <span className="text-xl font-bold text-ac-primary">Anesthesia Connect</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              type="button"
              onClick={() => handleNavSectionClick('for-anesthesia-providers')}
              className="nav-link cursor-pointer font-medium transition-colors"
              aria-label="View Features section"
            >
              Features
            </button>
            <button
              type="button"
              onClick={() => handleNavSectionClick('pricing')}
              className="nav-link cursor-pointer font-medium transition-colors"
              aria-label="View Pricing section"
            >
              Pricing
            </button>
            <button
              type="button"
              onClick={() => handleNavSectionClick('about')}
              className="nav-link cursor-pointer font-medium transition-colors"
              aria-label="View About section"
            >
              About
            </button>
            <Link 
              to="/jobs" 
              className="nav-link font-medium"
              aria-label="View job listings"
            >
              Jobs
            </Link>
            <div className="flex items-center space-x-3">
              <a href="https://www.facebook.com/share/1BVFD3s9tJ" className="nav-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.tiktok.com/@anesthesia.connect" className="nav-link" aria-label="TikTok">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/anesthesia-connect/" className="nav-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/anesthesiaconnect" className="nav-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-ac-text-light hover:text-ac-primary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 border-t border-gray-200">
          <div className="container-ac space-y-4">
            <button
              type="button"
              className="block w-full text-left nav-link py-2 cursor-pointer font-medium"
              aria-label="View Features section"
              onClick={() => handleNavSectionClick('for-anesthesia-providers')}
            >
              Features
            </button>
            <button
              type="button"
              className="block w-full text-left nav-link py-2 cursor-pointer font-medium"
              aria-label="View Pricing section"
              onClick={() => handleNavSectionClick('pricing')}
            >
              Pricing
            </button>
            <button
              type="button"
              className="block w-full text-left nav-link py-2 cursor-pointer font-medium"
              aria-label="View About section"
              onClick={() => handleNavSectionClick('about')}
            >
              About
            </button>
            <Link 
              to="/jobs" 
              className="block nav-link py-2 font-medium"
              aria-label="View job listings"
              onClick={() => setIsOpen(false)}
            >
              Jobs
            </Link>
            <div className="flex items-center space-x-6 py-2">
              <a href="https://www.facebook.com/share/1BVFD3s9tJ" className="nav-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.tiktok.com/@anesthesia.connect" className="nav-link" aria-label="TikTok">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/anesthesia-connect/" className="nav-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/anesthesiaconnect" className="nav-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login/employer" className="w-full">
                <Button className="w-full btn-primary">Employer Login/Register</Button>
              </Link>
              <Link to="/login/provider" className="w-full">
                <Button className="w-full btn-secondary">Provider Login/Register</Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA buttons bar — desktop */}
      <div className="bg-gray-50 py-3 border-t border-gray-200 hidden md:block">
        <div className="container-ac flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Link to="/login/employer">
              <Button className="btn-primary">Employer Login/Register</Button>
            </Link>
            <Link to="/login/provider">
              <Button className="btn-secondary">Provider Login/Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
