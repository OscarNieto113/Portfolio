import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import transporter from '../../config/emailConfig';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { subject, text } = req.body;

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'onietoespitia2@gmail.com',
        subject: subject,
        text: text,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Email could not be sent.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
};
