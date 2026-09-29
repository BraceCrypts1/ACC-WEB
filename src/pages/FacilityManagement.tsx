import React, { useCallback } from 'react';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import {
  ArrowRight,
  Building,
  User,
  Users,
  Shield,
  FileText,
  Clock,
  Briefcase,
  ChevronRight,
  Calendar,
  Lock,
  Play
} from 'lucide-react';

const FacilityManagement: React.FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  const handleDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('request-demo-pricing');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#request-demo-pricing';
    }
  }, []);

  const handleWatchOverviewClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const videoPlayerElement = document.getElementById('demo-video-player');
    const targetElement = videoPlayerElement || document.getElementById('demo-video');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#demo-video';
    }
  }, []);

  const content = (
    <main className={`flex-grow ${embedded ? 'py-8' : 'pt-28 sm:pt-32'}`}>

        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden bg-white text-[#0a1628] py-16 sm:py-20 lg:py-24">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

            {/* Badge */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
                <Building className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-semibold tracking-wide uppercase">Facility Management</span>
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                One group. Multiple facilities.<br />
                <span className="text-blue-600">Complete visibility.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Manage unlimited facilities and see exactly which providers are assigned to each location. Keep facility-specific requirements, documents, and provider readiness organized in one place.
              </p>
            </div>

            {/* Laptop Mockup */}
            <div className="max-w-4xl mx-auto mb-16 rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
              <img
                src="/ChatGPT%20Image%20Jul%2011,%202026%20at%2012_04_37%20PM.png"
                alt="Facilities Dashboard Mockup"
                className="w-full h-auto object-cover"
              />
            </div>

          </div>
        </section>

        {/* ── FEATURES & BENEFITS SECTION ── */}
        <section className="py-16 sm:py-20 bg-[#f4f7fc] text-[#0a1628]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left Column: Feature List */}
              <div className="space-y-4">
                {[
                  {
                    icon: <Building className="h-6 w-6 text-blue-600" />,
                    title: "Unlimited Facilities",
                    desc: "Manage hospitals, ASCs, clinics, and office-based locations."
                  },
                  {
                    icon: <Users className="h-6 w-6 text-blue-600" />,
                    title: "Provider Assignments",
                    desc: "See which providers are assigned to and working at each facility."
                  },
                  {
                    icon: <FileText className="h-6 w-6 text-blue-600" />,
                    title: "Facility Requirements",
                    desc: "Store and track facility-specific documents & requirements."
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-blue-600" />,
                    title: "Provider Readiness",
                    desc: "Quickly see which providers are ready for each location."
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-blue-600" />,
                    title: "Credentialing Status",
                    desc: "Track credentialing & privileging status by facility."
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-blue-600" />,
                    title: "Expiration Visibility",
                    desc: "See upcoming expirations that impact your facilities."
                  },
                  {
                    icon: <Briefcase className="h-6 w-6 text-blue-600" />,
                    title: "Centralized Facility Records",
                    desc: "Keep contacts, notes, documents & info organized by location."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 text-left">
                      <div className="p-2.5 bg-blue-50/70 rounded-xl flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-extrabold text-[#0a1628] text-sm sm:text-base">{item.title}</p>
                        <p className="text-gray-500 text-xs sm:text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Key Summary & Action Buttons */}
              <div className="space-y-8 lg:sticky lg:top-36">
                
                {/* Organzation Banner Card */}
                <div className="bg-white border border-gray-200/60 rounded-3xl p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-55/10 rounded-2xl flex-shrink-0">
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-extrabold text-[#0a1628] mb-2">Stronger organization. Fewer delays.</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Keep every facility and provider aligned and ready, avoiding credentialing gaps or unstaffed shifts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4">
                  <button
                    onClick={handleWatchOverviewClick}
                    className="w-full inline-flex items-center justify-center bg-white hover:bg-gray-50 text-[#0a1628] border border-gray-200 rounded-xl px-8 py-4 text-base font-bold shadow-sm transition-colors gap-2"
                  >
                    <Play className="h-5 w-5 text-blue-600" />
                    Watch Demo
                  </button>

                  <button
                    onClick={handleDemoClick}
                    className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-550 text-white rounded-xl px-8 py-4 text-base font-bold shadow-md transition-colors gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Connect With Us
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-450 font-semibold">
                  <Lock className="h-3.5 w-3.5" />
                  <span>SOC 2 Type 2 Compliant</span>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>
  );

  if (embedded) {
    return content;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {content}
      <Footer />
    </div>
  );
};

export default FacilityManagement;
