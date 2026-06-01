import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "re_temp_holder")

export async function POST(request: NextRequest) {
  console.log("=== 🚀 INICIO API CONTACT ===")

  try {
    // Verificar que todas las variables de entorno estén configuradas
    const requiredEnvVars = {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      FROM_EMAIL: process.env.FROM_EMAIL,
      CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    }

    const missingVars = Object.entries(requiredEnvVars)
      .filter(([_, value]) => !value)
      .map(([key, _]) => key)

    if (missingVars.length > 0) {
      console.error("❌ Variables de entorno faltantes:", missingVars)
      return NextResponse.json(
        {
          error: "Configuración del servidor incompleta",
          details: `Variables faltantes: ${missingVars.join(", ")}`,
        },
        { status: 500 },
      )
    }

    console.log("✅ Variables de entorno configuradas:")
    console.log("   📧 FROM_EMAIL:", process.env.FROM_EMAIL)
    console.log("   📬 CONTACT_EMAIL:", process.env.CONTACT_EMAIL)
    console.log("   🔑 RESEND_API_KEY:", process.env.RESEND_API_KEY?.substring(0, 10) + "...")

    // Obtener datos del formulario
    const body = await request.json()
    console.log("📝 Datos recibidos:", {
      nombre: body.nombre,
      email: body.email,
      telefono: body.telefono,
      servicio: body.servicio || "No especificado",
      mensajeLength: body.mensaje?.length || 0,
    })

    const { nombre, email, telefono, servicio, mensaje } = body

    // Validar campos requeridos
    if (!nombre || !email || !telefono || !mensaje) {
      console.error("❌ Campos faltantes:", {
        nombre: !!nombre,
        email: !!email,
        telefono: !!telefono,
        mensaje: !!mensaje,
      })
      return NextResponse.json({ error: "Todos los campos obligatorios deben ser completados" }, { status: 400 })
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.error("❌ Email inválido:", email)
      return NextResponse.json({ error: "El formato del email no es válido" }, { status: 400 })
    }

    console.log("📧 Enviando correo al administrador...")

    // Correo para el administrador
    const adminEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: [process.env.CONTACT_EMAIL!],
      subject: `🔨 Nueva consulta de ${nombre} - El Maestro del Mueble`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px; background: linear-gradient(135deg, #f97316, #ea580c); padding: 20px; border-radius: 10px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🔨 El Maestro del Mueble</h1>
            <p style="color: white; margin: 5px 0 0 0; opacity: 0.9;">Nueva Consulta Recibida</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #f97316;">
            <h2 style="color: #333; margin-top: 0; display: flex; align-items: center;">
              👤 Información del Cliente
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #555; width: 120px;">📝 Nombre:</td>
                <td style="padding: 12px 0; color: #333; font-size: 16px;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #555;">📧 Email:</td>
                <td style="padding: 12px 0; color: #333;">
                  <a href="mailto:${email}" style="color: #f97316; text-decoration: none; font-weight: 500;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #555;">📞 Teléfono:</td>
                <td style="padding: 12px 0; color: #333;">
                  <a href="tel:${telefono}" style="color: #f97316; text-decoration: none; font-weight: 500;">${telefono}</a>
                </td>
              </tr>
              ${
                servicio
                  ? `
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #555;">🔧 Servicio:</td>
                <td style="padding: 12px 0; color: #333;">
                  <span style="background: #f97316; color: white; padding: 8px 12px; border-radius: 5px; display: inline-block;">${servicio}</span>
                </td>
              </tr>
              `
                  : ""
              }
            </table>
          </div>
          
          <div style="background-color: #ffffff; padding: 25px; border: 2px solid #f97316; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #f97316; margin-top: 0; display: flex; align-items: center;">
              💬 Mensaje del Cliente:
            </h3>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316;">
              <p style="color: #333; line-height: 1.8; white-space: pre-wrap; margin: 0; font-size: 15px;">${mensaje}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #f97316, #ea580c); border-radius: 10px;">
            <p style="color: white; margin: 0; font-size: 14px; opacity: 0.9;">
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
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              🌐 Este correo fue enviado automáticamente desde el formulario de contacto de <strong>maestrodelmueble.cl</strong>
            </p>
          </div>
        </div>
      `,
    })

    console.log("📧 Resultado correo admin:", {
      success: !adminEmailResult.error,
      id: adminEmailResult.data?.id,
      error: adminEmailResult.error?.message,
    })

    if (adminEmailResult.error) {
      console.error("❌ Error enviando correo admin:", adminEmailResult.error)
      return NextResponse.json(
        {
          error: `Error enviando correo al administrador: ${adminEmailResult.error.message}`,
        },
        { status: 500 },
      )
    }

    console.log("✅ Correo admin enviado exitosamente. ID:", adminEmailResult.data?.id)

    console.log("📧 Enviando correo de confirmación al cliente...")

    // Correo de confirmación para el cliente
    const clientEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: [email],
      subject: "✅ Hemos recibido tu consulta - El Maestro del Mueble",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px; background: linear-gradient(135deg, #f97316, #ea580c); padding: 20px; border-radius: 10px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🔨 El Maestro del Mueble</h1>
            <p style="color: white; margin: 5px 0 0 0; opacity: 0.9;">Confirmación de Consulta</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin: 20px 0; text-align: center;">
            <h2 style="color: #333; margin-top: 0;">¡Gracias por contactarnos, ${nombre}! 🙌</h2>
            <p style="color: #666; font-size: 16px; line-height: 1.6;">
              Hemos recibido tu consulta y nos pondremos en contacto contigo <strong>muy pronto</strong> para ayudarte con tu proyecto de mueblería.
            </p>
          </div>
          
          <div style="background-color: #ffffff; padding: 25px; border: 2px solid #f97316; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #f97316; margin-top: 0;">📋 Resumen de tu consulta:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${
                servicio
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">🔧 Servicio de interés:</td>
                <td style="padding: 8px 0; color: #333;">
                  <span style="background: #f97316; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">${servicio}</span>
                </td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">📅 Fecha de consulta:</td>
                <td style="padding: 8px 0; color: #333;">${new Date().toLocaleDateString("es-CL")}</td>
              </tr>
            </table>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee;">
              <p style="color: #666; margin: 0; font-style: italic; background: #f8f9fa; padding: 15px; border-radius: 8px;">
                "${mensaje.substring(0, 150)}${mensaje.length > 150 ? "..." : ""}"
              </p>
            </div>
          </div>
          
          <div style="background: linear-gradient(135deg, #f97316, #ea580c); padding: 25px; border-radius: 10px; margin: 20px 0; text-align: center;">
            <h3 style="color: white; margin-top: 0;">📞 ¿Necesitas contactarnos urgente?</h3>
            <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 15px;">
              <a href="tel:+56922596802" style="color: white; text-decoration: none; background: rgba(255,255,255,0.2); padding: 10px 15px; border-radius: 8px; display: inline-block;">
                📞 +56 9 22596802
              </a>
              <a href="mailto:${process.env.CONTACT_EMAIL}" style="color: white; text-decoration: none; background: rgba(255,255,255,0.2); padding: 10px 15px; border-radius: 8px; display: inline-block;">
                📧 ${process.env.CONTACT_EMAIL}
              </a>
              <a href="https://wa.me/56922596802" style="color: white; text-decoration: none; background: rgba(255,255,255,0.2); padding: 10px 15px; border-radius: 8px; display: inline-block;">
                💬 WhatsApp
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              🔨 <strong>El Maestro del Mueble</strong> - Especialistas en mueblería personalizada<br>
              📍 Santiago, Región Metropolitana<br>
              🌐 maestrodelmueble.cl
            </p>
          </div>
        </div>
      `,
    })

    console.log("📧 Resultado correo cliente:", {
      success: !clientEmailResult.error,
      id: clientEmailResult.data?.id,
      error: clientEmailResult.error?.message,
    })

    if (clientEmailResult.error) {
      console.error("⚠️ Error enviando correo cliente (no crítico):", clientEmailResult.error)
    } else {
      console.log("✅ Correo cliente enviado exitosamente. ID:", clientEmailResult.data?.id)
    }

    console.log("=== ✅ API CONTACT COMPLETADO EXITOSAMENTE ===")

    return NextResponse.json({
      success: true,
      message: "Mensajes enviados exitosamente",
      adminEmailId: adminEmailResult.data?.id,
      clientEmailId: clientEmailResult.data?.id || null,
    })
  } catch (error) {
    console.error("=== ❌ ERROR CRÍTICO EN API CONTACT ===")
    console.error("Error completo:", error)
    console.error("Stack trace:", error instanceof Error ? error.stack : "No stack available")

    return NextResponse.json(
      {
        success: false,
        error: "Error interno del servidor al enviar el mensaje",
        details: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}
