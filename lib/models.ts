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

export type Category = "Premium";

export const CATEGORIES: { name: Category; sub: string }[] = [
  { name: "Premium", sub: "Top-tier finishes and new launches." },
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
  gallery?: string[];
}

export const MODELS: Model[] = [
  /* -- K1 (placeholder) -- */
  {
    slug: "k1",
    name: "K1",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "product-stand.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
  },
  /* -- K2 (placeholder) -- */
  {
    slug: "k2",
    name: "K2",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "product-stand.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
  },
  /* -- K3 (placeholder) -- */
  {
    slug: "k3",
    name: "K3",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "product-stand.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
  },
  /* -- K4 -- */
  {
    slug: "k4-bej-4",
    name: "k4 bej 4",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k4 bej 4.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
    gallery: ["k4 bej 4.jpg"],
  },
  {
    slug: "k4-blue-4",
    name: "k4 blue 4",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k4 blue 4.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
    gallery: ["k4 blue 4.jpg"],
  },
  /* -- K5 -- */
  {
    slug: "k5-bej",
    name: "k5 bej",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k5 bej.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
    gallery: ["k5 bej 2.jpg", "k5 bej 3.jpg", "k5 bej.jpg"],
  },
  {
    slug: "k5-black",
    name: "k5 black",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k5 black.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
    gallery: ["k5 black 2.jpg", "k5 black 3.jpg", "k5 black.jpg"],
  },
  {
    slug: "k5-blue",
    name: "k5 blue",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k5 blue.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
    gallery: ["k5 blue 3.jpg", "k5 blue.jpg"],
  },
  {
    slug: "k5-grey",
    name: "k5 grey or v9 silk without prndrive without lamp with box and pen",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k5 grey  or v9 silk without prndrive without lamp with box and  pen.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
    gallery: ["k5 grey  or v9 silk without prndrive without lamp with box and  pen.jpg"],
  },
  {
    slug: "k5-orange",
    name: "k5 orange",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k5 orange.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
    gallery: ["k5 orange 2.jpg", "k5 orange 3.jpg", "k5 orange.jpg"],
  },
  /* -- K6 -- */
  {
    slug: "k6",
    name: "K6",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "lee folder k6.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
    gallery: ["lee folder k6.jpg"],
  },
  /* -- K7 (placeholder) -- */
  {
    slug: "k7",
    name: "K7",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "product-stand.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
  },
  /* -- K8 -- */
  {
    slug: "k8",
    name: "k8",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k8.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
    gallery: ["k8.jpg"],
  },
  /* -- K9 (placeholder) -- */
  {
    slug: "k9",
    name: "K9",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "product-stand.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
  },
  /* -- K10 (placeholder) -- */
  {
    slug: "k10",
    name: "K10",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "product-stand.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
  },
  /* -- K11 -- */
  {
    slug: "k11",
    name: "k11",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k11.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
    gallery: ["k11.jpg"],
  },
  /* -- K12 -- */
  {
    slug: "k12",
    name: "k12",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k12.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
    gallery: ["k12 2.jpg", "k12.jpg"],
  },
  /* -- K13 -- */
  {
    slug: "k13-black",
    name: "k13 black",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k13 black.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
    gallery: ["k13 black 2.jpg", "k13 black.jpg"],
  },
  {
    slug: "k13-blue",
    name: "k13 blue",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k13 blue 3.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
    gallery: ["k13 5.jpg", "k13 blue 3.jpg"],
  },
  /* -- K14 (placeholder) -- */
  {
    slug: "k14",
    name: "K14",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "product-stand.jpg",
    tag: "New Power Book model",
    extras: [],
    branded: false,
    desc: "A new Power Book model.",
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
  return "\u20B9" + n.toLocaleString("en-IN");
}

export function priceLabel(variants: VariantId[]): string {
  if (variants.length === 1) return `${inr(VARIANTS[variants[0]].price)} onwards`;
  const prices = variants.map((v) => VARIANTS[v].price);
  return `${inr(Math.min(...prices))} \u2013 ${inr(Math.max(...prices))}`;
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
