/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";

export default function OtpVerificationPage() {
  const [form, setForm] = useState({ email: "", code: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("signup_email");
    if (saved) setForm((f) => ({ ...f, email: saved }));
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      localStorage.removeItem("signup_email");
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-[80vh] flex-col items-center justify-center">
        <div className="w-full max-w-sm space-y-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
            <ShieldCheck className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-semibold text-stone-900">Verified!</h1>
          <p className="text-sm text-stone-500">Your account has been verified successfully.</p>
          <Link
            href="/login"
            className="inline-block w-full rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-800"
          >
            Sign In Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-stone-100">
            <Mail className="h-8 w-8 text-stone-500" />
          </div>
          <h1 className="text-2xl font-semibold text-stone-900">OTP Verification</h1>
          <p className="mt-1 text-sm text-stone-500">Enter the 6-digit code sent to your email</p>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
        )}

        <form className="space-y-4" onSubmit={submit}>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type="email"
              className="w-full rounded-lg border border-stone-200 py-2.5 pl-10 pr-3 text-sm transition-colors focus:border-stone-400 focus:outline-none"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <input
            className="w-full rounded-lg border border-stone-200 px-4 py-2.5 text-center text-sm tracking-widest transition-colors focus:border-stone-400 focus:outline-none"
            placeholder="000000"
            maxLength={6}
            value={form.code}
            onChange={(e) => setForm({ ...form, code: e.target.value.replace(/\D/g, "") })}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-800 disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <p className="text-center text-sm text-stone-500">
          Didn&apos;t receive the code?{" "}
          <button
            onClick={async () => {
              if (!form.email) return;
              await fetch("/api/auth/otp/request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: form.email }),
              });
            }}
            className="font-medium text-stone-900 hover:underline"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}
