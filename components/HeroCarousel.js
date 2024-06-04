"use client";
import Image from "next/image";
// import { useEffect, useRef } from "react";
// import { register } from "swiper/element/bundle";
// register();

import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function HeroCarousel() {
	const client = createClient();
	const page = await client.getSingle("homepage");
	return <SliceZone slices={page.data.slices} components={components} />;
}
