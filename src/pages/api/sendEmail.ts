import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import transporter from '../../config/emailConfig'; 

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'onietoespitia2@gmail.com',
        subject: 'Hello from your Next.js App',
        text: 'This is a test email sent from a Next.js app using Nodemailer.',
      };

      // Send the email
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
