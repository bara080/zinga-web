import React from "react";
import clsx from "clsx";

interface SectionTitleProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  align = "center",
  variant = "dark",
}) => {
  return (
    <div
      className={clsx(
        "mb-10",
        align === "center" ? "text-center max-w-3xl mx-auto" : "text-left"
      )}
    >
      <h2
        className={clsx(
          "text-4xl sm:text-5xl font-black",
          variant === "dark" ? "text-zinc-900" : "text-zinc-100"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-xl sm:text-2xl text-zinc-500 mt-4">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
