import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="border-t bg-slate-50 py-20 dark:border-t-slate-600 dark:bg-slate-950">
			<div className="container text-center md:text-sm">
				<ul className="mb-12 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-12 sm:space-y-0">
					<li className="hover:underline text-2xl font-semibold">
						<a href="mailto:laith@laithdesign.com">laith@laithdesign.com</a>
					</li>
					<li className="hover:underline text-2xl font-semibold">
						<a href="tel:+971562273883">(+971)56-227-3883</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
