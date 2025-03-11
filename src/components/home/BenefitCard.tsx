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
    className={`border rounded-xl px-8 py-4 gap-4 w-[48%] sm:w-[32%] flex flex-col items-center justify-center ${
      isCustomer ? "border-lime-600" : "border-orange-600"
    }`}
  >
    <Icon
      className={isCustomer ? "text-lime-600" : "text-orange-600"}
      size={85}
    />
    <h4 className="text-xl text-center leading-tight">{title}</h4>
  </div>
);

export default BenefitCard;
