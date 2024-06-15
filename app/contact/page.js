import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="">
      {/* <div class="container">
        <h1 className="text-4xl">Contact</h1>
      </div> */}
      <div className="grid md:grid-cols-2 items-center gap-8 px-4 py-40 sm:px-0 sm:py-0">
        <div className="w-full h-52 md:h-screen relative">
            <Image src="/projects/BelgraviaMewsLondon/Mews2.jpg" alt fill className="w-full h-full object-cover"/>
        </div>
        <div>
            <h1 className="text-4xl mb-8">Contact</h1>
            <ul className="space-y-4">
					<li className="hover:underline text-2xl font-semibold">
						<a href="mailto:laith@laithdesign.com">laith@laithdesign.com</a>
					</li>
					<li className="hover:underline text-2xl font-semibold">
						<a href="tel:+971562273883">(+971)56-227-3883</a>
					</li>
				</ul>
        </div>
      </div>
    </div>
  );
}
