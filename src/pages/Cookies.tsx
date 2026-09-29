import React, { useEffect } from 'react';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import { TermlyPolicyIframe } from '@acweb/components/legal/TermlyPolicyIframe';

const TERMLY_COOKIES_POLICY_ID = 'b125e735-b947-4d09-b0d2-73cfeb8e7b63';

const Cookies: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 pt-24">
        <div className="container-ac">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-ac-md">
            <TermlyPolicyIframe
              policyId={TERMLY_COOKIES_POLICY_ID}
              title="Cookie Policy"
              loadingLabel="Loading cookie policy..."
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
