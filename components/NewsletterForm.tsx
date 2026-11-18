"use client";

import { useState, type SubmitEvent } from "react";

export default function NewsletterForm() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = async (e: SubmitEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // This calls the API route you created above
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setShowForm(false);
          setStatus("idle");
          setEmail("");
        }, 3000);
      } else {
        setStatus("idle");
        alert("Something went wrong.");
      }
    } catch (error) {
      setStatus("idle");
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className="w-full">
      {/* The Button (Shows when form is hidden) */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="flex h-12 w-full items-center justify-center rounded border-2 border-[#8b1c62] text-[13px] font-bold text-[#8b1c62] transition-colors hover:bg-[#8b1c62] hover:text-white"
        >
          Subscribe to monthly newsletter
        </button>
      )}

      {/* The Form (Shows when button is clicked) */}
      {showForm && (
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-2 text-center text-green-700">
              <span className="material-symbols-outlined mb-1 text-3xl">
                check_circle
              </span>
              <p className="font-bold">Successfully subscribed!</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-[#0A1931]">
                  Join the newsletter
                </h4>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <span className="material-symbols-outlined text-sm">
                    close
                  </span>
                </button>
              </div>

              <p className="text-[11px] text-slate-600">
                Get the latest industry updates straight to your inbox.
              </p>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full rounded border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:border-[#8b1c62] focus:outline-none focus:ring-1 focus:ring-[#8b1c62]"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex h-10 items-center justify-center rounded bg-[#8b1c62] text-[13px] font-bold text-white transition-colors hover:bg-[#6d134c] disabled:opacity-50"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe Now"}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
