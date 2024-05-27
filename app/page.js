import React from "react";
import coverImage from "../public/cover.jpg";
import HeroCarousel from "@/components/HeroCarousel";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

// const getLAHData = async () => {
// 	const version = process.env.VERSION;
// 	const token = process.env.TOKEN;
// 	const url = `https://api.storyblok.com/v2/cdn/stories/home-page?version=${version}&token=${token}&cv=1716806991`;
// 	let req = await fetch(url, { cache: "no-store" });
// };

export default async function Home() {
	const { data } = await fetchData();
	return (
		<>
			<main className="min-h-screen">
				{/* <h1>Story: {data.story.name}</h1> */}
				{/* <StoryblokStory story={data.story.name} /> */}
				<HeroCarousel />
			</main>
		</>
	);
}

export async function fetchData() {
	let sbParams = { version: "draft" };

	const storyblokApi = getStoryblokApi();
	return storyblokApi.get(`cdn/stories/home-page`, sbParams, {
		cache: "no-store",
	});
}
