import React, { useCallback } from "react";
import { Button } from "@acweb/components/ui/button";
import { ArrowRight, Play, CheckCircle, Lock, Zap, Bell, Cloud, GraduationCap, Users, Calendar, Folder, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserType } from "@acweb/contexts/UserTypeContext";
import { SUPABASE_URL } from "@acweb/integrations/supabase/client";

const Hero = () => {
  const { userType } = useUserType();

  /**
   * Handles smooth scrolling to Request Demo & Pricing section
   */
  const handleBookDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('request-demo-pricing');
    if (targetElement) {
      const headerElement = document.querySelector('header');
      const tabsElement = document.querySelector('[data-user-type-tabs]') as HTMLElement;
      const headerHeight = headerElement ? headerElement.offsetHeight : 160;
      const tabsHeight = tabsElement ? tabsElement.offsetHeight : 88;
      const totalOffset = headerHeight + tabsHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', '#request-demo-pricing');
    }
  }, []);

  /**
   * Handles smooth scrolling to Demo Video section and triggers auto-play
   */
  const handleWatchDemoClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const videoPlayerElement = document.getElementById('demo-video-player');
    const targetElement = videoPlayerElement || document.getElementById('demo-video');
    if (targetElement) {
      const headerElement = document.querySelector('header');
      const tabsElement = document.querySelector('[data-user-type-tabs]') as HTMLElement;
      const headerHeight = headerElement ? headerElement.offsetHeight : 160;
      const tabsHeight = tabsElement ? tabsElement.offsetHeight : 88;
      const extraOffset = 100;
      const totalOffset = headerHeight + tabsHeight - extraOffset;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', '#demo-video');
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('demo-video-autoplay'));
      }, 800);
    }
  }, []);

  // ── PROVIDER HERO ──────────────────────────────────────────────────────────
  if (userType === 'provider') {
    return (
      <div className="relative">
        <div className="relative overflow-hidden bg-[#0a1628]">
          {/* Responsive Background Images */}
          <div className="absolute inset-0 z-0">
            <img
              src="/625C3BEF-077D-45D8-B369-1E739BB9DC50.PNG"
              alt=""
              className="hidden sm:block w-full h-full object-cover opacity-80"
            />
            <img
              src="/4E36DCA2-FA45-401C-B9ED-1A0C7FB08EAB.PNG"
              alt=""
              className="block sm:hidden w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-[#0a1628]/30 pointer-events-none" />
          </div>

        <div className="relative pb-28 pt-8 sm:pb-32 sm:pt-12 lg:pb-24 lg:pt-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">

              {/* Left: copy */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                  Your Career.
                  <br />
                  <span className="text-blue-600">All In One Place.</span>
                </h1>

                <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                  The secure digital wallet built for anesthesia professionals.
                </p>

                {/* 3 bullet points */}
                <div className="space-y-3 mb-8">
                  {[
                    "Store & manage all credentials",
                    "Instantly share with employers",
                    "Stay organized & never miss an expiration",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-100 text-base">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-6">
                  <button
                    style={{ color: '#ffffff', backgroundColor: 'transparent' }}
                    className="inline-flex items-center justify-center h-11 rounded-md border border-white/40 px-7 py-4 text-base font-semibold w-full sm:w-auto hover:bg-white/10 transition-colors duration-200"
                    onClick={handleWatchDemoClick}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Provider Demo
                  </button>
                  <Link to="/register/provider">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 text-base font-semibold w-full sm:w-auto">
                      Start 14 Day Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: phone mockup */}
              <div className="flex items-center justify-center mt-0 lg:mt-0">
                <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[520px]">
                  <img
                    src="/erasebg.png"
                    alt="Anesthesia Connect mobile app wallet"
                    className="w-full h-auto object-contain drop-shadow-2xl mx-auto"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        </div>
        
        {/* Floating Feature Strip under the Hero */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-3.5 sm:py-6 px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 gap-y-2.5 md:gap-y-0">
              {[
                { icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />, label: "Instant Sharing & E-Signatures" },
                { icon: <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />, label: "Expiration Alerts" },
                { icon: <Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />, label: "Secure Cloud Storage" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-start md:justify-center gap-3 px-4 sm:px-2 py-2 md:py-0">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-700 text-left leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── RESIDENT HERO ──────────────────────────────────────────────────────────
  if (userType === 'resident') {
    return (
      <div className="relative overflow-hidden bg-[#0a1628]">
        {/* Responsive Background Images */}
        <div className="absolute inset-0 z-0">
          <img
            src="/625C3BEF-077D-45D8-B369-1E739BB9DC50.PNG"
            alt=""
            className="hidden sm:block w-full h-full object-cover opacity-80"
          />
          <img
            src="/4E36DCA2-FA45-401C-B9ED-1A0C7FB08EAB.PNG"
            alt=""
            className="block sm:hidden w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-[#0a1628]/30 pointer-events-none" />
        </div>

        <div className="relative pb-12 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Top 2-Column Section */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              
              {/* Left Column: Text & CTAs */}
              <div className="text-center lg:text-left w-full">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5 tracking-tight">
                  Anesthesia<br />Connect<br />
                  <span className="text-[#1a56db]">Gives Back.</span>
                </h1>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                  We support the next generation of anesthesia professionals with the tools they need to learn, grow, and succeed.
                </p>

                {/* Complimentary Card */}
                <div className="bg-white rounded-xl p-5 mb-8 shadow-xl w-full max-w-md mx-auto lg:mx-0 flex items-center gap-5 border border-gray-100">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-7 w-7 text-[#1a56db]" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-[#1a56db] font-extrabold text-sm sm:text-base tracking-wide mb-0.5">
                      100% COMPLIMENTARY
                    </h3>
                    <p className="text-gray-800 font-semibold text-sm sm:text-base leading-snug">
                      Free for all anesthesia students, residents and programs.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="w-full max-w-md mx-auto lg:mx-0 flex flex-col sm:flex-row gap-4 mb-4">
                  <a href="#request-demo-pricing" onClick={handleBookDemoClick} className="w-full sm:w-1/2">
                    <button
                      style={{ color: '#ffffff', backgroundColor: '#0055ff' }}
                      className="inline-flex items-center justify-center w-full rounded-xl px-6 py-3.5 text-sm font-bold shadow-md hover:bg-blue-600 transition-colors"
                    >
                      Request a Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </a>
                  <Link to="/register/provider?student=true" className="w-full sm:w-1/2">
                    <button
                      style={{ color: '#ffffff', backgroundColor: '#0f172a' }}
                      className="inline-flex items-center justify-center w-full rounded-xl px-6 py-3.5 text-sm font-bold border border-gray-700 shadow-sm hover:bg-gray-800 transition-colors"
                    >
                      Sign Up Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </Link>
                </div>

                {/* No credit card required */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-medium">No credit card required.</span>
                </div>
              </div>

              {/* Right Column: Devices Mockup */}
              <div className="w-full relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[500px]">
                  <img
                    src="/erasebg-transformed%20(7).png"
                    alt="Anesthesia Connect Portal and App"
                    className="w-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

            </div>

            {/* Bottom Section: Features Image */}
            <div className="w-full flex justify-center mt-8 sm:mt-10">
              <img
                src="/IMG_5491%20(2).jpg"
                alt="Everything You Need. All in One Place."
                className="w-full max-w-5xl rounded-2xl shadow-2xl object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ── EMPLOYER HERO ──────────────────────────────────────────────────────────
  return (
    <div className="relative overflow-hidden bg-[#0a1628]">
      {/* Responsive Background Images */}
      <div className="absolute inset-0 z-0">
        <img
          src="/625C3BEF-077D-45D8-B369-1E739BB9DC50.PNG"
          alt=""
          className="hidden sm:block w-full h-full object-cover opacity-80"
        />
        <img
          src="/4E36DCA2-FA45-401C-B9ED-1A0C7FB08EAB.PNG"
          alt=""
          className="block sm:hidden w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#0a1628]/30 pointer-events-none" />
      </div>

      <div className="relative pb-12 pt-8 sm:pb-20 sm:pt-12 lg:pb-28 lg:pt-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
                <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">For Anesthesia Employers</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                All Provider Documents in One Place.
                <br />
                <span className="text-blue-600">Streamline Onboarding and Credentialing.</span>
                <br />
                Reduce Administrative Workload.
                <br />
                <span className="text-blue-600">Complete credentialing in minutes, not weeks.</span>
              </h1>

              <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                Anesthesia Connect empowers anesthesia employers to connect directly with their providers in one centralized platform where onboarding, credentialing, reimbursement requests, compliance, and more are managed — all within a single secure platform.
              </p>

              {/* Automated credentialing highlight */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8">
                <p className="text-white font-semibold text-base mb-1">Automated Credentialing Packet Completion</p>
                <p className="text-blue-200 text-sm">Upload the Credentialing Packet. Anesthesia Connect Fills It Out.</p>
                <p className="text-blue-300 text-xs mt-2 font-medium">Start Providers Weeks Earlier</p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  style={{ color: '#ffffff', backgroundColor: 'transparent' }}
                  className="inline-flex items-center justify-center h-11 rounded-md border border-white/40 px-7 py-4 text-base font-semibold w-full sm:w-auto hover:bg-white/10 transition-colors duration-200"
                  onClick={handleWatchDemoClick}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
                <a href="#request-demo-pricing" onClick={handleBookDemoClick}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 text-base font-semibold w-full sm:w-auto">
                    Connect With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: laptop screenshot */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <div className="bg-[#1a2744] rounded-xl p-2 shadow-2xl border border-white/10">
                  <div className="bg-gray-200 rounded-t-lg h-5 flex items-center px-2 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <img
                    src={`${SUPABASE_URL}/storage/v1/object/public/website/employer.png`}
                    alt="Anesthesia Connect employer dashboard"
                    className="w-full rounded-b-lg object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
