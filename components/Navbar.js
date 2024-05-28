// "use client";
import Link from "next/link";

import DarkModeToggle from "./ThemeSwitch";

import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Navbar() {
	const client = createClient();
	const settings = await client.getSingle("settings");
	return (
		<nav className="w-full bg-slate-950/25 dark:bg-slate-900 fixed top-0 z-10 ">
			<div className="container mx-auto justify-between px-4 md:flex md:items-center">
				<div className="flex items-center justify-between py-3 md:block md:py-5">
					<div className="w-full font-black md:text-white text-2xl dark:text-slate-400">
						<Link href="/">
							<img
								src={settings.data.logo.url}
								alt={settings.data.logo.alt}
								className="flex-1"
							/>
						</Link>
					</div>
					<div className="md:hidden">
						{/* <button
							className="mr-4 rounded-md p-2 text-slate-800 outline-none focus:border focus:border-slate-400 dark:text-slate-300"
							aria-label="Toggle Main Navigation"
							onClick={() => setNavbar((prev) => !prev)}
						>
							{navbar ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-slate-800 dark:text-slate-300"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-slate-800 dark:text-slate-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
									/>
								</svg>
							)}
						</button> */}
					</div>
				</div>
				<ul className="flex space-x-6">
					{settings.data.navigation.map(({ link, label }) => (
						<li key={label}>
							<PrismicNextLink field={link}>{label}</PrismicNextLink>
						</li>
					))}
					<li>
						<DarkModeToggle />
					</li>
				</ul>
			</div>
		</nav>
	);
}
