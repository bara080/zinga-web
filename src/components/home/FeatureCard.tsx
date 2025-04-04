import React from "react";

interface FeatureCardProps {
  Icon: React.FC<{ className?: string; size?: number }>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className="w-full p-7 rounded-2xl flex flex-col items-center justify-center space-y-4 border border-zinc-400">
      <Icon className="text-zinc-900" size={85} />
      <h3 className="font-black text-2xl text-zinc-900">{title}</h3>
      <p className="text-lg text-center text-zinc-500 leading-tight">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
