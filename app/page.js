import React from "react";
import coverImage from "../public/cover.jpg";
import HeroCarousel from "@/components/HeroCarousel";

// const pageData = async () => {
// 	const version = process.env.VERSION;
// 	const token = process.env.TOKEN;
// 	const url = `https://api.storyblok.com/v2/cdn/stories/home-page?version=${version}&token=${token}&cv=1716869744`;
// 	let req = await fetch(url, { cache: "no-store" });

// 	const storyData = await req.json();
// 	const { hero_section } = storyData.story.content;

// 	return {
// 		hero_section: hero_section[0],
// 	};
// };

export default async function Home() {
	return (
		<>
			<main className="min-h-screen">
				<section className="hero h-screen">
					{/* <h1>Story: {hero_section.headline}</h1> */}
					<HeroCarousel />
				</section>
			</main>
		</>
	);
}

export async function fetchData() {
	let sbParams = { version: "draft" };

	const storyblokApi = getStoryblokApi();
	return storyblokApi.get(`cdn/stories/home`, sbParams, {
		cache: "no-store",
	});
}
