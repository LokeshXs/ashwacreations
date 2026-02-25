"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { IconCalendarCheck, IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed px-4 md:px-5 py-2 top-0 inset-x-0 bg-white/80 border-b md:border border-neutral-200 backdrop-blur-md shadow-sm flex items-center justify-end max-w-full md:max-w-6xl md:mx-auto md:top-4 rounded-none md:rounded-full z-50 md:w-[98%]">
        <Link
          href="/"
          className="text-md font-semibold text-primary hover:opacity-80 transition-opacity absolute left-1 top-1/2 -translate-y-1/2"
        >
          <Image src="/logo.png" alt="Ashwa Creations Logo" width={64} height={64} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-8">
          <ul className="flex justify-center items-center gap-6">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="text-sm font-medium text-primary/70 hover:text-primary transition-colors"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center translate-x-2">
            <Button
            asChild
              size="lg"
              className="rounded-full bg-secondary text-primary font-semibold hover:bg-secondary/90 transition-all [&_svg:not([class*='size-'])]:size-5 cursor-pointer"
            >
              <Link href="https://cal.com/ashwa-creations/30min" target="_blank" >
              Book Free Call <IconCalendarCheck />
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <IconX className="w-6 h-6" />
          ) : (
            <IconMenu2 className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[57px] left-0 right-0 bg-white/90 border-b border-neutral-200 backdrop-blur-md shadow-lg z-40 md:hidden">
          <div className="flex flex-col p-6 gap-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-base font-medium text-primary/70 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="w-full rounded-full bg-secondary text-primary font-semibold hover:bg-secondary/90 transition-all [&_svg:not([class*='size-'])]:size-5 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Free Call <IconCalendarCheck />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
