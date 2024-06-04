import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.PortfolioSlice} PortfolioSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PortfolioSlice>} PortfolioProps
 * @param {PortfolioProps}
 */
const Portfolio = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="container">
				<div className="py-32">
					<div className="text-4xl">{slice.primary.portfolio_title}</div>
					<PrismicRichText field={slice.primary.portfolio_description} />
					{slice.primary.project_details.map((item, index) => (
						<PrismicNextImage field={item.project_images} key={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
