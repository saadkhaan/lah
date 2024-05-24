import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			className="focus:outline-none"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			aria-label="Change color mode"
		>
			{theme === "dark" ? (
				<FiSun size={24} className="text-slate-100 dark:text-slate-300" />
			) : (
				<FiMoon size={24} className="text-slate-100 dark:text-slate-300" />
			)}
		</button>
	);
};

export default ThemeSwitch;
