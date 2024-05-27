/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Initialize it as usual */
storyblokInit({
	accessToken: "2QY3Y4i0NxnVqtXOSmIQqAtt",
	use: [apiPlugin],
});

export default function StoryblokProvider({ children }) {
	return children;
}
