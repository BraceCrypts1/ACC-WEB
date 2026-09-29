import React, { useEffect } from 'react';
import Header from '@acweb/components/Header';
import Footer from '@acweb/components/Footer';
import { TermlyPolicyIframe } from '@acweb/components/legal/TermlyPolicyIframe';

const TERMLY_EULA_POLICY_ID = '651d1767-3b60-43af-ac58-465eeba1c7b4';

const EULA: React.FC = () => {
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
              policyId={TERMLY_EULA_POLICY_ID}
              title="End User License Agreement"
              loadingLabel="Loading End User License Agreement..."
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EULA;
