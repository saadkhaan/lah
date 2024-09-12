// import React from "react";
// import coverImage from "../public/cover.jpg";
import HeroCarousel from "@/components/HeroCarousel";
// import { SliceZone } from "@prismicio/react";

// import { createClient } from "@/prismicio";
// import { components } from "@/slices";

export default async function Home() {
	// const client = createClient();
	// const page = await client.getSingle("homepage");

	// return <SliceZone slices={page.data.slices} components={components} />;
	return (
		<>
			<main className="min-h-screen">
				<section className="hero h-screen">
					{/* <SliceZone slices={page.data.slices} components={components} /> */}
					<HeroCarousel />
				</section>
				<div className="bg-white/75 py-4 text-center px-2 bottom-0 fixed w-full z-20 backdrop-blur-sm dark:bg-slate-400/75 dark:z-30">
					<p className="text-slate-900 dark:text-white text-xl font-banner">
						Website under construction
					</p>
				</div>
			</main>
		</>
	);
}

// export async function generateMetadata() {
// 	const client = createClient();
// 	const page = await client.getSingle("homepage");

// 	return {
// 		title: page.data.meta_title,
// 		description: page.data.meta_description,
// 	};
// }
