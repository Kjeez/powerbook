import Link from "next/link";
import { Model, VARIANTS, isVideoFile, mediaUrl, modelMedia, priceShort } from "@/lib/models";
import { ArrowIcon } from "./icons";

export default function ModelCard({
  m,
  featured = false,
}: {
  m: Model;
  featured?: boolean;
}) {
  const vs = m.variants.map((v) => VARIANTS[v].code).join(" · ");
  const price = priceShort(m.variants);
  const still = [m.img, ...(m.gallery ?? [])].find(Boolean);
  const hero = still || modelMedia(m)[0];

  return (
    <Link href={`/models/${m.slug}`} className={`mcard${featured ? " mcard-featured" : ""}`} data-reveal>
      <div className="mcard-img">
        {hero && isVideoFile(hero) ? (
          <video src={mediaUrl(hero)} muted playsInline loop preload="metadata" />
        ) : hero ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={mediaUrl(hero)} alt={`Power Book ${m.name}`} />
        ) : (
          <div className="mcard-placeholder">Photos coming soon</div>
        )}
        {m.badge ? <span className="mcard-badge">{m.badge}</span> : null}
      </div>
      <div className="mcard-body">
        <div>
          <h3>{m.name}</h3>
          {featured ? (
            <p className="mcard-price">{price}</p>
          ) : (
            <p className="mcard-tag">{m.tag}</p>
          )}
        </div>
        {featured ? (
          <span className="mcard-go" aria-hidden>
            <ArrowIcon />
          </span>
        ) : (
          <div className="mcard-foot">
            <span className="mcard-var">{vs}</span>
            <span className="mcard-price">{price}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
