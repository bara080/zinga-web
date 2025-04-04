import React from "react";

interface BenefitCardProps {
  Icon: React.FC<{ className?: string; size?: number }>;
  title: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ Icon, title }) => (
  <div className="border rounded-2xl px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 gap-3 sm:gap-4 flex flex-col items-center justify-center border-white/20">
    <Icon
      className="text-white/70 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
      size={25}
    />
    <h4 className="text-base text-white sm:text-lg md:text-xl font-light text-center leading-tight">
      {title}
    </h4>
  </div>
);

export default BenefitCard;
