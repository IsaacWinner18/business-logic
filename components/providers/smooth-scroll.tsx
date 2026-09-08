"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

function ScrollLifecycleManager() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Reset scroll to top on route change immediately
    lenis.scrollTo(0, { immediate: true });
    lenis.resize();

    // Observe document body size changes (image loading, dynamic content rendering)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });

    if (typeof document !== "undefined" && document.body) {
      resizeObserver.observe(document.body);
    }

    // Staggered resize events to capture late-loading images and font swaps
    const timers = [
      setTimeout(() => lenis.resize(), 100),
      setTimeout(() => lenis.resize(), 400),
      setTimeout(() => lenis.resize(), 1000),
      setTimeout(() => lenis.resize(), 2500),
    ];

    return () => {
      resizeObserver.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname, lenis]);

  return null;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <ScrollLifecycleManager />
      {children}
    </ReactLenis>
  );
}
