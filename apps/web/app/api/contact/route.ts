import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_TO || "";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !TO) {
      return new NextResponse("Missing RESEND_API_KEY or CONTACT_TO", { status: 500 });
    }
    const { name, email, message } = await req.json();

    const { error } = await resend.emails.send({
      from: "LuLab Contacto <onboarding@resend.dev>",
      to: [TO],
      reply_to: email,
      subject: `Nuevo contacto desde la web — ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    });

    if (error) {
      console.error(error);
      return new NextResponse("Error sending email", { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return new NextResponse("Invalid request", { status: 400 });
  }
}
