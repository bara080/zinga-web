import Image from "next/image";
import ThemeButton from "../form/Button";
import BenefitCard from "./BenefitCard";

const BenefitSection = ({
  title,
  benefits,
  imageSrc,
}: {
  title: string;
  benefits: {
    Icon: React.FC<{ className?: string; size?: number }>;
    title: string;
  }[];
  imageSrc: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row rounded-2xl p-5 sm:p-10 gap-4 mt-10 bg-zinc-900">
      <div className="w-full sm:w-[30%] flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={320}
          height={320}
          className="max-w-full"
        />
      </div>
      <div className="w-full sm:w-[70%]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {title}
          </h2>
          <ThemeButton variant="primary" className="w-full sm:w-auto">
            Join us
          </ThemeButton>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
