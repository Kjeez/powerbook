import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBand from "@/components/ContactBand";
import FloatingCTA from "@/components/FloatingCTA";
import ModelCard from "@/components/ModelCard";
import PopupBanner from "@/components/PopupBanner";
import DownloadLinks from "@/components/DownloadLinks";
import {
  ArrowIcon,
  BatteryIcon,
  BoltIcon,
  CallIcon,
  CheckIcon,
  LampIcon,
  PagesIcon,
  PhoneCableIcon,
  ShieldIcon,
} from "@/components/icons";
import { SITE, wa } from "@/lib/site";
import { CATEGORIES, MODELS, VARIANTS, VariantId, inr } from "@/lib/models";
import { NEW_STUDIO_VIDEOS, newStudioVideoUrl } from "@/lib/studio-videos";

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

const WHY = [
  { icon: <BatteryIcon />, title: "Power bank", text: "10,000 mAh inbuilt battery." },
  { icon: <BoltIcon />, title: "Wireless charging", text: "Qi pad in the cover (L3 & L4)." },
  { icon: <PhoneCableIcon />, title: "Built-in cables", text: "Type-C, Lightning and Micro." },
  { icon: <PagesIcon />, title: "Reusable pages", text: "Ring-bound 80 GSM refills." },
  { icon: <LampIcon />, title: "Pen drive", text: "Optional inbuilt storage (L2 & L4)." },
  { icon: <ShieldIcon />, title: "Custom branding", text: "Any colour, fabric and logo." },
];

export default function HomePage() {
  return (
    <>
      <PopupBanner />
      <Header />

      <section className="hero">
        <div className="wrap">
          <div className="hero-downloads">
            <span className="hd-label">Downloads</span>
            <DownloadLinks variant="hero" />
          </div>
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-kicker">Write | Charge | Organise | Go further</p>
              <div className="hero-title">
                <h1>
                  The notebook that <em>powers</em> your day.
                </h1>
              </div>
              <p className="sub">
                A premium notebook with a built-in power bank, wireless charging and integrated
                cables.
              </p>
              <div className="hero-actions">
                <Link href="#collection" className="btn btn-red">
                  Explore Power Books <ArrowIcon />
                </Link>
                <Link href="#custom" className="btn btn-outline btn-ghost">
                  Corporate gifting
                </Link>
              </div>
            </div>
            <div className="hero-media" data-reveal>
              <div className="hero-photo">
                <picture>
                  <source media="(max-width: 720px)" srcSet="/assets/hero-mobile.jpg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/hero-desktop.jpg" alt="Power Book notebook" />
                </picture>
              </div>
              <div className="hero-dots" aria-hidden>
                <span className="on"></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="hero-feats">
              <div className="hf">
                <BatteryIcon />
                <span>10,000 mAh power bank</span>
              </div>
              <div className="hf">
                <BoltIcon />
                <span>Wireless charging</span>
              </div>
              <div className="hf">
                <PhoneCableIcon />
                <span>Built-in Type-C cables</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured">
        <div className="wrap">
          <div className="feat-head" data-reveal>
            <div className="section-head">
              <span className="eyebrow">OUR FAVOURITES</span>
              <h2 className="serif">Featured collection</h2>
              <p className="lead">A selection of K-series models from the public catalogue.</p>
            </div>
            <Link href="#collection" className="feat-link">
              View all 15 models →
            </Link>
          </div>
          <div className="mgrid-feat">
            {MODELS.filter((m) => m.slug !== "pouch")
              .slice(0, 6)
              .map((m) => (
                <ModelCard m={m} key={m.slug} featured />
              ))}
          </div>
        </div>
      </section>

      <section id="features" className="why">
        <div className="wrap why-grid">
          <div data-reveal>
            <span className="eyebrow">WHY POWER BOOK</span>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3.4vw,2.6rem)", marginBottom: 14 }}>
              Built for a smarter you.
            </h2>
            <p className="lead">
              Write, charge and organise from a single premium companion — for the desk, the flight
              and the boardroom.
            </p>
            <div style={{ marginTop: 24 }}>
              <Link href="#collection" className="btn btn-red">
                See all models <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="why-icons" data-reveal>
            {WHY.map((f) => (
              <div className="why-icon" key={f.title}>
                {f.icon}
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION (products first) */}
      <section id="collection" className="range">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow">THE COLLECTION</span>
            <h2 className="serif">Explore every model</h2>
            <p className="lead">
              Fourteen K-series Power Books — K1 through K14 — plus a matching pouch. Each
              Power Book is available in the L1–L4 variants shown.
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

      {/* MATERIALS */}
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="wrap split rev">
          <div className="s-media" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/product-stand.jpg" alt="Power Book Canvas" />
          </div>
          <div data-reveal>
            <span className="eyebrow">TWO CORE MATERIALS</span>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3.4vw,2.5rem)", color: "var(--g900)", marginBottom: 16 }}>
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
      <section id="custom" className="band-dark">
        <div className="wrap split">
          <div data-reveal>
            <span className="eyebrow">CORPORATE GIFTING</span>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem,3.4vw,2.5rem)", marginBottom: 16 }}>
              Your brand deserves more than another diary.
            </h2>
            <p className="lead">
              Any model can be made in your colours and fabric, with your logo — printed, embossed or
              in a glowing LED finish.
            </p>
            <div className="chips">
              <span className="chip">Any colour</span>
              <span className="chip">Any fabric</span>
              <span className="chip">Custom logo</span>
              <span className="chip">LED glow logo</span>
              <span className="chip">Gift box &amp; pen</span>
              <span className="chip">Bulk orders</span>
            </div>
            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={`tel:${SITE.phoneFull}`} className="btn btn-red">
                <CallIcon /> Get a corporate quote
              </a>
              <a
                href={wa("Hi Power Book, I am interested in custom/bulk corporate gifting.")}
                className="btn btn-outline"
                style={{ color: "#fff", borderColor: "rgba(255,255,255,.35)" }}
                target="_blank"
                rel="noopener"
              >
                {greenDot} WhatsApp us
              </a>
            </div>
          </div>
          <div className="s-media" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/lifestyle-box.jpg" alt="Power Book gift packaging" />
          </div>
        </div>
      </section>

      <section className="film" id="film">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow">THE FILM</span>
            <h2 className="serif">See Power Book in one piece</h2>
            <p className="lead">Studio product films — tap to play with sound. All clips are in Download all videos.</p>
          </div>
          <div className="film-frame" data-reveal>
            <video
              src="/media/onepiecepowerbook.mp4"
              controls
              playsInline
              preload="metadata"
              poster="/assets/hero-desktop.jpg"
            />
          </div>
          <div className="film-grid" data-reveal>
            {NEW_STUDIO_VIDEOS.map((name, i) => (
              <div className="film-frame" key={name}>
                <video src={newStudioVideoUrl(name)} controls playsInline preload="metadata" />
                <p className="film-cap">Clip {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="range">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow">IN DETAIL</span>
            <h2 className="serif">A closer look</h2>
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

      <ContactBand />

      <section id="variants" className="range">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow">THE RANGE</span>
            <h2 className="serif">One notebook. Four levels of power.</h2>
            <p className="lead">Every model is offered in L1 to L4. Pick the variant, then the design.</p>
          </div>
          <div className="variant-grid">
            {([1, 2, 3, 4] as VariantId[]).map((id) => (
              <VariantCard key={id} id={id} />
            ))}
          </div>
          <div className="feat-more">
            <Link href="#collection" className="btn btn-outline btn-range">
              Compare all variants <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </>
  );
}
