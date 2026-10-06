"use server";

export interface ContactState {
  success: boolean;
  message?: string;
  errors?: {
    name?: string;
    email?: string;
    projectType?: string;
    budget?: string;
    message?: string;
  };
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = formData.get("_gotcha");
  // Silently disregard bot submissions that filled the hidden field
  if (honeypot && String(honeypot).trim().length > 0) {
    return {
      success: true,
      message: "¡Mensaje recibido correctamente!",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: NonNullable<ContactState["errors"]> = {};

  if (!name || name.length < 2) {
    errors.name = "Por favor ingresá tu nombre (mínimo 2 caracteres).";
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    errors.email = "Ingresá un correo electrónico válido.";
  }

  if (!projectType) {
    errors.projectType = "Seleccioná el tipo de proyecto.";
  }

  if (!message || message.length < 10) {
    errors.message = "Por favor contame brevemente sobre tu proyecto (mínimo 10 caracteres).";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[Contact Action] RESEND_API_KEY no está configurada.");
    return {
      success: false,
      message:
        "El servicio de envío automático está temporalmente en configuración. Por favor contactame directamente por WhatsApp al +54 9 263 461-6717 o por email a eliasjuancruz303@gmail.com.",
    };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? "eliasjuancruz303@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Nuevo contacto desde el portfolio: ${name} (${projectType})`,
        text: `Nombre: ${name}\nEmail: ${email}\nTipo de proyecto: ${projectType}\nPresupuesto estimado: ${budget || "A definir"}\n\nMensaje:\n${message}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.6; color: #111;">
            <h2 style="color: #111; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Tipo de proyecto:</strong> ${escapeHtml(projectType)}</p>
            <p><strong>Presupuesto:</strong> ${escapeHtml(budget || "A definir")}</p>
            <h3 style="margin-top: 24px; color: #333;">Mensaje:</h3>
            <div style="background: #f4f4f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Contact Action] Error de Resend:", response.status, errorText);
      return {
        success: false,
        message:
          "No pudimos enviar tu mensaje en este momento. Por favor escribime directamente por WhatsApp o a eliasjuancruz303@gmail.com.",
      };
    }

    return {
      success: true,
      message:
        "¡Mensaje enviado con éxito! Recibí tu consulta y te voy a responder a la brevedad.",
    };
  } catch (error) {
    console.error("[Contact Action] Error de red inesperado:", error);
    return {
      success: false,
      message:
        "Ocurrió un error inesperado de conexión. Por favor intentá nuevamente o escribime por WhatsApp.",
    };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
