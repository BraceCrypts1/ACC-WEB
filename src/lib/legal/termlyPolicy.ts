/** Termly policy viewer (iframe) — avoids embed-policy.min.js which requires CSP unsafe-eval. */
const TERMLY_ORIGIN = 'https://app.termly.io';

export function buildTermlyPolicyViewerUrl(policyUuid: string): string {
  const url = new URL('/policy-viewer/policy.html', TERMLY_ORIGIN);
  url.searchParams.set('policyUUID', policyUuid);
  return url.href;
}
