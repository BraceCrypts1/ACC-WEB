
import React, { useCallback } from 'react';
import { Button } from '@acweb/components/ui/button';
import { Link } from 'react-router-dom';
import { Upload, FileText, Send, Bell, Users, ShieldCheck, Clock, CheckCircle, Folder, Share2, GraduationCap, DollarSign, AlertCircle, PenTool, Database, Search, Package, Eye, TrendingDown, Lock } from 'lucide-react';
import { useUserType } from '@acweb/contexts/UserTypeContext';

/**
 * Renders the "How It Works" section of the Anesthesia Connect web page.
 * @example
 * renderHowItWorksSection()
 * <section>...</section>
 * @returns {JSX.Element} A JSX element representing the "How It Works" section.
 * @description
 *   - Applies a background gradient from blue to white.
 *   - Contains information on registration, credential upload, verification, and readiness.
 *   - Includes a connection line that appears on larger screens.
 */
const HowItWorks: React.FC = () => {
  const { userType } = useUserType();

  /**
   * Handles smooth scrolling to the demo request form
   * Security: Validates hash before scrolling
   */
  const handleScrollToDemo = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetId = 'request-demo-pricing';
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate total offset: header height + tabs height
      const headerElement = document.querySelector('header');
      const tabsElement = document.querySelector('[data-user-type-tabs]') as HTMLElement;
      
      const headerHeight = headerElement ? headerElement.offsetHeight : 160;
      const tabsHeight = tabsElement ? tabsElement.offsetHeight : 88;
      const totalOffset = headerHeight + tabsHeight;
      
      // Get element position
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      // Smooth scroll to target with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without triggering scroll
      window.history.pushState(null, '', `#${targetId}`);
    }
  }, []);

  return (
    <section className="section bg-gradient-to-br from-slate-50 to-blue-50" id="how-it-works">
      <div className="container-ac">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl font-bold text-ac-text mb-4 sm:text-3xl">
            {userType === 'provider' 
              ? "How It Works"
              : "What Your Providers Get in the App"
            }
          </h2>
          <p className="text-base text-ac-text-light max-w-3xl mx-auto sm:text-lg">
            {userType === 'provider' 
              ? "Simple steps to organize your credentials and stay compliant"
              : "Empower providers to manage their own credentials, driving efficiency and reducing administrative workload across your team."
            }
          </p>
        </div>

        {userType === 'provider' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div 
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Upload className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">Upload & Centralize</h3>
              <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">Securely upload and store all your credentials and tax expenses in one place (e.g., CEUs, NPI, references, immunizations, contracts)</p>
            </div>
            
            <div 
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">Credential Management</h3>
              <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">Maintain and track all licenses, certifications, and other important documents.</p>
            </div>
            
            <div 
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Send className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">Send & Onboard</h3>
              <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">With one click, employers request or receive complete credentialing packets, signed contracts, or updated compliance docs.</p>
            </div>
            
            <div 
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Bell className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">Expiration Alerts</h3>
              <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">Smart alerts warn of expiring docs. Dashboards show real-time status.</p>
            </div>
            
            <div 
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">Secure Cloud Storage</h3>
              <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">SOC2 Type 2 Compliant Infrastructure keeping all your credentials safe.</p>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 sm:rounded-2xl sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Left Column - First 3 sections */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Folder className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-ac-text mb-1 sm:mb-2 sm:text-lg">Store & Manage All Credentials</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Providers can store and manage all of their credentials in one place — including IDs, state licenses, board certifications, diplomas, case logs, ACLS, BLS, PALS, DEA, malpractice insurance, immunizations, TB, NPI number, resumes, references, work and education history, and more.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Share2 className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-ac-text mb-1 sm:mb-2 sm:text-lg">Send Their Entire Packet Instantly</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Providers can connect with their employer and share their full credential packet in seconds — or instantly send a PDF or encrypted file to any destination.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-ac-text mb-1 sm:mb-2 sm:text-lg">Automatic CEU Tracking</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Providers can upload and track continuing education credits directly in the app, ensuring their education and CEU history stays current.</p>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Last 3 sections */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-ac-text mb-1 sm:mb-2 sm:text-lg">Reimbursement Requests Made Easy</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Providers submit reimbursement requests through the app and can track approvals, allowances, and remaining balances — reducing HR follow-up and manual communication.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-ac-text mb-1 sm:mb-2 sm:text-lg">Never Miss an Expiration</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Providers receive automatic alerts before licenses, certifications, or other required documents expire — helping prevent delays, gaps, or compliance issues.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <PenTool className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-ac-text mb-1 sm:mb-2 sm:text-lg">Digitally Sign & Submit</h4>
                      <p className="text-ac-text-light text-sm sm:text-base">Providers can complete forms and sign agreements directly in the app using built-in e-signature — eliminating printing, scanning, emailing, and paperwork choke points.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="text-center mt-8 sm:mt-12">
          {userType === 'employer' ? (
            <a href="#request-demo-pricing" onClick={handleScrollToDemo}>
              <Button size="lg" className="w-full sm:w-auto bg-ac-primary hover:bg-ac-primary/90 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg">
                Get Started Now
              </Button>
            </a>
          ) : (
            <Link to="/register/provider">
              <Button size="lg" className="w-full sm:w-auto bg-ac-primary hover:bg-ac-primary/90 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg">
                Get Started Now
              </Button>
            </Link>
          )}
        </div>

        {/* Additional "How It Works" section for employers */}
        {userType === 'employer' && (
          <div className="mt-12 sm:mt-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl font-bold text-ac-text mb-4 sm:text-3xl">How It Works</h2>
              <p className="text-base text-ac-text-light max-w-3xl mx-auto sm:text-lg">
                Streamlined process to onboard providers and manage compliance all in one platform.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">Unified Credential Vault</h3>
                <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">All provider credentials — licenses, diplomas, DEA, immunizations, malpractice, references, education, work history — stored in one secure platform instead of scattered across inboxes and folders.</p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">Smart Document Requests</h3>
                <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">Request specific documents with one click. Providers receive a direct notification and upload instantly. Every request is tracked so nothing gets lost.</p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Package className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">Automated Onboarding Packets</h3>
                <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">Send onboarding packets that automatically auto-populate with the provider's stored documents — eliminating repetitive re-requests and manual packet assembly.</p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">Real-Time Compliance Visibility</h3>
                <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">See every provider's status across all facilities in a single dashboard. Instantly see who is cleared, who is pending, and who needs an update.</p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Bell className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">Expiration Alerts & Tasking</h3>
                <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">Automatic reminders for upcoming expirations — licenses, certifications, immunizations, malpractice — so your team stays ahead, not behind.</p>
              </div>

              <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <TrendingDown className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">Less Admin Work — More Capacity</h3>
                <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">Cut HR workload, reduce back-and-forth emails, and scale your practice without adding more administrative staff.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-ac-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <h4 className="text-lg font-semibold mb-2 text-ac-text">{title}</h4>
      <p className="text-ac-text-light">{description}</p>
    </div>
  );
};

export default HowItWorks;
