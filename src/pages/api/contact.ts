import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.GMAIL_USER,
        subject: `Mensaje desde el formulario de contacto de mi portafolio`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
            <h2>Nuevo mensaje de solicitud de contacto desde mi Portafolio</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
          </div>
        `,
      });

      res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
      console.error('Error enviando correo:', error);
      res.status(500).json({ message: 'Error enviando correo' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
