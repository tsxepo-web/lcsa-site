"use client";

import { useState } from "react";
import { btnPrimary, inputCls } from "@/components/ui";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: POST to /api/contact (e.g. Cloudflare Email Routing / Resend)
    console.log(data);
    setSent(true);
  }

  if (sent)
    return (
      <div className="rounded-xl border border-line bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-navy">Thank you</h3>
        <p className="mt-2 text-sm">Your enquiry has been received.</p>
      </div>
    );

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-3 rounded-xl border border-line bg-white p-6 shadow-sm"
    >
      <h3 className="text-lg font-bold text-navy">Send an enquiry</h3>
      <input
        name="name"
        required
        className={inputCls}
        placeholder="Full name"
      />
      <input
        name="email"
        type="email"
        required
        className={inputCls}
        placeholder="Email address"
      />
      <textarea
        name="message"
        required
        rows={5}
        className={inputCls}
        placeholder="How can we help?"
      />
      <button className={`${btnPrimary} w-full`}>Submit Enquiry</button>
      <p className="text-xs text-slate-500">
        Contact details should be replaced with the council&apos;s approved
        production details before launch.
      </p>
    </form>
  );
}
