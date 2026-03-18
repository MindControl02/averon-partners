import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const sent = await sendContactNotification({
      name: data.name,
      email: data.email,
      company: data.company || "",
      message: data.message,
    });

    return NextResponse.json({
      success: true,
      emailSent: sent,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}
