const FeatureCard = ({
  Icon,
  title,
  description,
}: {
  Icon: React.FC<{ className?: string; size?: number }>;
  title: string;
  description: string;
}) => (
  <div className="bg-zinc-200 p-7 rounded-2xl flex flex-col items-start space-y-4">
    <Icon className="text-zinc-900" size={80} />
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-sm text-zinc-700">{description}</p>
  </div>
);

export default FeatureCard;
