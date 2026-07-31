import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://kamleshgroup.com"),
  title: {
    default: "Power Book — Notebooks with built-in power | Kamlesh Group",
    template: "%s | Power Book",
  },
  description:
    "Power Book by Kamlesh Group — premium notebooks with an inbuilt power bank and wireless charging. Four variants (L1–L4) across 20+ models. Custom corporate gifting. Enquire on call or WhatsApp.",
  openGraph: {
    title: "Power Book — Notebooks with built-in power",
    description:
      "Premium notebooks with an inbuilt power bank, wireless charging and reusable pages. A Kamlesh Group brand.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
