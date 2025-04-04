import Image from "next/image";

const TestimonialCard = ({
  name,
  role,
  feedback,
}: {
  name: string;
  role: string;
  feedback: string;
}) => (
  <div className="bg-white border border-zinc-200 rounded-2xl w-full p-6 flex flex-col gap-4 relative">
    <div className="absolute -bottom-16 w-full h-10 z-0 opacity-50 left-0 right-0">
      <Image
        src="/drop-shadow.png"
        alt={name}
        width={600}
        height={34}
        priority
        className="max-w-full object-cover"
      />
    </div>
    <div className="flex flex-row gap-4">
      <div className="w-16 h-16 rounded-full bg-zinc-200"></div>
      <div className="flex flex-col justify-center">
        <span className="text-xl font-semibold">{name}</span>
        <span className="text-base font-semibold text-zinc-400">{role}</span>
      </div>
    </div>
    <p className="text-lg">{feedback}</p>
    <div className="text-lg">⭐ ⭐ ⭐ ⭐ ⭐</div>
  </div>
);

export default TestimonialCard;
