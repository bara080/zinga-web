import Link from "next/link";

import NewsletterForm from "../form/NewsletterForm";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-white mt-[2px]">
      <div className="w-full bg-zinc-950">
        <NewsletterForm />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row items-center justify-between py-10 text-base opacity-70 text-center border-t border-zinc-700">
          <div>© 2025 Zingaapp</div>
          <div className="flex flex-row items-center gap-5">
            <Link
              className="text-zinc-400 hover:text-brand"
              href="/privacy-policy"
            >
              Privacy Policy{" "}
            </Link>
            <Link
              className="text-zinc-400 hover:text-brand"
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
