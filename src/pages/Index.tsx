
import React, { useEffect, useRef } from 'react';
import { UserTypeProvider, useUserType } from '@acweb/contexts/UserTypeContext';
import Header from '@acweb/components/Header';
import UserTypeTabs from '@acweb/components/UserTypeTabs';
import Hero from '@acweb/components/Hero';
import PainPoints from '@acweb/components/PainPoints';
import Testimonials from '@acweb/components/Testimonials';
import Pricing from '@acweb/components/Pricing';
import Footer from '@acweb/components/Footer';
import EmployerPage from '@acweb/components/EmployerPage';


const IndexContent: React.FC = () => {
  const { userType, setUserType } = useUserType();
  /** Element id to scroll to after tab switch (DOM only exists for correct userType). */
  const pendingScrollTargetId = useRef<string | null>(null);
  /** Avoid stale closures in hash handler without re-running on every userType change (prevents double-scroll). */
  const userTypeRef = useRef(userType);
  userTypeRef.current = userType;

  const scrollToSectionById = (elementId: string, urlHash: string) => {
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;

    const headerElement = document.querySelector('header');
    const tabsElement = document.querySelector('[data-user-type-tabs]') as HTMLElement;

    const headerHeight = headerElement ? headerElement.offsetHeight : 160;
    const tabsHeight = tabsElement ? tabsElement.offsetHeight : 88;
    const totalOffset = headerHeight + tabsHeight;

    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', `#${urlHash}`);
  };

  /**
   * Handle hash navigation on page load and hash changes.
   * - #features → provider tab + "For Anesthesia Providers" section
   * - #request-demo-pricing → employer tab + "Request Demo & Pricing" (only rendered for employers in Pricing.tsx)
   */
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (!hash) {
        pendingScrollTargetId.current = null;
        return;
      }

      const targetId = hash.startsWith('#') ? hash.slice(1) : hash;

      if (targetId === 'features') {
        const currentUserType = userTypeRef.current;
        if (currentUserType !== 'provider') {
          setUserType('provider');
          pendingScrollTargetId.current = 'for-anesthesia-providers';
        } else {
          setTimeout(() => {
            scrollToSectionById('for-anesthesia-providers', 'for-anesthesia-providers');
          }, 100);
        }
        return;
      }

      if (targetId === 'request-demo-pricing') {
        const currentUserType = userTypeRef.current;
        if (currentUserType !== 'employer') {
          setUserType('employer');
          pendingScrollTargetId.current = 'request-demo-pricing';
        } else {
          setTimeout(() => {
            scrollToSectionById('request-demo-pricing', 'request-demo-pricing');
          }, 100);
        }
        return;
      }

      pendingScrollTargetId.current = null;
    };

    handleHashNavigation();

    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [setUserType]);

  /**
   * After tab switch, scroll to the section that only exists for that tab.
   */
  useEffect(() => {
    const pending = pendingScrollTargetId.current;
    if (!pending) return;

    const needsProvider = pending === 'for-anesthesia-providers';
    const needsEmployer = pending === 'request-demo-pricing';
    if (needsProvider && userType !== 'provider') return;
    if (needsEmployer && userType !== 'employer') return;

    const urlHash = pending === 'for-anesthesia-providers' ? 'for-anesthesia-providers' : pending;

    setTimeout(() => {
      scrollToSectionById(pending, urlHash);
      pendingScrollTargetId.current = null;
    }, 200);
  }, [userType]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <UserTypeTabs />
      <main className="flex-grow pt-40 md:pt-52">
        {userType === 'employer' ? (
          <>
            <EmployerPage />
            <Pricing />
          </>
        ) : (
          <>
            <Hero />
            <PainPoints />
            <Pricing />
            <Testimonials />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <UserTypeProvider>
      <IndexContent />
    </UserTypeProvider>
  );
};

export default Index;
