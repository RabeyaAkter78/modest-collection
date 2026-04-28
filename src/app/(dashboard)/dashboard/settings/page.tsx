"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

export default function SettingsPage() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (form.newPassword !== form.confirmPassword) {
      setError("New passwords do not match");
      return;
    }
    if (form.newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: form.currentPassword,
          newPassword: form.newPassword,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setSuccess(true);
      setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-stone-900">Settings</h1>
        <p className="mt-1 text-sm text-stone-500">Manage your account settings</p>
      </div>

      {/* Change Password Section */}
      <div className="rounded-xl border border-stone-200 bg-white">
        <div className="flex items-center gap-3 border-b border-stone-200 px-6 py-4">
          <div className="rounded-lg bg-stone-100 p-2">
            <Lock className="h-5 w-5 text-stone-600" />
          </div>
          <div>
            <h2 className="text-base font-medium text-stone-900">Change Password</h2>
            <p className="text-xs text-stone-500">Update your password to keep your account secure</p>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-5 p-6">
          {error && (
            <div className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
          )}
          {success && (
            <div className="flex items-center gap-2 rounded-md bg-green-50 px-4 py-3 text-sm text-green-600">
              <ShieldCheck className="h-4 w-4" />
              Password changed successfully!
            </div>
          )}

          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">Current Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                type={showCurrent ? "text" : "password"}
                className="w-full rounded-lg border border-stone-200 py-2.5 pl-10 pr-10 text-sm transition-colors focus:border-stone-400 focus:outline-none"
                placeholder="Enter current password"
                value={form.currentPassword}
                onChange={(e) => setForm({ ...form, currentPassword: e.target.value })}
                required
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                {showCurrent ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">New Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                type={showNew ? "text" : "password"}
                className="w-full rounded-lg border border-stone-200 py-2.5 pl-10 pr-10 text-sm transition-colors focus:border-stone-400 focus:outline-none"
                placeholder="Enter new password"
                value={form.newPassword}
                onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
                required
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                {showNew ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-stone-700">Confirm New Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                type="password"
                className="w-full rounded-lg border border-stone-200 py-2.5 pl-10 pr-3 text-sm transition-colors focus:border-stone-400 focus:outline-none"
                placeholder="Confirm new password"
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-800 disabled:opacity-50"
          >
            <Lock className="h-4 w-4" />
            {loading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>

      {/* Account Info Section */}
      <div className="rounded-xl border border-stone-200 bg-white p-6">
        <h2 className="text-base font-medium text-stone-900">Account Information</h2>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-stone-50 px-4 py-3">
            <span className="text-sm text-stone-500">Two-Factor Authentication</span>
            <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-600">
              Coming Soon
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-stone-50 px-4 py-3">
            <span className="text-sm text-stone-500">Login Notifications</span>
            <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-600">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
