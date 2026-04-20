export const WHATSAPP_NUMBER = "5564999881043";

export const buildWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

/**
 * Opens WhatsApp in a separate tab without letting the preview iframe navigate to wa.me.
 */
export const openWhatsApp = (message?: string) => {
  const url = buildWhatsAppUrl(message);

  const popup = window.open("", "_blank", "noopener,noreferrer");
  if (popup) {
    popup.opener = null;
    popup.location.replace(url);
    return;
  }

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
};
