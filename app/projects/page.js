// import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<div className="py-32 px-4">
			<div className="container">
				{/* <h1 className="text-4xl">Projects</h1> */}
				<div className="grid md:grid-cols-3 gap-6 mt-4 projects-grid">
					<Link href="./projects/belgravia-mews">
						<div className="col-1">
							<div className="h-72 image-container relative mb-2">
								<Image
									src="/projects/BelgraviaMewsLondon/Mews2.jpg"
									fill
									alt="Belgravia Mews London"
									className="object-cover"
								/>
							</div>
							<h2 className="text-lg">Belgravia Mews, London</h2>
						</div>
					</Link>
					<Link href="/">
						<div className="col-1">
							<div className="h-72 image-container relative mb-2">
								<Image
									src="/projects/DevonManorEngland/Devon1.JPG"
									fill
									alt="Devon Manor England"
									className="object-cover"
								/>
							</div>
							<h2 className="text-lg">Devon Manor, England</h2>
						</div>
					</Link>
					<Link href="/">
						<div className="col-1">
							<div className="h-72 image-container relative mb-2">
								<Image
									src="/projects/ElizabethStreetLondon/ElizabethStreet9.jpg"
									fill
									alt="Elizabeth Street"
									className="object-cover"
								/>
							</div>
							<h2 className="text-lg">Elizabeth Street, London</h2>
						</div>
					</Link>
					<Link href="/">
						<div className="col-1">
							<div className="h-72 image-container relative mb-2">
								<Image
									src="/projects/JeddahHomeSaudiArabia/JeddahHome2.png"
									fill
									alt="Jeddah Home"
									className="object-cover"
								/>
							</div>
							<h2 className="text-lg">Jeddah Home, Saudi Arabia</h2>
						</div>
					</Link>
					<Link href="/">
						<div className="col-1">
							<div className="h-72 image-container relative mb-2">
								<Image
									src="/projects/MonteCarloMonaco/MonteCarlo1.jpg"
									fill
									alt="Devon Manor England"
									className="object-cover"
								/>
							</div>
							<h2 className="text-lg">Monte Carlo, Monaco</h2>
						</div>
					</Link>
					<Link href="/">
						<div className="col-1">
							<div className="h-72 image-container relative mb-2">
								<Image
									src="/projects/PontStHomeLondon/Pont2.jpg"
									fill
									alt="Pont St. Home, London"
									className="object-cover"
								/>
							</div>
							<h2 className="text-lg">Pont St. Home, London</h2>
						</div>
					</Link>

					<Link href="/">
						<div className="col-1">
							<div className="h-72 image-container relative mb-2">
								<Image
									src="/projects/VictoriaLondon/victoria6.jpg"
									fill
									alt="Victoria, London"
									className="object-cover"
								/>
							</div>
							<h2 className="text-lg">Monte Carlo, Monaco</h2>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
