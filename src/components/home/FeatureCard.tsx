import React from "react";
import clsx from "clsx";

interface FeatureCardProps {
  Icon: React.FC<{ className?: string; size?: number }>;
  title: string;
  description: string;
  bgColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
  bgColor,
}) => {
  return (
    <div
      className={clsx(
        "w-full p-7 rounded-2xl flex flex-col items-center justify-center space-y-4",
        bgColor
      )}
    >
      <Icon className="text-zinc-900" size={85} />
      <h3 className="font-black text-2xl">{title}</h3>
      <p className="text-lg text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
