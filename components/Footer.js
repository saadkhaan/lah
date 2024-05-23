import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 py-20 dark:border-t-slate-600 dark:bg-slate-950">
      <div className="container text-center md:text-sm">
        <ul className="mb-12 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-12 sm:space-y-0">
          <li className="hover:underline">
            <Link href="/">/</Link>
          </li>
          <li className="hover:underline">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:underline">
            <Link href="/work">Work</Link>
          </li>
          <li className="hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Royal Eagle FZ LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
