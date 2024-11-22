import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS, 
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER, 
      subject: `Mensaje directo de la página web de ${name}`,
      html: `
        <div style="font-family: 'Roboto', sans-serif; color: #333; padding: 20px; background-color: #C0C0C0;">
          <h2 style="color: #1282a2;">Tienes un nuevo mensaje de contacto</h2>
          <p><strong style="color: #031d44;">Nombre:</strong> ${name}</p>
          <p><strong style="color: #031d44;">Correo:</strong> ${email}</p>
          <p><strong style="color: #031d44;">Mensaje:</strong></p>
          <p style="border: 1px solid #ddd; padding: 10px; border-radius: 4px; background-color: #ffffff;">
            ${message}
          </p>
          <p style="font-size: 0.9em; color: #666;">Este mensaje fue enviado desde el formulario de contacto en tu página web.</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Correo enviado correctamente' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al enviar el correo' }, { status: 500 });
  }
}
