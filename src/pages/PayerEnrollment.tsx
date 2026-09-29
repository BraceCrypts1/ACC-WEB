import React, { useCallback } from 'react';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import { 
  Building,
  Calendar,
  FileText,
  ShieldCheck,
  ListTodo,
  ArrowRight,
  Lock,
  User,
  Layers,
  RefreshCw,
  Info,
  ChevronRight,
  Smartphone,
  AlertCircle,
  BarChart3,
  CheckCircle
} from 'lucide-react';

const PayerEnrollment: React.FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  const handleDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = '/#request-demo-pricing';
  }, []);

  const content = (
    <main className={`flex-grow ${embedded ? 'py-8' : 'pt-28 sm:pt-32'}`}>

        {/* ── SECTION 1: HERO & FLOW DIAGRAM ── */}
        <section className="relative overflow-hidden bg-white text-[#0a1628] py-16 sm:py-20 lg:py-24">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            
            {/* Header Tag */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-semibold tracking-wide uppercase">Payer Enrollment Readiness</span>
              </div>
            </div>

            {/* Hero Grid layout for Desktop */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                  Provider-owned documents.<br />
                  <span className="text-blue-600">Employer-ready for every payer.</span>
                </h1>
                
                <p className="text-gray-655 text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                  Providers upload and maintain their information once in their Digital Provider Wallet. Your team uses that information to organize payer enrollment files, track status, and keep every provider enrollment-ready.
                </p>

                {/* CTA Button & Subnote */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                  <button 
                    onClick={handleDemoClick}
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-8 py-4 text-base font-bold shadow-md transition-colors gap-2 w-full sm:w-auto"
                  >
                    <Calendar className="h-5 w-5" />
                    Schedule a Demo
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs text-gray-400 font-semibold mt-3">
                  <Lock className="h-3.5 w-3.5" />
                  <span>SOC 2 Type 2 Compliant</span>
                </div>
              </div>

              {/* Right Column: Flow Diagram Box */}
              <div className="w-full bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  {/* Left Side: Provider */}
                  <div className="flex-1 flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-blue-50 shadow-sm w-full max-w-[220px]">
                    <User className="h-10 w-10 text-blue-600 mb-2" />
                    <p className="font-extrabold text-xs text-blue-800 tracking-wider uppercase mb-1">PROVIDER</p>
                    <p className="text-xs text-gray-500 font-semibold">Uploads & Keeps Current</p>
                  </div>

                  {/* Middle Connection (Animated Flow) */}
                  <div className="relative flex-shrink-0 flex items-center justify-center my-2 sm:my-0">
                    <span className="absolute inset-0 rounded-full bg-blue-400/25 animate-ping"></span>
                    <div className="relative z-10 flex items-center justify-center bg-blue-50 w-14 h-14 rounded-full border border-blue-200 shadow-md">
                      <FileText className="h-6 w-6 text-blue-600 animate-pulse" />
                    </div>
                  </div>

                  {/* Right Side: Employer */}
                  <div className="flex-grow flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-emerald-50 shadow-sm w-full max-w-[220px]">
                    <Building className="h-10 w-10 text-emerald-600 mb-2" />
                    <p className="font-extrabold text-xs text-emerald-800 tracking-wider uppercase mb-1">EMPLOYER</p>
                    <p className="text-xs text-gray-500 font-semibold">Manages & Tracks Enrollment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Organization & Benefits Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start border-t border-gray-100 pt-16">
              
              {/* Left Column: What You Can Organize List */}
              <div>
                <h3 className="text-2xl font-extrabold mb-8 text-[#0a1628] text-center lg:text-left">
                  What You Can Organize
                </h3>
                <div className="space-y-3.5">
                  {[
                    {
                      icon: <Building className="h-6 w-6 text-blue-600" />,
                      title: "All Payer Files",
                      desc: "Medicare, Medicaid, and commercial payers."
                    },
                    {
                      icon: <Calendar className="h-6 w-6 text-blue-600" />,
                      title: "Enrollment Details",
                      desc: "Submitted dates, effective dates, PTAN, assigned staff, and notes."
                    },
                    {
                      icon: <FileText className="h-6 w-6 text-blue-600" />,
                      title: "Approval Letters & Documents",
                      desc: "Store approval letters and all enrollment documents in one place."
                    },
                    {
                      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
                      title: "Missing Info & Readiness",
                      desc: "See what's missing and which providers are enrollment-ready."
                    },
                    {
                      icon: <ListTodo className="h-6 w-6 text-blue-600" />,
                      title: "Internal Tasks & Follow-ups",
                      desc: "Assign tasks, add notes, and keep your team aligned."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3.5 text-left">
                        <div className="mt-0.5 p-2 bg-blue-50 rounded-lg flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-extrabold text-[#0a1628] text-sm sm:text-base">{item.title}</p>
                          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Why It Saves Time & Money */}
              <div>
                <h3 className="text-2xl font-extrabold mb-8 text-[#0a1628] text-center lg:text-left">
                  Why It Saves Time & Money
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    "Providers upload & maintain documents instead of admins chasing them",
                    "Less duplicate data entry and manual tracking",
                    "Fewer missing-document delays",
                    "Better visibility into enrollment readiness",
                    "Less email, spreadsheets, and follow-up"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-left">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-705 font-semibold text-sm sm:text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* The Anesthesia Connect Difference Callout */}
                <div className="bg-[#f5f8ff] border border-blue-100/50 rounded-2xl p-5 flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="text-blue-700 text-xs font-bold tracking-wider uppercase mb-1">THE ANESTHESIA CONNECT DIFFERENCE</p>
                    <p className="font-extrabold text-[#0a1628] text-sm sm:text-base mb-0.5">Providers upload everything.</p>
                    <p className="text-gray-650 text-xs sm:text-sm">No more chasing. No more re-entry. One source of truth for every enrollment.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── SECTION 2: WHY IT SAVES TIME & MONEY & POTENTIAL ANNUAL IMPACT (SECOND IMAGE) ── */}
        <section className="py-16 sm:py-20 bg-[#f4f7fc] text-[#0a1628]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            
            {/* Impact & Reports Grid for Desktop */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Potential Annual Impact */}
              <div>
                <h3 className="text-2xl font-extrabold mb-8 text-[#0a1628] text-center lg:text-left">
                  Potential Annual Impact <span className="text-gray-500 font-medium text-sm sm:text-base">(per 100 providers)</span>
                </h3>
                
                <div className="space-y-4 mb-6">
                  {/* Card 1 */}
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start justify-between gap-4 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <User className="h-6 w-6 text-emerald-650" />
                      </div>
                      <div className="text-left">
                        <p className="text-2xl font-extrabold text-emerald-700">$3,500 – $15,000</p>
                        <p className="text-gray-600 text-xs sm:text-sm font-semibold mt-1">
                          Administrative labor savings from onboarding, credentialing & payer enrollment workflows
                        </p>
                      </div>
                    </div>
                    <Info className="h-5 w-5 text-gray-300 flex-shrink-0 cursor-pointer hover:text-gray-400 mt-1" />
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start justify-between gap-4 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Layers className="h-6 w-6 text-purple-655" />
                      </div>
                      <div className="text-left">
                        <p className="text-2xl font-extrabold text-purple-755">$10,000 – $100,000+</p>
                        <p className="text-gray-600 text-xs sm:text-sm font-semibold mt-1">
                          Software consolidation & licensing savings by replacing multiple systems with one platform
                        </p>
                      </div>
                    </div>
                    <Info className="h-5 w-5 text-gray-300 flex-shrink-0 cursor-pointer hover:text-gray-400 mt-1" />
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start justify-between gap-4 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <RefreshCw className="h-6 w-6 text-orange-655" />
                      </div>
                      <div className="text-left">
                        <p className="text-2xl font-extrabold text-orange-700">$50,000 – $250,000+</p>
                        <p className="text-gray-600 text-xs sm:text-sm font-semibold mt-1">
                          Reduced enrollment-related revenue leakage from reimbursement delays, disruptions & billing issues
                        </p>
                      </div>
                    </div>
                    <Info className="h-5 w-5 text-gray-300 flex-shrink-0 cursor-pointer hover:text-gray-400 mt-1" />
                  </div>
                </div>

                {/* Highlight Bar */}
                <div className="bg-[#f0faf5] border border-emerald-100 rounded-2xl p-5 flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-emerald-900 font-extrabold text-sm sm:text-base leading-snug">
                    Faster provider readiness. Cleaner files. Fewer delays. Stronger revenue.
                  </span>
                </div>

                {/* Total Savings Bar */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 mt-4 text-center">
                  <p className="text-white/80 text-xs font-bold tracking-wider uppercase mb-1">Total Potential Savings</p>
                  <p className="text-white text-3xl sm:text-4xl font-extrabold">Up to $375,000 Saved Annually</p>
                  <p className="text-blue-200 text-xs sm:text-sm mt-2 font-semibold">Per 100 providers</p>
                </div>
              </div>

              {/* Right Column: Reports & Mobile experience */}
              <div>
                <h3 className="text-2xl font-extrabold mb-8 text-[#0a1628] text-center lg:text-left">
                  Reports You Can Run…and More!
                </h3>
                <div className="space-y-3.5 mb-8">
                  {[
                    { icon: <FileText className="h-5 w-5 text-blue-650" />, title: "Payer enrollment status & readiness" },
                    { icon: <Calendar className="h-5 w-5 text-blue-650" />, title: "Expiring enrollments & revalidation dates" },
                    { icon: <FileText className="h-5 w-5 text-blue-650" />, title: "Approval letters & document inventory" },
                    { icon: <AlertCircle className="h-5 w-5 text-blue-650" />, title: "Providers not enrollment-ready" },
                    { icon: <BarChart3 className="h-5 w-5 text-blue-650" />, title: "Enrollment pipeline & bottlenecks" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 text-left">
                        <div className="p-1.5 bg-blue-50/50 rounded-lg">
                          {item.icon}
                        </div>
                        <span className="text-[#0a1628] font-bold text-sm sm:text-base">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Provider Experience Card Callout */}
                <div className="bg-white border border-gray-150 rounded-2xl p-6 flex items-start gap-4">
                  <Smartphone className="h-8 w-8 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="font-extrabold text-[#0a1628] text-base mb-1.5">Provider Experience</p>
                    <p className="text-gray-655 text-xs sm:text-sm leading-relaxed">
                      Providers receive email and in-app notifications <strong className="text-blue-700 font-extrabold">90 days</strong> before documents expire—so their enrollment files stay current and ready.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Centered CTA */}
            <div className="text-center border-t border-gray-200/50 pt-16 mt-16">
              <button 
                onClick={handleDemoClick}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-8 py-4 text-base font-bold shadow-md transition-colors gap-2 mb-4 w-full sm:w-auto"
              >
                <Calendar className="h-5 w-5" />
                Schedule a Demo
                <ArrowRight className="h-5 w-5" />
              </button>
              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-450 font-semibold">
                <Lock className="h-3.5 w-3.5" />
                <span>SOC 2 Type 2 Compliant</span>
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

export default PayerEnrollment;
