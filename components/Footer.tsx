import Link from "next/link";
import { SITE, wa } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div>
          <Link href="/" className="brand" aria-label="Power Book home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/POWER.png" alt="Power Book" style={{ height: 30, width: "auto" }} />
          </Link>
          <p className="fdesc">
            Premium notebooks with built-in power — an inbuilt power bank, wireless charging and
            reusable pages. A Kamlesh Group brand. Made in India, trusted for premium corporate
            gifting.
          </p>
        </div>
        <div className="fcol">
          <h4>Explore</h4>
          <Link href="/#variants">Variants (L1–L4)</Link>
          <Link href="/#collection">All models</Link>
          <Link href="/#custom">Corporate gifting</Link>
          <Link href="/#gallery">Gallery</Link>
        </div>
        <div className="fcol">
          <h4>Enquire</h4>
          <a href={`tel:${SITE.phoneFull}`}>Call · {SITE.phoneDisplay}</a>
          <a href={wa("Hi Power Book, I would like to enquire.")} target="_blank" rel="noopener">
            WhatsApp
          </a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© 2026 Kamlesh Group of Companies. All rights reserved.</span>
        <span>Made in India</span>
      </div>
    </footer>
  );
}
