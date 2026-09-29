import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { useUserType } from '@acweb/contexts/UserTypeContext';

const Testimonials: React.FC = () => {
  const { userType } = useUserType();

  const providerTestimonials = [
    {
      quote: "I never miss a CEU deadline anymore. This app is a game-changer for my credentialing.",
      author: "Sarah M.",
      role: "CRNA, New York",
      rating: 5
    },
    {
      quote: "Finally something built by people who get it. Every CRNA I know dreads credentialing. It's slow, redundant, and stressful. Anesthesia Connect cut out the back-and-forth emails, and now I get reminders before anything expires.",
      author: "Evan L.",
      role: "CRNA, Locum Provider",
      rating: 5
    },
    {
      quote: "I can share my entire credentialing packet with one click. No more scanning, emailing, or losing documents.",
      author: "Dr. Jennifer K.",
      role: "CRNA, California",
      rating: 5
    }
  ];

  const employerTestimonials = [
    {
      quote: "This app saved us hours of onboarding time every week. Our new hires are ready to work in days, not weeks.",
      author: "Clinical Director",
      role: "Regional Anesthesia Group",
      rating: 5
    },
    {
      quote: "We now onboard in days, not weeks. Before Anesthesia Connect, it was chaos. Now every provider has their own portal, we track expirations in real time, and I can export a full compliance report in under a minute.",
      author: "Danielle S.",
      role: "Clinical Administrator",
      rating: 5
    },
    {
      quote: "The compliance tracking alone is worth the investment. We never miss a license renewal anymore.",
      author: "HR Director",
      role: "Hospital System",
      rating: 5
    }
  ];

  // Don't show Testimonials section for providers or residents
  if (userType === 'provider' || userType === 'resident') {
    return null;
  }

  const testimonials = employerTestimonials;

  const employerCaseStudy = {
    title: "Metro Anesthesia Group (25+ providers)",
    before: "Credentialing files spread across Dropbox, emails, and spreadsheets. Expired licenses were often discovered during reappointment or audits.",
    after: "Full migration to Anesthesia Connect, centralizing all credentialing data with expiration tracking and automated reminders.",
    results: [
      "46% reduction in onboarding time for new hires",
      "100% document compliance before audits",
      "No missed license renewals in 12 months"
    ],
    testimonial: {
      quote: "We now onboard in days, not weeks. Before Anesthesia Connect, it was chaos. Now every provider has their own portal, we track expirations in real time, and I can export a full compliance report in under a minute. I'll never go back.",
      author: "Danielle S.",
      role: "Clinical Administrator"
    }
  };

  const caseStudy = employerCaseStudy;

  return (
    <section className="section bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container-ac">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-ac-text mb-4">
            What Employers Are Saying
          </h2>
          <p className="text-lg text-ac-text-light max-w-3xl mx-auto">
            Built for anesthesia. Proven in the field.
          </p>
        </div>

        {/* Individual Testimonials */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 sm:rounded-2xl sm:p-8">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-ac-primary mb-4" />
              <p className="text-ac-text-light mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-ac-text">{testimonial.author}</p>
                <p className="text-sm text-ac-text-light">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 sm:rounded-2xl sm:p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-ac-text mb-2">Case Study</h3>
            <p className="text-lg text-ac-primary font-semibold">{caseStudy.title}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-ac-text mb-4 flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold">Ã—</span>
                </div>
                Before
              </h4>
              <p className="text-ac-text-light leading-relaxed">{caseStudy.before}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-ac-text mb-4 flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">âœ“</span>
                </div>
                After
              </h4>
              <p className="text-ac-text-light leading-relaxed">{caseStudy.after}</p>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-semibold text-ac-text mb-4">Results:</h4>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-ac-primary mr-3 flex-shrink-0" />
                  <span className="text-ac-text-light">{result}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <Quote className="h-6 w-6 text-ac-primary mb-4" />
            <p className="text-ac-text-light mb-4 leading-relaxed">"{caseStudy.testimonial.quote}"</p>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-semibold text-ac-text">{caseStudy.testimonial.author}</p>
              <p className="text-sm text-ac-text-light">{caseStudy.testimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-ac-text mb-8">Trusted by Leading Organizations</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
            <div className="bg-gray-200 rounded-lg px-6 py-3">
              <span className="text-ac-text-light font-medium">Future CRNA Learning Solutions</span>
            </div>
            <div className="bg-gray-200 rounded-lg px-6 py-3">
              <span className="text-ac-text-light font-medium">Michigan State University</span>
            </div>
            <div className="bg-gray-200 rounded-lg px-6 py-3">
              <span className="text-ac-text-light font-medium">SimVana</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
