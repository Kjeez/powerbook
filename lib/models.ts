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
  { name: "Premium", sub: "K-series Power Books and matching accessories." },
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
  videos?: string[];
}

/** Files live in /public/media — names must match the disk filenames exactly. */
export function mediaUrl(filename: string): string {
  return "/media/" + encodeURIComponent(filename);
}

export function isVideoFile(filename: string): boolean {
  return /\.mp4$/i.test(filename);
}

export function modelMedia(m: Model): string[] {
  const images = [m.img, ...(m.gallery ?? [])].filter(Boolean);
  const uniqueImages = Array.from(new Set(images));
  const videos = m.videos ?? [];
  return [...uniqueImages, ...videos];
}

export const MODELS: Model[] = [
  {
    slug: "k1",
    name: "K1",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k1.png",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K1 Power Book.",
  },
  {
    slug: "k2",
    name: "K2",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k2 image 1.png",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K2 Power Book.",
    gallery: ["k2 image 2.png", "k2 imgae 3.png"],
    videos: ["K-2.mp4"],
  },
  {
    slug: "k3",
    name: "K3",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k3 image 1.png",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K3 Power Book.",
    gallery: ["k3 image 2.png", "k3 image 3.png", "k3 image 4.png"],
    videos: ["K-3.mp4"],
  },
  {
    slug: "k4",
    name: "K4",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k4 black main image.png",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K4 Power Book, shown in black, blue, grey, orange and beige.",
    gallery: [
      "k4 black image 1.png",
      "k4 blue main image.png",
      "k4 blue image.png",
      "k4 blue image 1.png",
      "k4 grey image.png",
      "k4 orange 1.png",
      "k4 orange 2.png",
      "k4 orange 3.png",
      "k4 orange 4.png",
      "k4 image 1.png",
      "k4 image 2.png",
    ],
    videos: ["K-4 Beige.mp4", "K-4 Blue.mp4"],
  },
  {
    slug: "k5",
    name: "K5",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k5 main image.png",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K5 Power Book, shown in black, blue and orange.",
    gallery: [
      "k5.png",
      "k5 image 2.png",
      "k5 image 3.png",
      "k5 black.png",
      "k5 black image 3.png",
      "k5 black image 4.png",
      "k5 blue image 1.png",
      "k5 blue image 2.png",
      "k5 orange.png",
      "k5 orange image.png",
      "k5 orange image 2.png",
    ],
    videos: ["K-5.mp4"],
  },
  {
    slug: "k6",
    name: "K6",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k6 image 1.png",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K6 Power Book.",
    gallery: ["k6 image 2.png"],
  },
  {
    slug: "k7",
    name: "K7",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k7 image 1.png",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K7 Power Book.",
    gallery: ["k7 image 2.png"],
    videos: ["K-7.mp4"],
  },
  {
    slug: "k8",
    name: "K8",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k8 grey image 1.png",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K8 Power Book, shown in grey and red.",
    gallery: [
      "k8 grey image 2.png",
      "k8 grey image 3.png",
      "k8 red image 1.png",
      "k8 red image 2.png",
      "k8 red image 3.png",
    ],
  },
  {
    slug: "k9",
    name: "K9",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K9 Power Book.",
    videos: ["K-9.mp4"],
  },
  /* K10 — no files named k10 in /public/media (K-19.mp4 is not assigned) */
  {
    slug: "k10",
    name: "K10",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K10 Power Book. Photos will be added when labelled K10 media is available.",
  },
  {
    slug: "k11",
    name: "K11",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k11 image 1.png",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K11 Power Book.",
    videos: ["K-11.mp4"],
  },
  {
    slug: "k12",
    name: "K12",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k12 image 1.png",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K12 Power Book.",
    gallery: ["k12 image 5.png"],
  },
  {
    slug: "k13",
    name: "K13",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "k13 image 1.png",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K13 Power Book, shown in black, blue and orange.",
    gallery: [
      "k13 image 2.png",
      "k13 black image 1.png",
      "k13 blue.png",
      "k13 blue image.png",
      "k13 blue image 2.png",
      "k13 blue image 3.png",
      "k13 orange image.png",
      "k13 orange image 1.png",
    ],
    videos: ["K-13.mp4"],
  },
  {
    slug: "k14",
    name: "K14",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "",
    tag: "K-series Power Book",
    extras: [],
    branded: false,
    desc: "K14 Power Book.",
    videos: ["K-14.mp4"],
  },
  {
    slug: "pouch",
    name: "Pouch",
    category: "Premium",
    variants: [1, 2, 3, 4],
    img: "pouch image 1.png",
    tag: "Accessory",
    extras: [],
    branded: false,
    desc: "Matching Power Book pouch.",
    gallery: ["pouch image 2.png", "pouch image 3.png"],
    videos: ["pouch video.mp4"],
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
