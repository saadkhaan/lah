import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

export default function page() {
	return (
		<div className="px-4 project-top">
			<div className="relative h-52 md:h-[90svh] hidden sm:block">
				<div className="relative z-10 h-full flex items-center justify-center">
					<h1 className="bg-slate-50/50 w-full text-center py-4">
						Victoria, London
					</h1>
					<div class="arrow bounce">
						<a
							href="#project-details"
							className="bg-slate-50/60 hover:bg-slate-50 transition-all duration-300"
						>
							<FaChevronDown />
						</a>
					</div>
				</div>
				<Image
					src="/projects/VictoriaLondon/victoria6.jpg"
					fill
					alt=""
					className="object-cover"
				/>
			</div>
			<div className="container" id="project-details">
				<div className="grid md:grid-cols-2 mt-8 gap-8">
					<h1 className="sm:hidden">Victoria, London</h1>

					<div className="project-image-container">
						<Image
							src="/projects/VictoriaLondon/victoria0.webp"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/VictoriaLondon/victoria1.webp"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/VictoriaLondon/victoria2.webp"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/VictoriaLondon/victoria3.webp"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/VictoriaLondon/victoria4.webp"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/VictoriaLondon/victoria5.webp"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/VictoriaLondon/victoria6.jpg"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
				</div>

				<div className="bottom-navigation flex justify-between">
					<div className="prev-project my-20">
						<h3 className="md:text-3xl text-slate-400 hover:text-slate-950 font-bold">
							<Link
								href="../projects/monte-carlo"
								className="inline-flex items-center group transition-all transform mr-2"
							>
								<FaChevronLeft className="mr-2 group-hover:-translate-x-2 text-xl transition" />
								Previous project: Monte Carlo, Monaco{" "}
							</Link>
						</h3>
					</div>
					{/* <div className="next-project my-20">
						<h3 className="md:text-3xl text-slate-400 hover:text-slate-950 font-bold">
							<Link
								href="../projects/victoria-london"
								className="inline-flex items-center group transition-all transform mr-2"
							>
								Next project: Victoria, London{" "}
								<FaChevronRight className="ml-2 group-hover:translate-x-2 text-xl transition" />
							</Link>
						</h3>
					</div> */}
				</div>
			</div>
			<Footer />
		</div>
	);
}
