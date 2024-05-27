"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
// register();

export default function HeroCarousel() {
	const swiperRef = useRef(null);

	useEffect(() => {
		// Register Swiper web component
		register();

		// Object with parameters
		const params = {
			slidesPerView: 1,
			autoHeight: true,
			autoplay: {
				delay: 5000,
			},
			breakpoints: {
				768: {
					slidesPerView: 1,
				},
			},
		};

		// Assign it to swiper element
		Object.assign(swiperRef.current, params);

		// initialize swiper
		swiperRef.current.initialize();
	}, []);

	return (
		<section className="hero h-screen">
			<swiper-container
				init="false"
				ref={swiperRef}
				navigation="true"
				autoHeight={true}
			>
				<swiper-slide>
					<div className="relative block w-screen h-screen h-screen-mobile">
						<Image
							src="/cover.jpg"
							alt="a room"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 100vw"
							fill
							className="w-full h-full object-cover object-center"
						/>
						<p className="absolute uppercase text-white text-center sm:text-xl bottom-[50%] left-[50%] transform -translate-x-[50%] sm:bottom-20 sm:left-20 sm:translate-x-0">
							Devon Home, Dartmouth, England
						</p>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div className="relative block w-screen h-screen h-screen-mobile">
						<Image
							src="/cover2.jpg"
							alt="a room"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 100vw"
							fill
							className="w-full h-full object-cover object-center"
						/>
						<p className="absolute uppercase text-white text-center sm:text-xl bottom-[50%] left-[50%] transform -translate-x-[50%] sm:bottom-20 sm:left-20 sm:translate-x-0">
							Devon Home, Dartmouth, England
						</p>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div className="relative block w-screen h-screen h-screen-mobile">
						<Image
							src="/cover3.jpg"
							alt="a room"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 100vw"
							fill
							className="w-full h-full object-cover object-center"
						/>
						<p className="absolute uppercase text-white text-center sm:text-xl bottom-[50%] left-[50%] transform -translate-x-[50%] sm:bottom-20 sm:left-20 sm:translate-x-0">
							Devon Home, Dartmouth, England
						</p>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div className="relative block w-screen h-screen h-screen-mobile">
						<Image
							src="/cover4.jpg"
							alt="a room"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
							fill
							className="w-full h-full object-cover object-center"
						/>
						<p className="absolute uppercase text-white text-center sm:text-xl bottom-[50%] left-[50%] transform -translate-x-[50%] sm:bottom-20 sm:left-20 sm:translate-x-0">
							Devon Home, Dartmouth, England
						</p>
					</div>
				</swiper-slide>
			</swiper-container>
		</section>
	);
}
