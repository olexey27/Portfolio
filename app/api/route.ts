import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, phone, service, message } = await req.json();

    // Basic validation
    if (!firstname || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      // ↑ After domain verification, change to: contact@olexey27.space
      to: "alexeykrasnokutskiy@gmail.com",
      replyTo: email,
      subject: `📬 New message from ${firstname} ${lastname}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #1c1c22; color: #fff; padding: 32px; border-radius: 12px;">
          <h2 style="color: #00ff99; margin-bottom: 24px;">New Contact Request 🚀</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: rgba(255,255,255,0.5); width: 120px;">Name</td>
              <td style="padding: 10px 0; color: #fff; font-weight: 600;">${firstname} ${lastname}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: rgba(255,255,255,0.5);">Email</td>
              <td style="padding: 10px 0;">
                <a href="mailto:${email}" style="color: #00ff99;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: rgba(255,255,255,0.5);">Phone</td>
              <td style="padding: 10px 0; color: #fff;">${phone || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: rgba(255,255,255,0.5);">Service</td>
              <td style="padding: 10px 0; color: #fff;">${service || "—"}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #232329; border-radius: 8px; border-left: 3px solid #00ff99;">
            <p style="color: rgba(255,255,255,0.5); margin-bottom: 8px; font-size: 13px;">Message</p>
            <p style="color: #fff; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: rgba(255,255,255,0.3);">
            Sent from olexey27.space
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}