"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function ScrollLifecycleManager() {
  const pathname = usePathname();
  const lenis = useLenis();
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!lenis) return;

    // Preserve anchor targets (e.g. #contact) or reset scroll to top on route change
    if (typeof window !== "undefined" && window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        lenis.scrollTo(target as HTMLElement, { immediate: true });
      }
    } else {
      lenis.scrollTo(0, { immediate: true });
    }
    lenis.resize();

    // 150ms debounced resize handler: ensures accordion/layout transitions complete without thrashing limits mid-animation
    const debouncedResize = () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        lenis.resize();
      }, 150);
    };

    // Observe document body size changes smoothly without thrashing
    const resizeObserver = new ResizeObserver(debouncedResize);

    if (typeof document !== "undefined" && document.body) {
      resizeObserver.observe(document.body);
    }

    // Single resize after fonts finish loading
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => {
        lenis.resize();
      });
    }

    return () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeObserver.disconnect();
    };
  }, [pathname, lenis]);

  return null;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      }}
    >
      <ScrollLifecycleManager />
      {children}
    </ReactLenis>
  );
}
