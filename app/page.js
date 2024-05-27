import React from "react";
import coverImage from "../public/cover.jpg";
import HeroCarousel from "@/components/HeroCarousel";

// const getLAHData = async () => {
// 	const version = process.env.VERSION;
// 	const token = process.env.TOKEN;
// 	const url = `https://api.storyblok.com/v2/cdn/stories/home-page?version=${version}&token=${token}&cv=1716806991`;
// 	let req = await fetch(url, { cache: "no-store" });
// };

export default function Home() {
	return (
		<>
			<main className="min-h-screen">
				<HeroCarousel />
			</main>
		</>
	);
}
