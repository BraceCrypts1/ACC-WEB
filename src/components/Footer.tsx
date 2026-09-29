
import React, { useCallback, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { UserTypeContext, type UserType } from '@acweb/contexts/UserTypeContext';

/**
 * Renders a footer component with sections for logo, quick links, contact information, social media, and app store links.
 * @example
 * renderFooter()
 * <footer className="bg-ac-secondary text-white">...</footer>
 * @returns {JSX.Element} JSX markup representing the footer component.
 * @description
 *   - Utilizes Tailwind CSS classes for styling and layout management.
 *   - Incorporates React Router Link component for navigation links.
 *   - Displays dynamic current year using JavaScript Date object.
 */
const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Safely access UserTypeContext - may not be available on all pages
  const userTypeContext = useContext(UserTypeContext);
  const userType = userTypeContext?.userType;
  const setUserType = userTypeContext?.setUserType;

  /**
   * Scrolls to the demo request form section
   * Security: Validates target exists before scrolling
   */
  const scrollToDemoSection = useCallback(() => {
    const targetId = 'request-demo-pricing';
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
   * Scrolls to a target section with proper header offset
   * Security: Validates target exists before scrolling
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
   * Handles navigation to Home - scrolls to top of page
   */
  const handleHomeClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Navigate to home page if not already there
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, navigate]);

  /**
   * Handles navigation to Support/Contact Information section
   * Switches to provider tab, navigates to home if needed, then scrolls to contact section
   * Security: Validates target exists before scrolling
   */
  const handleSupportClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Switch to provider tab if context is available and not already on provider tab
    if (setUserType && userType !== 'provider') {
      setUserType('provider');
    }
    
    // Navigate to home page if not already there
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection('contact-information');
      }, 150);
    } else {
      // If already on home page, wait a bit for tab switch to render (if applicable), then scroll
      setTimeout(() => {
        scrollToSection('contact-information');
      }, setUserType && userType !== 'provider' ? 100 : 50);
    }
  }, [userType, setUserType, location.pathname, navigate, scrollToSection]);

  /**
   * Handles navigation to Book Demo section
   * Switches to employer tab, navigates to home if needed, then scrolls to demo form
   * Security: Validates target exists before scrolling
   */
  const handleBookDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Switch to employer tab if context is available and not already on employer tab
    if (setUserType && userType !== 'employer') {
      setUserType('employer');
    }
    
    // Navigate to home page if not already there
    if (location.pathname !== '/') {
      navigate('/#request-demo-pricing');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToDemoSection();
      }, 150);
    } else {
      // If already on home page, wait a bit for tab switch to render (if applicable), then scroll
      setTimeout(() => {
        scrollToDemoSection();
      }, setUserType && userType !== 'employer' ? 100 : 50);
    }
  }, [userType, setUserType, location.pathname, navigate, scrollToDemoSection]);

  return (
    <footer className="bg-ac-secondary text-white">
      <div className="container-ac py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/anesthesia-connect-logo.png" 
                alt="Anesthesia Connect Logo" 
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold">Anesthesia Connect</span>
            </Link>
            <p className="text-blue-100 text-sm">
              Streamline your credentialing process with our secure digital platform designed specifically for anesthesia professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" onClick={handleHomeClick} className="text-blue-100 hover:text-white transition duration-200">Home</a></li>
              <li><Link to="/login/provider" className="text-blue-100 hover:text-white transition duration-200">Provider Login</Link></li>
              <li><Link to="/login/employer" className="text-blue-100 hover:text-white transition duration-200">Employer Login</Link></li>
              <li><a href="#request-demo-pricing" onClick={handleBookDemoClick} className="text-blue-100 hover:text-white transition duration-200">Book Demo</a></li>
              <li><a href="#contact-information" onClick={handleSupportClick} className="text-blue-100 hover:text-white transition duration-200">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-blue-100">Email: support@anesthesiaconnect.net</li>
              <li className="text-blue-100">Hours: Mon-Fri, 9am-5pm ET</li>
              <li className="text-blue-100">Mount Clemens, Michigan.</li>
            </ul>
          </div>

          {/* Social & App Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/share/1BVFD3s9tJ" className="text-blue-100 hover:text-white transition duration-200">
                <Facebook size={20} />
              </a>
              <a href="https://www.tiktok.com/@anesthesia.connect" className="text-blue-100 hover:text-white transition duration-200" aria-label="TikTok">
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
              <a href="https://www.linkedin.com/company/anesthesia-connect/" className="text-blue-100 hover:text-white transition duration-200">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/anesthesiaconnect" className="text-blue-100 hover:text-white transition duration-200">
                <Instagram size={20} />
              </a>
            </div>
            <h4 className="font-semibold text-lg mb-2">Provider App</h4>
            <div className="flex space-x-2">
              <a 
                href="https://apps.apple.com/us/app/anesthesia-connect-app/id6761342512" 
                className="inline-flex items-center bg-black text-white rounded-md px-3 py-1"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" 
                  alt="App Store" 
                  className="w-5 h-5 mr-1" 
                />
                <span className="text-xs">App Store</span>
              </a>
              <a 
                href="https://play.google.com" 
                className="inline-flex items-center bg-black text-white rounded-md px-3 py-1"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" 
                  alt="Google Play" 
                  className="w-4 h-4 mr-1" 
                />
                <span className="text-xs">Google Play</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-sm text-blue-100">
          {/* Policy Links - Prominent display */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-4">
            <Link to="/privacy" className="text-blue-100 hover:text-white transition duration-200 whitespace-nowrap">Privacy Policy</Link>
            <span className="text-blue-700">|</span>
            <Link to="/cookies" className="text-blue-100 hover:text-white transition duration-200 whitespace-nowrap">Cookie Policy</Link>
            <span className="text-blue-700">|</span>
            <Link to="/terms" className="text-blue-100 hover:text-white transition duration-200 whitespace-nowrap">Terms of Service</Link>
            <span className="text-blue-700">|</span>
            <Link to="/eula" className="text-blue-100 hover:text-white transition duration-200 whitespace-nowrap">End User License Agreement</Link>
          </div>
          
          {/* Copyright and Security Message */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-xs md:text-sm">
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Anesthesia Connect. All rights reserved.</p>
            <p className="text-center md:text-right">
              Your data is securely stored and encrypted. We never share your information without your consent.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
