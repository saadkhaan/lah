import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

export default function page() {
	return (
		<div className="py-32">
			<div className="relative h-[80svh]">
				<div className="relative z-10 h-full flex items-center justify-center">
					<h1>Belgravia Mews</h1>
				</div>
				<Image
					src="/projects/BelgraviaMewsLondon/Mews2.JPG"
					fill
					alt=""
					className="object-cover"
				/>
			</div>
			<div className="container">
				<div className="grid grid-cols-2 mt-8 gap-8">
					<div className="project-image-container">
						<Image
							src="/projects/BelgraviaMewsLondon/Mews2.JPG"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/BelgraviaMewsLondon/Mews3.JPG"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/BelgraviaMewsLondon/Mews6.JPG"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/BelgraviaMewsLondon/Mews7.JPG"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/BelgraviaMewsLondon/Mews8.JPG"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
					<div className="project-image-container">
						<Image
							src="/projects/BelgraviaMewsLondon/Mews9.JPG"
							width={800}
							height={0}
							alt=""
							className="mx-auto"
						/>
					</div>
				</div>

				<div className="next-project mt-20">
					<h3 className="text-3xl text-slate-400 hover:text-slate-950 font-bold flex justify-end">
						<Link
							href="/"
							className="inline-flex items-center group transition-all transform mr-2"
						>
							Next project: Devon Manor, England{" "}
							<FaChevronRight className="ml-2 group-hover:translate-x-2 text-xl transition" />
						</Link>
					</h3>
				</div>
			</div>
		</div>
	);
}
