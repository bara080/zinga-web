import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>

      <Image
        className="dark:invert"
        src="/logo.png"
        alt="Zinga"
        width={180}
        height={38}
        priority
      />
    </>
  );
}
