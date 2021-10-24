import nodemailer from 'nodemailer';

export default async function handle(req, res) {
  const {name, secondName, company, companyEmail, message, phone, numberEmployees, position, } = req.body;

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
      subject: `Datos solicitud de ${name} ${secondName}`,
      html: `<style>h1,h2{color:#121473; font-family: 'Arial',serif} p{font-family: 'Arial',serif}</style>
            <div style="padding: 20px 80px;background-color:#121473"><img height="20" alt="Coop logo" src="cid:logoCoop"></div>
            <h1>Datos Solicitud</h1>
            <h2>Nombre</h2>
            <p>${name}</p>
            <h2>Apellido</h2>
            <p> ${secondName}</p>
            <h2>Empresa</h2>
            <p>${company}</p>
            <h2>Email de empresa</h2>
            <p> ${companyEmail}</p>
            <h2>Cargo</h2>
            <p>${position}</p>
            <h2>Teléfono</h2>
            <p> ${phone}</p>
            <h2>Nº Empleados</h2>
            <p>${numberEmployees.value ? numberEmployees.value : 'No definido'}</p>
            <h2>Mensaje</h2>
            <p> ${message}</p>`,
      attachments: [{
        filename: 'coop-logo-white.png',
        path: './public/coop-logo-white.png',
        cid: 'logoCoop'
      }]
    })

  } catch (e) {
    console.log(e);
    res.status(500).json(e)
  }

  res.status(200).json(req.body)
}
