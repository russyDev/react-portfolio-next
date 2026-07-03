"use client";
import React, { useEffect, useState } from "react";
import { SitePage, SiteFooter } from "@/components/site";
import "./about.css";

const languages = [
  { name: "Ukrainian", pct: 100 },
  { name: "English", pct: 85 },
];

const skills = [
  { name: "HTML", pct: 95 },
  { name: "JavaScript", pct: 90 },
  { name: "React.js", pct: 90 },
  { name: "CSS", pct: 90 },
  { name: "Next.js", pct: 88 },
  { name: "WordPress", pct: 85 },
  { name: "PHP", pct: 80 },
];

const extraSkills = [
  "TailwindCSS",
  "GraphQL",
  "React Query",
  "Cypress",
  "Sass",
  "Less",
  "Webpack",
  "Gulp",
  "GIT",
  "Bootstrap",
  "SEO",
  "HubSpot",
];

const jobs = [
  {
    years: "2022 — now",
    company: "Svitla Systems",
    role: "Senior Frontend Developer",
    blurb: "Building a new website with React — robust, scalable frontend architecture in close collaboration with the team.",
  },
  {
    years: "2018 — 2022",
    company: "Hero Teams",
    role: "Full-Stack Engineer",
    blurb: "Visually appealing, highly functional React apps, with Cypress autotests keeping every release stable.",
  },
  {
    years: "2013 — 2018",
    company: "Loud & Clear",
    role: "Full-Stack Developer",
    blurb: "Custom WordPress themes and plugins that gave clients a unique, tailored digital presence.",
  },
  {
    years: "2013",
    company: "PixelTeh",
    role: "Full-Stack Developer",
    blurb: "A year of intense agency work — custom WordPress builds, close client collaboration.",
  },
  {
    years: "2011 — 2013",
    company: "BestWebSoft",
    role: "WordPress Developer",
    blurb: "Where it all began — themes, plugins, and a lasting love of clean, purposeful code.",
  },
];

type BarProps = {
  name: string;
  pct: number;
  barsIn: boolean;
};

const SkillBar: React.FC<BarProps> = ({ name, pct, barsIn }) => (
  <div className="about-bar-item">
    <div className="about-bar-head">
      <span className="about-bar-name">{name}</span>
      <span className="about-bar-pct">{pct}%</span>
    </div>
    <div className="about-bar-track">
      <div className="about-bar-fill" style={{ width: barsIn ? `${pct}%` : "0%" }} />
    </div>
  </div>
);

export const AboutContent: React.FC = () => {
  const [barsIn, setBarsIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBarsIn(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SitePage>
      <section className="about-header">
        <div className="site-eyebrow">{"// about"}</div>
        <h1 className="site-page-title">
          Nice to meet you — I&apos;m <span className="site-title-accent">Ruslan</span>.
        </h1>
        <p className="site-lead about-lead">
          Senior front-end developer with over 12 years of experience building modern, scalable web applications. My
          main focus is React, Next.js, TypeScript and TailwindCSS — creating high-performance, maintainable and
          accessible interfaces. I also work with GraphQL, headless WordPress, React Query and SEO, and I&apos;ve
          integrated my fair share of HubSpot and marketing tools. I value clean architecture, reusable components and
          continuous improvement.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <div className="about-card-title">Personal info</div>
          <div className="about-info-list">
            <div className="about-info-row">
              <span className="about-info-label">Location</span>
              <span className="about-info-value">Ukraine 🇺🇦</span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">Freelance</span>
              <span className="about-info-available">Available</span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">Experience</span>
              <span className="about-info-value">12+ years</span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">Email</span>
              <a href="mailto:ruslan.kolibabchuk@gmail.com" className="about-info-link">
                ruslan.kolibabchuk@gmail.com
              </a>
            </div>
          </div>
          <a href="/CV-Kolibabchuk.pdf" download className="about-cv-btn">
            Download CV ↓
          </a>
        </div>

        <div className="about-card" style={{ gap: 18 }}>
          <div className="about-card-title">Languages</div>
          {languages.map((l) => (
            <SkillBar key={l.name} name={l.name} pct={l.pct} barsIn={barsIn} />
          ))}
          <div className="about-subtitle">Extra skills</div>
          <div className="about-tags">
            {extraSkills.map((skill) => (
              <span key={skill} className="about-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="about-card-deep">
          <div className="about-card-title">Core skills</div>
          {skills.map((s) => (
            <SkillBar key={s.name} name={s.name} pct={s.pct} barsIn={barsIn} />
          ))}
        </div>
      </section>

      <section className="about-timeline">
        <h2 className="site-section-title">The journey so far</h2>
        <div className="about-timeline-list">
          {jobs.map((j) => (
            <div key={`${j.company}-${j.years}`} className="about-job">
              <div className="about-job-years">{j.years}</div>
              <div>
                <div className="about-job-company">{j.company}</div>
                <div className="about-job-role">{j.role}</div>
              </div>
              <div className="about-job-blurb">{j.blurb}</div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter note="Like what you see?" />
    </SitePage>
  );
};
