import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserType } from '@acweb/contexts/UserTypeContext';
import { Users, FileText, Briefcase, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

const UserTypeTabs: React.FC = () => {
  const { userType, setUserType } = useUserType();
  const navigate = useNavigate();
  const location = useLocation();
  const [topOffset, setTopOffset] = useState<number>(72); // Default mobile header height
  const tabsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check if we're on the jobs page
  const isJobsPage = location.pathname === '/jobs';

  /**
   * Check scroll bounds to determine arrow visibility
   */
  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollWidth > clientWidth + 2 && scrollLeft < scrollWidth - clientWidth - 2);
    }
  }, []);

  /**
   * Scroll container smoothly in a given direction
   */
  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = direction === 'left' ? -180 : 180;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  /**
   * Calculate header height and position tabs below it
   * Security: Only uses DOM measurements, no external inputs
   */
  useEffect(() => {
    const calculateOffset = () => {
      const headerElement = document.querySelector('header');
      if (headerElement) {
        const headerHeight = headerElement.offsetHeight;
        setTopOffset(headerHeight);
      }
    };

    calculateOffset();
    checkScroll();

    const handleResize = () => {
      calculateOffset();
      checkScroll();
    };

    const containerEl = scrollContainerRef.current;
    if (containerEl) {
      containerEl.addEventListener('scroll', checkScroll);
    }

    window.addEventListener('resize', handleResize);
    const timeoutId = setTimeout(() => {
      calculateOffset();
      checkScroll();
    }, 150);

    return () => {
      if (containerEl) {
        containerEl.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [checkScroll]);

  /**
   * Handles tab click with security validation
   * Only allows valid user types
   * Navigates to home page when clicking Provider/Employer/Resident tabs from /jobs page
   */
  const handleTabClick = (type: 'provider' | 'employer' | 'resident') => {
    if (type === 'provider' || type === 'employer' || type === 'resident') {
      setUserType(type);
      if (isJobsPage) {
        navigate('/');
      }
    }
  };

  return (
    <div 
      ref={tabsRef}
      data-user-type-tabs
      className="bg-white border-b border-gray-200 fixed left-0 right-0 z-[90] w-full shadow-sm"
      style={{ top: `${topOffset}px` }}
    >
      <div className="container-ac px-2 sm:px-4">
        <div className="relative flex items-center justify-center">
          {/* Left Scroll Arrow */}
          {canScrollLeft && (
            <>
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none rounded-l-lg" />
              <button
                type="button"
                onClick={() => scroll('left')}
                className="absolute left-1 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 text-gray-700 hover:text-ac-primary hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ac-primary active:scale-90"
                aria-label="Scroll left to see more options"
                title="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Scrollable Tabs Wrapper */}
          <div 
            ref={scrollContainerRef}
            className="flex justify-start sm:justify-center overflow-x-auto pb-2 -mb-2 hide-scrollbar scroll-smooth w-full px-7 sm:px-0"
          >
            <div className="flex bg-gray-100 rounded-lg p-1 my-4 min-w-max shadow-inner">
              <button
                type="button"
                onClick={() => handleTabClick('provider')}
                className={`flex items-center px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                  !isJobsPage && userType === 'provider'
                    ? 'bg-white text-ac-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Switch to Provider view"
                aria-pressed={!isJobsPage && userType === 'provider'}
              >
                <FileText className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Providers</span>
                <span className="sm:hidden">Providers</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabClick('employer')}
                className={`flex items-center px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                  !isJobsPage && userType === 'employer'
                    ? 'bg-white text-ac-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Switch to Employer view"
                aria-pressed={!isJobsPage && userType === 'employer'}
              >
                <Users className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Employers</span>
                <span className="sm:hidden">Employers</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabClick('resident')}
                className={`flex items-center px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                  !isJobsPage && userType === 'resident'
                    ? 'bg-white text-ac-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Switch to Residents & Programs view"
                aria-pressed={!isJobsPage && userType === 'resident'}
              >
                <GraduationCap className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap">Residents &amp; Programs</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('/jobs')}
                className={`flex items-center px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                  isJobsPage
                    ? 'bg-white text-ac-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="View job listings"
                aria-pressed={isJobsPage}
              >
                <Briefcase className="h-5 w-5 mr-2 text-ac-primary animate-pulse" />
                <span className="font-semibold text-ac-primary">Jobs</span>
              </button>
            </div>
          </div>

          {/* Right Scroll Arrow */}
          {canScrollRight && (
            <>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none rounded-r-lg" />
              <button
                type="button"
                onClick={() => scroll('right')}
                className="absolute right-1 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md border border-ac-primary/30 text-ac-primary hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ac-primary active:scale-90"
                aria-label="Scroll right to see more options like Jobs"
                title="Scroll right to see more (Jobs)"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserTypeTabs;