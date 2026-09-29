import React, { useEffect } from 'react';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import { TermlyPolicyIframe } from '@acweb/components/legal/TermlyPolicyIframe';

const TERMLY_POLICY_ID = '7861707a-c247-48e0-89f6-3e1b6d51d148';

const Privacy: React.FC = () => {
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
              policyId={TERMLY_POLICY_ID}
              title="Privacy Policy"
              loadingLabel="Loading privacy policy..."
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
