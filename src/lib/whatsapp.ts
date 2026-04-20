export const WHATSAPP_NUMBER = "5564999881043";

export const buildWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

const buildWhatsAppAppUrl = (message?: string) => {
  const base = `whatsapp://send?phone=${WHATSAPP_NUMBER}`;
  return message ? `${base}&text=${encodeURIComponent(message)}` : base;
};

const isMobileDevice = () => {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};

export const openWhatsApp = (message?: string) => {
  if (typeof window === "undefined") return;

  const webUrl = buildWhatsAppUrl(message);

  if (!isMobileDevice()) {
    window.open(webUrl, "_blank", "noopener,noreferrer");
    return;
  }

  const fallbackTimer = window.setTimeout(() => {
    if (document.visibilityState === "visible") {
      window.location.href = webUrl;
    }
  }, 1200);

  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.visibilityState === "hidden") {
        window.clearTimeout(fallbackTimer);
      }
    },
    { once: true },
  );

  window.location.href = buildWhatsAppAppUrl(message);
};
