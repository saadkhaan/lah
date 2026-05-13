import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-white">
      {/* <div class="container">
        <h1 className="text-4xl">Contact</h1>
      </div> */}
      <div className="grid md:grid-cols-2 items-center gap-8 px-4 sm:px-0 sm:py-0">
        <div className="w-full h-full md:h-screen relative">
          <Image
            src="/Laith-photo.jpg"
            quality={70}
            alt
            width={1000}
            height={600}
          />
        </div>
        <div className="mb-20 md:mb-0 md:mr-40">
          <h1 className="text-4xl mb-8 text-gray-900">Bio</h1>
          <p className="text-gray-900 text-lg">
            Laith Abdelhadi is a Dubai-based interior designer with over two
            decades of experience creating refined, deeply personal spaces
            across the Middle East and Europe. His work is defined by a layered
            and curated approach, where materials, textures, and carefully
            sourced pieces come together to create interiors that feel collected
            rather than staged. Rejecting trends in favor of timelessness, Laith
            designs spaces that are both sophisticated and effortlessly livable.
          </p>
          <p className="text-gray-900 text-lg mt-4">
            Laith’s creative foundation began in Boston, where he studied film
            at Emerson College, an experience that shaped his understanding of
            composition, lighting, and storytelling. Early in his career, he
            worked in set design and later designed bespoke weddings, creating
            immersive environments that felt cinematic and transformative. These
            experiences played a pivotal role in developing his signature
            aesthetic, where spaces are composed with depth, atmosphere, and a
            sense of narrative.
          </p>
          {/* <p className="text-gray-900 text-lg mt-4">
            Today, Laith approaches each project as a personal story, working
            closely with clients to create interiors that reflect their
            lifestyle and identity. His designs balance structure and
            spontaneity, blending classic influences with contemporary living to
            achieve spaces that are warm, elegant, and enduring.
          </p> */}
        </div>
      </div>
    </div>
  );
}
