import React, { useCallback } from 'react';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import {
  ArrowRight,
  Receipt,
  CheckCircle,
  Calendar,
  Lock,
  User,
  Building,
  FileText,
  Upload,
  Eye,
  CreditCard,
  BarChart3
} from 'lucide-react';

const Reimbursement: React.FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  const handleDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = '/#request-demo-pricing';
  }, []);

  const content = (
    <main className={`flex-grow ${embedded ? 'py-8' : 'pt-28 sm:pt-32'}`}>

        {/* ── SECTION 1: HERO ── */}
        <section className="relative overflow-hidden bg-white text-[#0a1628] py-16 sm:py-20 lg:py-24">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

            {/* Badge */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
                <Receipt className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-semibold tracking-wide uppercase">Reimbursement Requests</span>
              </div>
            </div>

            {/* Hero Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                  Simplify reimbursements.<br />
                  <span className="text-blue-600">Save time. Get paid faster.</span>
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                  Providers submit reimbursement requests with receipts and supporting documents. Your team reviews, approves, and tracks everything in one place.
                </p>

                {/* CTA */}
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

              {/* Flow Diagram */}
              <div className="w-full bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  {/* Provider */}
                  <div className="flex-1 flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-blue-50 shadow-sm w-full max-w-[220px]">
                    <User className="h-10 w-10 text-blue-600 mb-2" />
                    <p className="font-extrabold text-xs text-blue-800 tracking-wider uppercase mb-1">PROVIDERS</p>
                    <p className="text-xs text-gray-500 font-semibold">Submit requests with receipts and supporting documents</p>
                  </div>

                  {/* Middle Connection */}
                  <div className="flex-shrink-0 flex items-center justify-center bg-blue-100/50 w-14 h-14 rounded-full border border-blue-200">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>

                  {/* Employer */}
                  <div className="flex-1 flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-emerald-50 shadow-sm w-full max-w-[220px]">
                    <Building className="h-10 w-10 text-emerald-600 mb-2" />
                    <p className="font-extrabold text-xs text-emerald-800 tracking-wider uppercase mb-1">EMPLOYERS</p>
                    <p className="text-xs text-gray-500 font-semibold">Review, approve, and track with confidence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── How It Works + Key Benefits Grid ── */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start border-t border-gray-100 pt-16">

              {/* Left: How It Works */}
              <div>
                <h3 className="text-2xl font-extrabold mb-8 text-[#0a1628] text-center lg:text-left">
                  How It Works
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      icon: <Upload className="h-6 w-6 text-blue-600" />,
                      title: "Provider Submits",
                      desc: "Providers submit reimbursement requests with receipts and supporting documents."
                    },
                    {
                      step: "2",
                      icon: <Eye className="h-6 w-6 text-blue-600" />,
                      title: "Employer Reviews",
                      desc: "Your team reviews the request, documents, and ensures it's in one centralized system."
                    },
                    {
                      step: "3",
                      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
                      title: "Approve & Pay",
                      desc: "Approve the request and issue payment. The provider is notified automatically."
                    },
                    {
                      step: "4",
                      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
                      title: "Track & Report",
                      desc: "Track dates, view history, and run reports to stay organized and audit-ready."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                      <div className="w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-extrabold text-[#0a1628] text-sm sm:text-base">{item.title}</p>
                        <p className="text-gray-500 text-xs sm:text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Key Benefits */}
              <div>
                <h3 className="text-2xl font-extrabold mb-8 text-[#0a1628] text-center lg:text-left">
                  Key Benefits
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    "Faster turnaround for reimbursements",
                    "Centralized document and receipt management",
                    "Real-time status and provider notification",
                    "Complete history for audit and compliance"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-left">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-semibold text-sm sm:text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Callout */}
                <div className="bg-[#f5f8ff] border border-blue-100/50 rounded-2xl p-5 flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="text-blue-700 text-xs font-bold tracking-wider uppercase mb-1">THE ANESTHESIA CONNECT DIFFERENCE</p>
                    <p className="font-extrabold text-[#0a1628] text-sm sm:text-base mb-0.5">One system for submissions, approvals, and records.</p>
                    <p className="text-gray-600 text-xs sm:text-sm">No more spreadsheets, emails, or lost receipts. Everything is tracked and auditable.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── SECTION 2: EVERYTHING IN ONE PLACE ── */}
        <section className="py-16 sm:py-20 bg-[#f4f7fc] text-[#0a1628]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

            {/* Heading */}
            <div className="text-center mb-10">
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-3 text-[#0a1628]">
                Everything in One Place
              </h3>
              <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Track every request from submission to reimbursement with full visibility.
              </p>
            </div>

            {/* Dashboard Screenshot */}
            <div className="max-w-3xl mx-auto mb-16 rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
              <img
                src="/expense_report_dashboard.png"
                alt="Expense Report Details Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bottom CTA */}
            <div className="text-center border-t border-gray-200/50 pt-16">
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

export default Reimbursement;
