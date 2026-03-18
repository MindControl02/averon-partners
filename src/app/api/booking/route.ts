import { NextResponse } from "next/server";
import { sendBookingNotification } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.date || !data.time) {
      return NextResponse.json(
        { error: "Name, email, date, and time are required" },
        { status: 400 }
      );
    }

    const sent = await sendBookingNotification({
      name: data.name,
      email: data.email,
      company: data.company || "",
      date: data.date,
      time: data.time,
    });

    return NextResponse.json({
      success: true,
      emailSent: sent,
    });
  } catch (error) {
    console.error("Booking form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}
