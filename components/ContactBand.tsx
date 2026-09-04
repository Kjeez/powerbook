import { SITE, wa } from "@/lib/site";
import { CallIcon } from "./icons";

export default function ContactBand() {
  return (
    <section id="contact" className="cta">
      <div className="wrap" data-reveal>
        <h2>Let&apos;s create your Power Book</h2>
        <p>
          Single pieces or bulk corporate gifting — we&apos;ll help you pick a variant, choose a
          model and add your branding.
        </p>
        <div className="btns">
          <a href={`tel:${SITE.phoneFull}`} className="btn btn-red">
            <CallIcon /> Call {SITE.phoneDisplay}
          </a>
          <a
            href={wa("Hi Power Book, I would like to enquire.")}
            className="btn btn-wa"
            target="_blank"
            rel="noopener"
          >
            <span className="dot"></span> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
