/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Link from "next/link";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          password: form.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      localStorage.setItem("signup_email", form.email);
      window.location.href = "/otp-verification";
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-stone-900">Create Account</h1>
          <p className="mt-1 text-sm text-stone-500">Join Modest Collection today</p>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
        )}

        <form className="space-y-4" onSubmit={submit}>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              className="w-full rounded-lg border border-stone-200 py-2.5 pl-10 pr-3 text-sm transition-colors focus:border-stone-400 focus:outline-none"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
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
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              className="w-full rounded-lg border border-stone-200 py-2.5 pl-10 pr-3 text-sm transition-colors focus:border-stone-400 focus:outline-none"
              placeholder="Phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full rounded-lg border border-stone-200 py-2.5 pl-10 pr-10 text-sm transition-colors focus:border-stone-400 focus:outline-none"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type="password"
              className="w-full rounded-lg border border-stone-200 py-2.5 pl-10 pr-3 text-sm transition-colors focus:border-stone-400 focus:outline-none"
              placeholder="Confirm password"
              value={form.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-800 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-stone-500">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-stone-900 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
