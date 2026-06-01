// Módulo de utilidades para el rastreo de Google Ads en Next.js con tipado estricto

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Registra una conversión en Google Ads cuando el usuario hace clic en el botón de WhatsApp.
 * Consume de forma segura las variables de entorno de producción de Next.js.
 */
export function trackWhatsAppConversion(): void {
  const awId = "AW-18191810958";
  const label = "lixiCM3t-bYcEl6DxOJD";

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: `${awId}/${label}`,
      value: 1.0,
      currency: "CLP",
    });
    console.log("📈 Google Ads: Conversión de WhatsApp registrada exitosamente con prefijo AW-.");
  } else {
    console.warn("⚠️ Advertencia: window.gtag no está disponible o no se ha inicializado.");
  }
}
