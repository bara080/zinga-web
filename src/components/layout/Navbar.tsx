import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-5">
        <li>
          <Link href="/" className="text-black font-bold text-xl">
            Home
          </Link>
        </li>
        <li>
          <Link href="" className="text-black font-bold text-xl">
            Features
          </Link>
        </li>
        <li>
          <Link href="" className="text-black font-bold text-xl">
            About
          </Link>
        </li>
        <li>
          <Link href="" className="text-black font-bold text-xl">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
