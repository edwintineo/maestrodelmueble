import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, telefono, servicio, mensaje } = await request.json()

    // Validar campos requeridos
    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json({ error: "Todos los campos obligatorios deben ser completados" }, { status: 400 })
    }

    // Configurar el transportador de correo con Zoho Mail
    const transporter = nodemailer.createTransporter({
      host: "smtp.zoho.com",
      port: 587,
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    })

    // Configurar el correo para el administrador
    const adminMailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: "victor@maestrodelmueble.cl",
      subject: `Nueva consulta de ${nombre} - El Maestro del Mueble`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #f97316; margin: 0;">El Maestro del Mueble</h1>
            <p style="color: #666; margin: 5px 0;">Nueva consulta desde el sitio web</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">Información del Cliente</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Nombre:</td>
                <td style="padding: 8px 0; color: #333;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px 0; color: #333;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Teléfono:</td>
                <td style="padding: 8px 0; color: #333;">${telefono}</td>
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
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${mensaje}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Este mensaje fue enviado desde el formulario de contacto de 
              <strong>El Maestro del Mueble</strong>
            </p>
            <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">
              Fecha: ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}
            </p>
          </div>
        </div>
      `,
    }

    // Configurar el correo de confirmación para el cliente
    const clientMailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: email,
      subject: "Confirmación de consulta - El Maestro del Mueble",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #f97316; margin: 0;">El Maestro del Mueble</h1>
            <p style="color: #666; margin: 5px 0;">Gracias por contactarnos</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">¡Hola ${nombre}!</h2>
            <p style="color: #555; line-height: 1.6;">
              Hemos recibido tu consulta y nos pondremos en contacto contigo en las próximas 24 horas.
            </p>
            <p style="color: #555; line-height: 1.6;">
              Mientras tanto, puedes contactarnos directamente:
            </p>
            <ul style="color: #555; line-height: 1.6;">
              <li><strong>Teléfono:</strong> +56 9 22596802</li>
              <li><strong>WhatsApp:</strong> +56 9 22596802</li>
              <li><strong>Email:</strong> victor@maestrodelmueble.cl</li>
            </ul>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Resumen de tu consulta:</h3>
            <p style="color: #555;"><strong>Servicio de interés:</strong> ${servicio || "No especificado"}</p>
            <p style="color: #555;"><strong>Mensaje:</strong></p>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap; background-color: #f8f9fa; padding: 15px; border-radius: 5px;">${mensaje}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              <strong>El Maestro del Mueble</strong> - Creando muebles únicos desde 2008
            </p>
            <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">
              Santiago, Región Metropolitana - Chile
            </p>
          </div>
        </div>
      `,
    }

    // Enviar ambos correos
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(clientMailOptions)

    return NextResponse.json({ message: "Correos enviados exitosamente" }, { status: 200 })
  } catch (error) {
    console.error("Error al enviar correo:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
