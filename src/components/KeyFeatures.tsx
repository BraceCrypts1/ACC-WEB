import React from 'react';
import { 
  Shield, 
  FileText, 
  Calendar, 
  Edit3, 
  Building, 
  BarChart3,
  Lock,
  Cloud,
  CheckCircle,
  Clock,
  Users,
  FileCheck
} from 'lucide-react';
import { useUserType } from '@acweb/contexts/UserTypeContext';

const KeyFeatures: React.FC = () => {
  const { userType } = useUserType();

  const providerFeatures = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Secure Cloud Storage",
      description: "SOC2 Compliant Infrastructure keeps all your credential data safe.",
      color: "blue"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Smart Credentialing Packets",
      description: "Auto-generate credentialing packets with every required document for instant sharing.",
      color: "green"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Expiration Tracking",
      description: "Track CEUs, BLS/ACLS/PALS, DEA & state licenses — get alerts before they expire.",
      color: "purple"
    },
    {
      icon: <Edit3 className="h-8 w-8" />,
      title: "Integrated E-signatures",
      description: "Sign contracts, NDAs, or policy updates directly in the app.",
      color: "orange"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Easy Sharing",
      description: "Share your complete credentialing packet with employers in seconds.",
      color: "indigo"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Personal Dashboard",
      description: "See all your credentials, expirations, and compliance status at a glance.",
      color: "teal"
    }
  ];

  const employerFeatures = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Secure Cloud Storage",
      description: "SOC2 Compliant Infrastructure keeps all provider data safe.",
      color: "blue"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Smart Onboarding Packets",
      description: "Auto-generate onboarding packets with every required document for new hires.",
      color: "green"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Team Expiration Tracking",
      description: "Track all provider credentials across your team — get alerts before anything expires.",
      color: "purple"
    },
    {
      icon: <Edit3 className="h-8 w-8" />,
      title: "Digital Workflows",
      description: "Send contracts, NDAs, or policy updates for instant e-signature.",
      color: "orange"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Multi-Facility Management",
      description: "Track credentials across multiple facilities and contracts in one dashboard.",
      color: "indigo"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Admin Dashboard",
      description: "Comprehensive view of all provider credentials and compliance status.",
      color: "teal"
    }
  ];

  const features = userType === 'provider' ? providerFeatures : employerFeatures;

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      indigo: "bg-indigo-100 text-indigo-600",
      teal: "bg-teal-100 text-teal-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  // Don't show Key Features section for providers
  if (userType === 'provider') {
    return null;
  }

  return (
    <section id="features" className="section bg-white py-12 sm:py-16 lg:py-20">
      <div className="container-ac">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl font-bold text-ac-text mb-4 sm:text-3xl">Key Features</h2>
          <p className="text-base text-ac-text-light max-w-3xl mx-auto sm:text-lg">
            Powerful tools to streamline onboarding and manage provider compliance
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-8 ${
                index % 2 === 0 ? 'lg:mt-8' : ''
              }`}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${getColorClasses(feature.color)} rounded-xl flex items-center justify-center mb-4 sm:mb-6 sm:rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-ac-text mb-3 sm:text-xl sm:mb-4">{feature.title}</h3>
              <p className="text-ac-text-light leading-relaxed text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional security features */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 sm:rounded-2xl sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl font-bold text-ac-text mb-3 sm:text-2xl sm:mb-4">Enterprise-Grade Security</h3>
            <p className="text-ac-text-light max-w-2xl mx-auto text-sm sm:text-base">
              Built with healthcare compliance in mind, ensuring your sensitive data is always protected.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-ac-text mb-2">HIPAA Compliant</h4>
              <p className="text-sm text-ac-text-light">Full compliance with healthcare data protection standards</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-ac-text mb-2">Encrypted Storage</h4>
              <p className="text-sm text-ac-text-light">AES-256 encryption for all stored documents</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-ac-text mb-2">Audit Ready</h4>
              <p className="text-sm text-ac-text-light">Complete audit trails for all document activities</p>
            </div>
          </div>
          
          {/* Security certifications */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-ac-text text-center mb-6">Security Certifications</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                <span className="text-sm font-semibold text-ac-text-light">SOC 2 Type II</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                <span className="text-sm font-semibold text-ac-text-light">DDoS protection</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                <span className="text-sm font-semibold text-ac-text-light">ISO 27001</span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                <span className="text-sm font-semibold text-ac-text-light">GDPR Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
