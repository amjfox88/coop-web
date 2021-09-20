import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const {name, secondName, companyEmail, message, phone, numberEmployees, position} = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.USER_CONTACT_EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_CONTACT_EMAIL,
      pass: process.env.USER_CONTACT_EMAIL_PASS,
    },
    tls: {rejectUnauthorized: false},
  })

  try {
    const emailRes = await transporter.sendMail({
      from: companyEmail,
      to: 'noreply@coophealth.es',
      subject: `Contacto de ${name}`,
      html: `<p>${message}</p>`
    })
    console.log('Correcto', emailRes);
  } catch (e) {
    console.error('Error', e);
  }

  res.status(200).json(req.body)
}
