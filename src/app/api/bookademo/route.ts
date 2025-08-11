import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { db } from "@/database/firebase";
import { addDoc, collection } from "firebase/firestore";

// Define POST handler for form submission
export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Save to Firebase Firestore
    const bookADemoRef = collection(db, "bookademo");
    await addDoc(bookADemoRef, data);

    // Create Nodemailer transporter for sending email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Compose email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ["marketing.cgbindia@gmail.com",], // Company email
      subject: "New Demo Booking Request",
      html: `
        <h3>New Demo Booking</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone Number:</strong> ${data.number}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Timing Slot:</strong> ${data.timingSlot}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ message: "Demo booked and email sent!" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Error booking demo or sending email" }, { status: 500 });
  }
}
