import Link from "next/link";

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link
        className="hover:underline hover:underline-offset-4"
        href="/privacy-policy"
      >
        Privacy Policy
      </Link>
      |
      <Link
        className="hover:underline hover:underline-offset-4"
        href="/terms-and-conditions"
      >
        Terms & Conditions
      </Link>
    </footer>
  );
};

export default Footer;
