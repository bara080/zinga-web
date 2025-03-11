import React from "react";
import { CustomIconProps } from "@/lib/types";

const CheckmarkDoneOutline: React.FC<CustomIconProps> = ({
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
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"
      />
    </svg>
  );
};

export default CheckmarkDoneOutline;
