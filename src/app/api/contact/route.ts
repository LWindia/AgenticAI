import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";
import { safeReadRequestJson } from "@/lib/safeJson";

interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  experience: string;
  whatsappUpdates: boolean;
}

interface ResponseData {
  success?: boolean;
  message?: string;
  error?: string;
  info?: string;
}

export async function POST(request: NextRequest) {
  const smtpUser: string = process.env.EMAIL_USER || "linuxworld.certificates@gmail.com";
  const smtpPass: string = process.env.EMAIL_PASS || "vkaa fbfm qdfk whws";
  const smtpHost: string = "smtp.gmail.com";
  const smtpPort: number = 587;
  const recipientEmail: string = "chandak.preeti@gmail.com";

  if (!smtpUser || !smtpPass || !recipientEmail) {
    console.error("Server misconfiguration: Missing email credentials.");
    return NextResponse.json<ResponseData>(
      { error: "Server misconfiguration: Missing email credentials." },
      { status: 500 }
    );
  }

  const parsed = await safeReadRequestJson<ContactFormData>(request);
  if (!parsed.ok) {
    return NextResponse.json<ResponseData>({ error: parsed.error }, { status: parsed.status });
  }
  const body = parsed.data;

  const { fullName, phoneNumber, email, experience, whatsappUpdates } = body;

  if (!fullName || !phoneNumber || !email || !experience) {
    return NextResponse.json<ResponseData>(
      { error: "Full name, phone number, email, and experience are required." },
      { status: 400 }
    );
  }

  if (!/^\d{10,15}$/.test(phoneNumber)) {
    return NextResponse.json<ResponseData>(
      { error: "Phone number must be a valid numeric string between 10 and 15 digits." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json<ResponseData>(
      { error: "Invalid email format." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    const mailOptions = {
      from: `"${fullName}" <${smtpUser}>`,
      to: recipientEmail,
      subject: `New Contact Form Submission from ${fullName} for agentic AI`,
      text: `
        You have received a new message:

        Full Name: ${fullName}
        Phone Number: ${phoneNumber}
        Email: ${email}
        Experience: ${experience}
        WhatsApp Updates: ${whatsappUpdates ? "Yes" : "No"}
      `.trim(),
    };

    const info = await transporter.sendMail(mailOptions);

    // Save to Google Sheet via Apps Script
    const scriptUrl = process.env.GOOGLE_SHEET_SCRIPT_URL;
    if (scriptUrl) {
      try {
        const payload = JSON.stringify({ formType: "contact1", fullName, phoneNumber, email, experience, whatsappUpdates });
        const sheetRes = await fetch(scriptUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          body: payload,
          redirect: "follow",
        });
        if (!sheetRes.ok) {
          console.warn("Google Sheets: non-success status", sheetRes.status);
        }
      } catch (sheetErr: any) {
        console.warn("Google Sheets call failed:", sheetErr.message);
      }
    } else {
      console.warn("GOOGLE_SHEET_SCRIPT_URL not set, skipping Sheets.");
    }

    return NextResponse.json<ResponseData>(
      {
        success: true,
        message: "Email sent successfully!",
        info: info.messageId,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    return NextResponse.json<ResponseData>(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}