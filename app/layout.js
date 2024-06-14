// import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import { createClient } from "@/prismicio";
import Footer from "@/components/Footer";

const manrope = Manrope({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
	variable: "--font-manrope",
});

const satoshi = localFont({
	src: "../public/fonts/Satoshi-Variable.woff2",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-satoshi",
});

export async function metadata({ params, searchParams }, parent) {
	const client = createClient();
	const settings = await client.getSingle("settings");

	return {
		title: settings.data.meta_title || "Laith AbdelHadi",
		description: settings.data.meta_description || "Laith AbdelHadi",
		// openGraph: {
		// 	images: ["/some-specific-page-image.jpg", ...previousImages],
		// },
	};
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<body
				className={`${satoshi.variable} ${manrope.variable} overflow-x-hidden font-body`}
			>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
