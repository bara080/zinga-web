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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <h2 className="text-2xl sm:text-4xl font-black">{title}</h2>
          <button
            className={`w-full sm:w-auto text-lg font-semibold  text-white rounded-full px-6 py-2.5 ${
              isCustomer ? "bg-lime-600" : "bg-orange-600"
            }`}
          >
            Join us
          </button>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} isCustomer={isCustomer} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
