export const WHATSAPP_NUMBER = "5564999881043";

export const buildWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

/**
 * Opens WhatsApp from a direct user click without relying on anchor navigation,
 * avoiding iframe navigation issues in the Lovable preview.
 */
export const openWhatsApp = (message?: string) => {
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
};
