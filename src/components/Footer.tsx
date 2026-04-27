"use client";

import Link from "next/link";
import { useState } from "react";
import {  Mail, MapPin, Phone, Send, Camera } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-light text-white">Modest Collection</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Discover elegant, minimal, and modest fashion for the modern Muslim woman. 
              Crafted with care, designed with faith.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-stone-400 transition-colors hover:bg-stone-700 hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-stone-400 transition-colors hover:bg-stone-700 hover:text-white"
              >
                <Camera className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-white uppercase">
              Shop
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link href="/borkha" className="transition-colors hover:text-white">
                  Borkha
                </Link>
              </li>
              <li>
                <Link href="/abaya" className="transition-colors hover:text-white">
                  Abaya
                </Link>
              </li>
              <li>
                <Link href="/hijab" className="transition-colors hover:text-white">
                  Hijab
                </Link>
              </li>
              <li>
                <Link href="/inner-cap" className="transition-colors hover:text-white">
                  Inner Cap
                </Link>
              </li>
              <li>
                <Link href="/cart" className="transition-colors hover:text-white">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-white uppercase">
              Company
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="transition-colors hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="transition-colors hover:text-white">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-white uppercase">
              Contact
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-stone-500" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-stone-500" />
                <span>+880 1XXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-stone-500" />
                <span>hello@modestcollection.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-medium tracking-wider text-white uppercase">
                Newsletter
              </h4>
              <p className="mt-2 text-xs text-stone-500">
                Subscribe for exclusive offers and updates.
              </p>
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 rounded-sm bg-stone-800 px-3 py-2 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-600"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-sm bg-white px-3 py-2 text-stone-900 transition-colors hover:bg-stone-200"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Modest Collection. All rights reserved.
          </p>
          <p className="text-xs text-stone-500">
            Crafted with love for the modest fashion community
          </p>
        </div>
      </div>
    </footer>
  );
}
