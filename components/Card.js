// components/Card.js
"use client";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";

const Card = ({
  imageSrc,
  logoSrc,
  title,
  description,
  layout = "vertical",
  overlay = false,
  href,
  delay = 0,
  once = "true",
}) => {
  const isHorizontal = layout === "horizontal";

  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation when the element is in view
    });
  }, []);

  return (
    <Link
      href={href}
      className="block"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-once={once}
    >
      <div
        className={`group relative overflow-hidden transition-transform duration-100 
                    ${
                      isHorizontal
                        ? "flex h-[486px] w-[100%]"
                        : "h-[700px] w-[100%]"
                    }`}
      >
        {/* Image */}
        <div
          className={`relative h-full w-full ${
            isHorizontal ? "w-296 flex-shrink-0" : ""
          }`}
        >
          <img
            src={imageSrc}
            alt={title}
            className="absolute h-full w-full transform object-cover object-center transition-transform duration-300 group-hover:translate-y-8 group-hover:grayscale"
          />
        </div>

        {/* Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>
        )}

        {/* Logo */}
        {logoSrc && (
          <img
            src={logoSrc}
            alt="Logo"
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform"
          />
        )}

        {/* Content */}
        <div
          className={`absolute bottom-0 left-0 z-10 p-4 ${
            isHorizontal ? "w-296" : "w-full"
          }`}
        >
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-base text-white">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
