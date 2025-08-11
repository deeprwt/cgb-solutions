import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json(); // Get email from the request body

    // Directly using email credentials (replace with env vars in production)
    const emailUser = "deepak.rawat@cgbindia.com";
    const emailPass = "qmas knoy aqsq isdo";

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Compose the email
    let mailOptions = {
      from: `"Newsletter" <${emailUser}>`,
    //   to: email, // Send to the user's submitted email
    to: [`marketing.cgbindia@gmail.com`, `${email}`],// Send to the user's submitted email
      subject: "Thank you for subscribing!",
      text: `You've successfully subscribed to our newsletter using ${email}.`, // Plain text version
      html: `<p>You've successfully subscribed to our <strong>newsletter</strong> using ${email}!</p>`, // HTML version with the user's email
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    let errorMessage = "An unknown error occurred";

    // Safely narrow down the error type using 'instanceof Error'
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error("Error sending email:", errorMessage);

    return NextResponse.json(
      { message: "Error sending email", error: errorMessage },
      { status: 500 }
    );
  }
}
