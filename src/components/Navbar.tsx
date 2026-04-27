"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X, User, Search } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/borkha", label: "Borkha" },
  { href: "/abaya", label: "Abaya" },
  { href: "/hijab", label: "Hijab" },
  { href: "/inner-cap", label: "Inner Cap" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-900">
            <span className="text-xs font-medium text-white">M</span>
          </div>
          <span className="text-lg font-light tracking-tight text-stone-900">
            Modest Collection
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="hidden text-stone-600 transition-colors hover:text-stone-900 md:block">
            <Search className="h-5 w-5" />
          </button>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative text-stone-600 transition-colors hover:text-stone-900"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-stone-900 text-xs font-medium text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Account */}
          <Link
            href="/login"
            className="hidden text-stone-600 transition-colors hover:text-stone-900 md:block"
          >
            <User className="h-5 w-5" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-md text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-96 border-t border-stone-200" : "max-h-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center rounded-md px-3 py-3 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-stone-200 pt-4">
            <Link
              href="/cart"
              className="flex items-center gap-2 rounded-md px-3 py-3 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
              onClick={() => setOpen(false)}
            >
              <ShoppingBag className="h-4 w-4" />
              Cart ({cartCount})
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-md px-3 py-3 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
              onClick={() => setOpen(false)}
            >
              <User className="h-4 w-4" />
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
