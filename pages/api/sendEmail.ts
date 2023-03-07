import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';
type TData = {
  name: string
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData>
) {
  // TODO: check if the request is a POST request
  function sendEmail(): NextApiResponse<TData>{
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rhodri.development@gmail.com',
        pass: 'supbqarexsvqelnf'
      }
    });
    
    var mailOptions = {
      from: 'rhodri.development@gmail.com',
      to: 'r.richards96@gmail.com',
      subject: 'RSVP Wedding',
      text: 'That was easy!',
      html: '<h1>That was easy!</h1><p>Your RSVP has been sent</p>'
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