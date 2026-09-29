import React, { useCallback } from 'react';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import {
  ArrowRight,
  Folder,
  Lock,
  Shield,
  Upload,
  FolderOpen,
  Share2,
  CheckCircle,
  Calendar,
  FileText
} from 'lucide-react';

const DocumentStorage: React.FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  const handleDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = '/#request-demo-pricing';
  }, []);

  const content = (
    <main className={`flex-grow ${embedded ? 'py-8' : 'pt-28 sm:pt-32'}`}>

        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden bg-white text-[#0a1628] py-16 sm:py-20 lg:py-24">
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

            {/* Badge */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
                <Folder className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-semibold tracking-wide uppercase">Document Storage & Sharing</span>
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                Store it securely.<br />
                <span className="text-blue-600">Share it instantly.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Centralize all provider and employer documents in one secure location. Instantly send any document as a secure, encrypted link or PDF to any credentialing department.
              </p>
            </div>

            {/* Dashboard Screenshot */}
            <div className="max-w-4xl mx-auto mb-16 rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
              <img
                src="/document_storage_dashboard.png"
                alt="Document Storage Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>

          </div>
        </section>

        {/* ── HOW IT WORKS + KEY BENEFITS ── */}
        <section className="py-16 sm:py-20 bg-[#f4f7fc] text-[#0a1628]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

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
                      title: "Upload",
                      desc: "Upload any document to the provider's secure wallet."
                    },
                    {
                      step: "2",
                      icon: <FolderOpen className="h-6 w-6 text-blue-600" />,
                      title: "Organize",
                      desc: "Documents are automatically organized by type and category."
                    },
                    {
                      step: "3",
                      icon: <Share2 className="h-6 w-6 text-blue-600" />,
                      title: "Share Securely",
                      desc: "Send as an encrypted link with access controls or download as a PDF."
                    },
                    {
                      step: "4",
                      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
                      title: "Track & Confirm",
                      desc: "Track access and confirm when documents are viewed."
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
                    "Eliminate email attachments & unsecured files. Send to any credentialing department or facility.",
                    "Secure, encrypted links with expiration controls.",
                    "Complete audit trail & activity tracking. Faster communication & fewer follow-ups."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-left">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-semibold text-sm sm:text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Callout */}
                <div className="bg-[#f5f8ff] border border-blue-100/50 rounded-2xl p-5 flex items-start gap-4">
                  <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="font-extrabold text-[#0a1628] text-sm sm:text-base mb-0.5">Secure storage. Instant sharing.</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Built for anesthesia groups.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom CTA */}
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

export default DocumentStorage;
