import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.PortfolioCarouselSlice} PortfolioCarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PortfolioCarouselSlice>} PortfolioCarouselProps
 * @param {PortfolioCarouselProps}
 */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PortfolioCarousel = ({ slice, params }) => {
	var settings = {
		dots: false,
		arrows: true,
		accessibility: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<>
				<Slider {...settings}>
					{slice.primary.portfolio.map((item, index) => (
						<div
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
						</div>
					))}
				</Slider>
			</>
		</section>
	);
};

export default PortfolioCarousel;
