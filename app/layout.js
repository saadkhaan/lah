import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";

storyblokInit({
	accessToken: process.env.TOKEN,
	use: [apiPlugin],
});

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

export const metadata = {
	title: "Laith AbdelHadi",
	description: "Interior design with a passion",
};

export default function RootLayout({ children }) {
	return (
		<StoryblokProvider>
			<html lang="en" suppressHydrationWarning>
				<body
					className={`${satoshi.variable} ${manrope.variable} overflow-x-hidden font-body`}
				>
					<Providers>
						<Navbar />
						{children}
					</Providers>
				</body>
			</html>
		</StoryblokProvider>
	);
}
