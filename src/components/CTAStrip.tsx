import React, { useCallback } from 'react';
import { Button } from '@acweb/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { useUserType } from '@acweb/contexts/UserTypeContext';

const CTAStrip: React.FC = () => {
  const { userType, setUserType } = useUserType();
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Handles "Watch Demo" button click
   * Navigates to home page, sets correct user type, scrolls to video, and auto-plays
   */
  const handleWatchDemoClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Set user type to provider to show provider video (do this first)
    setUserType('provider');
    
    // If not on home page, navigate to home and set hash
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      // Set hash after navigation completes
      setTimeout(() => {
        window.location.hash = '#demo-video';
      }, 100);
      return;
    }
    
    // If already on home page, scroll to video section and play
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const videoPlayerElement = document.getElementById('demo-video-player');
      const targetElement = videoPlayerElement || document.getElementById('demo-video');
      
      if (targetElement) {
        // Calculate total offset: header height + tabs height
        const headerElement = document.querySelector('header');
        const tabsElement = document.querySelector('[data-user-type-tabs]') as HTMLElement;
        
        const headerHeight = headerElement ? headerElement.offsetHeight : 160;
        const tabsHeight = tabsElement ? tabsElement.offsetHeight : 88;
        // Add extra offset (100px) to scroll further down so video is more visible
        const extraOffset = 100;
        const totalOffset = headerHeight + tabsHeight - extraOffset;
        
        // Get element position
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

        // Smooth scroll to target with offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL hash
        window.location.hash = '#demo-video';

        // Dispatch custom event to trigger video auto-play after scroll completes
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('demo-video-autoplay'));
        }, 800); // Delay to allow scroll animation to complete
      } else {
        // Fallback: set hash if element not found
        window.location.hash = '#demo-video';
      }
    }, 100);
  }, [location.pathname, navigate, setUserType]);

  const providerContent = {
    title: "Ready to simplify your credentialing and get your time back?",
    description: "Join thousands of anesthesia providers who have already streamlined their credentialing process with Anesthesia Connect.",
    primaryText: "Start Free Trial",
    primaryLink: "/register/provider",
    secondaryText: "Watch Demo",
    secondaryIcon: <Calendar className="mr-2 h-5 w-5" />
  };

  const employerContent = {
    title: "Ready to streamline onboarding and scale your practice?",
    description: "Join leading anesthesia groups who have already eliminated paperwork bottlenecks and accelerated their onboarding process.",
    primaryText: "Book Demo",
    primaryLink: "/register/employer",
    secondaryText: "Watch Demo",
    secondaryIcon: <Calendar className="mr-2 h-5 w-5" />
  };

  const content = userType === 'provider' ? providerContent : employerContent;

  return (
    <section id="contact" className="bg-gradient-to-r from-ac-primary to-ac-secondary py-16">
      <div className="container-ac">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {content.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={content.primaryLink}>
              <Button size="lg" className="bg-white text-ac-primary hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold">
                {content.primaryText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-ac-primary px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold"
              onClick={userType === 'provider' ? handleWatchDemoClick : undefined}
            >
              {content.secondaryIcon}
              {content.secondaryText}
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm">14-day free trial</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm">Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm">No credit card required</span>
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;
