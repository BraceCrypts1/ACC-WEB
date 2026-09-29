import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import {
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  TrendingUp,
  FileText,
  ShieldCheck,
  Building,
  User,
  UserCheck,
  Upload,
  PenTool,
  ClipboardCheck,
  Check,
  Lock,
  Smartphone,
  Zap,
  Bell,
  Activity,
  Users
} from 'lucide-react';

const Onboarding: React.FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  const handleBookDemoClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = '/#request-demo-pricing';
  }, []);

  const content = (
    <main className={`flex-grow ${embedded ? 'py-8' : 'pt-28 sm:pt-32'}`}>

        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden bg-white text-[#0a1628] py-16 sm:py-20 lg:py-24">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-semibold tracking-wide uppercase">Provider Onboarding</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                Get Providers Working<br />
                <span className="text-blue-600">Weeks Faster</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Reduce onboarding from 4–6 hours to just 30–60 minutes. Your team spends less time chasing paperwork, providers spend less time completing repetitive forms, and facilities can begin credentialing sooner.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-[#f8faff] border border-blue-50/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-3xl font-extrabold text-[#0a1628]">4–6 Hours → 30–60 Minutes</p>
                <p className="text-gray-500 text-sm mt-2 font-semibold">Up to 90% reduction in onboarding time</p>
              </div>

              <div className="bg-[#f8faff] border border-blue-50/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-3xl font-extrabold text-[#0a1628]">Start Providers Weeks Earlier</p>
                <p className="text-gray-500 text-sm mt-2 font-semibold">Accelerate credentialing and reduce delays</p>
              </div>

              <div className="bg-[#f8faff] border border-blue-50/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-3xl font-extrabold text-[#0a1628]">Save $3,500–$15,000</p>
                <p className="text-gray-500 text-sm mt-2 font-semibold">In onboarding costs per 100 providers annually</p>
              </div>

              <div className="bg-[#f8faff] border border-blue-50/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-3xl font-extrabold text-[#0a1628]">Earn $960,000+ More Revenue</p>
                <p className="text-gray-500 text-sm mt-2 font-semibold">Start providers up to weeks earlier (100 providers annually)*</p>
              </div>
            </div>

            {/* Total Impact Bar */}
            <div className="bg-[#f0faf5] border border-emerald-100 rounded-2xl p-6 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0a1628] text-lg">Total Impact for 100 Providers Annually</h4>
                  <div className="text-emerald-700 font-bold text-sm sm:text-base mt-1 space-y-0.5">
                    <p>$3,500–$15,000 in cost savings •</p>
                    <p>$960,000 in additional revenue =</p>
                    <p className="text-lg font-extrabold text-emerald-800">$963,500–$975,000 total annual impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EVERYTHING INCLUDED & WORKFLOWS ── */}
        <section className="py-16 sm:py-20 bg-[#f4f7fc] text-[#0a1628]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              
              {/* Left Column: Everything Included */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
                  Everything Included
                </h2>
                <div className="space-y-3">
                  {[
                    "Digital onboarding packets",
                    "Electronic signatures",
                    "Custom onboarding templates",
                    "Provider self-service uploads",
                    "Automated Credentialing Packet Completion Feature",
                    "License & certification collection",
                    "Automatic reminders for missing docs",
                    "Real-time onboarding progress tracking",
                    "Secure document storage",
                    "Mobile-friendly from any device"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-semibold text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Onboarding Progress Widget */}
              <div>
                <h3 className="text-2xl font-extrabold mb-8 text-[#0a1628]">Onboarding Progress</h3>
                <div className="bg-white border border-gray-200/60 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-8">
                  
                  {/* Radial Progress Chart */}
                  <div className="relative w-36 h-36 flex items-center justify-center flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="72" cy="72" r="60" stroke="#f3f4f6" strokeWidth="12" fill="transparent" />
                      <circle cx="72" cy="72" r="60" stroke="#10b981" strokeWidth="12" fill="transparent" strokeDasharray="376.99" strokeDashoffset="64" />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-3xl font-black text-[#0a1628]">83%</span>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Complete</p>
                    </div>
                  </div>

                  {/* Steps checklist */}
                  <div className="space-y-3 flex-grow text-left">
                    {[
                      { label: "Documents Submitted", done: true },
                      { label: "References Complete", done: true },
                      { label: "DEA Uploaded", done: true },
                      { label: "License/Certification Uploaded", done: true },
                      { label: "Employment Forms", done: true }
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-emerald-600" />
                        </div>
                        <span className="text-sm font-bold text-gray-700">{step.label}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Automated Onboarding Workflow */}
            <div className="max-w-xl mx-auto bg-white border border-gray-200/50 rounded-3xl p-8 shadow-sm mb-16">
              <h3 className="text-2xl font-extrabold text-center mb-8">Automated Onboarding Workflow</h3>
              <div className="relative">
                <div className="space-y-6">
                  {[
                    { step: 1, label: "Provider Invited", desc: "Admin sends invitation link from dashboard", icon: <Building className="h-5 w-5 text-white" /> },
                    { step: 2, label: "Provider Creates Account", desc: "Clinician sets up secure login credentials", icon: <User className="h-5 w-5 text-white" /> },
                    { step: 3, label: "Uploads Documents", desc: "Clinician uploads licenses, certificates & forms", icon: <Upload className="h-5 w-5 text-white" /> },
                    { step: 4, label: "Signs Forms", desc: "Provider signs required onboarding agreements", icon: <PenTool className="h-5 w-5 text-white" /> },
                    { step: 5, label: "Credentialing Begins", desc: "System compiles packet for credentialing", icon: <FileText className="h-5 w-5 text-white" /> },
                    { step: 6, label: "Provider Ready to Work", desc: "Onboarding successfully completed", icon: <UserCheck className="h-5 w-5 text-white" />, success: true },
                  ].map((step, i, arr) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 ${step.success ? 'bg-blue-600' : 'bg-blue-600'} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                          {step.icon}
                        </div>
                        {i < arr.length - 1 && (
                          <div className="w-0.5 h-10 bg-gray-200 mt-1"></div>
                        )}
                      </div>
                      <div className="pt-1 text-left">
                        <p className="font-extrabold text-[#0a1628] text-sm sm:text-base">{step.label}</p>
                        <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Employers Love It */}
            <div className="border-t border-gray-200/60 pt-16">
              <h3 className="text-3xl font-extrabold text-center mb-12">Why Employers Love It</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "3–5 Hours", desc: "Admin time saved per provider", icon: <Clock className="h-6 w-6 text-blue-600" /> },
                  { title: "90% Less Paperwork", desc: "Eliminate manual packets", icon: <FileText className="h-6 w-6 text-blue-600" /> },
                  { title: "100% Digital Signatures", desc: "Legally binding electronic signatures", icon: <PenTool className="h-6 w-6 text-blue-600" /> },
                  { title: "Real-Time Tracking", desc: "Track progress in one place", icon: <Activity className="h-6 w-6 text-blue-600" /> },
                  { title: "Automatic Reminders", desc: "Never chase credentials again", icon: <Bell className="h-6 w-6 text-blue-600" /> },
                  { title: "Secure & Compliant", desc: "SOC 2 Type 2 compliant, active penetration testing", icon: <Lock className="h-6 w-6 text-blue-600" /> },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                    <div className="p-2.5 bg-blue-50 rounded-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <p className="font-black text-[#0a1628] text-lg">{item.title}</p>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1 font-semibold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-20 bg-blue-600 text-white text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to onboard providers in minutes instead of hours?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Give providers a better experience and retrieve their data back in record time while getting providers working weeks faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleBookDemoClick}
                className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 rounded-xl px-8 py-4 text-base font-extrabold shadow-md transition-colors"
              >
                Schedule a Demo →
              </button>
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

export default Onboarding;
