import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full bg-white flex items-center justify-between px-5 py-2">
      <Image src="/logo.svg" alt="Zinga" width={180} height={30} priority />
      <Navbar />
    </header>
  );
};

export default Header;
