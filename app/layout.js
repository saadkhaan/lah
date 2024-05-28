import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";

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
	);
}
