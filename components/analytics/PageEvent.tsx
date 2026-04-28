'use client';

import { useEffect } from 'react';

/**
 * Tiny client component that fires a single GA4 event on mount, then nothing.
 *
 * Used to mark conversion-relevant pages (/pricing, /get-started, etc.) so
 * those events show up in the Conversions report and Jono can mark them as
 * Key events in GA4 admin. Keeps the parent page server-rendered — this is
 * the only "use client" island.
 *
 * Why not use existing page_view events? Because gtag's auto page_view fires
 * for everything; we want a small set of named events we can promote to Key
 * events without polluting the Key-event list with every URL.
 */
export default function PageEvent({
  name,
  params,
}: {
  name: string;
  params?: Record<string, unknown>;
}) {
  useEffect(() => {
    try {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.('event', name, params ?? {});
    } catch {
      /* gtag not available — non-fatal */
    }
    // We deliberately fire once per mount; if the user navigates away and
    // back, GA's page_view will catch it and we'll fire again.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
