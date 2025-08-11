import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/database/firebase'; // Import Firebase instance

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, email, number, companyname, message } = await request.json();

    // Validate that all required fields are present
    if (!name || !email || !number || !companyname || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // 1. Save data to Firebase Firestore
    const contactRef = collection(db, 'newcontact');
    await addDoc(contactRef, { name, email, number, companyname, message });

    // 2. Send confirmation email using Nodemailer
    const emailUser = process.env.EMAIL_USER || "deepak.rawat@cgbindia.com";
    const emailPass = process.env.EMAIL_PASS || "qmas knoy aqsq isdo";

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"Contact Form" <${emailUser}>`,
      to: ["marketing.cgbindia@gmail.com"], // Send to the user's submitted email
      subject: 'Contact Form Submission Confirmation',
      text: `Hello ${name},\n\nThank you for contacting us! We have received your message:\n\n"${message}"\n\nWe will get back to you shortly.\n\nBest regards,\nCGBIZ SOLUTIONS PRIVATE LIMITED`,
      html: `<p>Hello <strong>${name}</strong>,</p>
             <p>Thank you for contacting us! We have received your message:</p>
             <blockquote>${message}</blockquote>
             <p>We will get back to you shortly.</p>
             <p>Best regards,<br>CGBIZ SOLUTIONS PRIVATE LIMITED</p>`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info);

    // Return success response
    return NextResponse.json({ message: 'Form submitted and email sent successfully!' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ message: 'Error processing form submission' }, { status: 500 });
  }
}
