import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

export default function page() {
	return (
		<div className="px-4 pt-56">
			<div className="relative h-52 md:h-[90svh] hidden sm:block">
				<div className="relative z-10 h-full flex items-center justify-center">
					<h1 className="bg-slate-50/50 w-full text-center py-4">
						Belgravia Mews, London
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
					src="/projects/BelgraviaMewsLondon/Mews2.jpg"
					fill
					alt=""
					className="object-cover"
				/>
			</div>
			<div className="container" id="project-details">
				<div className="grid md:grid-cols-2 mt-8 gap-8">
					<h1 className="sm:hidden">Belgravia Mews, London</h1>
					<div className="project-image-container">
						<Image
							src="/projects/BelgraviaMewsLondon/Mews2.jpg"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/BelgraviaMewsLondon/Mews3.jpg"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/BelgraviaMewsLondon/Mews6.jpg"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/BelgraviaMewsLondon/Mews7.jpg"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/BelgraviaMewsLondon/Mews8.jpg"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/BelgraviaMewsLondon/Mews9.jpg"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
				</div>

				<div className="next-project my-20">
					<h3 className="md:text-3xl text-slate-400 hover:text-slate-950 font-bold flex justify-end">
						<Link
							href="../projects/devon-manor"
							className="inline-flex items-center group transition-all transform mr-2"
						>
							Next project: Devon Manor, England{" "}
							<FaChevronRight className="ml-2 group-hover:translate-x-2 text-xl transition" />
						</Link>
					</h3>
				</div>
			</div>

			<Footer />
		</div>
	);
}
