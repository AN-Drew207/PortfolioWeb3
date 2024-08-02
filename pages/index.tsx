import * as React from 'react';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import Typewriter from 'typewriter-effect';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Zoom } from 'swiper';
import Link from 'next/dist/client/link';
import { ProjectItem } from 'components/projects/ProjectItem';

export const customAnimation = keyframes`
  from {
	
	opacity:1;
    width: 0%;
  }

  to {
		opacity:1;
    width: 100%;
  }
`;

export const gapAnimation = keyframes`
  from {
	
    gap: 0%;
  }

  to {
    gap: 8px;
  }
`;

const Home = () => {
	const Web2projects = [
		{
			name: 'Enders Gate Marketplace',
			link: 'projects/web3/enders_gate_marketplace',
			image: '/img/eg_marketplace.png',
			description:
				'NFT marketplace where you can sell or buy any NFT related to Enders Gate',
		},
		{
			name: 'Enders Gate Website',
			link: 'projects/web3/enders_gate_website',
			image: '/img/eg_website.png',
			description:
				'Website where you can find EG roadmap, all the news about Enders Gate and all the functionalities related to their NFTs',
		},
		{
			name: 'ShareEth',
			link: 'projects/web3/share_eth',
			image: '/img/share_eth.png',
			description:
				'Social media app to allow content creators to monetize over their work using streams of income. (Hackathon Project made in ETHOnline 2022)',
		},

		{
			name: 'NFT Bolster',
			link: 'projects/web3/nft_bolster',
			image: '/img/bolster.png',
			description:
				'NFT Bolster is a platform where NFTs are backed by real assets in order to have a floor price in the market, this platform allo users to purchase NFTs backed by certificated assets in the market',
		},
		{
			name: 'C3 Blockchain',
			link: 'projects/web3/c3',
			image: '/img/c3.png',
			description:
				'C3 blockchain consists in a L2 blockchain base in the OP Stack with Goerli as L1, where we modified the core of the EVM where gas fees implementation is located. Only users with a WorldID (as a proof of personhood) can get fees from their smart contracts. All of this allows smart contracts builders to obtain revenue from the use of their smart contracts. This solves the issue of public goods or projects such as Safe not having a solid revenue source.',
		},
		{
			name: 'Shhh Spirits',
			link: 'projects/web2/shhh_spirits',
			image: '/img/shhh_spirits.png',
			description:
				'Shhh Spirits is a platform where users can look at their NFTs related to Shhh and buy Shhh Spirits products by using a Shopify Store by and easy and secure purchase process.',
		},
		{
			name: 'Shhh Spirits Shopify',
			link: 'projects/web2/shhh_spirits_shopify',
			liveDemo: 'https://shhhspirits.myshopify.com/',
			image: '/img/shhh_spirits_shopify.png',
			description:
				'ShhhSpirits is a platform that not only transports you to the world of ultra-premium Mezcal but also provides a unique marketplace where you can purchase bottles intimately connected to ShhhSpirits. Lovingly crafted in Oaxaca, Mexico, our extraordinary and delectable liquid holds a secret SOUL infused within each bottle, which can only be revealed to its rightful owner. A spirit that embodies another spirit, acting as a guardian and reflecting your uniqueness.',
		},
	];

	return (
		<div className="min-h-screen flex flex-col items-center justify-center w-full bg-overlay relative overflow-hidden">
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-overlay pt-28 md:px-36 px-10 w-full relative">
				<img
					className="absolute w-full h-full top-0 left-0 opacity-75"
					src="/img/bgPortfolio.png"
					alt=""
				/>

				<div className="flex flex-col gap-10 items-center justify-center relative p-4">
					<div className="flex flex-col items-center justify-center w-full">
						<img src="/logos/ac.png" className="md:w-1/2" alt="" />
					</div>

					<p className="flex flex-col gap-2 items-center justify-center text-white sm:text-2xl text-lg w-full subTitleMain">
						<Reveal
							triggerOnce
							keyframes={customAnimation}
							duration={6000}
							className="overflow-hidden"
						>
							<div className="flex flex-row w-full justify-center whitespace-nowrap subTitleMain">
								Elevating IT expectations, creating high-value products for
								businesses.
							</div>
						</Reveal>
						<Reveal
							triggerOnce
							keyframes={customAnimation}
							duration={6000}
							className="overflow-hidden"
						>
							<div className="flex flex-row w-full whitespace-nowrap justify-center subTitleMain">
								Advance and Create for a brighter future.
							</div>
						</Reveal>
					</p>
				</div>
				<a href="#about">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						className={clsx(
							'w-7 h-11 absolute bottom-10 left-0 right-0 mx-auto text-white border border-white rounded-full px-1 cursor-pointer',
							'hover:bg-white hover:text-primary transition-all duration-500'
						)}
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
						/>
					</svg>
				</a>
			</div>

			<div className="flex flex-col  justify-center items-center w-full py-24 md:px-36 sm:px-10 px-2 gap-16 bg-gradient-to-b from-overlay via-overlay to-[#660000]">
				<h2 className="flex text-center  md:text-4xl text-2xl titleLogo text-primary whitespace-nowrap">
					<span className="text-white font-bold pr-2">{'< '}</span>
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString('Projects')
								.pauseFor(8000)
								.deleteAll()
								.start();
							setInterval(() => {
								typewriter
									.typeString('Projects')
									.pauseFor(8000)
									.deleteAll()
									.start();
							}, 10000);
						}}
					/>
					<span className="text-white font-bold">{' / >'}</span>
				</h2>
				<div className="sm:w-2/3 w-full">
					<Swiper
						slidesPerView={1}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						loop={true}
						spaceBetween={10}
						modules={[Zoom, Autoplay]}
					>
						{Web2projects.map(({ name, link, image, description }) => {
							return (
								<SwiperSlide>
									<div className="px-1">
										<ProjectItem
											name={name}
											link={link}
											image={image}
											description={description}
										/>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				<Link href={'/projects'}>
					<div
						className={clsx(
							'text-center text-white md:text-xl text-sm font-[450] px-4 py-2 rounded-xl border border-white cursor-pointer w-54',
							'hover:text-[#000] hover:bg-white transition-all duration-500'
						)}
					>
						View More
					</div>
				</Link>
			</div>

			<div
				className="flex md:flex-row flex-col items-center justify-center w-full pb-64 pt-48 md:px-36 px-10 gap-16 relative bg-gradient-to-b to-overlay via-overlay from-[#660000]"
				id="about"
			>
				<div className="flex flex-col items-center gap-6 md:w-1/2 w-full">
					<h2 className="flex text-center md:text-4xl text-2xl titleLogo text-primary whitespace-nowrap">
						<span className="text-white font-bold pr-2">{'< '}</span>
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString('About Us')
									.pauseFor(3000)
									.deleteChars(2)
									.typeString('AC')
									.pauseFor(3000)
									.deleteAll()
									.start();
								setInterval(() => {
									typewriter
										.typeString('About Us')
										.pauseFor(3000)
										.deleteChars(2)
										.typeString('AC')
										.pauseFor(3000)
										.deleteAll()
										.start();
								}, 10000);
							}}
						/>
						<span className="text-white font-bold">{'/ >'}</span>
					</h2>
					<div className="flex flex-col gap-4">
						<p className="text-justify md:text-[16px] text-md font-medium text-white">
							AC is a dedicated company committed to enhancing and actualizing
							the IT expectations of businesses. Our primary objective is to
							develop high-value products that not only meet the needs of
							enterprises but also elevate the user experience. With AC, aspire
							towards a future of innovation, advance your technological
							landscape, and create a path to success. Our mantra is to Aspire,
							Advance, and Create - Your Future, Our Commitment.
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center md:w-1/2 w-full">
					<img src="/logos/ac.png" className="md:w-1/2" alt="" />
				</div>
			</div>

			<div
				className="flex md:flex-row-reverse flex-col justify-center w-full py-48 md:px-36 px-10 gap-16 relative"
				id="our_mission"
			>
				<img
					src="/img/downredline2.png"
					className="md:w-[40%] w-[80%] rotate-180 absolute top-0 left-[-20%] opacity-[0.70]"
					alt=""
				/>
				<img
					src="/img/downredline2.png"
					className="md:w-[40%] w-[80%] absolute bottom-0 right-[-20%] opacity-[0.70]"
					alt=""
				/>
				<div className="flex flex-col items-center gap-6 md:w-1/2 w-full">
					<h2 className="flex text-center md:text-4xl text-2xl titleLogo text-primary whitespace-nowrap">
						<span className="text-white font-bold pr-2">{'< '}</span>
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString('Our Mission')
									.pauseFor(3000)
									.deleteAll()
									.start();
								setInterval(() => {
									typewriter
										.typeString('Our Mission')
										.pauseFor(3000)
										.deleteAll()
										.start();
								}, 10000);
							}}
						/>
						<span className="text-white font-bold">{'/ >'}</span>
					</h2>
					<div className="flex flex-col gap-4">
						<p className="text-justify md:text-[16px] text-sm font-medium text-white">
							Our mission is to be the catalyst for business innovation,
							offering bespoke solutions or generating fresh ideas for those
							looking to establish their web platforms or implement robust
							blockchain infrastructures. Our expertise spans a diverse
							spectrum, encompassing Marketplaces, E-commerce, Landing Pages,
							Blockchain Dapps, ERPs, Social Media, and beyond. Whatever your
							vision entails, we possess the capabilities to turn it into a
							tangible reality with unwavering commitment and proficiency.
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center md:w-1/2 w-full">
					<img src="/logos/ac.png" className="md:w-1/2" alt="" />
				</div>
			</div>
		</div>
	);
};
export default Home;
