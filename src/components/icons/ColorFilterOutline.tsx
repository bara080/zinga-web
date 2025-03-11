import React from "react";
import { CustomIconProps } from "@/lib/types";

const ColorFilterOutline: React.FC<CustomIconProps> = ({
  size = 24,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 512"
      width={size}
      height={size}
    >
      <circle
        cx="256"
        cy="184"
        r="120"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="344"
        cy="328"
        r="120"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="168"
        cy="328"
        r="120"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};

export default ColorFilterOutline;
