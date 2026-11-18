import { Resend } from "resend";
import { NextResponse } from "next/server";
import { env } from "cloudflare:workers";

const cloudflareEnv = env as unknown as { RESEND_API_KEY: string };

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { email?: string };
    if (!body.email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    const apiKey = cloudflareEnv.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing from Cloudflare env");
      return NextResponse.json(
        { error: "Configuration error" },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "tsxepo@gmail.com",
      subject: "New Newsletter Subscriber!",
      html: `<p>New subscriber: <strong>${body.email}</strong></p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
