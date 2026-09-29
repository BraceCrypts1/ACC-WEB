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
  Shield,
  ShieldCheck,
  Users,
  Building,
  Zap,
  Bell,
  Lock,
  AlertCircle,
  ChevronRight
} from 'lucide-react';

const Credentialing: React.FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  const handleBookDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/#request-demo-pricing';
  }, []);

  const content = (
    <main className={`flex-grow ${embedded ? 'py-8' : 'pt-28 sm:pt-32'}`}>

        {/* ── HERO SECTION ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-white text-[#0a1628] py-16 sm:py-20 lg:py-24">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                <FileText className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-semibold tracking-wide uppercase">Credentialing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                Complete Credentialing <br className="hidden sm:block" />
                in Minutes, <span className="text-blue-600">Not Weeks.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Automate every step of the credentialing process—so providers get approved faster and your team saves hours of manual work.
              </p>
              
              {/* Center Dashboard Mockup */}
              <div className="max-w-3xl mx-auto mb-12 rounded-2xl border border-gray-100 shadow-xl overflow-hidden bg-white">
                <img 
                  src="/ChatGPT%20Image%20Jul%2011,%202026%20at%2010_13_03%20AM.png" 
                  alt="Credentialing Dashboard" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>

            {/* Credentialing Overview Stats Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#f8faff] border border-blue-50/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-55/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-2xl font-extrabold text-[#0a1628] leading-tight">Automated Credentialing Packet Completion</p>
                <p className="text-green-600 font-bold text-lg mt-2">95% faster</p>
              </div>

              <div className="bg-[#f8faff] border border-blue-50/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-55/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-3xl font-extrabold text-[#0a1628]">Start Providers Weeks Earlier</p>
                <p className="text-gray-500 text-sm mt-3">Credentialing completed sooner, providers working sooner</p>
              </div>

              <div className="bg-[#f8faff] border border-blue-50/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-55/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-3xl font-extrabold text-[#0a1628]">Save $5,000–$25,000</p>
                <p className="text-gray-500 text-sm mt-3">With automated credentialing per 100 providers annually</p>
              </div>

              <div className="bg-[#f8faff] border border-blue-50/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-55/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-3xl font-extrabold text-[#0a1628]">Earn $960,000+ More Revenue</p>
                <p className="text-gray-500 text-sm mt-3">By starting providers weeks earlier (100 providers annually)</p>
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
                    <p>$5,000–$25,000 in cost savings •</p>
                    <p>$960,000 in additional revenue =</p>
                    <p className="text-lg font-extrabold text-emerald-800">$965,000–$985,000 total annual impact</p>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
        </section>

        {/* ── SECOND IMAGE SECTIONS (EVERYTHING INCLUDED & DETAILS) ── */}
        <section className="py-16 sm:py-20 bg-[#f4f7fc] text-[#0a1628]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
                  Everything Included
                </h2>
                <div className="space-y-3">
                  {[
                    "Centralized provider credentialing profiles",
                    "Automated credentialing packet completion",
                    "Custom facility-specific requirements",
                    "License, DEA & certification document tracking",
                    "Board certification documentation",
                    "Malpractice insurance documentation",
                    "Immunization & health record tracking",
                    "Work history, education & references",
                    "Facility affiliation & privileging tracking",
                    "Credentialing status & workflow tracking",
                    "Committee, board & medical staff tracking",
                    "Reappointment & recredentialing workflows",
                    "Expiration tracking & automated alerts",
                    "Secure document storage & sharing",
                    "Credentialing rosters & reports"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-semibold text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credentialing Workflow */}
              <div>
                <h3 className="text-xl font-extrabold mb-6 text-[#0a1628]">Credentialing Workflow</h3>
                <div className="relative">
                  <div className="space-y-4">
                    {[
                      { step: 1, label: "Data Collected", desc: "Digital verification documents gathered", color: "bg-blue-600" },
                      { step: 2, label: "Packet Generated", desc: "Automated packet compiled and created", color: "bg-blue-600" },
                      { step: 3, label: "Committee Review", desc: "Sent to hospital/facility review board", color: "bg-blue-600" },
                      { step: 4, label: "Approved", desc: "Provider successfully credentialed", color: "bg-emerald-600" },
                    ].map((step, i, arr) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0`}>
                            {step.step}
                          </div>
                          {i < arr.length - 1 && (
                            <div className="w-0.5 h-8 bg-gray-200 mt-1"></div>
                          )}
                        </div>
                        <div className="pt-1.5">
                          <p className="font-extrabold text-[#0a1628] text-sm sm:text-base">{step.label}</p>
                          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Provider Credentialing Status Image replacing HTML Table */}
            <div className="mt-12 mb-16">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden max-w-4xl mx-auto p-4 sm:p-6">
                <img 
                  src="/provider_status.png" 
                  alt="Provider Credentialing Status" 
                  className="w-full h-auto object-contain" 
                />
              </div>
            </div>

            {/* Why It Matters / Key Benefits */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Why It Matters */}
              <div>
                <h2 className="text-3xl font-extrabold mb-8">Why It Matters</h2>
                <div className="space-y-4">
                  {[
                    "Eliminate manual data entry",
                    "Reduce errors and rework",
                    "Track every step in real time",
                    "Stay audit-ready",
                    "Improve provider experience",
                    "Accelerate time to approval"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700 font-semibold text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h2 className="text-3xl font-extrabold mb-8">Key Benefits</h2>
                <div className="space-y-6">
                  {[
                    { title: "95% Faster", desc: "Packets in 5-10 min" },
                    { title: "20–50 Pages", desc: "Automated credentialing packet completion" },
                    { title: "Automatic Alerts", desc: "Expirations & missing items" },
                    { title: "Real-Time Visibility", desc: "Across all facilities and providers" },
                    { title: "Secure & Compliant", desc: "SOC 2 Type 2 Compliant" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-extrabold text-[#0a1628] text-sm sm:text-base">{item.title}</p>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ──────────────────────────────────────────────── */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Faster Credentialing.<br />
              Happier Providers.<br />
              Stronger Bottom Line.
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Let us show you how Anesthesia Connect can transform your credentialing process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#request-demo-pricing" onClick={handleBookDemoClick}>
                <button className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 rounded-xl px-8 py-4 text-base font-extrabold shadow-md transition-colors">
                  Schedule a Demo →
                </button>
              </a>
              <Link to="/">
                <button className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 rounded-xl px-8 py-4 text-base font-extrabold transition-colors">
                  Back to Home
                </button>
              </Link>
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

export default Credentialing;
