import Image from "next/image";

import FeatureCard from "@/components/home/FeatureCard";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitSection from "@/components/home/BenefitSection";

import {
  ChatbubblesOutline,
  CheckmarkDoneCircleOutline,
  CheckmarkDoneOutline,
  CogOutline,
  ColorFilterOutline,
  HammerOutline,
  LocateOutline,
  LogoUsd,
  NavigateCircleOutline,
  PersonAddOutline,
  PinOutline,
  ShieldCheckmarkOutline,
  StarHalfSharp,
  StorefrontOutline,
} from "@/components/icons";

export const metadata = {
  title: "Home",
  description: "Welcome to Zinga App",
};

const features = [
  {
    Icon: PersonAddOutline,
    title: "Easy Registration",
    description:
      "Service providers & customers can sign up in just a few steps.",
    bgColor: "bg-red-200",
  },
  {
    Icon: NavigateCircleOutline,
    title: "Seamless Navigation",
    description:
      "Easily find and book services in your area with just a few clicks.",
    bgColor: "bg-yellow-200",
  },
  {
    Icon: ShieldCheckmarkOutline,
    title: "Secure & Trusted",
    description: "We ensure safety and reliability for every transaction.",
    bgColor: "bg-teal-200",
  },
  {
    Icon: ColorFilterOutline,
    title: "Personalized Services",
    description: "Filter and customize services based on your preferences.",
    bgColor: "bg-lime-200",
  },
];

const serviceProviderBenefits = [
  { Icon: StorefrontOutline, title: "Add your store to Zinga" },
  { Icon: HammerOutline, title: "Easy Services Setup" },
  { Icon: CheckmarkDoneOutline, title: "Get more bookings" },
  { Icon: CogOutline, title: "Serve Services" },
  { Icon: LogoUsd, title: "Get Paid" },
  { Icon: LocateOutline, title: "Track Earnings & Payouts" },
];

const customerBenefits = [
  { Icon: PinOutline, title: "Get nearby services you want" },
  { Icon: ColorFilterOutline, title: "Advanced filters" },
  { Icon: CheckmarkDoneCircleOutline, title: "Book service provider" },
  { Icon: ShieldCheckmarkOutline, title: "Secure online payments" },
  { Icon: ChatbubblesOutline, title: "Chat with Providers" },
  { Icon: StarHalfSharp, title: "Review services" },
];

export default function Home() {
  return (
    <>
      <div className="bg-zinc-900 w-full">
        <div className="max-w-7xl mx-auto flex items-start justify-between px-5 py-10 sm:py-20">
          <div className="w-full sm:w-[55%] text-zinc-200 flex flex-col gap-3 items-start">
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

          <div className="w-1/2 hidden sm:block relative">
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
        <div className="max-w-7xl px-5 mx-auto py-10 sm:py-20">
          <div className="w-full sm:w-[55%] text-black flex flex-wrap gap-7 items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-10 sm:py-20 w-full">
        <div className="max-w-7xl px-5 mx-auto">
          <SectionTitle
            title="Key Features"
            description="Discover how Zinga makes booking and providing services seamless for everyone."
            align="center"
          />

          <BenefitSection
            title="As a Service Provider"
            benefits={serviceProviderBenefits}
            imageSrc="/service-provider.png"
          />

          <BenefitSection
            title="As a Customer"
            benefits={customerBenefits}
            imageSrc="/customer.png"
          />
        </div>
      </div>
    </>
  );
}
