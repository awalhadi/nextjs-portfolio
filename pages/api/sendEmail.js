import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, subject, email, message } = req.body;

  

     // Create a Nodemailer transporter
     const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USER,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
      },
    });

    // Create the email message
    const mailOptions = {
      from: email,
      to: process.env.NEXT_PUBLIC_MAIL_FROM,
      subject: subject? subject : 'New Contact Form Submission -Portfolio',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'An error occurred while sending the email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
