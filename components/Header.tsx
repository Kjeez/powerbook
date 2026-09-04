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
          <Link href="/#featured">Products</Link>
          <Link href="/#features">Why Power Book</Link>
          <Link href="/#custom">Corporate Gifting</Link>
          <Link href="/#gallery">Gallery</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="nav-cta">
          <a
            href={wa("Hi Power Book, I would like to enquire.")}
            className="btn btn-red btn-sm"
            target="_blank"
            rel="noopener"
          >
            WhatsApp Us
          </a>
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
          <Link href="/#featured" onClick={close}>
            Products
          </Link>
          <Link href="/#features" onClick={close}>
            Why Power Book
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
