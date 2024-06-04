import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
// import { useRouter } from "next/navigation";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page({ params }) {
	const client = createClient();
	const page = await client.getSingle("portfolio_page");
	// const projectDetails = await client.getSingle("project_details");

	// return <SliceZone slices={page.data.slices} components={components} />;
	return (
		<div className="py-32">
			<div className="container">
				<h1>{page.data.page_title}</h1>
				<div className="grid grid-cols-2">
					<div className="col-1 bg-slate-50">
						<SliceZone slices={page.data.slices} components={components} />
					</div>
					<div className="col-1 h-20 bg-slate-100"></div>
				</div>
			</div>
		</div>
	);
}

export async function generateMetadata() {
	const client = createClient();
	const page = await client.getSingle("portfolio_page");

	return {
		title: page.data.meta_title || "Laith Interior Designer Portfolio",
		description: page.data.meta_description,
	};
}
