import React from "react";
import clsx from "clsx";

interface ThemeOutlineButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "white" | "black";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const ThemeOutlineButton: React.FC<ThemeOutlineButtonProps> = ({
  children,
  size = "medium",
  variant = "black",
  onClick,
  className = "",
  disabled = false,
}) => {
  // Define button size styles
  const sizeClasses = {
    small: "px-5 py-1 text-base",
    medium: "px-7 py-2 text-lg",
    large: "px-9 py-3 text-xl",
  };

  // Define button color variants
  const variantClasses = {
    white:
      "border border-white text-white hover:bg-white/90 hover:text-black active:bg-white",
    black: "bg-gray-600 text-white hover:bg-gray-700",
  };

  return (
    <button
      className={clsx(
        "rounded-full font-semibold transition hover:transition-all duration-200 ease-in-out",
        sizeClasses[size],
        variantClasses[variant],
        { "opacity-50 cursor-not-allowed": disabled },
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ThemeOutlineButton;
