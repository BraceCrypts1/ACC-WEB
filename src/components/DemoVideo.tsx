import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@acweb/components/ui/button';
import { Play, Calendar, ArrowRight, FileText, Users, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUserType } from '@acweb/contexts/UserTypeContext';
import { SUPABASE_URL } from '@acweb/integrations/supabase/client';

const DemoVideo: React.FC = () => {
  const { userType } = useUserType();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const preloadVideoRef = useRef<HTMLVideoElement>(null);

  /**
   * Handles smooth scrolling to Request Demo & Pricing section
   * Security: Validates target exists before scrolling
   */
  const handleBookDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetElement = document.getElementById('request-demo-pricing');
    
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
      window.history.pushState(null, '', '#request-demo-pricing');
    }
  }, []);

  const providerContent = {
    title: "See How Providers Use Anesthesia Connect",
    description: "Watch how anesthesia providers manage their credentials, track CEUs, and share documents with employers in seconds.",
    videoTitle: "Provider Demo Video",
    videoDescription: "See how providers organize their credentials",
    videoDuration: "1:28",
    videoUrl: `${SUPABASE_URL}/storage/v1/object/public/website/providers.mov`,
    thumbnailUrl: `${SUPABASE_URL}/storage/v1/object/public/website/provider.png`,
    ctaText: "Start 14-Day Free Trial",
    ctaLink: "/register/provider",
    secondaryText: "Watch Provider Demo",
    icon: <FileText className="h-6 w-6 text-white" />
  };

  const employerContent = {
    title: "See How Employers Streamline Onboarding",
    description: "Watch how anesthesia groups onboard providers seamlessly, maintain real-time compliance visibility, connect directly with their providers, eliminate paperwork bottlenecks, and dramatically reduce the workload on HR and administrative teams.",
    videoTitle: "Employer Demo Video", 
    videoDescription: "See how employers manage their teams",
    videoDuration: "1:28",
    videoUrl: `${SUPABASE_URL}/storage/v1/object/public/website/employers.mov`,
    thumbnailUrl: `${SUPABASE_URL}/storage/v1/object/public/website/employer.png`,
    ctaText: "Book Demo",
    ctaLink: "/register/employer",
    secondaryText: "Watch Employer Demo",
    icon: <Users className="h-6 w-6 text-white" />
  };

  const content = userType === 'provider' ? providerContent : employerContent;

  // Preload employer video on component mount for smooth playback
  useEffect(() => {
    const employerVideoUrl = `${SUPABASE_URL}/storage/v1/object/public/website/employers.mov`;
    
    // Create a hidden video element to preload the employer video
    if (preloadVideoRef.current) {
      preloadVideoRef.current.src = employerVideoUrl;
      preloadVideoRef.current.preload = "auto";
      
      // Start loading the video
      preloadVideoRef.current.load();
      
      // Handle successful preload
      const handleCanPlayThrough = () => {
        console.log('Employer video preloaded successfully');
      };
      
      // Handle preload errors gracefully
      const handleError = (e: Event) => {
        console.warn('Employer video preload failed (non-critical):', e);
        // This is non-critical - video will still load when clicked
      };
      
      preloadVideoRef.current.addEventListener('canplaythrough', handleCanPlayThrough);
      preloadVideoRef.current.addEventListener('error', handleError);
      
      return () => {
        if (preloadVideoRef.current) {
          preloadVideoRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
          preloadVideoRef.current.removeEventListener('error', handleError);
        }
      };
    }
  }, []); // Run once on mount

  // Reset video state when user type changes
  useEffect(() => {
    if (videoRef.current) {
      // Stop current video
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      
      // Force video to reload with new source
      videoRef.current.load();
    }
  }, [userType]);

  // Auto-play video when scrolled to from Hero section
  useEffect(() => {
    const checkHashAndPlay = () => {
      // Check if URL hash indicates we should auto-play
      if (window.location.hash === '#demo-video' || window.location.hash === '#watch-demo') {
        // Small delay to ensure video is loaded and section is visible
        setTimeout(() => {
          if (videoRef.current && !isPlaying) {
            videoRef.current.play().then(() => {
              setIsPlaying(true);
            }).catch((error) => {
              console.log('Auto-play prevented by browser:', error);
            });
          }
        }, 500);
      }
    };

    // Check on mount and hash change
    checkHashAndPlay();
    window.addEventListener('hashchange', checkHashAndPlay);
    
    // Also listen for custom event from Hero component
    const handleAutoPlay = () => {
      if (videoRef.current && !isPlaying) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log('Auto-play prevented by browser:', error);
        });
      }
    };

    window.addEventListener('demo-video-autoplay', handleAutoPlay);

    return () => {
      window.removeEventListener('hashchange', checkHashAndPlay);
      window.removeEventListener('demo-video-autoplay', handleAutoPlay);
    };
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleVideoClick = () => {
    if (content.videoUrl) {
      handlePlayPause();
    }
  };

  return (
    <section id="demo-video" ref={sectionRef} className="section bg-gray-900 py-20">
      <div className="container-ac">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Player */}
          <div id="demo-video-player" className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative aspect-video">
              <video
                key={userType} // Force re-render when user type changes
                ref={videoRef}
                className="w-full h-full object-contain"
                poster={content.thumbnailUrl || undefined}
                onEnded={handleVideoEnd}
                onClick={handleVideoClick}
                controls={isPlaying}
                preload={userType === 'employer' ? 'auto' : 'metadata'}
                playsInline
              >
                <source src={content.videoUrl} type="video/quicktime" />
                <source src={content.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play button overlay when paused */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer hover:bg-black/30 transition-colors"
                  onClick={handleVideoClick}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-ac-primary rounded-full flex items-center justify-center hover:bg-ac-primary/90 transition-colors">
                    <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white ml-1" />
                  </div>
                </div>
              )}
              
              {/* Video overlay elements */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                {content.videoDuration}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            {content.ctaText === "Book Demo" ? (
              <a href="#request-demo-pricing" onClick={handleBookDemoClick}>
                <Button size="lg" className="bg-ac-primary hover:bg-ac-primary/90 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg">
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {content.ctaText}
                </Button>
              </a>
            ) : (
              <Link to={content.ctaLink}>
                <Button size="lg" className="bg-ac-primary hover:bg-ac-primary/90 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg">
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {content.ctaText}
                </Button>
              </Link>
            )}
            <Button 
              variant="outline" 
              size="lg" 
              className="border-ac-primary text-ac-primary hover:bg-ac-primary hover:text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              )}
              {isPlaying ? 'Pause Video' : content.secondaryText}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Hidden preload video element for employer video */}
      <video
        ref={preloadVideoRef}
        preload="auto"
        style={{ display: 'none', position: 'absolute', visibility: 'hidden' }}
        aria-hidden="true"
        muted
      >
        <source src={`${SUPABASE_URL}/storage/v1/object/public/website/employers.mov`} type="video/quicktime" />
        <source src={`${SUPABASE_URL}/storage/v1/object/public/website/employers.mov`} type="video/mp4" />
      </video>
    </section>
  );
};

export default DemoVideo;
