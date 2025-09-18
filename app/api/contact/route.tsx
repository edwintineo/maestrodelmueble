import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, telefono, servicio, mensaje } = await request.json()

    // Validar campos requeridos
    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json({ error: "Todos los campos obligatorios deben ser completados" }, { status: 400 })
    }

    // Validar que la API key de Resend esté configurada
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está configurada")
      return NextResponse.json({ error: "Configuración del servidor incompleta" }, { status: 500 })
    }

    console.log("Enviando correo con Resend...")

    // Correo para el administrador
    const adminEmailResult = await resend.emails.send({
      from: "El Maestro del Mueble <onboarding@resend.dev>", // Dominio verificado de Resend
      to: ["victor@maestrodelmueble.cl"],
      subject: `Nueva consulta de ${nombre} - El Maestro del Mueble`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #f97316; margin: 0; font-size: 28px;">El Maestro del Mueble</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Nueva Consulta Recibida</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #f97316;">
            <h2 style="color: #333; margin-top: 0;">Información del Cliente</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Nombre:</td>
                <td style="padding: 8px 0; color: #333;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Teléfono:</td>
                <td style="padding: 8px 0; color: #333;"><a href="tel:${telefono}" style="color: #f97316;">${telefono}</a></td>
              </tr>
              ${
                servicio
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Servicio:</td>
                <td style="padding: 8px 0; color: #333;">${servicio}</td>
              </tr>
              `
                  : ""
              }
            </table>
          </div>
          
          <div style="background-color: #ffffff; padding: 25px; border: 2px solid #f97316; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #f97316; margin-top: 0;">Mensaje del Cliente:</h3>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap; margin: 0;">${mensaje}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f97316; border-radius: 10px;">
            <p style="color: white; margin: 0; font-size: 14px;">
              📅 Recibido el: ${new Date().toLocaleString("es-CL", {
                timeZone: "America/Santiago",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              Este correo fue enviado automáticamente desde el formulario de contacto de maestrodelmueble.cl
            </p>
          </div>
        </div>
      `,
    })

    console.log("Resultado del correo admin:", adminEmailResult)

    // Correo de confirmación para el cliente
    const clientEmailResult = await resend.emails.send({
      from: "El Maestro del Mueble <onboarding@resend.dev>",
      to: [email],
      subject: "Hemos recibido tu consulta - El Maestro del Mueble",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #f97316; margin: 0; font-size: 28px;">El Maestro del Mueble</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Confirmación de Consulta</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin: 20px 0; text-align: center;">
            <h2 style="color: #333; margin-top: 0;">¡Gracias por contactarnos, ${nombre}!</h2>
            <p style="color: #666; font-size: 16px; line-height: 1.6;">
              Hemos recibido tu consulta y nos pondremos en contacto contigo muy pronto para ayudarte con tu proyecto.
            </p>
          </div>
          
          <div style="background-color: #ffffff; padding: 25px; border: 2px solid #f97316; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #f97316; margin-top: 0;">Resumen de tu consulta:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${
                servicio
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Servicio de interés:</td>
                <td style="padding: 8px 0; color: #333;">${servicio}</td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Fecha de consulta:</td>
                <td style="padding: 8px 0; color: #333;">${new Date().toLocaleDateString("es-CL")}</td>
              </tr>
            </table>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee;">
              <p style="color: #666; margin: 0; font-style: italic;">"${mensaje.substring(0, 100)}${mensaje.length > 100 ? "..." : ""}"</p>
            </div>
          </div>
          
          <div style="background-color: #f97316; padding: 25px; border-radius: 10px; margin: 20px 0; text-align: center;">
            <h3 style="color: white; margin-top: 0;">¿Necesitas contactarnos urgente?</h3>
            <p style="color: white; margin: 10px 0;">
              📞 <a href="tel:+56922596802" style="color: white; text-decoration: none;">+56 9 22596802</a><br>
              📧 <a href="mailto:victor@maestrodelmueble.cl" style="color: white; text-decoration: none;">victor@maestrodelmueble.cl</a><br>
              💬 <a href="https://wa.me/56922596802" style="color: white; text-decoration: none;">WhatsApp</a>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              El Maestro del Mueble - Especialistas en mueblería personalizada<br>
              Santiago, Región Metropolitana
            </p>
          </div>
        </div>
      `,
    })

    console.log("Resultado del correo cliente:", clientEmailResult)

    return NextResponse.json(
      {
        message: "Mensajes enviados exitosamente",
        adminEmailId: adminEmailResult.data?.id,
        clientEmailId: clientEmailResult.data?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error completo al enviar correos:", error)

    return NextResponse.json(
      {
        error: "Error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente por WhatsApp.",
        details: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}
