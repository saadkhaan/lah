import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Laith Abdul Hadi",
	description: "Interior design with a passion",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className}`}>
				<Providers>
					<Navbar />
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
