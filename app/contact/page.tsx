"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API or email service
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left Column: Form */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0A1931] md:text-4xl">
              SEND US A MESSAGE
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              We promise to respond within 24 hours
            </p>

            {submitted ? (
              <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6 text-green-800">
                <h3 className="font-bold text-lg">Thank you!</h3>
                <p className="mt-2 text-sm">
                  Your message has been sent successfully. We will be in touch
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Name Fields (Split) */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-bold text-slate-700"
                    >
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="mt-2 block w-full rounded border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#8b1c62] focus:outline-none focus:ring-1 focus:ring-[#8b1c62]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-bold text-slate-700"
                    >
                      Surname<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="mt-2 block w-full rounded border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#8b1c62] focus:outline-none focus:ring-1 focus:ring-[#8b1c62]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-slate-700"
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2 block w-full rounded border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#8b1c62] focus:outline-none focus:ring-1 focus:ring-[#8b1c62]"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-slate-700"
                  >
                    Subject<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="mt-2 block w-full rounded border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#8b1c62] focus:outline-none focus:ring-1 focus:ring-[#8b1c62]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-slate-700"
                  >
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="mt-2 block w-full rounded border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#8b1c62] focus:outline-none focus:ring-1 focus:ring-[#8b1c62]"
                  ></textarea>
                </div>

                {/* Fake reCAPTCHA Box */}
                <div className="flex w-fit items-center gap-3 rounded border border-slate-300 bg-slate-50 px-4 py-3 shadow-sm">
                  <input
                    type="checkbox"
                    required
                    className="h-5 w-5 rounded border-slate-300 text-[#8b1c62] focus:ring-[#8b1c62]"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    I'm not a robot
                  </span>
                  <div className="ml-4 flex flex-col items-center justify-center border-l border-slate-200 pl-4">
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="reCAPTCHA"
                      className="h-8 w-8 opacity-70"
                    />
                    <span className="mt-1 text-[9px] text-slate-400">
                      reCAPTCHA
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded bg-[#8b1c62] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#6d134c] focus:outline-none focus:ring-2 focus:ring-[#8b1c62] focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info */}
          <div className="flex flex-col items-center pt-2 text-center md:pt-0">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A1931] md:text-4xl">
              CALL OR WHATSAPP
            </h2>

            <a
              href="tel:+27645187993"
              className="mt-6 text-2xl font-bold text-[#0A1931] hover:text-[#8b1c62] hover:underline"
            >
              +27 64 518 7993
            </a>

            <div className="mt-12 w-full max-w-sm">
              <h3 className="text-lg font-bold text-slate-800">
                Want to contact someone in the LPSA Office Directly?
              </h3>

              <div className="mt-8 space-y-3 text-[15px] text-slate-700">
                <p>
                  LPSA Administration Office:{" "}
                  <a
                    href="mailto:admin@lifeguardcouncil.org.za"
                    className="text-[#8b1c62] hover:underline"
                  >
                    admin@lifeguardcouncil.org.za
                  </a>
                </p>
                <p>
                  Dawn Williams – LPSA CEO:{" "}
                  <a
                    href="mailto:dawn@lifeguardcouncil.org.za"
                    className="text-[#8b1c62] hover:underline"
                  >
                    dawn@lifeguardcouncil.org.za
                  </a>
                </p>
                <div className="pt-2">
                  <p>For information regarding LPSA Events:</p>
                  <a
                    href="mailto:events@lifeguardcouncil.org.za"
                    className="mt-1 inline-block text-[#8b1c62] hover:underline"
                  >
                    events@lifeguardcouncil.org.za
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
