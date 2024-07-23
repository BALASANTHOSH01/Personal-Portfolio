// // pages/api/sendEmail.js

// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { email, phone, address } = req.body;

//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.Email_ID,
//                 pass: process.env.Email_PASSWORD,
//             },
//         });

//         const mailOptions = {
//             from: process.env.Email_ID,
//             to: email,
//             subject: 'New Portfolio Contact Form Submission',
//             text: `Email: ${email}\nPhone: ${phone}\nAddress: ${address}`,
//         };


//         try {
//             await transporter.sendMail(mailOptions);
//             res.status(200).json({ message: 'Email sent successfully' });
//         } catch (error) {
//             res.status(500).json({ message: 'Error sending email', error });
//         }
//     } else {
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// }
