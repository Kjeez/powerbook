"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE, wa } from "@/lib/site";
import { CallIcon } from "./icons";
import { CATEGORIES, MODELS } from "@/lib/models";

function Caret() {
  return (
    <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [modelsOpen, setModelsOpen] = useState(false);
  const close = () => {
    setOpen(false);
    setModelsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link href="/" className="brand" onClick={close} aria-label="Power Book home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/POWER.png" alt="Power Book" />
        </Link>

        {/* Desktop nav */}
        <nav className="nav-links">
          <div className="nav-item">
            <Link href="/#variants" className="nav-link">
              Variants <Caret />
            </Link>
            <div className="mega" style={{ width: "min(860px, 92vw)" }}>
              <div className="mega-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
                {/* Wireless Charging — non-branded only */}
                <div className="mega-col">
                  <h5>⚡ Wireless Charging</h5>
                  {MODELS.filter((m) => !m.branded && m.extras.some((e) => e.toLowerCase().includes("wireless"))).slice(0, 6).map((m) => (
                    <Link href={`/models/${m.slug}`} key={m.slug}>{m.name}</Link>
                  ))}
                </div>
                {/* Fingerprint Lock */}
                <div className="mega-col">
                  <h5>🔒 Fingerprint Lock</h5>
                  {MODELS.filter((m) => m.extras.some((e) => e.toLowerCase().includes("fingerprint"))).map((m) => (
                    <Link href={`/models/${m.slug}`} key={m.slug}>{m.name}</Link>
                  ))}
                </div>
                {/* Reading Lamp */}
                <div className="mega-col">
                  <h5>💡 Reading Lamp</h5>
                  {MODELS.filter((m) => m.extras.some((e) => e.toLowerCase().includes("lamp"))).map((m) => (
                    <Link href={`/models/${m.slug}`} key={m.slug}>{m.name}</Link>
                  ))}
                </div>
                {/* Glow Logo */}
                <div className="mega-col">
                  <h5>✨ Glow Logo</h5>
                  {MODELS.filter((m) => m.extras.some((e) => e.toLowerCase().includes("glow"))).slice(0, 6).map((m) => (
                    <Link href={`/models/${m.slug}`} key={m.slug}>{m.name}</Link>
                  ))}
                </div>
                {/* Pen Drive */}
                <div className="mega-col">
                  <h5>💾 Pen Drive</h5>
                  {MODELS.filter((m) => m.extras.some((e) => e.toLowerCase().includes("pen drive"))).slice(0, 6).map((m) => (
                    <Link href={`/models/${m.slug}`} key={m.slug}>{m.name}</Link>
                  ))}
                </div>
                {/* Gift Sets */}
                <div className="mega-col">
                  <h5>🎁 Gift Sets</h5>
                  {MODELS.filter((m) => m.category === "Gift Sets").map((m) => (
                    <Link href={`/models/${m.slug}`} key={m.slug}>{m.name}</Link>
                  ))}
                </div>
              </div>
              <div className="mega-foot">
                <span style={{ fontSize: ".85rem", color: "var(--g500)" }}>
                  Browse by feature — all models available in L1–L4 variants
                </span>
                <Link href="/#variants">View all variants →</Link>
              </div>
            </div>
          </div>
          <div className="nav-item">
            <Link href="/#collection" className="nav-link">
              Models <Caret />
            </Link>
            <div className="mega">
              <div className="mega-grid">
                {CATEGORIES.map((cat) => {
                  const items = MODELS.filter((m) => m.category === cat.name);
                  if (!items.length) return null;
                  return (
                    <div className="mega-col" key={cat.name}>
                      <h5>{cat.name}</h5>
                      {items.map((m) => (
                        <Link href={`/models/${m.slug}`} key={m.slug}>
                          {m.name}
                        </Link>
                      ))}
                    </div>
                  );
                })}
              </div>
              <div className="mega-foot">
                <span className="muted" style={{ fontSize: ".85rem", color: "var(--g500)" }}>
                  4 variants (L1–L4) · 20+ models
                </span>
                <Link href="/#collection">View all models →</Link>
              </div>
            </div>
          </div>
          <Link href="/#custom">Corporate Gifting</Link>
          <Link href="/#gallery">Gallery</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="nav-cta">
          <a href={`tel:${SITE.phoneFull}`} className="nav-phone">
            <CallIcon />
            {SITE.phoneDisplay}
          </a>
          <Link href="/#contact" className="btn btn-red btn-sm">
            Contact us
          </Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <Link href="/#variants" onClick={close}>
            Variants ›
          </Link>
          <button
            className={`m-btn${modelsOpen ? " open" : ""}`}
            onClick={() => setModelsOpen((v) => !v)}
            aria-expanded={modelsOpen}
          >
            Models <Caret />
          </button>
          <div className={`mobile-models${modelsOpen ? " show" : ""}`}>
            {CATEGORIES.map((cat) => {
              const items = MODELS.filter((m) => m.category === cat.name);
              if (!items.length) return null;
              return (
                <div key={cat.name}>
                  <h5>{cat.name}</h5>
                  {items.map((m) => (
                    <Link href={`/models/${m.slug}`} key={m.slug} onClick={close}>
                      {m.name}
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
          <Link href="/#custom" onClick={close}>
            Corporate Gifting
          </Link>
          <Link href="/#gallery" onClick={close}>
            Gallery
          </Link>
          <Link href="/#contact" onClick={close}>
            Contact
          </Link>
          <div className="mobile-cta">
            <a href={`tel:${SITE.phoneFull}`} className="mobile-phone">
              <CallIcon /> {SITE.phoneDisplay}
            </a>
            <a
              href={wa("Hi Power Book, I would like to enquire.")}
              className="btn btn-dark"
              target="_blank"
              rel="noopener"
              onClick={close}
            >
              <span
                style={{ width: 8, height: 8, borderRadius: "50%", background: "#3ad06a", display: "inline-block" }}
              ></span>{" "}
              WhatsApp us
            </a>
            <Link href="/#contact" className="btn btn-red" onClick={close}>
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
