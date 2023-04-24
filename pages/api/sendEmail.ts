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
    sendEmail(req, res)

  function sendEmail(
    req: NextApiRequest,
    res: NextApiResponse<TData>
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
      to: 'tomandlottie1994@gmail.com',
      subject: `Save the Date | Response`,
      text: `${name} has responded to your save the date!`,
      html: `
      <html>
        <body>
          <p><b>Name: </b>${req.body.name}</p>
          <p><b>Email: </b>${req.body.email}</p>
          <p><b>Allergies: </b>${req.body.allergies}</p>
          <p><b>Dietary: </b>${req.body.dietary}</p>
          <p><b>Drinks: </b>${req.body.drinks}</p>
        </body>
      </html>
      `
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ name: error.message })
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ name: info.response })
      }
    });
     return res;
  }
}
export {};