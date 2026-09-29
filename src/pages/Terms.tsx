
import React, { useEffect } from 'react';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import { TermlyPolicyIframe } from '@acweb/components/legal/TermlyPolicyIframe';

const TERMLY_TERMS_POLICY_ID = 'a715587a-0491-42d5-89a3-3bb1c7a3b085';

const Terms: React.FC = () => {
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
              policyId={TERMLY_TERMS_POLICY_ID}
              title="Terms of Service"
              loadingLabel="Loading Terms of Service..."
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
