import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBand from "@/components/ContactBand";
import FloatingCTA from "@/components/FloatingCTA";
import ModelCard from "@/components/ModelCard";
import ProductGallery from "@/components/ProductGallery";
import { CallIcon, CheckIcon } from "@/components/icons";
import { SITE, wa } from "@/lib/site";
import {
  BASE_INCLUDED,
  MODELS,
  VARIANTS,
  getModel,
  inr,
  priceLabel,
  relatedModels,
} from "@/lib/models";

export function generateStaticParams() {
  return MODELS.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = getModel(params.slug);
  if (!m) return { title: "Model not found" };
  return {
    title: m.name,
    description: `Power Book ${m.name} — ${m.tag}. Made in India. Enquire on call or WhatsApp.`,
  };
}

export default function ModelPage({ params }: { params: { slug: string } }) {
  const m = getModel(params.slug);
  if (!m) notFound();

  const walink = wa(`Hi Power Book, I'd like to enquire about the ${m.name} model.`);
  const thumbs = Array.from(
    new Set([m.img, "feat-open.jpg", "feat-usb.jpg", "product-stand.jpg", "feat-pockets.jpg"])
  ).slice(0, 5);

  const hasWireless = m.variants.some((v) => v === 3 || v === 4);
  const hasPen = m.variants.some((v) => v === 2 || v === 4);

  const specs: [string, string][] = [
    ["Available variants", m.variants.map((v) => VARIANTS[v].code).join(" · ")],
    ["Battery capacity", "10,000 mAh inbuilt power bank"],
    ["Charging", hasWireless ? "Qi wireless + cable" : "Cable charging"],
    ["Pen drive", hasPen ? "Included" : "Optional"],
    ["Inbuilt cables", "Type-C, Lightning & Micro"],
    ["Paper", "80 GSM · 96 reusable sheets"],
    ["Material", "Soft P.U. canvas / R64 leather-touch"],
    ["Customization", "Any colour, any fabric, custom logo"],
    ["Origin", "Made in India"],
  ];

  const related = relatedModels(m);

  return (
    <>
      <Header />

      <section className="pd">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link> &nbsp;›&nbsp; <Link href="/#collection">Models</Link>{" "}
            &nbsp;›&nbsp; {m.name}
          </div>
          <div className="pd-grid">
            <div data-reveal>
              <ProductGallery images={thumbs} alt={`Power Book ${m.name}`} />
            </div>
            <div className="pd-info" data-reveal>
              <span className="pd-code">
                {m.category}
                {m.badge ? (
                  <>
                    {" "}
                    &middot; <span style={{ color: "var(--red)" }}>{m.badge}</span>
                  </>
                ) : null}
              </span>
              <h1>{m.name}</h1>
              <p className="pd-tag">{m.tag}.</p>
              <div className="pd-price">
                {priceLabel(m.variants)}
                <small style={{ display: "block", fontSize: ".8rem", marginTop: 4 }}>
                  final price varies by material &amp; branding
                </small>
              </div>
              <p className="pd-desc">{m.desc}</p>

              <div className="pd-sub">Available variants</div>
              <div className="vpills">
                {m.variants.map((v) => (
                  <div className="vpill" key={v}>
                    <b>{VARIANTS[v].code}</b> <span>{VARIANTS[v].name}</span>{" "}
                    <em>{inr(VARIANTS[v].price)}</em>
                  </div>
                ))}
              </div>

              <div className="pd-cta" style={{ marginTop: 22 }}>
                <a href={walink} className="btn btn-wa" target="_blank" rel="noopener">
                  <span className="dot"></span> Enquire on WhatsApp
                </a>
                <a href={`tel:${SITE.phoneFull}`} className="btn btn-red">
                  <CallIcon /> Call to order
                </a>
              </div>
              {m.branded ? (
                <p className="pd-note" style={{ color: "var(--red)" }}>
                  Brand artwork (logo, colours) is supplied by you and applied to order — this is a
                  customisation example.
                </p>
              ) : (
                <p className="pd-note">
                  No online checkout — we take every order personally on call or WhatsApp, and help
                  you customise it.
                </p>
              )}

              <div className="pd-sub">What&apos;s included</div>
              <ul className="incl">
                {m.extras.map((t) => (
                  <li key={t}>
                    <CheckIcon />
                    <span>
                      <b>{t}</b>
                    </span>
                  </li>
                ))}
                {BASE_INCLUDED.map((b) => (
                  <li key={b.title}>
                    <CheckIcon />
                    <span>
                      <b>{b.title}</b> — <span>{b.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="spec-sec">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div data-reveal>
            <span className="eyebrow">SPECIFICATIONS</span>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--g900)", marginBottom: 8 }}>
              {m.name} at a glance
            </h2>
            <p className="lead" style={{ fontSize: ".98rem" }}>
              Fully customisable in colour, fabric and branding.
            </p>
          </div>
          <div data-reveal>
            <table className="spec-table">
              <tbody>
                {specs.map(([a, b]) => (
                  <tr key={a}>
                    <td>{a}</td>
                    <td>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow">MORE MODELS</span>
            <h2>You might also like</h2>
          </div>
          <div className="op-grid" data-reveal>
            {related.map((o) => (
              <ModelCard m={o} key={o.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap" data-reveal>
          <h2>Interested in the {m.name}?</h2>
          <p>
            Single pieces or bulk corporate gifting — we&apos;ll help you choose the variant,
            materials, colour and branding.
          </p>
          <div className="btns">
            <a href={`tel:${SITE.phoneFull}`} className="btn btn-red">
              <CallIcon /> Call {SITE.phoneDisplay}
            </a>
            <a href={walink} className="btn btn-wa" target="_blank" rel="noopener">
              <span className="dot"></span> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ContactBand />
      <Footer />
      <FloatingCTA message={`Hi Power Book, I'd like to enquire about the ${m.name} model.`} />
    </>
  );
}
