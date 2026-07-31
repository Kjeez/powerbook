import { SITE, wa } from "@/lib/site";
import { CallIcon } from "./icons";

export default function ContactBand() {
  return (
    <section id="contact" className="contact-band">
      <div className="grid-overlay"></div>
      <div className="wrap" data-reveal>
        <a href={`mailto:${SITE.email}`} className="email">
          {SITE.email}
        </a>
        <div className="divider"></div>
        <div className="lines">
          <p>
            Mobile: <a href={`tel:${SITE.phoneFull}`}>+91 {SITE.phoneDisplay}</a>
          </p>
          <p>
            Landline: <a href={`tel:${SITE.landlineTel}`}>{SITE.landline}</a>
          </p>
        </div>
        <div className="cbtns">
          <a href={`tel:${SITE.phoneFull}`} className="btn btn-white">
            <CallIcon /> Call now
          </a>
          <a
            href={wa("Hi Power Book, I would like to enquire.")}
            className="btn btn-dark"
            target="_blank"
            rel="noopener"
          >
            <span className="dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#3ad06a", display: "inline-block" }}></span>{" "}
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
