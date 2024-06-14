"use client";
import Image from "next/image";
import Link from "next/link";
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
			effect: "fade",
			navigation: true,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 1,
					spaceBetween: 50,
				},
			},
		};

		// Assign it to swiper element
		Object.assign(swiperRef.current, params);

		// initialize swiper
		swiperRef.current.initialize();
	}, []);

	return (
		<swiper-container init="false" ref={swiperRef} autoHeight={true}>
			<swiper-slide>
				<div className="relative block w-screen h-screen h-screen-mobile">
					<Image
						src="/projects/BelgraviaMewsLondon/Mews2.jpg"
						alt="a room"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 100vw"
						fill
						className="w-full h-full object-cover object-center"
					/>
					<p className="absolute uppercase text-white text-2xl w-full sm:w-auto text-shadow font-semibold sm:font-normal text-center sm:text-xl bottom-[48.5%] left-[50%] transform -translate-x-[50%] sm:bottom-20 sm:left-20 sm:translate-x-0">
						<Link href="/projects/belgravia-mews">Belgravia Mews, London</Link>
					</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div className="relative block w-screen h-screen h-screen-mobile">
					<Image
						src="/projects/DevonManorEngland/devon1.jpg"
						alt="a room"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 100vw"
						fill
						className="w-full h-full object-cover object-center"
					/>
					<p className="absolute uppercase text-white text-2xl w-full sm:w-auto text-shadow font-semibold sm:font-normal text-center sm:text-xl bottom-[48.5%] left-[50%] transform -translate-x-[50%] sm:bottom-20 sm:left-20 sm:translate-x-0">
						<Link href="/projects/devon-manor">Devon Manor, England</Link>
					</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div className="relative block w-screen h-screen h-screen-mobile">
					<Image
						src="/projects/ElizabethStreetLondon/ElizabethStreet9.jpg"
						alt="a room"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 100vw"
						fill
						className="w-full h-full object-cover object-center"
					/>
					<p className="absolute uppercase text-white text-2xl w-full sm:w-auto text-shadow font-semibold sm:font-normal text-center sm:text-xl bottom-[48.5%] left-[50%] transform -translate-x-[50%] sm:bottom-20 sm:left-20 sm:translate-x-0">
						<Link href="/projects/elizabeth-street">
							Elizabeth Street, London
						</Link>
					</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div className="relative block w-screen h-screen h-screen-mobile">
					<Image
						src="/projects/JeddahHomeSaudiArabia/JeddahHome2.png"
						alt="a room"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
						fill
						className="w-full h-full object-cover object-center"
					/>
					<p className="absolute uppercase text-white text-2xl w-full sm:w-auto text-shadow font-semibold sm:font-normal text-center sm:text-xl bottom-[48.5%] left-[50%] transform -translate-x-[50%] sm:bottom-20 sm:left-20 sm:translate-x-0">
						<Link href="/projects/jeddah-home">Jeddah Home, Saudi Arabia</Link>
					</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div className="relative block w-screen h-screen h-screen-mobile">
					<Image
						src="/projects/MonteCarloMonaco/MonteCarlo1.jpg"
						alt="a room"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
						fill
						className="w-full h-full object-cover object-center"
					/>
					<p className="absolute uppercase text-white text-2xl w-full sm:w-auto text-shadow font-semibold sm:font-normal text-center sm:text-xl bottom-[48.5%] left-[50%] transform -translate-x-[50%] sm:bottom-20 sm:left-20 sm:translate-x-0">
						<Link href="/projects/monte-carlo">Monte Carlo, Monaco</Link>
					</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div className="relative block w-screen h-screen h-screen-mobile">
					<Image
						src="/projects/PontStHomeLondon/Pont2.jpg"
						alt="a room"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
						fill
						className="w-full h-full object-cover object-center"
					/>
					<p className="absolute uppercase text-white text-2xl w-full sm:w-auto text-shadow font-semibold sm:font-normal text-center sm:text-xl bottom-[48.5%] left-[50%] transform -translate-x-[50%] sm:bottom-20 sm:left-20 sm:translate-x-0">
						<Link href="/projects/pont-home">Pont St. London</Link>
					</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div className="relative block w-screen h-screen h-screen-mobile">
					<Image
						src="/projects/VictoriaLondon/victoria6.jpg"
						alt="a room"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
						fill
						className="w-full h-full object-cover object-center"
					/>
					<p className="absolute uppercase text-white text-2xl w-full sm:w-auto text-shadow font-semibold sm:font-normal text-center sm:text-xl bottom-[48.5%] left-[50%] transform -translate-x-[50%] sm:bottom-20 sm:left-20 sm:translate-x-0">
						<Link href="/projects/victoria-london">Victoria, London</Link>
					</p>
				</div>
			</swiper-slide>
		</swiper-container>
	);
}
