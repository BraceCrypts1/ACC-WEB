import React, { useState, useCallback } from 'react';
import { Button } from '@acweb/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Loader2, CheckCircle, Shield, Zap, Lock } from 'lucide-react';
import { useUserType } from '@acweb/contexts/UserTypeContext';
import { supabase } from '@acweb/integrations/supabase/client';
import { toast } from 'sonner';

interface DemoRequestFormData {
  name: string;
  organization: string;
  email: string;
  phoneNumber: string;
  numberOfProviders: string;
  additionalNotes: string;
}

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { userType } = useUserType();
  
  const [demoFormData, setDemoFormData] = useState<DemoRequestFormData>({
    name: '',
    organization: '',
    email: '',
    phoneNumber: '',
    numberOfProviders: '',
    additionalNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleScrollToDemo = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = 'request-demo-pricing';
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerElement = document.querySelector('header');
      const tabsElement = document.querySelector('[data-user-type-tabs]') as HTMLElement;
      const headerHeight = headerElement ? headerElement.offsetHeight : 160;
      const tabsHeight = tabsElement ? tabsElement.offsetHeight : 88;
      const totalOffset = headerHeight + tabsHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  }, []);

  const providerFeatures = [
    "Upload and organize licenses, CEUs, diplomas, immunizations, insurance, and more",
    "Expense Tax tracking & CPA export for all of your expenses",
    "Automatically track expirations and get notified before deadlines",
    "Secure, encrypted cloud storage",
    "One-click credentialing packets",
    "CEU tracking and dashboard overview",
    "Access from any device",
    "Auto-generate secure credentialing link or email",
    "One-click send to employer (PDF bundle)",
    "In-app expiration reminders for certifications and licenses",
    "Priority support",
    "Advanced analytics and reporting"
  ];

  const employerFeatures = [
    "Provider onboarding and document request tools",
    "Real-time expiration tracking for all licenses and credentials",
    "Team-wide CEU status dashboard",
    "One-click credentialing packets",
    "Upload contracts, policy documents, and receive e-signatures",
    "Secure, centralized credentialing database",
    "Unlimited document requests and provider accounts",
    "Admin dashboard with filters, search, and export tools",
    "Integrated DocuSign for contracts and forms",
    "One-click PDF email to credentialing staff",
    "Credential packet branding (headers/logos)",
    "Internal notes + credential status tracking",
    "Priority support",
    "Advanced analytics and compliance reporting"
  ];

  /**
   * Handles demo request form submission
   */
  const handleDemoFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!demoFormData.name.trim() || !demoFormData.organization.trim() || !demoFormData.email.trim() || !demoFormData.phoneNumber.trim()) {
      toast.error('Please fill in all required fields (Name, Organization, Email, and Phone Number).');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(demoFormData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-demo-request', {
        body: {
          name: demoFormData.name.trim(),
          organization: demoFormData.organization.trim(),
          email: demoFormData.email.trim(),
          phoneNumber: demoFormData.phoneNumber.trim(),
          numberOfProviders: demoFormData.numberOfProviders.trim() || null,
          additionalNotes: demoFormData.additionalNotes.trim() || null
        }
      });
      if (error) {
        console.error('Error submitting demo request:', error);
        toast.error('Failed to submit your request. Please try again later or contact support@anesthesiaconnect.net.');
        return;
      }
      if (data?.success) {
        setSubmitSuccess(true);
        toast.success('Demo request submitted successfully! Check your email for confirmation.');
      } else {
        throw new Error(data?.error || 'Unknown error occurred');
      }
    } catch (err) {
      console.error('Error submitting demo request:', err);
      toast.error('An error occurred while submitting your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── RESIDENT VIEW (100% Complimentary — no pricing section) ─────────────────
  if (userType === 'resident') {
    return null;
  }

  // ── PROVIDER PRICING ───────────────────────────────────────────────────────
  if (userType === 'provider') {
    const rightFeatures = [
      "Everything above included",
      "Unlimited secure storage",
      "Unlimited employer sharing",
      "Unlimited credential packets",
      "Unlimited job applications",
      "Unlimited reimbursement requests",
      "Unlimited app updates",
      "14-day free trial"
    ];

    return (
      <section id="pricing" className="section bg-white py-20">
        <div className="container-ac">

          {/* Pricing Card */}
          <div className="max-w-4xl mx-auto relative pt-4">
            {/* Pricing Card */}

            <div className="relative bg-white rounded-xl shadow-lg border-2 border-[#1a56db]/80 p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Left Column — Plan Details */}
                <div className="md:pr-6 md:border-r border-gray-100">
                  <div className="flex items-start gap-4 mb-2">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-[#1a56db] rounded-full flex items-center justify-center text-white">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 15.228l-4.35 2.652 1.155-4.965-3.861-3.327 5.094-.435L12 4.5l1.962 4.653 5.094.435-3.861 3.327 1.155 4.965z"/></svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0a1628] mb-1">Professional Plan</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Complete credentialing solution<br />for anesthesia providers.
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-6 mb-4 ml-18">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-[#0a1628]">$19.99</span>
                      <span className="text-gray-500 text-sm font-medium">/month</span>
                    </div>
                  </div>

                  {/* Annual savings */}
                  <div className="mb-6 p-4 bg-green-50/80 rounded-xl text-center border border-green-100/50 ml-18">
                    <p className="text-sm font-bold text-green-700">
                      $17.99/month if paid annually
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="ml-18">
                    <Link to="/register/provider" className="block w-full">
                      <button
                        style={{ color: '#ffffff', backgroundColor: '#1a56db' }}
                        className="inline-flex items-center justify-center w-full rounded-lg px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity duration-200 shadow-md"
                      >
                        Start 14-Day Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </Link>
                    <div className="flex items-center justify-center gap-2 mt-3">
                      <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                        <Check className="h-3 w-3 text-white flex-shrink-0" />
                      </div>
                      <p className="text-xs font-medium text-gray-500">No credit card required.</p>
                    </div>
                  </div>
                </div>

                {/* Right Column — Features */}
                <div className="flex flex-col justify-center py-2">
                  <ul className="space-y-4">
                    {rightFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-[#1a56db] rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Ready to Simplify Your Career? CTA */}
          <div className="max-w-4xl mx-auto mt-6">
            <div className="bg-[#0b3387] rounded-xl p-8 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="z-10 flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Simplify Your Career?</h3>
                <p className="text-blue-100 text-sm font-medium mb-6">
                  Join thousands of anesthesia professionals<br className="hidden md:block" />who trust Anesthesia Connect.
                </p>
                <Link to="/register/provider">
                  <button
                    style={{ color: '#1a56db', backgroundColor: '#ffffff' }}
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold hover:bg-gray-50 transition-colors duration-200 shadow-md"
                  >
                    Start 14-Day Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
              
              {/* Right Logo */}
              <div className="z-10 hidden md:block">
                <div className="w-32 h-32 relative">
                  {/* Decorative outline shield */}
                  <svg className="w-full h-full text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <circle cx="12" cy="12" r="5" strokeWidth="0.5" />
                    <path d="M7 12h10M12 7v10" strokeWidth="0.5" />
                    <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
              
              {/* Abstract background graphics to mimic the shield/globe lines */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden opacity-30 pointer-events-none">
                <svg className="absolute -right-10 -top-10 w-64 h-64 text-white" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z" strokeWidth="1"/>
                  <path d="M20 100C20 100 60 180 100 180C140 180 180 100 180 100C180 100 140 20 100 20C60 20 20 100 20 100Z" strokeWidth="1"/>
                  <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(-30 100 100)" strokeWidth="1"/>
                  <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(30 100 100)" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }

  // ── EMPLOYER PRICING ───────────────────────────────────────────────────────
  return (
    <section id="pricing" className="section bg-white py-12 sm:py-16">
      <div className="container-ac">

        {/* Request Demo Form */}
        <div id="request-demo-pricing" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 scroll-mt-[180px] md:scroll-mt-[240px]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-ac-text mb-4">Request Demo &amp; Pricing</h3>
            <p className="text-lg text-ac-text-light max-w-2xl mx-auto">
              Connect with our team to review platform capabilities, walk through a live product demo, and explore pricing options tailored to your anesthesia organization's workflow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-ac-text mb-4">Custom plans include:</h4>
              <ul className="space-y-2">
                {[
                  "Advanced analytics and credentialing compliance reporting",
                  "Dedicated account manager and support",
                  "Bulk document uploads and integration options",
                  "Internal messaging and compliance audit tools",
                  "Group-level permissions and multi-team support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-ac-primary mr-3" />
                    <span className="text-ac-text-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h4 className="text-lg font-semibold text-ac-text mb-4">Request Custom Pricing</h4>
              {submitSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h5 className="text-xl font-semibold text-ac-text mb-2">Request Submitted Successfully!</h5>
                  <p className="text-ac-text-light mb-4">
                    We've received your demo request. You will receive a confirmation email shortly, and one of our team members will reach out within 24 to 48 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setDemoFormData({ name: '', organization: '', email: '', phoneNumber: '', numberOfProviders: '', additionalNotes: '' });
                    }}
                    variant="outline"
                    className="mt-4"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleDemoFormSubmit} className="space-y-4">
                  <input type="text" placeholder="Name *" required value={demoFormData.name}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, name: e.target.value }))}
                    maxLength={100}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-primary focus:border-transparent" />
                  <input type="text" placeholder="Organization *" required value={demoFormData.organization}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, organization: e.target.value }))}
                    maxLength={100}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-primary focus:border-transparent" />
                  <input type="email" placeholder="Email *" required value={demoFormData.email}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, email: e.target.value.toLowerCase().trim() }))}
                    maxLength={255}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-primary focus:border-transparent" />
                  <input type="tel" placeholder="Phone Number *" required value={demoFormData.phoneNumber}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    maxLength={20}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-primary focus:border-transparent" />
                  <input type="text" placeholder="Number of Providers" value={demoFormData.numberOfProviders}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, numberOfProviders: e.target.value }))}
                    maxLength={50}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-primary focus:border-transparent" />
                  <textarea placeholder="Additional Notes" rows={3} value={demoFormData.additionalNotes}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
                    maxLength={1000}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-primary focus:border-transparent resize-none" />
                  <Button type="submit" disabled={isSubmitting}
                    className="w-full bg-ac-primary hover:bg-ac-primary/90 text-white disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
                    ) : 'Submit Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
