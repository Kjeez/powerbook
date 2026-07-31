export type VariantId = 1 | 2 | 3 | 4;

export interface Variant {
  id: VariantId;
  code: string;
  name: string;
  blurb: string;
  price: number;
  features: string[];
}

export const VARIANTS: Record<VariantId, Variant> = {
  1: {
    id: 1,
    code: "L1",
    name: "Essential",
    blurb: "Only the 10,000 mAh power bank with built-in cables — cable charging.",
    price: 2999,
    features: ["Only 10,000 mAh power bank", "Built-in cables", "Cable charging"],
  },
  2: {
    id: 2,
    code: "L2",
    name: "Essential + Pen Drive",
    blurb: "Everything in L1, plus an inbuilt pen drive.",
    price: 3499,
    features: ["Everything in L1", "+ Inbuilt pen drive", "Cable charging"],
  },
  3: {
    id: 3,
    code: "L3",
    name: "Wireless",
    blurb: "Everything in L1, plus Qi wireless charging on the cover.",
    price: 4499,
    features: ["Everything in L1", "+ Qi wireless charging", "Cable-free top-ups"],
  },
  4: {
    id: 4,
    code: "L4",
    name: "Wireless + Pen Drive",
    blurb: "Wireless charging and an inbuilt pen drive — fully loaded.",
    price: 5999,
    features: ["+ Qi wireless charging", "+ Inbuilt pen drive", "Every feature included"],
  },
};

export type Category =
  | "Signature"
  | "Finish & Design"
  | "Touch Lock"
  | "Gift Sets"
  | "Premium"
  | "Corporate Branding";

export const CATEGORIES: { name: Category; sub: string }[] = [
  { name: "Signature", sub: "Two core materials, each in all four variants." },
  { name: "Finish & Design", sub: "Distinctive colours, formats and finishes." },
  { name: "Touch Lock", sub: "Biometric fingerprint security built in." },
  { name: "Gift Sets", sub: "Boxed, ready-to-gift Power Book sets." },
  { name: "Premium", sub: "Top-tier finishes and new launches." },
  {
    name: "Corporate Branding",
    sub: "Any brand, applied to order — examples below. Branding artwork supplied by you.",
  },
];

export interface Model {
  slug: string;
  name: string;
  category: Category;
  variants: VariantId[];
  img: string;
  tag: string;
  extras: string[];
  branded: boolean;
  badge?: string;
  desc: string;
}

export const MODELS: Model[] = [
  {
    slug: "canvas",
    name: "Canvas",
    category: "Signature",
    variants: [1, 2, 3, 4],
    img: "product-stand.jpg",
    tag: "The signature Power Book — our starter favourite and most in-demand model",
    extras: ["Soft canvas fabric finish"],
    branded: false,
    badge: "Most popular",
    desc: "The original Power Book. A premium refillable canvas diary with the full 10,000 mAh power bank system, available across all four variants — from the cable-only L1 to the fully-loaded L4.",
  },
  {
    slug: "r64",
    name: "New R64",
    category: "Signature",
    variants: [1, 2, 3, 4],
    img: "r64.jpg",
    tag: "The signature range in a premium R64 leather-touch material",
    extras: ["R64 leather-touch finish", "Textured woven band"],
    branded: false,
    badge: "New",
    desc: "The same Power Book engineering as Canvas, rebuilt in a refined R64 leather-touch material with a woven texture band. Available in the full L1–L4 range and in two colours.",
  },
  {
    slug: "pista-green",
    name: "Pista Green",
    category: "Finish & Design",
    variants: [3],
    img: "product-stand.jpg",
    tag: "Soft pista-green finish with a built-in reading lamp",
    extras: ["Pista green colour", "Built-in reading lamp", "Qi wireless charging"],
    branded: false,
    desc: "A calm pista-green Power Book built on the L3 variant, with a built-in reading lamp for late-night notes and Qi wireless charging on the cover.",
  },
  {
    slug: "dark-mode",
    name: "Dark Mode",
    category: "Finish & Design",
    variants: [4],
    img: "feat-charge2.jpg",
    tag: "All-black styling with a standard glowing logo",
    extras: ["All-black finish", "Standard logo glow", "Wireless + pen drive"],
    branded: false,
    desc: "A sleek, all-black Power Book on the top L4 variant — wireless charging and an inbuilt pen drive — finished with a subtle standard glowing logo.",
  },
  {
    slug: "lee-folder",
    name: "Lee Folder",
    category: "Finish & Design",
    variants: [4],
    img: "feat-open.jpg",
    tag: "Large folder format — the fully-loaded L4",
    extras: ["Big folder size", "Wireless + pen drive"],
    branded: false,
    desc: "A larger folder-format Power Book built on the L4 variant, with room for full-size documents alongside wireless charging and an inbuilt pen drive.",
  },
  {
    slug: "mini",
    name: "Mini",
    category: "Finish & Design",
    variants: [3],
    img: "product-stand.jpg",
    tag: "The compact Power Book — L3 in a smaller size",
    extras: ["Compact small size", "Qi wireless charging"],
    branded: false,
    desc: "All the essentials of the L3 wireless variant in a compact, pocket-friendlier size — ideal for travel and everyday carry.",
  },
  {
    slug: "loop-glow-black",
    name: "Loop Glow Black",
    category: "Finish & Design",
    variants: [3],
    img: "feat-charge2.jpg",
    tag: "Black finish with a glowing logo loop",
    extras: ["Glowing logo loop", "Black finish", "Qi wireless charging"],
    branded: false,
    desc: "A black L3 Power Book with a striking glowing logo on the strap loop — premium presence with wireless charging built in.",
  },
  {
    slug: "touch-finger-lock",
    name: "Touch Finger Lock",
    category: "Touch Lock",
    variants: [3],
    img: "feat-lamp.jpg",
    tag: "Black diary with a writing pad and touch fingerprint lock",
    extras: ["Touch fingerprint lock", "Writing pad", "Black finish", "Qi wireless charging"],
    branded: false,
    desc: "Security meets utility — a black L3 Power Book with a biometric touch fingerprint lock and an integrated writing pad, plus wireless charging.",
  },
  {
    slug: "gray-canvas-fingerlock",
    name: "Gray Canvas Fingerlock",
    category: "Touch Lock",
    variants: [3],
    img: "product-stand.jpg",
    tag: "Grey canvas with a touch fingerprint lock",
    extras: ["Touch fingerprint lock", "Grey canvas", "Qi wireless charging"],
    branded: false,
    desc: "The grey canvas L3 Power Book fitted with a biometric touch fingerprint lock — keep your notes private, and your phone charged wirelessly.",
  },
  {
    slug: "gray-canvas-fingerlock-giftset",
    name: "Gray Canvas Fingerlock Gift Set",
    category: "Gift Sets",
    variants: [3],
    img: "lifestyle-box.jpg",
    tag: "Grey canvas fingerlock, boxed with a premium pen",
    extras: ["Touch fingerprint lock", "Premium pen", "Gift box"],
    branded: false,
    desc: "The Gray Canvas Fingerlock presented as a complete gift set — boxed with a premium pen. A ready-to-gift package for clients and teams.",
  },
  {
    slug: "gray-zipper-giftset",
    name: "Gray Zipper Gift Set",
    category: "Gift Sets",
    variants: [3],
    img: "lifestyle-box.jpg",
    tag: "Zip-close diary with standard logo glow, lamp, box and pen",
    extras: ["Zipper closure", "Standard logo glow", "Reading lamp", "Premium pen", "Gift box"],
    branded: false,
    desc: "A zip-close L3 Power Book with a standard glowing logo and built-in reading lamp, boxed with a premium pen — a complete, elevated gifting set.",
  },
  {
    slug: "brown-threefold-giftset",
    name: "Brown Threefold Gift Set",
    category: "Gift Sets",
    variants: [3],
    img: "lifestyle-box.jpg",
    tag: "Brown three-fold diary with logo glow and pen box",
    extras: ["Three-fold format", "Logo glow", "Pen box"],
    branded: false,
    desc: "A warm brown three-fold Power Book with a glowing logo, presented with a pen box — a distinctive, premium corporate gift on the L3 variant.",
  },
  {
    slug: "amazon-threefold",
    name: "Amazon Threefold",
    category: "Gift Sets",
    variants: [3],
    img: "feat-open.jpg",
    tag: "Three-fold diary with a writing pad inside",
    extras: ["Three-fold format", "Inside writing pad", "Qi wireless charging"],
    branded: false,
    desc: "A three-fold L3 Power Book with an integrated writing pad inside — organised, spacious and ready for the boardroom.",
  },
  {
    slug: "r64-golden-pendrive",
    name: "R64 with Golden Pendrive",
    category: "Premium",
    variants: [4],
    img: "r64.jpg",
    tag: "R64 leather-touch with a 16GB golden pen drive",
    extras: ["R64 leather-touch", "16GB golden pen drive", "Wireless + pen drive"],
    branded: false,
    desc: "The R64 leather-touch Power Book on the flagship L4 variant, paired with a distinctive 16GB golden pen drive. Premium in every detail.",
  },
  {
    slug: "lg-logo-glow",
    name: "LG — Logo Glow",
    category: "Premium",
    variants: [3, 4],
    img: "feat-usb.jpg",
    tag: "New launch — glowing logo, in Premium Gold & Premium Black",
    extras: [
      "New launch",
      "Logo glow",
      "Premium Gold / Premium Black",
      "Pen drive with logo glow in loop",
      "Reading bright lamp",
    ],
    branded: false,
    badge: "New launch",
    desc: "Our newest launch — the Logo Glow Power Book, available on the L3 and L4 variants in Premium Gold and Premium Black, with a glowing-logo pen drive in the loop and a bright reading lamp.",
  },
  {
    slug: "rolex",
    name: "Rolex",
    category: "Corporate Branding",
    variants: [3],
    img: "product-stand.jpg",
    tag: "Custom-branded example — L3 wireless",
    extras: ["Custom brand artwork", "Qi wireless charging"],
    branded: true,
    desc: "An example of a fully brand-customised Power Book on the L3 wireless variant. Your logo, colours and artwork are applied to order — brand imagery supplied by you.",
  },
  {
    slug: "loreal",
    name: "L'Oréal",
    category: "Corporate Branding",
    variants: [1, 2, 3, 4],
    img: "product-stand.jpg",
    tag: "Custom-branded example — full L1–L4 range",
    extras: ["Custom brand artwork"],
    branded: true,
    desc: "An example of a brand-customised Power Book available across the full L1–L4 range. Your logo, colours and artwork are applied to order — brand imagery supplied by you.",
  },
  {
    slug: "starbucks",
    name: "Starbucks",
    category: "Corporate Branding",
    variants: [1, 2, 3, 4],
    img: "product-stand.jpg",
    tag: "Custom-branded example — full L1–L4 range",
    extras: ["Custom brand artwork"],
    branded: true,
    desc: "An example of a brand-customised Power Book available across all four variants. Your logo, colours and artwork are applied to order — brand imagery supplied by you.",
  },
  {
    slug: "jack-daniels",
    name: "Jack Daniel's",
    category: "Corporate Branding",
    variants: [3],
    img: "feat-charge2.jpg",
    tag: "Custom-branded example — L3 wireless",
    extras: ["Custom brand artwork", "Qi wireless charging"],
    branded: true,
    desc: "An example of a brand-customised Power Book on the L3 wireless variant. Your logo, colours and artwork are applied to order — brand imagery supplied by you.",
  },
  {
    slug: "ad",
    name: "A.D",
    category: "Corporate Branding",
    variants: [4],
    img: "feat-charge2.jpg",
    tag: "Custom-branded example — L4 flagship",
    extras: ["Custom brand artwork", "Wireless + pen drive"],
    branded: true,
    desc: "An example of a brand-customised Power Book on the flagship L4 variant. Your logo, colours and artwork are applied to order — brand imagery supplied by you.",
  },
  {
    slug: "cork",
    name: "Cork",
    category: "Corporate Branding",
    variants: [3],
    img: "feat-open.jpg",
    tag: "Natural cork-look finish — L3 wireless",
    extras: ["Cork-look finish", "Qi wireless charging"],
    branded: true,
    desc: "A natural cork-look Power Book on the L3 wireless variant — an eco-inspired finish, ready for your custom branding.",
  },
  {
    slug: "honda",
    name: "Honda",
    category: "Corporate Branding",
    variants: [3],
    img: "product-stand.jpg",
    tag: "Custom-branded example — big LED glow logo, L3",
    extras: ["Big LED glow logo", "Qi wireless charging", "Custom brand artwork"],
    branded: true,
    desc: "An example of a brand-customised Power Book on the L3 wireless variant, finished with a large LED glowing logo. Your logo, colours and artwork are applied to order — brand imagery supplied by you.",
  },
];

export const BASE_INCLUDED: { title: string; detail: string }[] = [
  { title: "10,000 mAh inbuilt power bank", detail: "Charge phones, earbuds and more on the go." },
  { title: "Soft P.U. canvas finish", detail: "Premium tactile cover — or R64 leather-touch." },
  { title: "Built-in cables", detail: "Type-C, Lightning & Micro, tucked in the spine." },
  { title: "Reusable ring pages", detail: "80 GSM refillable sheets — 96 pages." },
  { title: "Smart organiser", detail: "Card pockets, pen loop & ID slot." },
  { title: "Any colour, any fabric", detail: "Fully customised, with your logo and branding." },
];

export function inr(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}

export function priceLabel(variants: VariantId[]): string {
  if (variants.length === 1) return `${inr(VARIANTS[variants[0]].price)} onwards`;
  const prices = variants.map((v) => VARIANTS[v].price);
  return `${inr(Math.min(...prices))} – ${inr(Math.max(...prices))}`;
}

export function priceShort(variants: VariantId[]): string {
  if (variants.length === 1) return inr(VARIANTS[variants[0]].price);
  return inr(Math.min(...variants.map((v) => VARIANTS[v].price))) + "+";
}

export function getModel(slug: string): Model | undefined {
  return MODELS.find((m) => m.slug === slug);
}

export function relatedModels(m: Model): Model[] {
  const same = MODELS.filter((x) => x.category === m.category && x.slug !== m.slug);
  const rest = MODELS.filter((x) => x.slug !== m.slug && x.category !== m.category);
  return [...same, ...rest].slice(0, 3);
}
