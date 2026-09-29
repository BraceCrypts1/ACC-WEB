import React from 'react';
import { Button } from '@acweb/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  FileSpreadsheet,
  Bell, 
  Upload,
  Send, 
  Users, 
  CheckCircle,
  ArrowRight,
  FolderX,
  CalendarX,
  ClipboardX,
  EyeOff,
  FileX,
  DollarSign,
  Edit3,
  BookOpen,
  MessageSquare,
  Briefcase,
  Lock,
  ChevronRight,
  GraduationCap,
  Shield,
  ShieldAlert,
  Cloud,
  ChevronDown,
  Wallet,
  ClipboardCheck,
  BarChart2,
  MoreHorizontal,
  HeartHandshake
} from 'lucide-react';
import { useUserType } from '@acweb/contexts/UserTypeContext';

const PainPoints: React.FC = () => {
  const { userType } = useUserType();

  // ── PROVIDER / RESIDENT VIEW ───────────────────────────────────────────────
  if (userType === 'provider' || userType === 'resident') {
    return (
      <div className="bg-white">

        {/* ── RESIDENT/STUDENT SPECIFIC SECTIONS ─────────────────────────── */}
        {userType === 'resident' && (
          <>
            {/* Wallet Section */}
            <section className="py-12 bg-white">
              <div className="container-ac px-4 sm:px-6 max-w-5xl mx-auto">
                <div className="bg-[#f8faff] rounded-3xl p-8 sm:p-12 border border-blue-50/50">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-8 text-center lg:text-left">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wallet className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] leading-tight mb-3">
                        Residents Get Their Own Complimentary Digital Anesthesia Wallet
                      </h3>
                      <p className="text-gray-700 font-medium leading-relaxed max-w-3xl">
                        Residents receive a free digital wallet to securely store, manage, and share important credentials and documents.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 ml-0 lg:ml-28 mb-8">
                    {[
                      "Licenses & Certifications (BLS, ACLS, PALS)",
                      "Immunizations",
                      "TB Test Results",
                      "CEU / CME Tracking",
                      "Clinical Rotation Documents",
                      "School & Program Documents",
                      "And more..."
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-[#0a1628] font-bold text-sm sm:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-center font-bold text-[#0a1628] text-sm sm:text-base mt-8">
                    Always accessible. Always up to date. Always in your control.
                  </p>
                </div>
              </div>
            </section>

            {/* Partner Section */}
            <section className="py-8 bg-white">
              <div className="container-ac px-4 sm:px-6 max-w-5xl mx-auto">
                <div className="bg-[#0c1c36] rounded-3xl p-8 sm:p-12 text-white border border-blue-900/40 shadow-xl">
                  <div className="text-center mb-10">
                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                      More Than a Platform.<br />
                      <span className="text-blue-500">A Partner in Your Journey.</span>
                    </h3>
                    <p className="text-gray-300 max-w-lg mx-auto font-medium">
                      Residents gain access to all the powerful features of Anesthesia Connect—at no cost.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center justify-center text-center p-6 border-b border-r border-blue-900/50">
                      <Shield className="h-8 w-8 text-white mb-3" strokeWidth={1.5} />
                      <p className="font-semibold text-sm">Compliance<br />Tracking</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-6 border-b border-blue-900/50 md:border-r">
                      <Bell className="h-8 w-8 text-white mb-3" strokeWidth={1.5} />
                      <p className="font-semibold text-sm">Expiration<br />Alerts</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-6 border-b border-r border-blue-900/50 md:border-r-0">
                      <MessageSquare className="h-8 w-8 text-white mb-3" strokeWidth={1.5} />
                      <p className="font-semibold text-sm">Secure<br />Messaging</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-6 border-b border-blue-900/50 md:border-b-0 md:border-r">
                      <ClipboardCheck className="h-8 w-8 text-white mb-3" strokeWidth={1.5} />
                      <p className="font-semibold text-sm">Task<br />Management</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-6 border-r border-blue-900/50 md:border-r">
                      <BarChart2 className="h-8 w-8 text-white mb-3" strokeWidth={1.5} />
                      <p className="font-semibold text-sm">Reports &<br />Insights</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-6">
                      <MoreHorizontal className="h-8 w-8 text-white mb-3" strokeWidth={1.5} />
                      <p className="font-semibold text-sm">...and more!</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Free for Students Section */}
            <section className="py-8 bg-white mb-12">
              <div className="container-ac px-4 sm:px-6 max-w-5xl mx-auto">
                <div className="bg-[#f8faff] rounded-3xl p-8 sm:p-12 border border-blue-50/50">
                  <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                        <HeartHandshake className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] leading-tight mb-3">
                          Free for Residents.<br />Free for Programs.
                        </h3>
                        <p className="text-gray-700 font-semibold leading-relaxed max-w-xl">
                          Anesthesia Connect is complimentary for all anesthesia residents and anesthesia programs—no fees, ever.
                        </p>
                      </div>
                    </div>
                    
                    <div className="w-full lg:w-auto flex-shrink-0 flex flex-col items-center gap-3">
                      <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
                        <a href="#request-demo-pricing" className="w-full sm:w-auto">
                          <button
                            style={{ color: '#ffffff', backgroundColor: '#0055ff' }}
                            className="inline-flex items-center justify-center w-full sm:w-48 rounded-xl px-6 py-4 text-sm font-bold shadow-md hover:bg-blue-600 transition-colors"
                          >
                            Request a Demo
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </a>
                        <Link to="/register/provider?student=true" className="w-full sm:w-auto">
                          <button
                            style={{ color: '#0055ff', backgroundColor: '#ffffff' }}
                            className="inline-flex items-center justify-center w-full sm:w-48 rounded-xl px-6 py-4 text-sm font-bold border border-blue-200 shadow-sm hover:bg-gray-50 transition-colors"
                          >
                            Sign Up Free
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </Link>
                      </div>
                      <p className="text-gray-500 font-semibold text-xs mt-1">
                        No credit card required.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ── PROVIDER-ONLY SECTIONS ───────────────────────────────────────── */}
        {userType === 'provider' && (
          <>
            {/* ── NEW SECTION: EVERYTHING YOU NEED ────────────────────────────── */}
            <section className="pt-32 pb-8 md:pt-24 md:pb-12 bg-white text-center">
              <div className="container-ac px-4 sm:px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] mb-1 tracking-tight">
                  Everything you need.
                </h2>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-6 tracking-tight">
                  All in one secure platform.
                </h2>
                <p className="text-gray-500 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                  Anesthesia Connect is your digital wallet for storing and managing every credential, license, certification, and document you need throughout your career — all in one secure place.
                </p>
                
                {/* Dark Blue Banner */}
                <div className="bg-[#0c1c36] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between text-left shadow-lg cursor-pointer hover:bg-[#102444] transition-colors group">
                  <div className="flex items-center gap-5 w-full">
                    <div className="bg-white rounded-md px-3 py-1 font-bold text-blue-600 text-sm tracking-widest shadow-sm">
                      NEW
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base sm:text-lg">
                        Expense Tracking & CPA Export
                      </h4>
                      <p className="text-gray-300 text-sm mt-0.5">
                        Track expenses. Maximize deductions. Export with ease.
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors mt-4 sm:mt-0 flex-shrink-0 hidden sm:block" />
                </div>
              </div>
            </section>

            {/* ── FEATURES 2-Column Grid ──────────────────────────────── */}
            <section className="py-12 sm:py-16 bg-white" id="for-anesthesia-providers">
              <div className="container-ac px-4 sm:px-6">
                <div className="text-center mb-10">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-wider uppercase mb-2">
                    FEATURES
                  </h3>
                  <p className="text-gray-500 font-medium text-sm sm:text-base max-w-xl mx-auto">
                    Everything you need to manage your credentials and work — all in one place.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-3xl mx-auto">
                  {[
                    { icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />, title: "Store All Credentials", desc: "Licenses, certifications, CEUs, immunizations, and more." },
                    { icon: <Send className="h-5 w-5 sm:h-6 sm:w-6 text-white" />, title: "Share Instantly", desc: "Send docs to any employer with a click." },
                    { icon: <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-white" />, title: "Expiration Alerts", desc: "Never miss a renewal with 30/60/90-day alerts." },
                    { icon: <Edit3 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />, title: "E-Sign Contracts", desc: "Review and e-sign contracts securely in-app." },
                    { icon: <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-white" />, title: "Reimbursement Requests", desc: "Submit and track reimbursement requests." },
                    { icon: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-white" />, title: "Job Board", desc: "Browse and apply to anesthesia opportunities." },
                    { icon: <FileSpreadsheet className="h-5 w-5 sm:h-6 sm:w-6 text-white" />, title: "Expense & Mileage Tracking", desc: "Track expenses and export with ease." },
                    { icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />, title: "CEU Tracking", desc: "Track and organize your CEUs all in one place." },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#0c1c36] rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all border border-blue-900/30 text-left flex flex-col justify-between">
                      <div>
                        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                          {item.icon}
                        </div>
                        <h4 className="font-bold text-white text-xs sm:text-lg mb-1 leading-snug">{item.title}</h4>
                        <p className="text-[11px] sm:text-sm text-blue-100/80 leading-tight sm:leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── HOW IT WORKS 3-Step Flow ─────────────────────────────────── */}
            <section className="py-12 sm:py-16 bg-white">
              <div className="container-ac px-4 sm:px-6">
                <h3 className="text-center text-3xl font-extrabold text-blue-600 tracking-widest uppercase mb-12">
                  HOW IT WORKS
                </h3>
                <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-8 max-w-4xl mx-auto">
                  {[
                    { step: "1", title: "Upload", desc: "Add your credentials and documents." },
                    { step: "2", title: "Organize", desc: "We keep everything in one secure place." },
                    { step: "3", title: "Share", desc: "Send to employers instantly." }
                  ].map((item, idx) => (
                    <React.Fragment key={idx}>
                      <div className="flex-1 text-center flex flex-col items-center">
                        <div className="w-28 h-28 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-5xl mb-4 shadow-inner">
                          {item.step}
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-500 max-w-xs">{item.desc}</p>
                      </div>
                      {idx < 2 && (
                        <div className="hidden md:flex items-center justify-center h-14 text-gray-300 text-2xl font-bold self-start mt-0">
                          →
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>

            {/* ── For Anesthesia Programs Green Banner ─────────────────────── */}
            <section className="py-8 bg-white">
              <div className="container-ac px-4 sm:px-6 max-w-5xl mx-auto">
                <div className="bg-[#f0faf5] border border-[#d1ebd9] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-14 h-14 bg-[#e2f5e9] rounded-full flex items-center justify-center flex-shrink-0 text-emerald-600 border border-[#b2e0c2]">
                      <GraduationCap className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-900 text-lg">FREE for Anesthesia Programs/Residents</h4>
                      <p className="text-sm text-emerald-700 mt-0.5">
                        Manage clinical rotations, student compliance, and document tracking — all in one platform.
                      </p>
                    </div>
                  </div>
                  <Link to="/programs" className="w-full md:w-auto">
                    <Button variant="outline" className="w-full bg-white hover:bg-emerald-50 text-emerald-700 hover:text-emerald-700 border border-[#b2e0c2] font-semibold px-6 py-3 shadow-sm flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

          </>
        )}

        {/* ── TRUSTED & SECURE Badges Banner ───────────────────────────── */}
        <section className="py-14 sm:py-18 bg-[#0a1628]">
          <div className="container-ac px-4 sm:px-6 max-w-5xl mx-auto">
            <h3 className="text-center text-3xl sm:text-4xl font-extrabold text-[#2563eb] tracking-widest uppercase mb-10">
              TRUSTED &amp; SECURE
            </h3>
            <div className="bg-[#0d1f3c] border border-blue-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
                {[
                  { icon: <Lock className="h-6 w-6 sm:h-7 sm:w-7 text-blue-400" />, title: "AES-256", desc: "Encryption" },
                  { icon: <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-blue-400" />, title: "TLS 1.3", desc: "Security" },
                  { icon: <Users className="h-6 w-6 sm:h-7 sm:w-7 text-blue-400" />, title: "SOC 2 Type 2", desc: "" },
                  { icon: <Cloud className="h-6 w-6 sm:h-7 sm:w-7 text-blue-400" />, title: "DDoS", desc: "Protection" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3.5 justify-start sm:justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600/15 border border-blue-500/30 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-base sm:text-lg font-bold text-white leading-tight">{item.title}</p>
                      {item.desc && <p className="text-xs sm:text-sm text-blue-200/70 font-medium mt-0.5">{item.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ── EMPLOYER VIEW ──────────────────────────────────────────────────────────
  return (
    <section className="section bg-white py-12 sm:py-16 lg:py-20">
      <div className="container-ac">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl font-bold text-ac-text mb-4 sm:text-3xl">
            Centralize credentialing, streamline onboarding, and improve operational efficiency across your organization.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* No More Section */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100 sm:rounded-2xl sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-ac-text mb-2 sm:mb-3">No More:</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: <FolderX className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />, label: "Scattered provider documents" },
                { icon: <CalendarX className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />, label: "Delayed onboarding timelines" },
                { icon: <ClipboardX className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />, label: "Manual credential tracking" },
                { icon: <EyeOff className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />, label: "Lack of real-time visibility" },
                { icon: <FileX className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />, label: "Redundant administrative work" },
                { icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />, label: "Manually Filling Out Credentialing Packets" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-sm sm:text-base font-medium text-ac-text">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Employers */}
          <div className="bg-gradient-to-br from-slate-800 to-[#0a1628] rounded-xl p-6 relative overflow-hidden sm:rounded-2xl sm:p-8">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">For Anesthesia Employers</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { title: "Streamlined Onboarding", desc: "Request and view provider documents instantly — licenses, diplomas, DEA, board certifications, immunizations, work/education history, references, malpractice insurance, and more. Send standardized onboarding templates with a click." },
                  { title: "Automated Credentialing Packet Completion", desc: "Upload any hospital credentialing packet and Anesthesia Connect automatically scans provider documents and autofills the entire credentialing form." },
                  { title: "Automatic Compliance Tracking", desc: "Automatic expiration alerts and compliance tracking across your entire team — track by facility, specialty, or employment type, and always know who is cleared, who is pending, and who needs updates." },
                  { title: "Secure Document Management", desc: "Receive and store provider documents securely in one protected platform. Replace folders, spreadsheets, and email threads with an organized credential vault built for anesthesia operations with enterprise-grade security." },
                  { title: "Digital Workflows", desc: "Request documents, send onboarding packets, route agreements for e-signature, and send secured links with a provider's documents to credentialing offices with the click of a button — eliminating repetitive back-and-forth and moving providers forward faster." },
                  { title: "Build Credentialed Teams", desc: "Organize active providers by employment type and facility, assign onboarding templates, receive reimbursement requests, and build fully credentialed teams without chasing paperwork or adding more HR load." },
                  { title: "Data Migration", desc: "The platform offers SOC 2 Type 2-compliant data migration, enabling anesthesia groups to securely move existing provider records into Anesthesia Connect, or let clinicians upload and manage their own documents during migration." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-blue-200 text-sm sm:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-600/20 border border-blue-500/30 text-white rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Enterprise Ready</p>
                    <p className="text-sm opacity-90 text-blue-200">Add 5–5000+ providers with ease</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link to="/register/employer">
            <Button size="lg" className="w-full sm:w-auto bg-ac-primary hover:bg-ac-primary/90 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
