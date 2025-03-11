import Link from "next/link";
import { FC } from "react";

interface FooterLinksSectionProps {
  title: string;
  links: { href: string; label: string }[];
}

const FooterLinksSection: FC<FooterLinksSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className="hover:underline opacity-70 hover:opacity-100 transition-all duration-300 text-white"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinksSection;
