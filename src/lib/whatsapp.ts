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

const isEmbeddedPreview = () => {
  if (typeof window === "undefined") return false;

  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
};

const openInNewTab = (url: string) => {
  if (typeof document === "undefined") return;

  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const openWhatsApp = (message?: string) => {
  if (typeof window === "undefined") return;

  const webUrl = buildWhatsAppUrl(message);

  if (isEmbeddedPreview() || !isMobileDevice()) {
    openInNewTab(webUrl);
    return;
  }

  const fallbackTimer = window.setTimeout(() => {
    if (document.visibilityState === "visible") {
      openInNewTab(webUrl);
    }
  }, 900);

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
