import React, { useCallback, useEffect } from 'react';
import { Button } from '@acweb/components/ui/button';
import { Shield, Users, Award, CheckCircle, Mail, MapPin } from 'lucide-react';
import { useUserType } from '@acweb/contexts/UserTypeContext';
import { SUPABASE_URL } from '@acweb/integrations/supabase/client';

/**
 * Provider FAQs Component with SEO-optimized structure and Schema.org markup
 */
const ProviderFAQs: React.FC = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Anesthesia Connect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anesthesia Connect is a secure digital platform built for anesthesia providers to organize licenses, certifications, CEUs, credentials, onboarding documents, and employment-related forms in one place. Your entire professional profile is stored in a single vault you can share with any employer instantly."
        }
      },
      {
        "@type": "Question",
        "name": "How do I share my credentialing files with an employer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can directly send documents through the app or generate a secure link or PDF of your complete credentialing packet and send it to any employer with a single tap. Employers can download or forward your packet to their credentialing department immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use Anesthesia Connect if I'm a 1099 provider or work at multiple hospitals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Your account is provider-owned and works across every employer you work with. You can send individual credential packets to multiple groups as many times as you want."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost for providers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Providers may subscribe monthly or annually. Many users choose the yearly plan for convenience unless their employer pays for their subscription through an enterprise license."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if my employer signs up for Anesthesia Connect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your employer purchases an enterprise account, you can cancel your personal subscription, and your employer will take over your access. Your account continues without interruption, and all of your documents remain exactly as you organized them."
        }
      },
      {
        "@type": "Question",
        "name": "Do employers see everything in my account if they take over my subscription?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Employers that are linked with you can only view professional items that relate to onboarding and compliance—licenses, certifications, immunizations, credentialing forms, and anything you choose to submit. Any documents marked as personal, such as CEU, remain visible only to you."
        }
      },
      {
        "@type": "Question",
        "name": "What if I leave an employer that was paying for my subscription?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your account stays with you. If you separate from the employer paying for your subscription, you simply have to revert to your personal plan so you can continue using Anesthesia Connect without interruption."
        }
      },
      {
        "@type": "Question",
        "name": "Can I track CEUs for recertification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can upload CEU certificates as you earn them. The platform tracks your totals and expiration dates so you always know exactly what you need for your next recertification cycle."
        }
      },
      {
        "@type": "Question",
        "name": "Will I receive reminders before my licenses or certifications expire?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll receive automated alerts well before any credential expires. This helps you stay fully compliant and prevents onboarding delays or last-minute renewals."
        }
      },
      {
        "@type": "Question",
        "name": "Can I store other documents like malpractice insurance, resumes, case logs, or reference letters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can store any PDF, PNG, JPEG, or Excel in your vault. Many providers keep copies of resumes, diplomas, immunization records, DEA documentation, malpractice certificates, and other important files."
        }
      },
      {
        "@type": "Question",
        "name": "What if I upload new documents after sending a packet to an employer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can upload new documents, licenses, or certifications to your portal at any time and resend the updated items to your employer at the click of a button."
        }
      },
      {
        "@type": "Question",
        "name": "Is my information secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All data is encrypted using modern security protocols aligned with SOC 2 Type II best practices. Your information is protected with the same standards used by major healthcare and payroll platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Does Anesthesia Connect support multi-factor authentication (MFA)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can enable MFA to add an extra layer of protection to your account. When activated, you'll verify your identity using a secondary authentication method before accessing your vault, ensuring your documents remain secure even if a password is compromised."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use Anesthesia Connect to request reimbursements from my employer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can submit receipts and documentation for CEUs, license renewals, conferences, travel, and other employer-approved expenses directly through the app. Employers can review, approve, or decline these requests from their dashboard."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download my entire credential file for my own records?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can download your entire vault—or send it to yourself—whenever you need a personal backup or are preparing to switch jobs or contracts."
        }
      }
    ]
  };

  useEffect(() => {
    // Inject Schema.org structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqData);
    script.id = 'provider-faq-schema';
    
    // Remove existing schema if present
    const existingScript = document.getElementById('provider-faq-schema');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('provider-faq-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const faqSections = [
    {
      title: "Getting Started",
      questions: [
        {
          q: "What is Anesthesia Connect?",
          a: "Anesthesia Connect is a secure digital platform built for anesthesia providers to organize licenses, certifications, CEUs, credentials, onboarding documents, and employment-related forms in one place. Your entire professional profile is stored in a single vault you can share with any employer instantly."
        },
        {
          q: "How do I share my credentialing files with an employer?",
          a: "You can directly send documents through the app or generate a secure link or PDF of your complete credentialing packet and send it to any employer with a single tap. Employers can download or forward your packet to their credentialing department immediately."
        },
        {
          q: "Can I use Anesthesia Connect if I'm a 1099 provider or work at multiple hospitals?",
          a: "Yes. Your account is provider-owned and works across every employer you work with. You can send individual credential packets to multiple groups as many times as you want."
        }
      ]
    },
    {
      title: "Account & Subscription",
      questions: [
        {
          q: "How much does it cost for providers?",
          a: "Providers may subscribe monthly or annually. Many users choose the yearly plan for convenience unless their employer pays for their subscription through an enterprise license."
        },
        {
          q: "What happens if my employer signs up for Anesthesia Connect?",
          a: "If your employer purchases an enterprise account, you can cancel your personal subscription, and your employer will take over your access. Your account continues without interruption, and all of your documents remain exactly as you organized them."
        },
        {
          q: "Do employers see everything in my account if they take over my subscription?",
          a: "Employers that are linked with you can only view professional items that relate to onboarding and compliance—licenses, certifications, immunizations, credentialing forms, and anything you choose to submit. Any documents marked as personal, such as CEU, remain visible only to you."
        },
        {
          q: "What if I leave an employer that was paying for my subscription?",
          a: "Your account stays with you. If you separate from the employer paying for your subscription, you simply have to revert to your personal plan so you can continue using Anesthesia Connect without interruption."
        }
      ]
    },
    {
      title: "Documents & Compliance",
      questions: [
        {
          q: "Can I track CEUs for recertification?",
          a: "Yes. You can upload CEU certificates as you earn them. The platform tracks your totals and expiration dates so you always know exactly what you need for your next recertification cycle."
        },
        {
          q: "Will I receive reminders before my licenses or certifications expire?",
          a: "You'll receive automated alerts well before any credential expires. This helps you stay fully compliant and prevents onboarding delays or last-minute renewals."
        },
        {
          q: "Can I store other documents like malpractice insurance, resumes, case logs, or reference letters?",
          a: "Yes. You can store any PDF, PNG, JPEG, or Excel in your vault. Many providers keep copies of resumes, diplomas, immunization records, DEA documentation, malpractice certificates, and other important files."
        },
        {
          q: "What if I upload new documents after sending a packet to an employer?",
          a: "You can upload new documents, licenses, or certifications to your portal at any time and resend the updated items to your employer at the click of a button."
        }
      ]
    },
    {
      title: "Security & Privacy",
      questions: [
        {
          q: "Is my information secure?",
          a: "All data is encrypted using modern security protocols aligned with SOC 2 Type II best practices. Your information is protected with the same standards used by major healthcare and payroll platforms."
        },
        {
          q: "Does Anesthesia Connect support multi-factor authentication (MFA)?",
          a: "Yes. You can enable MFA to add an extra layer of protection to your account. When activated, you'll verify your identity using a secondary authentication method before accessing your vault, ensuring your documents remain secure even if a password is compromised."
        }
      ]
    },
    {
      title: "Reimbursements & Extras",
      questions: [
        {
          q: "Can I use Anesthesia Connect to request reimbursements from my employer?",
          a: "Yes. You can submit receipts and documentation for CEUs, license renewals, conferences, travel, and other employer-approved expenses directly through the app. Employers can review, approve, or decline these requests from their dashboard."
        },
        {
          q: "Can I download my entire credential file for my own records?",
          a: "Yes. You can download your entire vault—or send it to yourself—whenever you need a personal backup or are preparing to switch jobs or contracts."
        }
      ]
    }
  ];

  return (
    <section id="provider-faqs" className="mt-16 scroll-mt-[180px] md:scroll-mt-[240px]">
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-ac-text text-center mb-8">Provider FAQs – Anesthesia Connect</h2>
        
        <div className="space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              <h3 className="text-2xl font-semibold text-ac-text border-b border-gray-200 pb-3">{section.title}</h3>
              <dl className="space-y-6">
                {section.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="space-y-2">
                    <dt className="text-lg font-semibold text-ac-text">
                      {faq.q}
                    </dt>
                    <dd className="text-ac-text-light leading-relaxed pl-4">
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Employer FAQs Component with SEO-optimized structure and Schema.org markup
 */
const EmployerFAQs: React.FC = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Anesthesia Connect for Employers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anesthesia Connect provides anesthesia groups and hospital departments with a centralized system to manage provider onboarding, compliance, credentialing documents, and expiring items. Employers can request documents, receive completed onboarding packets, track expirations, review reimbursements, and maintain compliance across all providers in one place."
        }
      },
      {
        "@type": "Question",
        "name": "How does onboarding work through the platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can send a digital onboarding packet or custom document request to any provider with one action. Providers submit all required documents directly into your dashboard. Everything uploads in real time, giving your credentialing team immediate access to licenses, certifications, immunizations, CEUs, and required employment forms."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Anesthesia Connect cost for employers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Employers pay a yearly enterprise subscription plus a per-provider fee. This gives your organization access to the full employer dashboard, document management tools, automated compliance tracking, and admin-level features."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if one of our providers already has a personal subscription?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you add a provider to your enterprise account, their personal billing ends and their subscription is transferred under your organization. The provider keeps all their documents and settings, and you gain secure access to only the items they share with you."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if a provider leaves our organization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When a provider is removed from your roster, your access to their documents is automatically revoked. Their account reverts back to an individual subscription, and you no longer have visibility into their vault."
        }
      },
      {
        "@type": "Question",
        "name": "How do employers receive documents from providers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Providers upload their documents into their personal vault, and you receive them instantly in your employer dashboard. All files are organized by document type, expiration date, and provider."
        }
      },
      {
        "@type": "Question",
        "name": "Can we create custom onboarding packets or facility-specific requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can build custom onboarding workflows, add organization-specific forms, create specialized packets for different facilities or provider roles, and reuse templates for new hires."
        }
      },
      {
        "@type": "Question",
        "name": "How does the system track compliance and expiring items?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The dashboard automatically monitors expiration dates for licenses, certifications, immunizations, and more. You'll see upcoming expirations, overdue items, and compliance status for every provider at a glance."
        }
      },
      {
        "@type": "Question",
        "name": "Can employers download complete packets and send for credentialing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can download a provider's full onboarding packet or export only specific documents. Files are formatted for easy forwarding to hospital credentialing offices or HR departments at a click of a button."
        }
      },
      {
        "@type": "Question",
        "name": "Is provider data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All documents and data are encrypted at rest and in transit using SOC 2 Type II–aligned protocols. Access is restricted based on your administrator's permissions, and every action is logged for audit purposes."
        }
      },
      {
        "@type": "Question",
        "name": "Do employers gain automatic access to all provider documents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Employers only see what a provider submits or approves for sharing. Providers maintain full control over their vault, and employers cannot access anything outside the shared set."
        }
      },
      {
        "@type": "Question",
        "name": "Are shared links secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Documents shared through the platform or via secure links are tokenized, encrypted, and time-limited. Employers receive controlled access, and links can be revoked at any time."
        }
      },
      {
        "@type": "Question",
        "name": "How do providers submit reimbursements to us?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Providers can upload receipts for CEUs, license renewals, conferences, or approved expenses directly through their app. You can review, approve, or decline submissions and keep all reimbursement history organized in your dashboard."
        }
      },
      {
        "@type": "Question",
        "name": "Can we organize providers by facility, location, or employment type?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Anesthesia Connect allows you to structure your provider roster across multiple hospitals, facilities, departments, or provider contracts. This makes compliance and document management organized and scalable."
        }
      },
      {
        "@type": "Question",
        "name": "Can we export data for internal systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can export provider documents, expiration reports, onboarding status, or compliance summaries for use in your internal credentialing systems or HR software."
        }
      }
    ]
  };

  useEffect(() => {
    // Inject Schema.org structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqData);
    script.id = 'employer-faq-schema';
    
    // Remove existing schema if present
    const existingScript = document.getElementById('employer-faq-schema');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('employer-faq-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const faqSections = [
    {
      title: "Getting Started",
      questions: [
        {
          q: "What is Anesthesia Connect for Employers?",
          a: "Anesthesia Connect provides anesthesia groups and hospital departments with a centralized system to manage provider onboarding, compliance, credentialing documents, and expiring items. Employers can request documents, receive completed onboarding packets, track expirations, review reimbursements, and maintain compliance across all providers in one place."
        },
        {
          q: "How does onboarding work through the platform?",
          a: "You can send a digital onboarding packet or custom document request to any provider with one action. Providers submit all required documents directly into your dashboard. Everything uploads in real time, giving your credentialing team immediate access to licenses, certifications, immunizations, CEUs, and required employment forms."
        }
      ]
    },
    {
      title: "Account & Subscription",
      questions: [
        {
          q: "How much does Anesthesia Connect cost for employers?",
          a: "Employers pay a yearly enterprise subscription plus a per-provider fee. This gives your organization access to the full employer dashboard, document management tools, automated compliance tracking, and admin-level features."
        },
        {
          q: "What happens if one of our providers already has a personal subscription?",
          a: "When you add a provider to your enterprise account, their personal billing ends and their subscription is transferred under your organization. The provider keeps all their documents and settings, and you gain secure access to only the items they share with you."
        },
        {
          q: "What happens if a provider leaves our organization?",
          a: "When a provider is removed from your roster, your access to their documents is automatically revoked. Their account reverts back to an individual subscription, and you no longer have visibility into their vault."
        }
      ]
    },
    {
      title: "Document Management & Compliance",
      questions: [
        {
          q: "How do employers receive documents from providers?",
          a: "Providers upload their documents into their personal vault, and you receive them instantly in your employer dashboard. All files are organized by document type, expiration date, and provider."
        },
        {
          q: "Can we create custom onboarding packets or facility-specific requirements?",
          a: "Yes. You can build custom onboarding workflows, add organization-specific forms, create specialized packets for different facilities or provider roles, and reuse templates for new hires."
        },
        {
          q: "How does the system track compliance and expiring items?",
          a: "The dashboard automatically monitors expiration dates for licenses, certifications, immunizations, and more. You'll see upcoming expirations, overdue items, and compliance status for every provider at a glance."
        },
        {
          q: "Can employers download complete packets and send for credentialing?",
          a: "Yes. You can download a provider's full onboarding packet or export only specific documents. Files are formatted for easy forwarding to hospital credentialing offices or HR departments at a click of a button."
        }
      ]
    },
    {
      title: "Security & Access Control",
      questions: [
        {
          q: "Is provider data secure?",
          a: "All documents and data are encrypted at rest and in transit using SOC 2 Type II–aligned protocols. Access is restricted based on your administrator's permissions, and every action is logged for audit purposes."
        },
        {
          q: "Do employers gain automatic access to all provider documents?",
          a: "No. Employers only see what a provider submits or approves for sharing. Providers maintain full control over their vault, and employers cannot access anything outside the shared set."
        },
        {
          q: "Are shared links secure?",
          a: "Yes. Documents shared through the platform or via secure links are tokenized, encrypted, and time-limited. Employers receive controlled access, and links can be revoked at any time."
        }
      ]
    },
    {
      title: "Reimbursements & Administrative Tools",
      questions: [
        {
          q: "How do providers submit reimbursements to us?",
          a: "Providers can upload receipts for CEUs, license renewals, conferences, or approved expenses directly through their app. You can review, approve, or decline submissions and keep all reimbursement history organized in your dashboard."
        },
        {
          q: "Can we organize providers by facility, location, or employment type?",
          a: "Yes. Anesthesia Connect allows you to structure your provider roster across multiple hospitals, facilities, departments, or provider contracts. This makes compliance and document management organized and scalable."
        },
        {
          q: "Can we export data for internal systems?",
          a: "Yes. You can export provider documents, expiration reports, onboarding status, or compliance summaries for use in your internal credentialing systems or HR software."
        }
      ]
    }
  ];

  return (
    <section id="employer-faqs" className="mt-16 scroll-mt-[180px] md:scroll-mt-[240px]">
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-ac-text text-center mb-8">Employer FAQs – Anesthesia Connect</h2>
        
        <div className="space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              <h3 className="text-2xl font-semibold text-ac-text border-b border-gray-200 pb-3">{section.title}</h3>
              <dl className="space-y-6">
                {section.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="space-y-2">
                    <dt className="text-lg font-semibold text-ac-text">
                      {faq.q}
                    </dt>
                    <dd className="text-ac-text-light leading-relaxed pl-4">
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutTrust: React.FC = () => {
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
  const founders = [
    {
      name: "Jacob Rowley, DNP, CRNA",
      title: "Chief Executive Officer (CEO)",
      description: "Jacob is a practicing CRNA and co-founder of Future CRNA Learning Solutions. He is an advocate for improving professional standards across the field. Jacob leads strategic direction, partnerships, and ensures Anesthesia Connect continues evolving based on real-world feedback from both providers and employers.",
      image: `${SUPABASE_URL}/storage/v1/object/public/website/Jacob.png`
    },
    {
      name: "Muamer Mesinovic, MS, CRNA",
      title: "Chief Operational Officer (COO)",
      description: "Muamer is a practicing CRNA and co-founder of Future CRNA Learning Solutions. With a background in clinical education and business development, he understands the operational challenges both providers and employers face in onboarding and credentialing. He is passionate about helping anesthesia providers and employers streamline their experience through smarter, more efficient technology.",
      image: `${SUPABASE_URL}/storage/v1/object/public/website/Moe.png`
    },
    {
      name: "Stephen Stawicki, MS, CRNA",
      title: "Chief Strategy Officer (CSO)",
      description: "Stephen is a practicing CRNA and co-founder of Future CRNA Learning Solutions. With experience overseeing provider teams and coordinating onboarding workflows, he brings operational insight into how credentialing actually works behind the scenes. His focus is simplifying processes so providers can move faster with less administrative drag.",
      image: `${SUPABASE_URL}/storage/v1/object/public/website/Steve.png`
    },
    {
      name: "Chandra Geddam",
      title: "Chief Technology Officer (CTO)",
      description: "Chandra brings extensive experience across diverse technology sectors and platform development. With a focus on security, scalability, and user experience, he ensures Anesthesia Connect meets modern standards for data protection, reliability, and performance.",
      image: "/api/placeholder/150/150"
    }
  ];

  const qualifications = [
    "Over 30 years of combined anesthesia experience across hospital systems, outpatient centers, and academic institutions",
    "Deep understanding of both clinical workflows and administrative bottlenecks",
    "First-hand experience navigating the challenges of onboarding, compliance audits, and credentialing packet delays",
    "Driven by the daily realities of being on the frontlines — and building what we wished existed"
  ];


  return (
    <section id="about" className="section bg-white py-20">
      <div className="container-ac">
        {/* Mission & Vision */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-ac-text mb-4">Built for Anesthesia — Backed by Real Provider Experience</h2>
          <p className="text-lg text-ac-text-light max-w-4xl mx-auto mb-12">
            Anesthesia Connect was created by CRNAs who experienced the inefficiencies of onboarding, paperwork chasing, and credentialing firsthand — and knew the process needed to change. The platform was built with direct feedback from anesthesia employers, HR leaders, and credentialing teams to eliminate scattered files, redundant requests, outdated spreadsheets, and unnecessary administrative burden.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 mb-20">
          <div className="bg-blue-50 rounded-xl p-6 sm:rounded-2xl sm:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ac-text">Our Mission</h3>
            </div>
            <p className="text-ac-text-light leading-relaxed">
              To eliminate credentialing friction for anesthesia providers and employers by creating one secure place to manage and share professional information instantly.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 sm:rounded-2xl sm:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ac-text">Our Vision</h3>
            </div>
            <p className="text-ac-text-light leading-relaxed">
              A world where every anesthesia provider and employer can manage credentials, compliance, and onboarding with confidence and ease — where anesthesia departments bring talent onboard in days, not weeks. We are building the infrastructure that supports the future of anesthesia.
            </p>
          </div>
        </div>

        {/* Founders */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-ac-text text-center mb-12">Meet the Founders</h3>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {founders.map((founder, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {founder.image && founder.image !== "/api/placeholder/150/150" ? (
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <Users className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400" />
                  )}
                </div>
                <h4 className="text-lg font-bold text-ac-text mb-2">{founder.name}</h4>
                <p className="text-ac-primary font-semibold mb-4">{founder.title}</p>
                <p className="text-ac-text-light text-sm leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why We're Qualified */}
        <div className="bg-gray-50 rounded-xl p-6 sm:rounded-2xl sm:p-8 mb-16">
          <h3 className="text-2xl font-bold text-ac-text text-center mb-8">Why We're Qualified</h3>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-ac-text-light">{qualification}</span>
              </div>
            ))}
          </div>
        </div>


        {/* Contact Information */}
        <div id="contact-information" className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 scroll-mt-[180px] md:scroll-mt-[240px]">
          <h3 className="text-2xl font-bold text-ac-text text-center mb-8">Contact Information</h3>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 text-center max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-ac-text mb-2">Email</h4>
              <p className="text-ac-text-light text-sm sm:text-base">support@anesthesiaconnect.net</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-ac-text mb-2">Address</h4>
              <p className="text-ac-text-light text-sm sm:text-base">Mount Clemens, Michigan.</p>
            </div>
          </div>
        </div>

        {/* Provider FAQs */}
        {userType === 'provider' && (
          <ProviderFAQs />
        )}

        {/* Employer FAQs */}
        {userType === 'employer' && (
          <EmployerFAQs />
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-ac-text mb-4">Want to Join the Mission?</h3>
          <p className="text-lg text-ac-text-light mb-8 max-w-2xl mx-auto">
          We're always looking for forward-thinking CRNAs, educators, and anesthesia groups who want to improve how our profession works behind the scenes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#request-demo-pricing" onClick={handleScrollToDemo}>
              <Button size="lg" className="bg-ac-primary hover:bg-ac-primary/90 text-white px-8 py-4">
                Partner With Us
              </Button>
            </a>
            <a href="#request-demo-pricing" onClick={handleScrollToDemo}>
              <Button variant="outline" size="lg" className="border-ac-primary text-ac-primary hover:bg-ac-primary hover:text-white px-8 py-4">
                Schedule a Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrust;
