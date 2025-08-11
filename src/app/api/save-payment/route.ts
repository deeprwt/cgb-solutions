import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/database/firebase'; // adjust path if needed
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received payment data:", body);

    const {
      payment_id,
      order_id,
      signature,
      user,
      time
    } = body;

    // Validate required fields
    if (!payment_id || !order_id || !user || !time) {
      console.error("Missing required fields");
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Save to Firestore
    const docRef = await addDoc(collection(db, "payments"), {
      payment_id,
      order_id,
      signature,
      user,
      createdAt: Timestamp.fromDate(new Date(time)),
    });

    console.log("Payment saved successfully. Doc ID:", docRef.id);

    return NextResponse.json({ success: true, docId: docRef.id });
  } catch (err) {
    console.error("Failed to save payment", err);
    return NextResponse.json({ success: false, error: 'Failed to save payment' }, { status: 500 });
  }
}
