import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBand from "@/components/ContactBand";
import FloatingCTA from "@/components/FloatingCTA";
import ModelCard from "@/components/ModelCard";
import PopupBanner from "@/components/PopupBanner";
import HeroVideo from "@/components/HeroVideo";
import {
  ArrowIcon,
  BatteryIcon,
  BoltIcon,
  CallIcon,
  CheckIcon,
  DownloadIcon,
  LampIcon,
  PagesIcon,
  PhoneCableIcon,
  ShieldIcon,
  WalletIcon,
} from "@/components/icons";
import { SITE, wa } from "@/lib/site";
import { CATEGORIES, MODELS, VARIANTS, VariantId, inr } from "@/lib/models";

const greenDot = (
  <span
    className="dot"
    style={{ width: 8, height: 8, borderRadius: "50%", background: "#3ad06a", display: "inline-block" }}
  />
);

function VariantCard({ id }: { id: VariantId }) {
  const v = VARIANTS[id];
  const pop = id === 3;
  return (
    <div className={`vcard${pop ? " pop" : ""}`} data-reveal>
      {pop ? <span className="vtag">Most popular</span> : null}
      <div className="vcode">{v.code}</div>
      <h3>{v.name}</h3>
      <p className="vsub">{v.blurb}</p>
      <div className="vprice">
        {inr(v.price)} <small>onwards</small>
      </div>
      <ul className="vlist">
        {v.features.map((f) => (
          <li key={f}>
            <CheckIcon /> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

const FEATURES = [
  { icon: <BoltIcon />, title: "Wireless charging", img: "feat-wireless.jpg", text: "A Qi pad built into the cover. Rest your phone on the book and it charges (L3 & L4)." },
  { icon: <BatteryIcon />, title: "Inbuilt power bank", img: "feat-usb.jpg", text: "A 10,000 mAh battery with built-in Type-C, Lightning and Micro cables in the spine." },
  { icon: <PagesIcon />, title: "Reusable pages", img: "feat-pages.jpg", text: "Ring-bound, 80 GSM refillable sheets — 96 pages. Rearrange, remove and refill." },
  { icon: <LampIcon />, title: "Lamp, lock & glow logo", img: "feat-lamp.jpg", text: "Optional LED reading lamp, glowing logo and biometric touch fingerprint lock." },
  { icon: <WalletIcon />, title: "Smart organiser", img: "feat-pockets.jpg", text: "Card pockets, a pen loop and an ID slot keep essentials in their place." },
  { icon: <ShieldIcon />, title: "Premium finish", img: "feat-open.jpg", text: "Soft P.U. canvas or R64 leather-touch, in any colour and fabric. Made in India." },
];

export default function HomePage() {
  return (
    <>
      <PopupBanner />
      <Header />

      <section className="hero">
        <div className="hero-pattern"></div>
        <div className="wrap">
          <div className="hero-downloads">
            <span className="hd-label">Downloads</span>
            <a href="/downloads/powerbook-catalogue.pdf" download className="hd">
              <DownloadIcon /> Catalogue (PDF)
            </a>
            <a href="/downloads/powerbook-catalogue-pricing.pdf" download className="hd">
              <DownloadIcon /> Price list (PDF)
            </a>
            <a href="/downloads/powerbook-photos.zip" download className="hd">
              <DownloadIcon /> All product photos
            </a>
            <a href="/downloads/powerbook-videos.zip" download className="hd">
              <DownloadIcon /> All videos
            </a>
          </div>
          <div className="hero-grid">
            <div className="hero-left">
              <div className="hero-title">
                <h1>Power Book</h1>
                <span className="hero-pill">PREMIUM</span>
              </div>
              <p className="sub">
                Revolutionary notebooks with built-in power — an inbuilt power bank, wireless
                charging and built-in cables. Four variants across a full collection of models, each
                fully customisable.
              </p>
              <div className="hero-feats">
                <div className="hf">
                  <BatteryIcon /> 10,000 mAh power bank
                </div>
                <div className="hf">
                  <BoltIcon /> Wireless charging
                </div>
                <div className="hf">
                  <PhoneCableIcon /> Type-C fast charging
                </div>
              </div>
              <div className="hero-actions">
                <Link href="#collection" className="btn btn-white">
                  Explore the collection <ArrowIcon />
                </Link>
                <a
                  href={wa("Hi Power Book, I would like to enquire about your power bank diaries.")}
                  className="btn btn-dark"
                  target="_blank"
                  rel="noopener"
                >
                  {greenDot} WhatsApp us
                </a>
              </div>
              <div className="hero-stats" style={{marginTop:"auto",paddingTop:28}}>
                <div className="st">
                  <b>10,000</b>
                  <span>mAh battery</span>
                </div>
                <div className="st">
                  <b>20+</b>
                  <span>models</span>
                </div>
                <div className="st">
                  <b>L1–L4</b>
                  <span>variants</span>
                </div>
              </div>
            </div>
            <div className="hero-media" data-reveal>
              <div className="hero-frame">
                <HeroVideo />
              </div>
            </div>
          </div>

        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 100V50C360 90 720 10 1080 50C1260 70 1380 90 1440 100H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* COLLECTION (products first) */}
      <section id="collection" className="range">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow">THE COLLECTION</span>
            <h2>Explore every model</h2>
            <p className="lead">
              Fourteen K-series Power Books — K1 through K14 — each available in the L1–L4
              variants shown.
            </p>
          </div>
          {CATEGORIES.map((cat) => {
            const items = MODELS.filter((m) => m.category === cat.name);
            if (!items.length) return null;
            return (
              <div className="coll-group" key={cat.name}>
                <div className="coll-head">
                  <h3>{cat.name}</h3>
                  <p>{cat.sub}</p>
                </div>
                <div className="mgrid">
                  {items.map((m) => (
                    <ModelCard m={m} key={m.slug} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* VARIANTS */}
      <section id="variants">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow">UNDERSTAND THE RANGE</span>
            <h2>Four variants — L1 to L4</h2>
            <p className="lead">
              Every Power Book model is offered in one or more of these feature tiers. Pick the
              variant, then pick the model design.
            </p>
          </div>
          <div className="variant-grid">
            {([1, 2, 3, 4] as VariantId[]).map((id) => (
              <VariantCard key={id} id={id} />
            ))}
          </div>
          <p className="center muted" style={{ marginTop: 22, fontSize: ".9rem" }}>
            Prices are indicative starting prices per variant and vary by model, material and
            branding.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="range">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow">WHY POWER BOOK</span>
            <h2>One elegant book, in place of a bag full of gadgets</h2>
            <p className="lead">
              Write, charge and organise from a single premium companion — for the desk, the flight
              and the boardroom.
            </p>
          </div>
          <div className="feature-grid">
            {FEATURES.map((f) => (
              <div className="fcard" data-reveal key={f.title}>
                <div className="fimg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/assets/${f.img}`} alt={f.title} />
                  <span className="ficon">{f.icon}</span>
                </div>
                <div className="fbody">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="wrap split rev">
          <div className="s-media" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/product-stand.jpg" alt="Power Book Canvas" />
          </div>
          <div data-reveal>
            <span className="eyebrow">TWO CORE MATERIALS</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3.4vw,2.5rem)", color: "var(--g900)", marginBottom: 16 }}>
              Canvas, or New R64
            </h2>
            <p className="lead">
              Every variant comes in two signature materials. Canvas is our soft-textile starter
              favourite; New R64 is the same range in a premium leather-touch finish. Beyond these,
              choose any colour and any fabric.
            </p>
            <div className="swatches">
              <div className="swatch">
                <i style={{ background: "#9a9488" }}></i>
                <div>
                  <b>Canvas</b>
                  <small>soft fabric</small>
                </div>
              </div>
              <div className="swatch">
                <i style={{ background: "#4a463f" }}></i>
                <div>
                  <b>New R64</b>
                  <small>leather-touch</small>
                </div>
              </div>
              <div className="swatch">
                <i style={{ background: "linear-gradient(135deg,#EF4343,#B82E2E)" }}></i>
                <div>
                  <b>Custom</b>
                  <small>any colour</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE */}
      <section id="custom">
        <div className="wrap split">
          <div className="s-media" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/lifestyle-box.jpg" alt="Power Book gift packaging" />
          </div>
          <div data-reveal>
            <span className="eyebrow">CORPORATE & CUSTOM GIFTING</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3.4vw,2.5rem)", color: "var(--g900)", marginBottom: 16 }}>
              Your brand, beautifully powered
            </h2>
            <p className="lead">
              Any model can be made in your colours and fabric, with your logo — printed, embossed or
              in a glowing LED finish. Rolex, Starbucks, L&apos;Oréal, Jack Daniel&apos;s and Honda
              are shown as examples of the custom branding we produce.
            </p>
            <div className="chips">
              <span className="chip">Any colour</span>
              <span className="chip">Any fabric</span>
              <span className="chip">Custom logo</span>
              <span className="chip">LED glow logo</span>
              <span className="chip">Gift box &amp; pen</span>
              <span className="chip">Bulk orders</span>
            </div>
            <div className="brands">
              <span>Rolex</span>
              <span>Starbucks</span>
              <span>L&apos;Oréal</span>
              <span>Jack Daniel&apos;s</span>
              <span>Honda</span>
            </div>
            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={`tel:${SITE.phoneFull}`} className="btn btn-red">
                <CallIcon /> Call for a quote
              </a>
              <a
                href={wa("Hi Power Book, I am interested in custom/bulk corporate gifting.")}
                className="btn btn-dark"
                target="_blank"
                rel="noopener"
              >
                {greenDot} WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="range">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow">IN DETAIL</span>
            <h2>A closer look</h2>
            <p className="lead">Photographed from our own studio and product films.</p>
          </div>
          <div className="gallery" data-reveal>
            {["product-stand.jpg", "feat-open.jpg", "feat-charge2.jpg", "feat-usb.jpg", "feat-pockets.jpg"].map(
              (g) => (
                <a href="#" key={g}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/assets/${g}`} alt="Power Book detail" />
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap" data-reveal>
          <h2>Interested in Power Book?</h2>
          <p>
            Single pieces or bulk corporate gifting — talk to us directly. We&apos;ll help you pick a
            variant, choose a model and add your branding.
          </p>
          <div className="btns">
            <a href={`tel:${SITE.phoneFull}`} className="btn btn-red">
              <CallIcon /> Call {SITE.phoneDisplay}
            </a>
            <a href={wa("Hi Power Book, I would like to place an enquiry.")} className="btn btn-wa" target="_blank" rel="noopener">
              <span className="dot"></span> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ContactBand />
      <Footer />
      <FloatingCTA />
    </>
  );
}
