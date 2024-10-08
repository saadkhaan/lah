"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import DarkModeToggle from "./ThemeSwitch";
import Image from "next/image";
// import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
	const [navbar, setNavbar] = useState(false);
	const router = useRouter();
	const currentPath = usePathname();
	return (
		<>
			<nav className="w-full bg-transparent dark:bg-slate-100 fixed top-0 z-20 ">
				<div className="container mx-auto justify-between px-4 sm:px-0 md:flex md:items-center">
					<div className="flex items-center justify-between py-3 md:block md:py-5">
						<div className="w-20 h-auto md:w-40 font-black md:text-slate-950 text-2xl dark:text-slate-800">
							<Link href="/">
								<Image
									src="/logo.png"
									width={255}
									height={0}
									alt="laith design logo"
								/>
								{/* <img src="/logo.svg" /> */}
							</Link>
						</div>
						<div className="md:hidden">
							<button
								className="mr-4 rounded-md p-2 text-slate-800 outline-none focus:border focus:border-slate-400 dark:text-slate-300"
								aria-label="Toggle Main Navigation"
								onClick={() => setNavbar((prev) => !prev)}
							>
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 text-slate-800 dark:text-slate-800"
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
										className="h-6 w-6 text-slate-800 dark:text-slate-800"
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
							</button>

							<DarkModeToggle />
						</div>
					</div>
					<div
						className={`mt-8 flex-1 mr-auto pb-3 md:mt-0 md:block md:pb-0 ${
							navbar ? "block" : "hidden"
						}`}
					>
						<ul className="items-center justify-end space-y-4 md:flex md:space-x-10 md:space-y-0">
							<li className="bg-slate-950 text-white sm:text-slate-800 p-3 sm:bg-transparent sm:p-0">
								<Link
									href="/"
									className={currentPath.pathname == "/" ? "active" : ""}
									onClick={() => setNavbar(false)}
								>
									/
								</Link>
							</li>

							{/* <li className="bg-slate-100 p-3 sm:bg-transparent sm:p-0">
							<Link
									href="/services"
									className={currentPath.pathname == "/services" ? "active" : ""}
									onClick={() => setNavbar(false)}
								>
									About
								</Link>
							</li> */}
							<li className="bg-slate-950 text-white sm:text-slate-800 p-3 sm:bg-transparent sm:p-0">
								<Link
									href="/projects"
									className={
										currentPath.pathname == "/projects" ? "active" : ""
									}
									onClick={() => setNavbar(false)}
								>
									projects
								</Link>
							</li>
							<li className="bg-slate-950 text-white sm:text-slate-800 p-3 sm:bg-transparent sm:p-0">
								<Link
									href="/contact"
									className={currentPath.pathname == "/contact" ? "active" : ""}
									onClick={() => setNavbar(false)}
								>
									Contact
								</Link>
							</li>
							<div className="flex items-center justify-between md:gap-4">
								{/* <li className="group rounded-md border border-slate-200 bg-white text-slate-800 transition-all duration-200 hover:bg-green-500 dark:border-none dark:bg-green-600">
									<Link href="/contact" legacyBehavior>
										<a className="flex items-center space-x-2 px-6 py-3 transition-all duration-200 hover:shadow-xl group-hover:text-white dark:text-slate-50">
											<span>Start a Project</span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="h-6 w-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
												/>
											</svg>
										</a>
									</Link>
								</li> */}
								<li className="hidden sm:block">
									<DarkModeToggle />
								</li>
							</div>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
