"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-bg p-5 px-10 flex justify-between items-center">
      <div className="flex items-center w-[14%]">
        <img src="/Vector.png" alt="logo" className="w-10 h-10" />
        <h1 className="ml-2 text-base md:text-2xl text-text font-bold whitespace-nowrap">
          Health Point
        </h1>
      </div>
      <ul className="hidden md:flex gap-10 text-lg font-bold pt-1">
        {["Services", "Doctors", "Blog", "About", "Contact"].map((item) => (
          <Link key={item} href={`/${item}`} prefetch={true}>
            <span
              className={`hover:text-blue-500 cursor-pointer ${
                pathname === `/${item}`
                  ? "underline decoration-2 decoration-blue-500"
                  : ""
              }`}
            >
              {item}
            </span>
          </Link>
        ))}
      </ul>
      <div className="hidden md:block">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-button text-white text-xl px-4 py-2 rounded-lg">
              Sign in
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton mode="modal" />
        </SignedIn>
      </div>
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>
      <div
        className={`fixed top-0 right-0 rounded-bl-2xl w-3/4 z-50 bg-white shadow-lg p-5 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-5 right-5 text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          <HiX />
        </button>
        <ul className="flex flex-col gap-5 text-lg font-bold mt-10">
          {["Services", "Doctors", "Blog", "About", "Contact"].map((item) => (
            <Link key={item} href={`/${item}`} prefetch={true}>
              <span
                className={`hover:text-blue-500 cursor-pointer ${
                  pathname === `/${item}`
                    ? "underline decoration-2 decoration-blue-500"
                    : ""
                }`}
              >
                {item}
              </span>
            </Link>
          ))}
        </ul>
        <div className="mt-5">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="w-full bg-button text-white text-xl py-2 rounded-lg">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton mode="modal" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
