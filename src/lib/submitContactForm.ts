/**
 * Contact form payload. Must match form fields on Contact page and ContactSection.
 */
export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ENDPOINT =
  (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined)?.trim() ||
  "https://formspree.io/f/mnjbgedz";

export type SubmitResult = { ok: true } | { ok: false; error: "network" | "rejected" };

/**
 * Submits contact form data to the configured endpoint (e.g. Formspree).
 * Set VITE_CONTACT_FORM_ENDPOINT in production to your form endpoint URL.
 */
export async function submitContactForm(data: ContactFormData): Promise<SubmitResult> {
  if (!ENDPOINT?.trim()) {
    return { ok: false, error: "rejected" };
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) return { ok: true };
    return { ok: false, error: "rejected" };
  } catch {
    return { ok: false, error: "network" };
  }
}

export function isContactFormConfigured(): boolean {
  return Boolean(ENDPOINT?.trim());
}
