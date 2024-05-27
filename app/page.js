import React from "react";
import coverImage from "../public/cover.jpg";
import HeroCarousel from "@/components/HeroCarousel";
import { getStoryblokApi } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <>
      <main className="min-h-screen">
        <section className="hero h-screen">
          <h1>Story: {data.story.name}</h1>
          <HeroCarousel />
        </section>
      </main>
    </>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home-page`, sbParams, {
    cache: "no-store",
  });
}
