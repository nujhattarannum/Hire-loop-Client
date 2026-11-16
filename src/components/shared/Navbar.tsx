
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Browse Jobs", href: "/jobs" },
  { name: "Company", href: "/company" },
  { name: "Pricing", href: "/pricing" },
];

const Navbar = () => {
  return (
    <header className="w-full border-t-2 border-blue-500 bg-[#181818]">
      <nav className="mx-auto flex h-[62px] max-w-[1280px] items-center justify-between bg-[#222222] px-5 sm:px-8">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="HireLoop Logo"
            width={100}
            height={35}
            priority
            className="h-auto w-[85px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          {/* Navigation Links */}
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Sign In and Get Started */}
          <div className="flex items-center gap-5">
            <Link
              href="/signin"
              className="text-[11px] font-medium text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="flex h-8 items-center justify-center rounded-lg bg-[#6554F5] px-4 text-[11px] font-medium text-white shadow-[0_0_12px_rgba(101,84,245,0.35)] transition-colors hover:bg-[#5745E8]"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent className="border-gray-800 bg-[#222222] text-white">
              <SheetTitle className="text-lg font-semibold text-white">
                HireLoop Menu
              </SheetTitle>

              <div className="mt-8 flex flex-col gap-6">

                {/* Mobile Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/signin"
                  className="text-sm text-indigo-400 hover:text-indigo-300"
                >
                  Sign In
                </Link>

                <Link
                  href="/signup"
                  className="flex h-10 w-full items-center justify-center rounded-lg bg-[#6554F5] text-sm font-medium text-white transition-colors hover:bg-[#5745E8]"
                >
                  Get Started
                </Link>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
