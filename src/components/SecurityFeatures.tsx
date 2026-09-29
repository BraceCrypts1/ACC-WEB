import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, FileCheck, Users, Clock } from 'lucide-react';

const SecurityFeatures: React.FC = () => {
  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "SOC 2 Type 2 Standards & Alignment",
      description: "Our security program is built to align with SOC 2 Type 2 requirements, including documented controls, third-party oversight, and continuous security monitoring based on the AICPA Trust Service Criteria.",
      details: [
        "Aligned to SOC 2 Type 2 Trust Service Criteria",
        "Independent audit readiness framework in place",
        "Continuous monitoring of security + access controls",
        "Formal policies and procedures maintained and reviewed regularly"
      ]
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Bank-Level Data Encryption",
      description: "All data is encrypted in transit using TLS 1.3 and at rest with AES-256 encryption. Every document you upload is securely stored on U.S.-based, HIPAA-compliant servers.",
      details: [
        "TLS 1.3 encryption in transit",
        "AES-256 encryption at rest",
        "U.S.-based secure servers",
        "No data sharing without explicit consent"
      ]
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Secure Cloud Infrastructure",
      description: "Hosted on HITRUST-certified infrastructure with automated failover and disaster recovery. Continuous monitoring for threats, intrusions, and unauthorized access.",
      details: [
        "HITRUST-certified infrastructure",
        "Automated failover and disaster recovery",
        "Continuous threat monitoring",
        "Regular vulnerability scans"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Role-Based Access Control",
      description: "Only you (and any authorized employer you share with) can access your documents. Employers can only see what you explicitly share with them through credentialing packets.",
      details: [
        "Granular permission controls",
        "Real-time activity logs",
        "Explicit sharing controls",
        "Audit trails for all actions"
      ]
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Document Integrity & Verification",
      description: "Every document you upload is time-stamped and version-controlled. Audit trails are built in for employer compliance needs. E-signatures are encrypted, trackable, and legally binding.",
      details: [
        "Time-stamped document uploads",
        "Version control for all documents",
        "Comprehensive audit trails",
        "Legally binding e-signatures"
      ]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Continuous Security Monitoring",
      description: "24/7 security monitoring with automated threat detection and response. Regular security updates and patches to ensure the highest level of protection.",
      details: [
        "24/7 security monitoring",
        "Automated threat detection",
        "Regular security updates",
        "Incident response protocols"
      ]
    }
  ];

  const complianceStandards = [
    { name: "HIPAA", status: "Compliant", description: "Health Insurance Portability and Accountability Act" },
    { name: "SOC 2", status: "Certified", description: "Service Organization Control 2" },
    { name: "DDoS Protection", status: "Active", description: "Distributed Denial of Service Protection" },
    { name: "GDPR", status: "Compliant", description: "General Data Protection Regulation" }
  ];

  return (
    <section className="section bg-gray-50 py-20">
      <div className="container-ac">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-ac-text mb-4">Your Data Is Our Top Priority</h2>
          <p className="text-lg text-ac-text-light max-w-4xl mx-auto">
            At Anesthesia Connect, we understand the sensitive nature of the documents you store — from professional licenses and immunization records to contracts and credentialing packets. That's why security and compliance are at the core of everything we build.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 sm:rounded-2xl sm:p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-ac-text mb-3">{feature.title}</h3>
                  <p className="text-ac-text-light mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-ac-text-light">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      

        {/* Security Policies */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-ac-text text-center mb-8">Security Policies & Legal</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-ac-text mb-2">Privacy Policy</h4>
              <p className="text-sm text-ac-text-light mb-4">Comprehensive privacy policy outlining how we protect your data</p>
              <Link 
                to="/privacy" 
                className="text-ac-primary hover:text-ac-primary/80 font-semibold inline-block"
              >
                View Privacy Policy
              </Link>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-ac-text mb-2">Terms of Use</h4>
              <p className="text-sm text-ac-text-light mb-4">Clear terms and conditions for using our platform</p>
              <Link 
                to="/terms" 
                className="text-ac-primary hover:text-ac-primary/80 font-semibold inline-block"
              >
                View Terms of Use
              </Link>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-ac-text mb-2">SOC 2 Type 2 Compliance</h4>
              <p className="text-sm text-ac-text-light mb-4">Partnered with Secureframe to achieve and maintain SOC 2 Type 2 compliance certification</p>
              <a 
                href="https://secureframe.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ac-primary hover:text-ac-primary/80 font-semibold inline-block"
              >
                Learn More About Secureframe
              </a>
            </div>
          </div>
        </div>

        {/* Security Assurance */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-ac-text mb-4">Security Assurance</h3>
            <p className="text-lg text-ac-text-light mb-6">
              Whether you're a provider protecting your license data or an employer managing compliance across multiple locations, Anesthesia Connect gives you the peace of mind that your information is safe, encrypted, and always under your control.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-ac-text-light">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Regular security audits</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Penetration testing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Third-party security reviews</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Incident response plan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
