import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Children } from "react";

/**
 * @typedef {import("@prismicio/client").Content.PortfolioCarouselSlice} PortfolioCarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PortfolioCarouselSlice>} PortfolioCarouselProps
 * @param {PortfolioCarouselProps}
 */
const PortfolioCarousel = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<PrismicNextLink field={slice.primary.portfolio_link}>
				{slice.primary.portfolio_title}
			</PrismicNextLink>
			<PrismicNextImage field={slice.primary.portfoio_image} />
		</section>
	);
};

export default PortfolioCarousel;
