/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Initialize it as usual */
storyblokInit({
	accessToken: process.env.TOKEN,
	use: [apiPlugin],
});

export default function StoryblokProvider({ children }) {
	return children;
}
