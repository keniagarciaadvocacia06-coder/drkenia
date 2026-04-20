export const WHATSAPP_NUMBER = "5564999881043";

export const buildWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const buildWhatsAppRelayUrl = (message?: string) => {
  const params = new URLSearchParams();
  if (message) params.set("text", message);
  return `/open-whatsapp${params.toString() ? `?${params.toString()}` : ""}`;
};

export const openWhatsApp = (message?: string) => {
  const targetUrl = buildWhatsAppUrl(message);
  const newWindow = window.open(targetUrl, "_blank", "noopener,noreferrer");

  if (newWindow) {
    newWindow.opener = null;
    return;
  }

  const link = document.createElement("a");
  link.href = targetUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
