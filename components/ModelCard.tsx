import Link from "next/link";
import { Model, VARIANTS, priceShort } from "@/lib/models";

export default function ModelCard({ m }: { m: Model }) {
  const vs = m.variants.map((v) => VARIANTS[v].code).join(" · ");
  const price =
    m.variants.length === 1 ? priceShort(m.variants) : priceShort(m.variants);
  return (
    <Link href={`/models/${m.slug}`} className="mcard" data-reveal>
      <div className="mcard-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/assets/${m.img}`} alt={`Power Book ${m.name}`} />
        {m.badge ? <span className="mcard-badge">{m.badge}</span> : null}
      </div>
      <div className="mcard-body">
        <h3>{m.name}</h3>
        <p className="mcard-tag">{m.tag}</p>
        <div className="mcard-foot">
          <span className="mcard-var">{vs}</span>
          <span className="mcard-price">{price}</span>
        </div>
      </div>
    </Link>
  );
}
