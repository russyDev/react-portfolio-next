"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SitePage, socialLinks } from "@/components/site";
import "./home.css";

const TERM_SCRIPT =
  "$ npx create-next-app your-idea\nInstalling dependencies...\nSetting up TypeScript... ✓\n✓ Ready. Let's build something great.";

const services = [
  { num: "01", title: "Frontend Development", blurb: "Responsive, accessible interfaces your users will love." },
  { num: "02", title: "Backend Development", blurb: "Secure APIs and server-side apps that scale with you." },
  { num: "03", title: "Full-Stack Delivery", blurb: "One person, whole product — fewer handoffs, faster shipping." },
  { num: "04", title: "Testing & QA", blurb: "Cypress-powered confidence in every release." },
  { num: "05", title: "CMS & E-commerce", blurb: "WordPress (classic & headless), tailored to your business." },
  { num: "06", title: "Tools & Workflow", blurb: "Modern tooling and CI/CD for smooth collaboration." },
];

const jobs = [
  { years: "2022 — now", company: "Svitla Systems", blurb: "Senior Frontend Developer building a React platform." },
  { years: "2018 — 2022", company: "Hero Teams", blurb: "Full-stack engineer, React apps + Cypress testing." },
  { years: "2013 — 2018", company: "Loud & Clear", blurb: "Custom WordPress themes & plugins for global clients." },
  { years: "2011 — 2013", company: "Early years", blurb: "PixelTeh & BestWebSoft — where WordPress became a superpower." },
];

export const HomeContent: React.FC = () => {
  const [typed, setTyped] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTyped((prev) => {
        if (prev >= TERM_SCRIPT.length) {
          if (timerRef.current) clearInterval(timerRef.current);
          return prev;
        }
        return prev + 1;
      });
    }, 28);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <SitePage>
      <section className="home-hero">
        <div className="home-badge">
          <span className="home-badge-dot" />
          Open to new freelance projects
        </div>
        <h1 className="home-title">
          Friendly full-stack developer for <span className="home-title-accent">ambitious</span> web projects.
        </h1>
        <div className="home-hero-row">
          <p className="home-hero-text">
            I&apos;m Ruslan — 12+ years turning ideas into fast, maintainable web apps with React, Next.js and
            TypeScript. Nice to meet you.
          </p>
          <div className="home-hero-actions">
            <Link href="/contact" className="home-btn-primary">
              Start a project →
            </Link>
            <a href="/CV-Kolibabchuk.pdf" download className="home-btn-outline">
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section className="home-bento">
        <div className="home-terminal">
          <div className="home-terminal-path">~/projects $</div>
          <div className="home-terminal-body">
            {TERM_SCRIPT.slice(0, typed)}
            <span className="home-terminal-cursor" />
          </div>
          <div className="home-terminal-caption">From zero to production — I handle the whole stack.</div>
        </div>
        <div className="home-stat">
          <div className="home-stat-number">12+</div>
          <div className="home-stat-text">years of experience across agencies, product teams and freelance</div>
        </div>
        <div className="home-stat">
          <div className="home-stat-number">6</div>
          <div className="home-stat-text">services — from frontend to CMS &amp; e-commerce</div>
        </div>
        <div className="home-stack">
          <div className="home-stack-title">React · Next.js · TypeScript · GraphQL · Node · WordPress</div>
          <div className="home-stack-text">The stack I use daily — plus whatever your project needs.</div>
        </div>
      </section>

      <section className="home-services">
        <div className="home-section-head">
          <h2 className="site-section-title">What I can do for you</h2>
          <Link href="/services" className="site-link-accent">
            All services →
          </Link>
        </div>
        <div className="home-services-grid">
          {services.map((s) => (
            <Link key={s.num} href="/services" className="home-service">
              <span className="home-service-num">{s.num}</span>
              <div className="home-service-body">
                <div className="home-service-title">{s.title}</div>
                <div className="home-service-blurb">{s.blurb}</div>
              </div>
              <span className="home-service-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-experience">
        <h2 className="site-section-title">12 years, 5 teams</h2>
        <div className="home-jobs-grid">
          {jobs.map((j) => (
            <div key={j.company} className="home-job">
              <div className="home-job-years">{j.years}</div>
              <div className="home-job-company">{j.company}</div>
              <div className="home-job-blurb">{j.blurb}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <div className="home-footer-title">Let&apos;s make something good.</div>
        <div className="home-footer-text">Tell me about your project — I usually reply within a day.</div>
        <a href="mailto:ruslan.kolibabchuk@gmail.com" className="home-footer-cta">
          ruslan.kolibabchuk@gmail.com
        </a>
        <div className="home-footer-links">
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
    </SitePage>
  );
};
