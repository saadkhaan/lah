"use client";

import { ThemeProvider } from "next-themes";
import "./globals.css";

const Providers = ({ children }) => {
	return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
