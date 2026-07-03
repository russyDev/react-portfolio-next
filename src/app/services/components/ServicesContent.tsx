"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SitePage, SiteFooter } from "@/components/site";
import "./services.css";

const services = [
  {
    title: "Frontend Development",
    desc: "Modern, scalable and responsive user interfaces built with the latest frontend technologies. Pixel-accurate implementation, accessibility baked in, and performance budgets that keep your pages fast on any device.",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "accessibility"],
  },
  {
    title: "Backend Development",
    desc: "Robust and secure backend solutions — RESTful APIs and server-side applications with a strong focus on performance, scalability and clean architecture.",
    tags: ["Node.js", "REST", "GraphQL", "PHP", "security"],
  },
  {
    title: "Full-Stack Development",
    desc: "Frontend and backend expertise combined into complete end-to-end solutions. One person owning the whole product means fewer handoffs, faster decisions and a codebase that fits together.",
    tags: ["architecture", "end-to-end", "deployment"],
  },
  {
    title: "Testing & Quality Assurance",
    desc: "Automated and manual testing strategies that make software reliable and robust. E2E coverage with Cypress, unit tests where they matter, and CI pipelines that catch regressions before your users do.",
    tags: ["Cypress", "e2e", "unit tests", "CI"],
  },
  {
    title: "Tools & Workflow",
    desc: "Streamlined development processes with modern tools and practices — efficient collaboration and continuous delivery in both small and large teams.",
    tags: ["Git", "Webpack", "CI/CD", "code review"],
  },
  {
    title: "CMS & E-commerce",
    desc: "Content management systems and e-commerce platforms developed and customized to your exact requirements — seamless user experiences that are easy for your team to manage.",
    tags: ["WordPress", "headless CMS", "WooCommerce", "SEO"],
  },
];

const steps = [
  { num: "step 1", title: "Talk it through", blurb: "A friendly call to understand your goals, users and constraints." },
  { num: "step 2", title: "Plan & estimate", blurb: "Clear scope, honest timeline, no surprises down the road." },
  { num: "step 3", title: "Build & show", blurb: "Short iterations with regular demos — you see progress weekly." },
  { num: "step 4", title: "Ship & support", blurb: "Tested, deployed, documented — and I stick around after launch." },
];

export const ServicesContent: React.FC = () => {
  const [open, setOpen] = useState(0);

  return (
    <SitePage>
      <section className="services-header">
        <div className="site-eyebrow">{"// services"}</div>
        <h1 className="site-page-title">
          Everything your project needs, <span className="site-title-accent-italic">under one roof</span>.
        </h1>
        <p className="site-lead services-lead">
          From the first line of frontend code to a fully tested, deployed product — click a service to see what&apos;s
          included.
        </p>
      </section>

      <section className="services-accordion">
        {services.map((s, i) => {
          const isOpen = open === i;
          return (
            <div key={s.title} className="services-item">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="services-toggle"
                aria-expanded={isOpen}
              >
                <span className="services-num">0{i + 1}</span>
                <span className="services-title">{s.title}</span>
                <span className={`services-sign ${isOpen ? "services-sign-open" : ""}`}>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="services-panel">
                  <span className="services-panel-spacer" />
                  <div className="services-panel-body">
                    <div className="services-desc">{s.desc}</div>
                    <div className="services-tags">
                      {s.tags.map((tag) => (
                        <span key={tag} className="services-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href="/contact" className="site-link-accent">
                      Discuss this service →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      <section className="services-steps">
        <h2 className="site-section-title">How we&apos;ll work together</h2>
        <div className="services-steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="services-step">
              <div className="services-step-num">{step.num}</div>
              <div className="services-step-title">{step.title}</div>
              <div className="services-step-blurb">{step.blurb}</div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter note="Found what you need?" />
    </SitePage>
  );
};
