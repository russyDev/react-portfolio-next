"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fontVariables } from "./fonts";
import "./site.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks = [
  { href: "https://www.linkedin.com/in/ruslan-kolibabchuk/", label: "LinkedIn" },
  { href: "https://x.com/r_kodev/", label: "X" },
  { href: "https://www.facebook.com/ruslan.kolibabcuk/", label: "Facebook" },
];

const useSiteTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return { theme, toggleTheme };
};

export const SiteNav: FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useSiteTheme();

  const linkClass = (href: string) =>
    pathname === href ? "site-nav-link-active" : "site-nav-link";

  return (
    <>
      <nav className="site-nav">
        <Link href="/" className="site-logo">
          <div className="site-logo-mark">R</div>
          <span className="site-logo-name">Ruslan K.</span>
        </Link>
        <div className="site-nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          <button onClick={toggleTheme} className="site-theme-btn" aria-label="Toggle dark mode">
            {theme === "light" ? "☾ Dark" : "☀ Light"}
          </button>
          <Link href="/contact" className="site-nav-cta">
            Say hello
          </Link>
        </div>
      </nav>
      <div className="site-mobile-nav">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={linkClass(link.href)}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
};

type SitePageProps = {
  children: ReactNode;
};

export const SitePage: FC<SitePageProps> = ({ children }) => (
  <div className={`site ${fontVariables}`}>
    <SiteNav />
    {children}
  </div>
);

type SiteFooterProps = {
  note: string;
};

export const SiteFooter: FC<SiteFooterProps> = ({ note }) => (
  <footer className="site-footer">
    <div className="site-footer-note">
      {note}{" "}
      <Link href="/contact" className="site-link-accent" style={{ fontSize: "inherit" }}>
        Let&apos;s talk →
      </Link>
    </div>
    <div className="site-footer-links">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="site-footer-link"
        >
          {link.label}
        </a>
      ))}
      <span>© 2026 Ruslan K.</span>
    </div>
  </footer>
);

export const SiteFooterMinimal: FC = () => (
  <footer className="site-footer-minimal">
    <span>© 2026 Ruslan K. All rights reserved.</span>
    <span className="site-footer-mono">built with care · exit code 0</span>
  </footer>
);
