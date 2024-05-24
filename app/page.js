import React from "react";
import coverImage from "../public/cover.jpg";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
	return (
		<>
			<main className="min-h-screen">
				{/* <section className="bg-hero-cover bg-green-700 bg-no-repeat bg-cover bg-center py-96">
					<div className="container">
						<div className="text-center">
							<h1>Laith AbdelHadi</h1>
							<p className="text-slate-900">interior designer</p>
						</div>
						<div className="text-center mt-4 text-slate-900 space-y-px flex flex-col">
							<p className="text-slate-900">laith@laithdesign.com</p>
							<a href="tel:+971562273883" className="hover:text-slate-800">
								+971 56 227 3883
							</a>
						</div>
					</div>
				</section> */}

				{/* <div class="h-screen text-center grid bg-cover bg-hero-cover">
					<div class="col-start-1 row-start-1 bg-white/60 w-full h-full"></div>
					<div class="col-start-1 row-start-1 mx-auto my-auto">
						<div className="container">
							<div className="text-center">
								<h1>Laith AbdelHadi</h1>
								<p className="text-slate-900">interior designer</p>
							</div>
							<div className="text-center mt-4 text-slate-900 space-y-px flex flex-col">
								<p className="text-slate-900">laith@laithdesign.com</p>
								<a href="tel:+971562273883" className="hover:text-slate-800">
									+971 56 227 3883
								</a>
							</div>
						</div>
					</div>
				</div> */}
				<section className="hero h-screen">
					<HeroCarousel />
				</section>
			</main>
		</>
	);
}
