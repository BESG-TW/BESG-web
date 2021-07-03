declare global {
  interface Window {
    gtag: any;
  }
}

// ref:https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js
export const GA_TRACKING_ID = process.env['GA_ID'];

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
