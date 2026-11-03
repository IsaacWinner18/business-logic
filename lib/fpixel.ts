export const FB_PIXEL_ID = "1674160167651592";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Track standard or custom Meta Pixel events with resilience against async script loading delays.
 */
export const trackMetaEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window === "undefined") return;

  if (typeof window.fbq === "function") {
    try {
      if (params) {
        window.fbq("track", eventName, params);
      } else {
        window.fbq("track", eventName);
      }
    } catch {
      // Ignore if blocked by ad blockers
    }
    return;
  }

  // If fbq is still initializing asynchronously, poll briefly to ensure event is not dropped
  let attempts = 0;
  const interval = setInterval(() => {
    attempts++;
    if (typeof window.fbq === "function") {
      try {
        if (params) {
          window.fbq("track", eventName, params);
        } else {
          window.fbq("track", eventName);
        }
      } catch {
        // Ignore
      }
      clearInterval(interval);
    } else if (attempts >= 15) {
      clearInterval(interval);
    }
  }, 150);
};

