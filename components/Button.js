import React from "react";
import Link from "next/link";

const Button = ({
  buttonText = "Want to discuss your project?",
  href = "/contact",
  icon,
  isOutline = false, // New prop for outline style

  // Props for Light Mode
  textColor = "text-slate-50",
  hoverTextColor = "hover:text-white",
  bgColor = "bg-accent",
  hoverBgColor = "hover:bg-hover",

  // Props for Dark Mode
  darkTextColor = "dark:text-slate-50",
  hoverDarkTextColor = "hover:text-white",
  darkBgColor = "dark:bg-accent",
  hoverDarkBgColor = "dark:hover:bg-hover",
}) => {
  const buttonClasses = [
    bgColor,
    textColor,
    hoverBgColor,
    hoverTextColor,
    darkBgColor,
    darkTextColor,
    hoverDarkBgColor,
    hoverDarkTextColor,
    isOutline
      ? "border border-accent bg-transparent hover:text-slate-900 text-slate-700 dark:text-slate-300 dark:bg-transparent shadow-none"
      : "", // Add outline class conditionally
    isOutline ? "" : "",
  ].join(" ");

  return (
    <div className={`group transition-all duration-200 ${buttonClasses}`}>
      <Link
        aria-label="Let's achieve another milestone together!"
        href={href}
        className="font btn flex items-center space-x-2 px-3 py-3 text-base uppercase shadow-2xl shadow-accent/70 transition-all duration-200 hover:shadow-md group-hover:text-white dark:shadow-accent dark:hover:shadow-3xl dark:hover:shadow-accent md:px-6 md:py-3"
      >
        <span>{buttonText}</span>
        {icon && <span className="h-6 w-6">{icon}</span>}
      </Link>
    </div>
  );
};

export default Button;
