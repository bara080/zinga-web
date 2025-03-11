import React from "react";
import clsx from "clsx";

interface ThemeButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "dark" | "light" | "default" | "link";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  children,
  size = "medium",
  variant = "default",
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
    primary:
      "bg-yellow-300 text-zinc-900 hover:bg-yellow-400 active:bg-yellow-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    dark: "bg-zinc-800 text-white hover:bg-zinc-900",
    light: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100",
    default: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    link: "bg-transparent text-blue-600 hover:underline",
  };

  return (
    <button
      className={clsx(
        "rounded-full font-semibold transition duration-200 ease-in-out",
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

export default ThemeButton;
