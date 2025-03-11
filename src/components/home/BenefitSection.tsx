import ThemeButton from "../form/Button";
import BenefitCard from "./BenefitCard";
import Image from "next/image";

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
  const isCustomer = title === "As a Customer";

  return (
    <div
      className={`flex flex-col sm:flex-row rounded-2xl p-5 sm:p-10 gap-4 mt-10 ${
        isCustomer ? "bg-lime-50" : "bg-orange-50"
      }`}
    >
      <div className="w-full sm:w-[30%] flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="max-w-full"
        />
      </div>
      <div className="w-full sm:w-[70%]">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl sm:text-4xl font-black">{title}</h2>
          <ThemeButton size="large" variant="primary">
            Join us
          </ThemeButton>
        </div>
        <div className="w-full flex flex-wrap gap-4 mt-5">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} isCustomer={isCustomer} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
