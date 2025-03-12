import React from "react";

interface BenefitCardProps {
  Icon: React.FC<{ className?: string; size?: number }>;
  title: string;
  isCustomer: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  Icon,
  title,
  isCustomer,
}) => (
  <div
    className={`border rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 gap-3 sm:gap-4 flex flex-col items-center justify-center ${
      isCustomer ? "border-lime-600" : "border-orange-600"
    }`}
  >
    <Icon
      className={`${
        isCustomer ? "text-lime-600" : "text-orange-600"
      } w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20`}
      size={85}
    />
    <h4 className="text-base sm:text-lg md:text-xl text-center leading-tight">
      {title}
    </h4>
  </div>
);

export default BenefitCard;
