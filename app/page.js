import React from "react";
// import coverImage from "../public/cover.jpg";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
	return (
		<>
			<main className="min-h-screen">
				<section className="hero h-screen">
					<HeroCarousel />
				</section>
			</main>
		</>
	);
}
