import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

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
			<>
				<ul>
					{slice.primary.portfolio.map((item, index) => (
						<li
							key={index}
							className="relative block w-screen h-screen h-screen-mobile"
						>
							<PrismicNextImage
								field={item.image}
								className="w-full h-full object-cover"
								fill
								alt=""
							/>
							<PrismicNextLink
								field={item.link}
								className="absolute uppercase text-white text-center sm:text-xl bottom-[50%] left-[50%] transform -translate-x-[50%] sm:bottom-20 sm:left-20 sm:translate-x-0 text-shadow"
							>
								{item.title}
							</PrismicNextLink>
						</li>
					))}
				</ul>
			</>
		</section>
	);
};

export default PortfolioCarousel;
