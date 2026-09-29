import React, { useState } from 'react';
import { Check, CheckCircle2, ChevronDown, ShieldCheck, Zap, Lock } from 'lucide-react';

interface DropdownItem {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

const EmployerFeatures: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>('onboarding');

  const toggleItem = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const dropdownItems: DropdownItem[] = [
    {
      id: 'onboarding',
      title: 'Provider Onboarding',
      subtitle: 'Streamline onboarding workflows and get clinicians working weeks earlier.',
      content: (
        <div className="grid lg:grid-cols-2 gap-8 pt-4 pb-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Get Providers Working Weeks Faster</h4>
              <p className="text-blue-200">Reduce onboarding from 4–5 hours to just 30–45 minutes.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-2xl font-bold text-blue-400">30–45 Mins</p>
                <p className="text-blue-200 text-xs mt-1">Onboarding time per provider (85% reduction)</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-2xl font-bold text-blue-400">Weeks Earlier</p>
                <p className="text-blue-200 text-xs mt-1">Start providers weeks earlier (100 providers annually)*</p>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Everything Included</h5>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-blue-200">
                {[
                  "Digital onboarding packets",
                  "Electronic signatures",
                  "Custom onboarding templates",
                  "Provider self-service upload",
                  "W-9 & I-9 employment forms",
                  "Direct support & emergency contacts",
                  "License & certification collection",
                  "Immunizations & health records",
                  "Automatic alerts for missing docs",
                  "Real-time onboarding progress",
                  "Secure document storage",
                  "Mobile-friendly from any device"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h5 className="font-bold text-white mb-3 text-sm">Why Employers Love It</h5>
              <div className="grid sm:grid-cols-2 gap-3 text-xs text-blue-200">
                <div>
                  <p className="font-semibold text-white">Admin time saved per provider</p>
                  <p className="mt-1">Dramatically cuts back-and-forth phone calls and emails.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">95% Less Paperwork</p>
                  <p className="mt-1">No scanning, physical signatures, or printing required.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">100% Digital Signatures</p>
                  <p className="mt-1">Securely execute credentialing packets and forms.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Secure &amp; Compliant</p>
                  <p className="mt-1">SOC 2 Type 2 compliant. Active penetration testing.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-6">
            <div className="bg-[#12223c] border border-white/10 rounded-2xl p-6 shadow-xl">
              <h5 className="text-white font-bold mb-4 text-center">Onboarding Progress</h5>
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1e3a5f" strokeWidth="3"/>
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#3b82f6" strokeWidth="3"
                      strokeDasharray="83 17" strokeLinecap="round"/>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">83%</span>
                </div>
                <div>
                  <p className="text-white font-semibold">License/certification uploaded</p>
                  <p className="text-blue-300 text-xs mt-0.5">Real-time status tracking</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  "Documents Submitted",
                  "References Completed",
                  "DEA Uploaded",
                  "License/certification uploaded",
                  "Employment Forms"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 px-4 py-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#12223c]/50 rounded-xl p-2 border border-white/10">
              <img
                src="/media__1783908670822.png"
                alt="Onboarding workflow view"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'credentialing',
      title: 'Credentialing',
      subtitle: 'Complete hospital and facility credentialing packets 95% faster.',
      content: (
        <div className="grid lg:grid-cols-2 gap-8 pt-4 pb-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Complete Credentialing Packets in Minutes, Not Hours</h4>
              <p className="text-blue-200">Automate every step — so providers get approved faster and your team saves hours of manual work.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-2xl font-bold text-blue-400">5–10 Mins</p>
                <p className="text-blue-200 text-xs mt-1">Credentialing packet completion (up to 95% faster)</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-2xl font-bold text-blue-400">Weeks Earlier</p>
                <p className="text-blue-200 text-xs mt-1">Start providers weeks earlier (100 providers annually)*</p>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Everything Included</h5>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-blue-200">
                {[
                  "CAQH integration",
                  "Automated packet creation",
                  "Custom facility-specific requirements",
                  "License, DEA & certification tracking",
                  "Board certifications (NBCRNA, ABA, NCCAA)",
                  "Malpractice insurance documentation",
                  "NPDB monitor log",
                  "Immunizations & health records",
                  "Work history & references",
                  "Committee & medical staff tracking",
                  "Reappointment & recredentialing workflows",
                  "Real-time status tracking & alerts",
                  "Secure document storage",
                  "Credentialing rosters & reports"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h5 className="font-bold text-white mb-3 text-sm">Key Benefits</h5>
              <div className="grid sm:grid-cols-2 gap-3 text-xs text-blue-200">
                <div>
                  <p className="font-semibold text-white">Automated Packet Completion</p>
                  <p className="mt-1">Autofills 20–50 pages of facility forms in minutes.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Trusted &amp; Secure Encryption</p>
                  <p className="mt-1">TLS 1.3 and AES-256 standard encryption.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Automatic Expiration Alerts</p>
                  <p className="mt-1">Track state licenses, board certs, DEA expirations.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Real-Time Visibility</p>
                  <p className="mt-1">Always know status across all hospitals and clinics.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-6">
            <div className="bg-[#12223c] border border-white/10 rounded-2xl p-6 shadow-xl">
              <h5 className="text-white font-bold mb-4 text-center">Provider Credentialing Status</h5>
              <div className="space-y-3">
                {[
                  { name: "John Doe, CRNA", status: "Approved", cls: "bg-green-500/20 text-green-300" },
                  { name: "Sarah Smith, CRNA", status: "Pending", cls: "bg-yellow-500/20 text-yellow-300" },
                  { name: "Michael Allen, CRNA", status: "Reviewing", cls: "bg-blue-500/20 text-blue-300" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-lg border border-white/5">
                    <span className="text-sm font-medium text-white">{item.name}</span>
                    <span className={`text-xs px-2 py-1 rounded font-semibold ${item.cls}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#12223c]/50 rounded-xl p-2 border border-white/10">
              <img
                src="/media__1783908680754.png"
                alt="Credentialing packet view"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'schedule',
      title: 'Scheduling & Timekeeping',
      subtitle: 'From hours of manual scheduling to minutes of automated matching.',
      content: (
        <div className="grid lg:grid-cols-2 gap-8 pt-4 pb-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">From Hours of Manual Work to Minutes</h4>
              <p className="text-blue-200">Optimize scheduling across multiple sites, facilities, and shift configurations instantly.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h5 className="font-bold text-white mb-3 text-sm">Process Comparison</h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm border-b border-white/10 pb-3">
                  <span className="text-blue-200">Traditional process:</span>
                  <span className="text-red-400 font-semibold">1–3 hours per packet</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-200">Anesthesia Connect:</span>
                  <span className="text-green-400 font-semibold">5–10 mins per packet</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#12223c]/50 rounded-xl p-2 border border-white/10 flex items-center">
            <img
              src="/media__1783908661720.png"
              alt="Scheduling view"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )
    },
    {
      id: 'compliance',
      title: 'Compliance Management',
      subtitle: 'Monitor all licenses, certifications, and expirations in real time.',
      content: (
        <div className="pt-4 pb-6 space-y-6">
          <p className="text-blue-200 leading-relaxed">
            Never let a provider's license expire. Our platform continuously tracks active credentials, alerts you and the clinician well before renewal deadlines, and keeps your organization fully audit-ready.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <ShieldCheck className="h-7 w-7 text-blue-400 mx-auto mb-3" />
              <p className="text-white font-semibold">Automated Alerts</p>
              <p className="text-blue-300 text-xs mt-1">Advance notice before any credential expires</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <Zap className="h-7 w-7 text-blue-400 mx-auto mb-3" />
              <p className="text-white font-semibold">SOC 2 Type 2</p>
              <p className="text-blue-300 text-xs mt-1">Enterprise-grade security standards</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <Lock className="h-7 w-7 text-blue-400 mx-auto mb-3" />
              <p className="text-white font-semibold">Audit-Ready Vault</p>
              <p className="text-blue-300 text-xs mt-1">All docs organized, logged, and exportable</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'payer',
      title: 'Payer Enrollment Readiness',
      subtitle: 'Simplify insurance panels and credentialing submissions.',
      content: (
        <div className="pt-4 pb-6 space-y-4">
          <p className="text-blue-200 leading-relaxed">
            Speed up panel approval times. Manage all payer enrollment documentation, provider credentials, and clinic requirements inside one secure portal to avoid reimbursement gaps and billing delays.
          </p>
        </div>
      )
    },
    {
      id: 'reports',
      title: 'Reimbursement Reports',
      subtitle: 'Centralize provider reports, analytics, and reimbursement claims.',
      content: (
        <div className="grid lg:grid-cols-2 gap-8 pt-4 pb-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Up to $375,000 Saved Annually</h4>
              <p className="text-blue-200">Centralize all provider reports, dashboard analytics, and reimbursement claims.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h5 className="font-bold text-white mb-3 text-sm">Reports Available</h5>
              <div className="space-y-2 text-sm text-blue-200">
                {[
                  "Reimbursement reports (built with payer enrollment module)",
                  "Onboarding status summaries",
                  "Licensure expiration forecasts",
                  "Team-wide compliance export",
                  "Document audit trail logs"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#12223c]/50 rounded-xl p-2 border border-white/10 flex items-center">
            <img
              src="/media__1783908651742.png"
              alt="Reports dashboard view"
              className="w-4/5 mx-auto h-auto rounded-lg object-contain shadow-lg"
            />
          </div>
        </div>
      )
    },
    {
      id: 'storage',
      title: 'Document Storage',
      subtitle: 'Centralized, encrypted professional document repository.',
      content: (
        <div className="pt-4 pb-6 space-y-4">
          <p className="text-blue-200 leading-relaxed">
            Replace folder trees, spreadsheets, and endless email attachments with a robust document portal. Safe, cloud-hosted document management built for anesthesia organizations of any size.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            {[
              "SOC 2 Type 2 Compliant storage",
              "AES-256 encryption at rest",
              "TLS 1.3 in transit",
              "Active penetration testing",
              "Role-based access controls",
              "Complete audit trail"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-blue-200">
                <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'facilities',
      title: 'Facility Management',
      subtitle: 'Multi-site credential tracking and custom facility requirements.',
      content: (
        <div className="grid lg:grid-cols-2 gap-8 pt-4 pb-6">
          <div className="space-y-4">
            <p className="text-blue-200 leading-relaxed">
              Track custom requirements, clinician assignments, and onboarding workflows for multiple hospitals or ambulatory surgical centers from a single location.
            </p>
            <p className="text-blue-200 leading-relaxed">
              Define unique credential requirements for specific facilities to enforce active compliance checkmarks dynamically.
            </p>
          </div>
          <div className="relative">
            <div className="bg-[#12223c] rounded-xl p-2 shadow-2xl border border-white/10">
              <div className="bg-gray-700 rounded-t-lg h-4 flex items-center px-2 gap-1 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              </div>
              <img
                src="/media__1783908689598.png"
                alt="Facilities dashboard"
                className="w-full h-auto rounded-b-lg object-cover"
              />
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="section bg-[#0a1628] py-20 border-t border-white/10" id="employer-features">
      <div className="container-ac">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything You Need. All in One Centralized Platform.
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Custom-built for anesthesia workforce organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {dropdownItems.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between text-white hover:bg-white/10 transition-colors"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-blue-300 text-sm mt-1 hidden sm:block">{item.subtitle}</p>
                    )}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-blue-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? 'max-h-[2000px] opacity-100 border-t border-white/10'
                      : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="px-6">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmployerFeatures;
