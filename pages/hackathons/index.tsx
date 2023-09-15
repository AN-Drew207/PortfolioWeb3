import clsx from 'clsx';
import {
	FrontProjectItem,
	ContractProjectItem,
} from 'components/projects/ProjectItem';
import * as React from 'react';
import Typewriter from 'typewriter-effect';

const Projects = () => {
	const hackathons = [
		{
			name: 'DAO Factoring',
			link: 'hackathons/dao_factoring',
			liveDemo: 'https://hack-fs.vercel.app/',
			hackathonPage: 'https://ethglobal.com/showcase/shareeth-4yymo',
			image: '/img/daofactoring.png',
			description:
				'Factoring app to allow daos to issue invoices to clients and sell the ownership of the invoices to increase capital efficiency',
		},

		{
			name: 'Share Eth',
			link: 'hackathons/share_eth',
			liveDemo: 'https://shareeth.vercel.app/',
			hackathonPage: 'https://ethglobal.com/showcase/daofactoring-0tuvp',
			image: '/img/share_eth.png',
			description:
				'Introducing ShareEth, a hackathon project turned social media app that empowers content creators by enabling them to monetize their work through various income streams. Our primary goals are to ensure security and privacy for both the content and our users, while providing a dynamic and engaging user experience.',
		},
		{
			name: 'ChainScore',
			link: 'hackathons/chainscore',
			liveDemo: 'https://hack-money.vercel.app/',
			hackathonPage: 'https://ethglobal.com/showcase/chainscore-jizuu',
			image: '/img/chainscore.png',
			description:
				'A credit score system that allows DAOs to create loans without collateral',
		},
		{
			name: 'C3 Blockchain (Best Overall Winner)',
			link: 'hackathons/c3',
			liveDemo: 'https://c3-blockchain.vercel.app/',
			hackathonPage: 'https://ethglobal.com/showcase/c3-blockchain-cnyv7',
			image: '/img/c3.png',
			description:
				'C3 blockchain consists in a L2 blockchain base in the OP Stack with Goerli as L1, where we modified the core of the EVM where gas fees implementation is located. Only users with a WorldID (as a proof of personhood) can get fees from their smart contracts. All of this allows smart contracts builders to obtain revenue from the use of their smart contracts. This solves the issue of public goods or projects such as Safe not having a solid revenue source.',
		},
	];

	return (
		<div className="min-h-screen flex flex-col items-center py-28 bg-gray-900 gap-6 relative">
			<img
				src="img/bgPortfolio.png"
				className="fixed top-0 left-0 h-full w-[125vw] opacity-[0.25]"
				alt=""
			/>
			<h2 className="flex gap-1 text-center text-white md:text-4xl text-xl titleLogo text-primary font-[600] whitespace-nowrap relative">
				<span className="text-white">{'< '}</span>
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString('Hackathons')
							.pauseFor(8000)
							.deleteAll()
							.start();
						setInterval(() => {
							typewriter
								.typeString('Hackathons')
								.pauseFor(8000)
								.deleteAll()
								.start();
						}, 10000);
					}}
				/>
				<span className="text-white">{' />'}</span>
			</h2>

			<div className="flex flex-wrap items-center justify-center md:gap-x-12 gap-x-4 md:gap-y-8 gap-y-4 px-4 relative">
				{hackathons.map(({ name, link, image, description }, e) => {
					return (
						<FrontProjectItem
							name={name}
							link={link}
							image={image}
							description={description}
							hover
						/>
					);
				})}
			</div>
		</div>
	);
};
export default Projects;
