import Link from "next/link";
import {  IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import Image from "next/image";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/AshwaCreations",
    icon: IconBrandX,
  },
  // {
  //   label: "LinkedIn",
  //   href: "https://linkedin.com",
  //   icon: IconBrandLinkedin,
  // },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function FooterSection() {
  return (
    <footer className="border-t  bg-radial-[100%_110%_at_50%_0%] from-transparent from-50% to-secondary/90  ">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8 sm:gap-10 md:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-3 sm:gap-4">
           <div className=" flex items-center gap-2">
            <Image src="/logo.png" alt="Ashwa Creations Logo" width={48} height={48} className=" max-sm:w-8"  />
             <h2 className="text-lg sm:text-2xl md:text-3xl font-bold  text-primary">
              AshwaCreations
            </h2>
           </div>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xs">
              Transforming ideas into stunning digital experiences.
            </p>
            {/* Available for work badge */}
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border bg-background">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-foreground">
                Available for work
              </span>
            </div>
          </div>

          {/* Navigation Links & Social */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 items-start md:items-end">
            <nav className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs sm:text-sm md:text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Social Media Links */}
            <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-3 md:mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div>
        <div className="py-4 sm:py-5 md:py-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 container mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
          <p className="text-xs sm:text-sm text-primary text-center md:text-left">
            © {new Date().getFullYear()} AshwaCreations. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 md:gap-8">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm text-primary transition-colors hover:opacity-80"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
