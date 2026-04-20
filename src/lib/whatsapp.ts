export const WHATSAPP_NUMBER = "5564999881043";

export const buildWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

/**
 * Navigates WhatsApp in the top window to escape the Lovable preview iframe,
 * avoiding ERR_BLOCKED_BY_RESPONSE from loading WhatsApp inside the frame.
 */
export const openWhatsApp = (message?: string) => {
  const url = buildWhatsAppUrl(message);

  try {
    if (window.top) {
      window.top.location.href = url;
      return;
    }
  } catch {
    // fallback below
  }

  window.location.href = url;
};
