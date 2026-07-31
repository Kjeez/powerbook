import { SITE, wa } from "@/lib/site";
import { CallIcon, WhatsAppIcon } from "./icons";

export default function FloatingCTA({ message }: { message?: string }) {
  const link = wa(message ?? "Hi Power Book, I would like to enquire.");
  return (
    <div className="fab">
      <a className="wa" href={link} target="_blank" rel="noopener" aria-label="WhatsApp">
        <WhatsAppIcon />
      </a>
      <a className="call" href={`tel:${SITE.phoneFull}`} aria-label="Call">
        <CallIcon />
      </a>
    </div>
  );
}
