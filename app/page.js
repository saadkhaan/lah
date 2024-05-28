import React from "react";
// import coverImage from "../public/cover.jpg";
import HeroCarousel from "@/components/HeroCarousel";
import { createClient } from "@/prismicio";
// import { components } from "@/slices";

export default async function Home() {
	const client = createClient();
	const page = await client.getSingle("homepage");

	//  return <SliceZone slices={page.data.slices} components={components} />;
	return (
		<>
			<main className="min-h-screen">
				<section className="hero h-screen">
					{/* {page.data.page_title} */}
					<HeroCarousel />
				</section>
			</main>
		</>
	);
}

export async function generateMetadata() {
	const client = createClient();
	const page = await client.getSingle("homepage");

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
	};
}
