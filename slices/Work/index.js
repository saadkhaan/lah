import { PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.WorkSlice} WorkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkSlice>} WorkProps
 * @param {WorkProps}
 */
const Work = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<PrismicNextLink field={slice.primary.work_relation}>
				Link
			</PrismicNextLink>
			<>{slice.primary.work_main_heading}</>
			<PrismicNextLink field={slice.primary.link}>Link</PrismicNextLink>
		</section>
	);
};

export default Work;
