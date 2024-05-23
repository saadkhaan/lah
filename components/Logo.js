import React from "react";
import Image from "next/image";
import Eagle from "../public/eagle.svg";

export default function Logo() {
  return (
    <Image
      src={Eagle}
      width={384}
      height={85}
      alt="Picture of the author"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  );
}
