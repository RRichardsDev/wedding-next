import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';
type TData = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData>
) {
  if (req.method === 'POST')
    sendEmail(req.body.name, req.body.email, req.body.allergies, req.body.diet, req.body.drink)

  function sendEmail(
    name: string,
    email: string,
    allergies: string,
    dietary: string,
    drinks: string,
  ): NextApiResponse<TData>{
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rhodri.development@gmail.com',
        pass: 'supbqarexsvqelnf'
      }
    });
    
    const mailOptions = {
      from: '"Wedding Mail 👰" <rhodri.development@gmail.com>',
      to: 'r.richards96@gmail.com',
      subject: `Save the Date | Response`,
      text: `${name} has responded to your save the date!`,
      html: `
      <html>
        <body>
          <p><b>Name: </b>${name}</p>
          <p><b>Email: </b>${email}</p>
          <p><b>Allergies: </b>${allergies}</p>
          <p><b>Dietary: </b>${dietary}</p>
          <p><b>Drinks: </b>${drinks}</p>
        </body>
      </html>
      `
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
     res.status(200).json({ name: "Email sent" })
     return res;
  }
}
export {};