import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  FileText, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Building, 
  Folder, 
  MoreHorizontal, 
  Play, 
  ArrowRight, 
  CheckCircle,
  Users,
  UserCheck,
  DollarSign,
  Coins,
  Receipt,
  ChevronRight,
  ChevronDown,
  Cloud,
  Zap
} from 'lucide-react';
import { SUPABASE_URL } from "@acweb/integrations/supabase/client";

import Onboarding from '@acweb/pages/Onboarding';
import Credentialing from '@acweb/pages/Credentialing';
import Compliance from '@acweb/pages/Compliance';
import Scheduling from '@acweb/pages/Scheduling';
import PayerEnrollment from '@acweb/pages/PayerEnrollment';
import Reimbursement from '@acweb/pages/Reimbursement';
import DocumentStorage from '@acweb/pages/DocumentStorage';
import FacilityManagement from '@acweb/pages/FacilityManagement';
import AutomatedCredentialingPacket from '@acweb/pages/AutomatedCredentialingPacket';

const EmployerPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFeatureLabel, setSelectedFeatureLabel] = useState("Provider Onboarding");
  const navigate = useNavigate();

  const toggleAccordion = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);

    if (isOpening) {
      setTimeout(() => {
        const itemElement = document.getElementById(`employer-accordion-item-${index}`);
        if (itemElement) {
          const headerElement = document.querySelector('header');
          const tabsElement = document.querySelector('[data-user-type-tabs]') as HTMLElement;
          const headerHeight = headerElement ? headerElement.offsetHeight : 80;
          const tabsHeight = tabsElement ? tabsElement.offsetHeight : 60;
          const totalOffset = headerHeight + tabsHeight + 16;

          const elementPosition = itemElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        }
      }, 60);
    }
  };

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

  const accordionItems = [
    {
      title: "Provider Onboarding",
      desc: "Digital applications, document collection, and automated workflows.",
      detailedDesc: "Get clinicians working weeks earlier with streamlined, automated onboarding processes.",
      icon: <UserCheck className="h-7 w-7 text-blue-600" />,
      bullets: [
        "Digital onboarding packets",
        "Electronic signature routing",
        "W-9 & I-9 employment forms",
        "Missing document reminders"
      ],
      Component: Onboarding
    },
    {
      title: "Credentialing",
      desc: "Automated packet creation, CAQH integration, and status tracking.",
      detailedDesc: "Complete hospital and facility credentialing packets 95% faster with automated autofill.",
      icon: <FileText className="h-7 w-7 text-blue-600" />,
      bullets: [
        "CAQH direct profile integration",
        "Autofill 20-50 pages of hospital forms",
        "Board certs (NBCRNA, ABA) validation",
        "Malpractice insurance upload"
      ],
      Component: Credentialing
    },
    {
      title: "Compliance Management",
      desc: "Expirations, monitoring, alerts, and audit-ready reporting.",
      detailedDesc: "Proactively track and manage state licenses, board certs, and DEA expirations.",
      icon: <ShieldCheck className="h-7 w-7 text-blue-600" />,
      bullets: [
        "Smart 30-day expiration alerts",
        "Continuous compliance monitoring",
        "Specialty and facility compliance rosters",
        "Audit-ready dashboard exports"
      ],
      Component: Compliance
    },
    {
      title: "Scheduling & Timekeeping",
      desc: "Optimize provider schedules, track time, and manage staffing.",
      detailedDesc: "Simplify complex anesthesia shifts scheduling and track clock-ins securely.",
      icon: <Calendar className="h-7 w-7 text-blue-600" />,
      bullets: [
        "Multi-facility schedule builder",
        "Provider mobile shift check-in",
        "Real-time clock and timesheets",
        "Automated shift matching rules"
      ],
      Component: Scheduling
    },
    {
      title: "Automated Credentialing Packet Completion",
      desc: "Auto-fill credentialing PDF packets using stored provider data in minutes.",
      detailedDesc: "From hours of manual work to days, automatically — upload any credentialing PDF and let Anesthesia Connect auto-fill every field.",
      icon: <Zap className="h-7 w-7 text-blue-600" />,
      bullets: [
        "Upload any credentialing PDF packet",
        "Auto-fill 20–50 pages of forms instantly",
        "Pull from licenses, certs, DEA, malpractice & more",
        "Download, sign, and send — ready to go"
      ],
      Component: AutomatedCredentialingPacket
    },
    {
      title: "Payer Enrollment Readiness",
      desc: "Track enrollment status, reduce delays, and avoid revenue leakage.",
      detailedDesc: "Get providers enrolled in insurance plans faster to avoid delays in billing and reimbursement.",
      icon: <Building className="h-7 w-7 text-blue-600" />,
      bullets: [
        "Payer application status tracking",
        "Automatic blockage notifications",
        "Revenue leakage analytics",
        "Centralized commercial payer logs"
      ],
      Component: PayerEnrollment
    },
    {
      title: "Reimbursement Requests",
      desc: "Submit requests, track status, and resolve issues faster.",
      detailedDesc: "Empower providers to submit CME, travel, or licensing expenses directly from their mobile wallets.",
      icon: <Receipt className="h-7 w-7 text-blue-600" />,
      bullets: [
        "Mobile receipt upload and capture",
        "Instant approval workflows",
        "Full expense history exports",
        "Automated payout calculations"
      ],
      Component: Reimbursement
    },
    {
      title: "Document Storage",
      desc: "Secure storage, organization, and instant access to all documents.",
      detailedDesc: "Store and manage sensitive clinician documents in a SOC 2 Type 2 secure credential vault.",
      icon: <Folder className="h-7 w-7 text-blue-600" />,
      bullets: [
        "Protected enterprise-grade encryption",
        "Global search and custom document tags",
        "Historical document archive tracking",
        "Encrypted share links for credentialers"
      ],
      Component: DocumentStorage
    },
    {
      title: "Facility Management",
      desc: "Manage facilities, privileges, and credentialing requirements.",
      detailedDesc: "Ensure compliance across all hospital and surgery center locations by setting custom rules.",
      icon: <Building className="h-7 w-7 text-blue-600" />,
      bullets: [
        "Custom facility-specific rulesets",
        "Facility roster generation",
        "Location privilege status tracking",
        "Site administrator portals"
      ],
      Component: FacilityManagement
    },
    {
      title: "... and more",
      desc: "Additional tools to streamline every part of your operations.",
      detailedDesc: "Expand the platform with additional workflows to handle all aspects of anesthesia group operations.",
      icon: <MoreHorizontal className="h-7 w-7 text-blue-600" />,
      bullets: [
        "Secure messaging",
        "Admin permission controls",
        "SOC 2 Type 2 compliance audit logs",
        "Direct EHR/scheduling software integrations"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a1628] text-white py-16 sm:py-20 lg:py-28">
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

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">

              {/* ── Feature Dropdown Pill (above headline) ── */}
              <div className="relative inline-block mb-6">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(prev => !prev)}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl px-4 py-2.5 transition-colors"
                >
                  <div className="w-7 h-7 bg-blue-600/70 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white font-bold text-sm">{selectedFeatureLabel}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-blue-300 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 z-50 bg-[#0d1f3c] border border-white/20 rounded-xl shadow-2xl overflow-hidden min-w-[240px]">
                    {[
                      { icon: <Users className="h-4 w-4 text-blue-300" />, label: "Provider Onboarding" },
                      { icon: <FileText className="h-4 w-4 text-blue-300" />, label: "Credentialing" },
                      { icon: <ShieldCheck className="h-4 w-4 text-blue-300" />, label: "Compliance Management" },
                      { icon: <Calendar className="h-4 w-4 text-blue-300" />, label: "Scheduling & Timekeeping" },
                      { icon: <Zap className="h-4 w-4 text-blue-300" />, label: "Automated Credentialing Packet" },
                      { icon: <DollarSign className="h-4 w-4 text-blue-300" />, label: "Payer Enrollment Readiness" },
                      { icon: <Receipt className="h-4 w-4 text-blue-300" />, label: "Reimbursement Requests" },
                      { icon: <Folder className="h-4 w-4 text-blue-300" />, label: "Document Storage" },
                      { icon: <Building className="h-4 w-4 text-blue-300" />, label: "Facility Management" },
                      { icon: <MoreHorizontal className="h-4 w-4 text-blue-300" />, label: "... and more" },
                    ].map((opt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setDropdownOpen(false);
                          setSelectedFeatureLabel(opt.label);
                          toggleAccordion(idx);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                      >
                        <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          {opt.icon}
                        </div>
                        <span className="text-sm font-semibold">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                The Operating System<br />
                <span className="text-blue-600">for Anesthesia</span><br />
                Workforce Management
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                Manage onboarding, credentialing, payer enrollment, compliance, scheduling, and provider records—all in one connected platform.
              </p>

              {/* Checklist */}
              <div className="space-y-3.5 mb-8 max-w-md mx-auto lg:mx-0">
                {[
                  "Reduce administrative burden",
                  "Eliminate manual processes",
                  "Stay audit-ready",
                  "Improve provider experience"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-gray-200 font-semibold text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleWatchDemoClick}
                  className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl border border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-white px-7 py-4 text-base font-bold shadow-sm transition-colors"
                >
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  Watch Demo
                </button>
                <a href="#request-demo-pricing" onClick={handleBookDemoClick}>
                  <button className="inline-flex items-center justify-center w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-7 py-4 text-base font-bold shadow-md transition-colors">
                    Connect With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </a>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full flex items-center justify-center lg:justify-end lg:pl-8">
              <div className="relative w-full max-w-xl lg:max-w-2xl transform lg:translate-x-8">
                <img
                  src="/employer_hero.png"
                  alt="Anesthesia Connect Employer Dashboard"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. REAL IMPACT SECTION ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#051024] text-white">
        <div className="container-ac px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="border border-blue-900/40 rounded-3xl p-8 sm:p-12 bg-[#071630]">
            <div className="text-center mb-12">
              <p className="text-gray-300 font-bold text-lg sm:text-xl uppercase tracking-wider mb-2">
                Real Impact for Your Organization
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10b981] leading-tight">
                $1.04M–$1.42M+
              </h2>
              <p className="text-gray-400 font-bold text-sm sm:text-base mt-1">
                Estimated Financial Impact (Per 100 Providers)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
              {[
                {
                  icon: <Coins className="h-7 w-7 text-[#10b981]" />,
                  val: "$3,500–$15,000",
                  lbl: "Reduced onboarding costs"
                },
                {
                  icon: <FileText className="h-7 w-7 text-[#10b981]" />,
                  val: "$5,000–$25,000",
                  lbl: "Through automated credentialing"
                },
                {
                  icon: <Calendar className="h-7 w-7 text-[#10b981]" />,
                  val: "$10,000–$100,000+",
                  lbl: "By streamlining scheduling & timekeeping"
                },
                {
                  icon: <UserCheck className="h-7 w-7 text-[#10b981]" />,
                  val: "$960,000",
                  lbl: "Faster provider onboarding by one week"
                },
                {
                  icon: <DollarSign className="h-7 w-7 text-[#10b981]" />,
                  val: "$96,000–$250,000+",
                  lbl: "By reducing payer enrollment delays & revenue leakage"
                },
                {
                  icon: <ShieldCheck className="h-7 w-7 text-[#10b981]" />,
                  val: "$12,250–$65,000",
                  lbl: "Through automated compliance monitoring & reporting"
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-[#10b981]/10 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-extrabold text-white text-lg sm:text-xl mb-1.5">{item.val}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[240px]">{item.lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. TOO MANY SYSTEMS SECTION ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white text-[#0a1628]">
        <div className="container-ac px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Too Many Systems. Too Many Gaps.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-semibold">
              Most anesthesia organizations rely on 5–10 disconnected tools that don't share data and create more work.
            </p>
          </div>

          {/* Connected Platform Diagram */}
          <div className="relative p-8 rounded-3xl bg-[#f8faff] border border-blue-50/50 mb-8 overflow-hidden">
            {/* Top Grid of Disconnected Items */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative z-10 mb-16">
              {[
                { icon: <UserCheck className="h-6 w-6 text-blue-600" />, title: "Onboarding" },
                { icon: <FileText className="h-6 w-6 text-blue-600" />, title: "Credentialing" },
                { icon: <Calendar className="h-6 w-6 text-blue-600" />, title: "Scheduling" },
                { icon: <Clock className="h-6 w-6 text-blue-600" />, title: "Time Keeping" },
                { icon: <ShieldCheck className="h-6 w-6 text-blue-600" />, title: "Compliance" },
                { icon: <Building className="h-6 w-6 text-blue-600" />, title: "Payer Enrollment" },
                { icon: <Receipt className="h-6 w-6 text-blue-600" />, title: "Reimbursement Requests" },
                { icon: <Folder className="h-6 w-6 text-blue-600" />, title: "Document Storage" },
                { icon: <Building className="h-6 w-6 text-blue-600" />, title: "Facility Management" },
                { icon: <MoreHorizontal className="h-6 w-6 text-blue-600" />, title: "... and more" }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-blue-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow h-28">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                  <span className="text-[#0a1628] font-bold text-xs leading-tight">{item.title}</span>
                </div>
              ))}
            </div>

            {/* SVG Connecting Lines (Dotted) */}
            <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity="0.4">
                  {/* Connect top rows to central point */}
                  <path d="M 10 32 C 10 50, 50 60, 50 85" vectorEffect="non-scaling-stroke" />
                  <path d="M 30 32 C 30 50, 50 60, 50 85" vectorEffect="non-scaling-stroke" />
                  <path d="M 50 32 L 50 85" vectorEffect="non-scaling-stroke" />
                  <path d="M 70 32 C 70 50, 50 60, 50 85" vectorEffect="non-scaling-stroke" />
                  <path d="M 90 32 C 90 50, 50 60, 50 85" vectorEffect="non-scaling-stroke" />

                  {/* Connect bottom rows to central point */}
                  <path d="M 10 65 C 10 75, 50 75, 50 85" vectorEffect="non-scaling-stroke" />
                  <path d="M 30 65 C 30 75, 50 75, 50 85" vectorEffect="non-scaling-stroke" />
                  <path d="M 50 65 L 50 85" vectorEffect="non-scaling-stroke" />
                  <path d="M 70 65 C 70 75, 50 75, 50 85" vectorEffect="non-scaling-stroke" />
                  <path d="M 90 65 C 90 75, 50 75, 50 85" vectorEffect="non-scaling-stroke" />
                </g>
              </svg>
            </div>

            {/* Connected Point */}
            <div className="flex flex-col items-center justify-center relative z-10 pt-4 md:pt-0">
              <div className="bg-white border-2 border-blue-100 rounded-3xl p-6 shadow-xl flex flex-col items-center max-w-[280px] text-center">
                <img 
                  src="/anesthesia-connect-logo.png" 
                  alt="Anesthesia Connect Logo" 
                  className="w-16 h-16 object-contain mb-2"
                />
                <h3 className="font-extrabold text-[#0a1628] uppercase tracking-wider text-xs sm:text-sm">
                  ANESTHESIA CONNECT
                </h3>
                <p className="text-blue-600 font-bold text-xs sm:text-sm mt-1">
                  One Connected Platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. EVERYTHING YOU NEED SECTION ────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#f4f7fc] text-[#0a1628]">
        <div className="container-ac px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-4 inline-block">
              NEW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Everything You Need. All in One Platform.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-semibold">
              Start with what you need. Add more capabilities as your organization grows.
            </p>
          </div>

          {/* Accordion / List of Tools */}
          <div className="space-y-4 mb-16">
            {accordionItems.map((item, i) => (
              <div 
                key={i} 
                id={`employer-accordion-item-${i}`}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all text-left scroll-mt-36"
              >
                <button 
                  onClick={() => toggleAccordion(i)}
                  className="w-full p-5 flex items-center justify-between group cursor-pointer focus:outline-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 w-full">
                    <div className="flex items-center gap-4 w-full sm:w-[340px] flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex flex-col items-start text-left">
                        <span className="font-extrabold text-base sm:text-lg text-[#0a1628]">
                          {item.title}
                        </span>
                        {item.title === "Payer Enrollment Readiness" && (
                          <span className="text-[10px] sm:text-xs text-blue-600 uppercase tracking-wider mt-0.5 font-bold">
                            (Coming Soon)
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm sm:text-base font-semibold text-left mt-2 sm:mt-0">
                      {item.desc}
                    </span>
                  </div>
                  <ChevronRight 
                    className={`h-5 w-5 text-blue-500 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4 ${
                      openIndex === i ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                
                {openIndex === i && (
                  <div className="border-t border-gray-100 transition-all overflow-hidden bg-white">
                    {item.Component ? (
                      <item.Component embedded={true} />
                    ) : (
                      <div className="px-5 pb-5 pt-4 bg-[#f8faff]">
                        <div className="text-sm text-gray-600 leading-relaxed font-medium">
                          <p className="mb-3 font-bold text-[#0a1628]">{item.detailedDesc}</p>
                          <ul className="grid sm:grid-cols-2 gap-2 mt-2">
                            {item.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                                <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enterprise Security Section Copy-pasted from Provider view */}
          <div className="mt-12 sm:mt-16 bg-[#0a1628] rounded-2xl p-6 sm:p-10 text-white text-center">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl font-bold text-white mb-3 sm:text-2xl sm:mb-4">Enterprise-Grade Security</h3>
              <p className="text-blue-200 max-w-2xl mx-auto text-sm sm:text-base font-semibold">
                Built with healthcare security in mind, ensuring your sensitive data is always protected.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-blue-300" />
                </div>
                <h4 className="font-semibold text-white mb-2">SOC 2 Type 2 Compliant</h4>
                <p className="text-xs sm:text-sm text-blue-200 font-medium">Third-party audited security controls and continuous monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="h-6 w-6 text-blue-300" />
                </div>
                <h4 className="font-semibold text-white mb-2">Trusted and Secure Encryption</h4>
                <p className="text-xs sm:text-sm text-blue-200 font-medium">AES-256 encryption for all stored documents and TLS 1.3 in transit</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                </div>
                <h4 className="font-semibold text-white mb-2">Active Penetration Testing</h4>
                <p className="text-xs sm:text-sm text-blue-200 font-medium">Ongoing pen testing to proactively identify and resolve vulnerabilities</p>
              </div>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
            <button
              onClick={handleWatchDemoClick}
              className="inline-flex items-center justify-center w-full sm:w-56 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-[#0a1628] px-7 py-4 text-base font-bold shadow-sm transition-colors"
            >
              <Play className="mr-2 h-5 w-5 text-[#0a1628]" />
              Watch Demo
            </button>
            <a href="#request-demo-pricing" onClick={handleBookDemoClick} className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center w-full sm:w-56 bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-7 py-4 text-base font-bold shadow-md transition-colors">
                Connect With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployerPage;
