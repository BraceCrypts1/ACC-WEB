import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Upload,
  Download,
  Zap,
  FileText,
  Shield,
  Users,
  Star,
  ChevronRight,
  BarChart2,
} from 'lucide-react';

const AutomatedCredentialingPacket: React.FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  const handleScheduleDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/#request-demo-pricing';
  }, []);

  const content = (
    <main className={`flex-grow ${embedded ? 'py-8' : 'pt-28 sm:pt-32'}`}>

        {/* ── HERO SECTION ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-white text-[#0a1628] py-16 sm:py-20 lg:py-24">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                <Zap className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-semibold tracking-wide uppercase">Automated Credentialing Packet Completion</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                From Hours of Manual Work<br />
                to <span className="text-blue-600">Minutes, Automatically.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Anesthesia Connect auto-fills credentialing PDF packets using stored provider information – licenses, certifications, education, work history, malpractice and more.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="/#request-demo-pricing"
                  onClick={handleScheduleDemoClick}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-lg shadow-blue-200"
                >
                  Schedule a Demo
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/credentialing"
                  className="inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-[#0a1628] font-semibold px-8 py-4 rounded-xl border border-gray-200 transition-colors text-base"
                >
                  View Credentialing Features
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* ── TIME SAVINGS STATS ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {/* Before */}
              <div className="bg-[#fff4f4] border border-red-100 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-red-100 text-red-500 text-xs font-bold px-3 py-1 rounded-full">TRADITIONAL PROCESS</div>
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-7 w-7 text-red-500" />
                </div>
                <p className="text-5xl font-extrabold text-[#0a1628] mb-1">1–3</p>
                <p className="text-2xl font-bold text-red-500 mb-2">Hours Per Packet</p>
                <p className="text-gray-500 text-sm">Manual data entry, hunting documents, re-typing information across 20–50 pages</p>
              </div>

              {/* After */}
              <div className="bg-[#f0faf5] border border-emerald-100 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full">ANESTHESIA CONNECT</div>
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-7 w-7 text-emerald-600" />
                </div>
                <p className="text-5xl font-extrabold text-[#0a1628] mb-1">5–10</p>
                <p className="text-2xl font-bold text-emerald-600 mb-2">Mins Per Packet</p>
                <p className="text-gray-500 text-sm">Auto-filled, reviewed, signed, and sent in a fraction of the time</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
        <section className="bg-[#f8faff] py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] mb-4">How It Works</h2>
              <p className="text-gray-600 text-lg max-w-xl mx-auto">Three simple steps to go from a blank credentialing PDF to a completed, signed packet — ready to submit.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center shadow">1</div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 mt-2">
                  <Upload className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1628] mb-3">Upload Packet</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Upload any credentialing PDF packet — hospital privilege forms, surgery center applications, or custom facility documents.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center shadow">2</div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 mt-2">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1628] mb-3">Auto Fill</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We securely auto-fill all matching fields from stored provider information — licenses, board certs, DEA, malpractice, education, references, and work history.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center shadow">3</div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 mt-2">
                  <Download className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1628] mb-3">Download &amp; Send</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Download the completed packet, sign electronically, and send directly to the facility — ready to go in minutes, not days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY BENEFITS ────────────────────────────────────────────── */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Benefits list */}
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700 text-sm font-semibold tracking-wide uppercase">Key Benefits</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] mb-8 leading-tight">
                  Why Anesthesia Groups<br />
                  <span className="text-blue-600">Choose Automation</span>
                </h2>

                <div className="space-y-5">
                  {[
                    {
                      title: "Speeds up credentialing and privileging timelines",
                      desc: "Get providers working sooner — complete packets in hours instead of weeks of back-and-forth."
                    },
                    {
                      title: "Reduces administrative burden on anesthesia groups",
                      desc: "Free your team from repetitive data entry so they can focus on high-value work."
                    },
                    {
                      title: "Ensures accuracy across all packet fields",
                      desc: "Pull verified data directly from provider profiles — no more typos or missing information."
                    },
                    {
                      title: "Provider profiles stay in sync — used everywhere",
                      desc: "One update in the provider profile automatically flows through every packet, form, and workflow."
                    },
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-[#0a1628] font-bold text-base">{benefit.title}</p>
                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Stats card */}
              <div className="bg-gradient-to-br from-[#0a1628] to-[#1a3560] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-600/30 rounded-xl flex items-center justify-center">
                    <BarChart2 className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="text-blue-200 font-semibold">Real Impact Numbers</span>
                </div>

                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-6">
                    <p className="text-4xl font-extrabold mb-1">90%</p>
                    <p className="text-blue-200 text-sm">Reduction in time spent completing credentialing packets</p>
                  </div>
                  <div className="border-b border-white/10 pb-6">
                    <p className="text-4xl font-extrabold mb-1">20–50 Pages</p>
                    <p className="text-blue-200 text-sm">Auto-filled per packet using stored provider data</p>
                  </div>
                  <div className="border-b border-white/10 pb-6">
                    <p className="text-4xl font-extrabold mb-1">1 Week</p>
                    <p className="text-blue-200 text-sm">Earlier start date for providers on average</p>
                  </div>
                  <div>
                    <p className="text-4xl font-extrabold mb-1">$960K+</p>
                    <p className="text-blue-200 text-sm">Additional annual revenue per 100 providers started 1 week earlier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT GETS AUTO-FILLED ──────────────────────────────────── */}
        <section className="bg-[#f8faff] py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] mb-4">What Gets Auto-Filled</h2>
              <p className="text-gray-600 text-lg max-w-xl mx-auto">
                Every data point stored in the provider's profile is intelligently mapped to credentialing packet fields.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { icon: <Shield className="h-5 w-5 text-blue-600" />, label: "State Licenses" },
                { icon: <FileText className="h-5 w-5 text-blue-600" />, label: "CAQH Profile" },
                { icon: <Users className="h-5 w-5 text-blue-600" />, label: "Work History" },
                { icon: <CheckCircle className="h-5 w-5 text-blue-600" />, label: "Board Certifications" },
                { icon: <FileText className="h-5 w-5 text-blue-600" />, label: "Malpractice Insurance" },
                { icon: <Shield className="h-5 w-5 text-blue-600" />, label: "DEA Registration" },
                { icon: <Users className="h-5 w-5 text-blue-600" />, label: "Education History" },
                { icon: <CheckCircle className="h-5 w-5 text-blue-600" />, label: "Professional References" },
                { icon: <FileText className="h-5 w-5 text-blue-600" />, label: "NPI Numbers" },
                { icon: <Shield className="h-5 w-5 text-blue-600" />, label: "Hospital Affiliations" },
                { icon: <CheckCircle className="h-5 w-5 text-blue-600" />, label: "Training Certifications" },
                { icon: <Users className="h-5 w-5 text-blue-600" />, label: "Personal Information" },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-[#0a1628] font-semibold text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BUILT FOR ANESTHESIA ──────────────────────────────────── */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 sm:p-14 text-white shadow-2xl shadow-blue-200">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
                Built for Anesthesia Groups.<br />
                Designed to Save Time.<br />
                Proven to Drive Results.
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Join anesthesia groups across the country using Anesthesia Connect to eliminate manual credentialing work and get providers billing faster.
              </p>
              <a
                href="/#request-demo-pricing"
                onClick={handleScheduleDemoClick}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-lg"
              >
                Schedule a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
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

export default AutomatedCredentialingPacket;
