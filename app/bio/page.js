import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-white">
      {/* <div class="container">
        <h1 className="text-4xl">Contact</h1>
      </div> */}
      <div className="grid md:grid-cols-2 items-center gap-8 px-4 sm:px-0 sm:py-0">
        <div className="w-full h-52 md:h-screen relative">
          <Image
            src="/laith-photo.jpg"
            alt
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pr-32 py-8">
          <h1 className="text-4xl mb-8">Bio</h1>
          <p className="text-gray-900 text-lg">
            Laith is an architect and designer with a passion for creating
            timeless and elegant spaces. With over a decade of experience in the
            industry, he has established himself as a leading figure in the
            world of architecture and design. Laith's work is characterized by
            its attention to detail, use of high-quality materials, and a deep
            understanding of the needs and desires of his clients. He has a
            diverse portfolio that includes residential, commercial, and
            hospitality projects, each one showcasing his unique approach to
            design. Laith's commitment to excellence and his ability to create
            spaces that are both functional and beautiful have earned him a
            reputation as one of the most sought-after architects in the world.
          </p>
        </div>
      </div>
    </div>
  );
}
