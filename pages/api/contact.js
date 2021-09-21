import nodemailer from 'nodemailer';

export default async (req, res) => {
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
    await transporter.sendMail({
      from: companyEmail,
      to: 'noreply@coophealth.es',
      subject: `Contacto de ${name}`,
      html: `<p>${message}</p>`
    })

  } catch (e) {
    console.error('Error', e);
  }

  res.status(200).json(req.body)
}
