"use client"
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { items } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-full bg-zinc-900" />
          <span className="text-lg font-semibold">Modest Collection</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm hover:text-zinc-900">
            Home
          </Link>
          <Link href="/borkha" className="text-sm hover:text-zinc-900">
            Borkha
          </Link>
          <Link href="/abaya" className="text-sm hover:text-zinc-900">
            Abaya
          </Link>
          <Link href="/hijab" className="text-sm hover:text-zinc-900">
            Hijab
          </Link>
          <Link href="/inner-cap" className="text-sm hover:text-zinc-900">
            Inner Cap
          </Link>
          <Link href="/about" className="text-sm hover:text-zinc-900">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:text-zinc-900">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" aria-label="Cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-900"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-900 px-1 text-xs text-white">
              {items.reduce((sum, i) => sum + i.quantity, 0)}
            </span>
          </Link>

          <Link href="/login" className="hidden text-sm md:inline-block">
            Sign In
          </Link>

          <button
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-md border p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            <Link href="/" className="rounded-md px-2 py-2 hover:bg-zinc-100">
              Home
            </Link>
            <Link
              href="/borkha"
              className="rounded-md px-2 py-2 hover:bg-zinc-100"
            >
              Borkha
            </Link>
            <Link
              href="/abaya"
              className="rounded-md px-2 py-2 hover:bg-zinc-100"
            >
              Abaya
            </Link>
            <Link
              href="/hijab"
              className="rounded-md px-2 py-2 hover:bg-zinc-100"
            >
              Hijab
            </Link>
            <Link
              href="/inner-cap"
              className="rounded-md px-2 py-2 hover:bg-zinc-100"
            >
              Inner Cap
            </Link>
            <Link
              href="/about"
              className="rounded-md px-2 py-2 hover:bg-zinc-100"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-2 py-2 hover:bg-zinc-100"
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="rounded-md px-2 py-2 hover:bg-zinc-100"
            >
              Cart
            </Link>
            <Link
              href="/login"
              className="rounded-md px-2 py-2 hover:bg-zinc-100"
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
