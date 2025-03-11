import React from "react";
import { CustomIconProps } from "@/lib/types";

const StarHalfSharp: React.FC<CustomIconProps> = ({ size = 24, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 512"
      width={size}
      height={size}
    >
      <path
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        fill="currentColor"
        d="M256 48v316L118 464l54-160-140-96h172l52-160z"
      />
    </svg>
  );
};

export default StarHalfSharp;
