import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Proxy to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
        name: name,
        email: email,
        message: message,
        subject: `New Contact Form Submission from ${name}`,
        from_name: "Ktsportfolio",
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json(
        { success: true, message: "Message received successfully" },
        { status: 200 }
      );
    } else {
      console.error("Web3Forms error:", result);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
