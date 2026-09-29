import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Index from '@acweb/pages/Index';
import Terms from '@acweb/pages/Terms';
import Privacy from '@acweb/pages/Privacy';
import Cookies from '@acweb/pages/Cookies';
import EULA from '@acweb/pages/EULA';
import PublicJobs from '@acweb/pages/PublicJobs';
import Credentialing from '@acweb/pages/Credentialing';
import Compliance from '@acweb/pages/Compliance';
import Scheduling from '@acweb/pages/Scheduling';
import PayerEnrollment from '@acweb/pages/PayerEnrollment';
import Reimbursement from '@acweb/pages/Reimbursement';
import DocumentStorage from '@acweb/pages/DocumentStorage';
import FacilityManagement from '@acweb/pages/FacilityManagement';
import AutomatedCredentialingPacket from '@acweb/pages/AutomatedCredentialingPacket';
import Onboarding from '@acweb/pages/Onboarding';
import ScrollToTop from '@acweb/components/ScrollToTop';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/eula" element={<EULA />} />
        <Route path="/jobs" element={<PublicJobs />} />
        <Route path="/credentialing" element={<Credentialing />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/payer-enrollment" element={<PayerEnrollment />} />
        <Route path="/reimbursement" element={<Reimbursement />} />
        <Route path="/document-storage" element={<DocumentStorage />} />
        <Route path="/facility-management" element={<FacilityManagement />} />
        <Route path="/automated-credentialing-packet" element={<AutomatedCredentialingPacket />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
