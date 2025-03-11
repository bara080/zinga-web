import Link from "next/link";
import { FC } from "react";

interface SocialLink {
  href: string;
  Icon: FC<{ size?: number; className?: string }>;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: FC<SocialLinksProps> = ({ links }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
    <div className="flex gap-4">
      {links.map(({ href, Icon }) => (
        <Link key={href} href={href} target="_blank">
          <Icon
            className="text-zinc-300 hover:text-white transition-colors duration-300"
            size={26}
          />
        </Link>
      ))}
    </div>
  </div>
);

export default SocialLinks;
