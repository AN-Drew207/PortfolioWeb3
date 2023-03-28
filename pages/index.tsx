import * as React from 'react';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import Typewriter from 'typewriter-effect';
import clsx from 'clsx';

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
	return (
		<div className="min-h-screen flex flex-col items-center justify-center w-full">
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-overlay py-10 md:px-36 px-10 w-full relative">
				<img
					className="absolute w-full h-full top-0 left-0"
					src="/img/bgPortfolio.png"
					alt=""
				/>
				<div className="flex flex-col gap-2 items-center justify-center relative p-4">
					<div className="flex flex-wrap items-center justify-center text-white 2xl:text-[120px] md:text-[80px] sm:text-[60px] text-[50px] font-bold  ">
						<div className="flex flex-row items-center justify-end titleLogo">
							{'<'}
							<span className="text-primary titleLogo"> A</span>{' '}
							<Reveal
								triggerOnce
								keyframes={customAnimation}
								duration={4000}
								className="overflow-hidden"
							>
								<h2 className="md:pr-6 pr-2 titleLogo">ndres </h2>
							</Reveal>
						</div>
						<div className="flex flex-row items-center justify-start titleLogo">
							<span className="text-primary titleLogo">C</span>
							<Reveal
								triggerOnce
								keyframes={customAnimation}
								duration={4000}
								className="overflow-hidden titleLogo"
							>
								<h2 className="titleLogo">ontreras</h2>
							</Reveal>
							{'/>'}
						</div>
					</div>

					<p className="flex gap-2 items-center justify-center text-white sm:text-2xl text-lg w-full subTitleMain">
						<Reveal
							triggerOnce
							keyframes={customAnimation}
							duration={8000}
							className="overflow-hidden "
						>
							<div className="flex flex-row w-full justify-end whitespace-nowrap subTitleMain">
								Smart Contracts
							</div>
						</Reveal>
						/
						<Reveal
							triggerOnce
							keyframes={customAnimation}
							duration={8000}
							className="overflow-hidden"
						>
							<div className="flex flex-row w-full whitespace-nowrap justify-start subTitleMain">
								DApps Developer
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
			<div
				className="flex md:flex-row flex-col justify-center w-full py-24 md:px-36 px-10 gap-16 bg-overlay"
				id="about"
			>
				<div className="flex flex-col gap-6 w-1/2">
					<h2 className="text-center text-white text-4xl titleLogo text-primary font-[600] whitespace-nowrap">
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString('About Me')
									.pauseFor(3000)
									.deleteChars(2)
									.typeString('Andres')
									.pauseFor(3000)
									.deleteAll()
									.start();
								setInterval(() => {
									typewriter
										.typeString('About Me')
										.pauseFor(3000)
										.deleteChars(2)
										.typeString('Andres')
										.pauseFor(3000)
										.deleteAll()
										.start();
								}, 10000);
							}}
						/>
					</h2>
					<div className="flex flex-col gap-4">
						<p className="text-justify text-white">
							Greetings! I am a Blockchain Solidity / Front End Web Developer
							with expertise in Hardhat, Solidity, TypeScript, React, SASS, and
							Tailwind. My passion lies in the blockchain realm, where I am
							constantly striving to become a highly-skilled Blockchain
							developer and a future Smart Contract Auditor. My experience
							encompasses ERC20, ERC721, ERC1155, marketplaces, DeFi, various
							types of smart contracts, unit testing, and deployments on
							testnets (Goerli, Ropsten, Mumbai) as well as mainnets (Ethereum
							and Polygon).
						</p>
						<p className="text-justify text-white">
							My mission is to make a significant impact in the blockchain
							industry by delving deeper into DeFi, exploring cutting-edge
							technologies such as zkProofs and DIDs, and optimizing the
							performance of my smart contracts. My ultimate goal is to become a
							Smart Contract Auditor while continuing to excel as an experienced
							Smart Contract Developer.
						</p>
					</div>
				</div>
				<div className="flex flex-col w-1/2">
					<img src="/logos/ac.png" alt="" />
				</div>
			</div>
			<div className="flex lex-col justify-center w-full py-24 md:px-36 px-10 gap-16 bg-overlay">
				<h2 className="text-center text-white text-4xl titleLogo text-primary font-bold whitespace-nowrap">
					Tooling
				</h2>
			</div>
		</div>
	);
};
export default Home;
