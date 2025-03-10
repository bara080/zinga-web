import FeatureCard from "@/components/home/FeatureCard";
import ColorFilterOutline from "@/components/icons/ColorFilterOutline";
import NavigateCircleOutline from "@/components/icons/NavigateCircleOutline";
import PersonAddOutline from "@/components/icons/PersonAddOutline";
import ShieldCheckmarkOutline from "@/components/icons/ShieldCheckmarkOutline";
import Image from "next/image";

export const metadata = {
  title: "Home",
  description: "Welcome to Zinga App",
};

export default function Home() {
  return (
    <>
      <div className="bg-zinc-900 w-full">
        <div className="max-w-7xl mx-auto flex items-start justify-between py-20">
          <div className="w-[55%] text-zinc-200 flex flex-col gap-3 items-start">
            <h3 className="bg-brand text-lg text-black inline-block px-5 py-1 rounded-full">
              Your Services, Your Time — Book Instantly!
            </h3>
            <h1 className="font-extrabold text-5xl text-white">
              Book Local Services, Anytime, Anywhere with us!
            </h1>
            <p className="text-2xl">
              Browse nearby service providers, compare prices, <br />
              and book your appointment online.
            </p>
          </div>

          <div className="w-1/2 relative">
            <div className="absolute -right-10 top-0">
              <Image
                src="/hero-banner.png"
                alt="Zinga"
                width={1200}
                height={900}
                priority
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 w-full">
        <div className="max-w-7xl mx-auto py-20">
          <div className="w-[55%] text-black flex flex-wrap gap-7 items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <FeatureCard
                Icon={PersonAddOutline}
                title="Easy Registration"
                description="Service providers & customers can sign up in just a few steps."
              />
              <FeatureCard
                Icon={NavigateCircleOutline}
                title="Seamless Navigation"
                description="Easily find and book services in your area with just a few clicks."
              />
              <FeatureCard
                Icon={ShieldCheckmarkOutline}
                title="Secure & Trusted"
                description="We ensure safety and reliability for every transaction."
              />
              <FeatureCard
                Icon={ColorFilterOutline}
                title="Personalized Services"
                description="Filter and customize services based on your preferences."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
