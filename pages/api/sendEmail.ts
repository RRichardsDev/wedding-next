import { NextApiRequest, NextApiResponse } from 'next/types';
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
  ): NextApiResponse<TData> {
    console.log(req.body)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rhodri.development@gmail.com',
        pass: 'supbqarexsvqelnf'
      }
    });

    let meal;

    console.log("body",req.body)
    if (req.body.main == '1') {
      meal = 'lamb'
    } else if (req.body.main == '2') {
      meal = 'pork'
    } else if (req.body.main == '3') {
      meal = 'veggie'
    }

    let mailOptions
    if (req.body.attendanceState === 'attending') {

      const t = '';

      console.log("req.body",req.body)

      mailOptions = {
        from: '"Wedding Mail | Evening 👰" <rhodri.development@gmail.com>',
        to: 'tomandlottie1994@gmail.com',
        subject: `THE ACTUAL FKIN WEDDING | Evening Loosers`,
        text: `${req.body.name} has responded to your save the date!`,
        html: `
        <html>
          <body>
            <p><b>Name: </b>${req.body.name}</p>
            <p><b>Email: </b>${req.body.email}</p>
          </body>
        </html>
        `
      };
    } else {
      mailOptions = {
        from: '"Wedding Mail 👰" <rhodri.development@gmail.com>',
        to: 'tomandlottie1994@gmail.com',
        subject: `THE ACTUAL FKIN WEDDING | Evening Loosers`,
        text: `${req.body.name} has responded to your save the date!`,
        html: `<html>
          <body>
            <p><b>Name: </b>${req.body.name}</p>
            <p><b>Email: </b>${req.body.email}</p>
            <p><b>Allergies: </b>Cant come, because I hate you</p>
          </body>
        </html>
        `
      }
    }


    // <p><b>Drinks: </b>${req.body.drinks}</p>

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send({ name: error.message })
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send({ name: info.response })
      }
    });
    return res;
  }
}
export { };