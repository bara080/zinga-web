import Link from "next/link";
import {
  LogoFacebook,
  LogoInstagram,
  LogoLinkedin,
  LogoTwitter,
} from "../icons";
import NewsletterForm from "../form/NewsletterForm";
import FooterLinksSection from "../ui/FooterLinksSection";
import SocialLinks from "../ui/SocialLinks";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/blogs", label: "Blogs" },
];

const footerLinks2 = [
  { href: "/contact", label: "Contact us" },
  { href: "/help", label: "Help" },
];

const socialLinks = [
  { href: "https://www.facebook.com/", Icon: LogoFacebook },
  { href: "https://twitter.com/", Icon: LogoTwitter },
  { href: "https://www.instagram.com/", Icon: LogoInstagram },
  { href: "https://www.linkedin.com/", Icon: LogoLinkedin },
];

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-white mt-[2px]">
      <div className="w-full bg-zinc-950">
        <NewsletterForm />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-10 py-10">
          <div className="w-full md:w-[50%] mt-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-200">
              Zinga App
            </h2>
            <div className="mt-5 text-base sm:text-lg text-zinc-400">
              <span className="font-semibold">Disclaimer:</span> Zinga is an
              online platform connecting customers with local service providers.
              We do not own or operate any services listed on the platform. All
              service-related queries, payments, and disputes are the
              responsibility of the respective service provider.
            </div>
          </div>
          <div className="w-full md:w-[40%] flex flex-row items-start justify-between gap-5">
            <FooterLinksSection title="Company" links={footerLinks} />
            <div>
              <FooterLinksSection title="Supports" links={footerLinks2} />
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between py-10 text-base opacity-70 text-center border-t border-zinc-700 gap-5">
          <div>© 2025 Zingaapp</div>
          <div className="flex flex-row items-center gap-5">
            <Link
              className="text-zinc-400 hover:text-white"
              href="/privacy-policy"
            >
              Privacy Policy{" "}
            </Link>
            <Link
              className="text-zinc-400 hover:text-white"
              href="/terms-and-conditions"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
