import React, { useCallback } from 'react';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import { 
  Calendar, 
  Clock, 
  Sparkles, 
  Building, 
  MessageSquare, 
  ChevronRight, 
  CheckCircle,
  FileSpreadsheet,
  ArrowRight,
  Send,
  Bell,
  Lock,
  Smartphone,
  Info,
  Users,
  BarChart2
} from 'lucide-react';

const Scheduling: React.FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  const handleDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = '/#request-demo-pricing';
  }, []);

  const content = (
    <main className={`flex-grow ${embedded ? 'py-8' : 'pt-28 sm:pt-32'}`}>

        {/* ── SECTION 1: HERO & AI SCHEDULING (FIRST IMAGE) ────────────────────── */}
        <section className="relative overflow-hidden bg-white text-[#0a1628] py-16 sm:py-20 lg:py-24">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-semibold tracking-wide uppercase">Scheduling & Timekeeping</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                The First<br />
                <span className="text-blue-600">AI-Powered</span><br />
                Scheduling Platform<br />
                Built for Anesthesia
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Build schedules in minutes—not hours.
              </p>
              
              <button 
                onClick={handleDemoClick}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-8 py-4 text-base font-bold shadow-md transition-colors mb-12"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              {/* Center Weekly Schedule Mockup */}
              <div className="max-w-3xl mx-auto mb-16 rounded-2xl border border-gray-100 shadow-xl overflow-hidden bg-white">
                <img 
                  src="/scheduling_dashboard.png" 
                  alt="AI Scheduling Grid Mockup" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>

            {/* 4 Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
              <div className="bg-[#f8faff] border border-blue-50/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">80-90%</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Less scheduling time</p>
              </div>

              <div className="bg-[#f8faff] border border-blue-50/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#0a1628]">AI Powered</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Custom scheduling rules</p>
              </div>

              <div className="bg-[#f8faff] border border-blue-50/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#0a1628]">Unlimited</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Facilities & providers</p>
              </div>

              <div className="bg-[#f8faff] border border-blue-50/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#0a1628]">Built-In</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Timekeeping & messaging</p>
              </div>
            </div>

            {/* AI Scheduling List & Mobile preview */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] mb-4">
                  AI Scheduling That Works the Way You Do
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our AI builds optimized schedules in minutes using your rules, preferences, and staffing needs.
                </p>
                <div className="space-y-3.5">
                  {[
                    "Vacation requests",
                    "Call rotations",
                    "Weekend rotations",
                    "Provider preferences",
                    "Facility staffing",
                    "Unlimited facilities"
                  ].map((rule, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-[#0a1628] font-bold text-sm sm:text-base">{rule}</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-455" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile app preview image */}
              <div className="bg-[#f4f7fc] rounded-3xl p-6 border border-gray-150 flex items-center justify-center">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden max-w-[280px] w-full">
                  <div className="p-4 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-[#0a1628]">SJ</div>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold">Good morning,</p>
                        <p className="text-sm font-bold text-[#0a1628]">Sarah Jones, CRNA</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <p className="text-xs text-gray-400 font-bold mb-2">TOMORROW</p>
                    <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                      <p className="font-extrabold text-[#0a1628] text-sm">7:00 AM – 3:30 PM</p>
                      <p className="text-xs text-[#0a1628] font-bold">OR 5</p>
                      <p className="text-xs text-gray-500 mt-1">Trinity Health Oakland</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: EVERYTHING YOUR PROVIDERS NEED (SECOND IMAGE) ─────────── */}
        <section className="py-16 sm:py-20 bg-[#f4f7fc] text-[#0a1628]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            
            {/* Checklist & Double Phone Mockup */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-0">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
                  Everything Your Providers Need
                </h2>
                <div className="space-y-3.5">
                  {[
                    "View schedules anywhere",
                    "Clock in & out",
                    "Request time off",
                    "Swap shifts",
                    "Message schedulers & teammates",
                    "Receive instant updates"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-semibold text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Double Mobile Mockup Image */}
              <div className="relative z-10 flex items-center justify-center lg:justify-end mt-8 lg:mt-12 -mb-12 lg:-mb-24 pointer-events-none">
                <img 
                  src="/erasebg-transformed%20(7).png" 
                  alt="Provider Mobile App Screens" 
                  className="w-full max-w-none lg:w-[130%] h-auto object-contain drop-shadow-2xl lg:-mr-4" 
                />
              </div>
            </div>

            {/* Built-In Timekeeping Row */}
            <div className="relative z-20 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm mb-8">
              <h3 className="text-2xl font-extrabold text-[#0a1628] mb-2 text-green-600">Built-In Timekeeping</h3>
              <p className="text-gray-500 text-sm mb-8">Accurate time tracking. Easy reports.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#f8faff] rounded-2xl p-6 text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="font-extrabold text-sm text-[#0a1628]">Clock In/Out</p>
                </div>
                <div className="bg-[#f8faff] rounded-2xl p-6 text-center">
                  <BarChart2 className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="font-extrabold text-sm text-[#0a1628]">Reports</p>
                </div>
                <div className="bg-[#f8faff] rounded-2xl p-6 text-center">
                  <FileSpreadsheet className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="font-extrabold text-sm text-[#0a1628]">Payroll Exports</p>
                </div>
              </div>
            </div>

            {/* Team Messaging Row */}
            <div className="bg-[#f6f3fa] rounded-3xl border border-purple-50 p-8 shadow-sm mb-16">
              <h3 className="text-2xl font-extrabold text-purple-900 mb-2">Team Messaging</h3>
              <p className="text-gray-500 text-sm mb-8">No more group texts.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                  <MessageSquare className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-bold text-xs text-[#0a1628]">Message Schedulers</p>
                </div>
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                  <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-bold text-xs text-[#0a1628]">Message Your OR Team</p>
                </div>
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                  <Send className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-bold text-xs text-[#0a1628]">Coordinate Shift Swaps</p>
                </div>
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                  <Bell className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-bold text-xs text-[#0a1628]">Instant Updates</p>
                </div>
              </div>
            </div>

            {/* All-in-One Scheduling Platform Grid */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm mb-8">
              <h3 className="text-2xl font-extrabold text-center mb-8">All-in-One Scheduling Platform</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                <div className="text-center p-4">
                  <Sparkles className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-extrabold text-sm text-[#0a1628]">AI Scheduling</p>
                </div>
                <div className="text-center p-4">
                  <Building className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-extrabold text-sm text-[#0a1628]">Unlimited Facilities</p>
                </div>
                <div className="text-center p-4">
                  <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-extrabold text-sm text-[#0a1628]">Messaging</p>
                </div>
                <div className="text-center p-4">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-extrabold text-sm text-[#0a1628]">Timekeeping</p>
                </div>
                <div className="text-center p-4">
                  <Send className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-extrabold text-sm text-[#0a1628]">Shift Swaps</p>
                </div>
                <div className="text-center p-4">
                  <BarChart2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-extrabold text-sm text-[#0a1628]">Reports & Analytics</p>
                </div>
              </div>

              {/* Slider Pagination indicator */}
              <div className="flex justify-center items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-250"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-250"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-250"></span>
              </div>
            </div>

          </div>
        </section>

        {/* ── BOTTOM CTA ──────────────────────────────────────────────── */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="mx-auto max-w-xl px-4 sm:px-6">
            <div className="bg-blue-600 rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight">
                Smarter Scheduling.<br />
                Better Coverage.<br />
                Happier Providers.
              </h2>
              <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                Create anesthesia schedules in minutes and focus on what matters most—your patients.
              </p>
              <button 
                onClick={handleDemoClick}
                className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 rounded-xl px-7 py-3.5 text-sm font-extrabold shadow-md transition-colors mb-4"
              >
                Schedule a Demo →
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-blue-100 font-medium">
                <Lock className="h-3.5 w-3.5" />
                <span>Secure. Reliable. Built for Anesthesia.</span>
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

export default Scheduling;
