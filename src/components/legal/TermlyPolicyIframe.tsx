import React, { useEffect, useState } from 'react';
import { buildTermlyPolicyViewerUrl } from '@acweb/lib/legal/termlyPolicy';

interface TermlyPolicyIframeProps {
  policyId: string;
  title: string;
  loadingLabel?: string;
}

/**
 * Embeds a Termly policy via iframe (Termly-hosted policy viewer).
 * Compatible with strict CSP: no third-party script eval in the parent page.
 * Requires frame-src https://app.termly.io (already set in vercel.json).
 */
export const TermlyPolicyIframe: React.FC<TermlyPolicyIframeProps> = ({
  policyId,
  title,
  loadingLabel = 'Loading policy...',
}) => {
  const [loading, setLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);
  const src = buildTermlyPolicyViewerUrl(policyId);

  useEffect(() => {
    setLoading(true);
    setLoadFailed(false);

    const timeoutId = window.setTimeout(() => {
      setLoading((current) => {
        if (current) {
          setLoadFailed(true);
          return false;
        }
        return current;
      });
    }, 30000);

    return () => window.clearTimeout(timeoutId);
  }, [policyId]);

  const handleRetry = () => {
    setLoading(true);
    setLoadFailed(false);
    window.location.reload();
  };

  return (
    <div className="relative w-full" style={{ minHeight: '600px' }}>
      {loading && !loadFailed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center py-12">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-b-2 border-ac-primary mb-4" />
          <p className="text-ac-text-light">{loadingLabel}</p>
        </div>
      )}

      {loadFailed && (
        <div className="py-12 text-center">
          <p className="mb-4 text-red-600">
            {title} is taking longer than expected to load. Please try again.
          </p>
          <button
            type="button"
            onClick={handleRetry}
            className="rounded bg-ac-primary px-4 py-2 text-white transition-colors hover:bg-ac-primary-dark"
          >
            Retry
          </button>
        </div>
      )}

      {!loadFailed && (
        <iframe
          key={policyId}
          title={title}
          src={src}
          className={`w-full border-0 ${loading ? 'opacity-0' : 'opacity-100'}`}
          style={{ minHeight: '600px', height: '75vh' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => {
            setLoading(false);
            setLoadFailed(false);
          }}
        />
      )}
    </div>
  );
};
