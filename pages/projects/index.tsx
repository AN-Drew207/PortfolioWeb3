import clsx from 'clsx';
import {
	FrontProjectItem,
	ContractProjectItem,
} from 'components/projects/ProjectItem';
import * as React from 'react';
import Typewriter from 'typewriter-effect';

const Projects = () => {
	const frontProjects = [
		{
			name: 'Enders Gate Marketplace',
			link: 'projects/front/enders_gate_marketplace',
			image: '/img/eg_marketplace.png',
			description:
				'NFT marketplace where you can sell or buy any NFT related to Enders Gate',
		},
		{
			name: 'Enders Gate Website',
			link: 'projects/front/enders_gate_website',
			image: '/img/eg_website.png',
			description:
				'Website where you can find EG roadmap, all the news about Enders Gate and all the functionalities related to their NFTs',
		},
		{
			name: 'ShareEth',
			link: 'projects/front/share_eth',
			image: '/img/share_eth.png',
			description:
				'Social media app to allow content creators to monetize over their work using streams of income. (Hackathon Project made in ETHOnline 2022)',
		},

		{
			name: 'NFT Bolster',
			link: 'projects/front/nft_bolster',
			image: '/img/bolster.png',
			description:
				'NFT Bolster is a platform where NFTs are backed by real assets in order to have a floor price in the market, this platform allo users to purchase NFTs backed by certificated assets in the market',
		},
		{
			name: 'C3 Blockchain',
			link: 'projects/front/c3',
			image: '/img/c3.png',
			description:
				'C3 blockchain consists in a L2 blockchain base in the OP Stack with Goerli as L1, where we modified the core of the EVM where gas fees implementation is located. Only users with a WorldID (as a proof of personhood) can get fees from their smart contracts. All of this allows smart contracts builders to obtain revenue from the use of their smart contracts. This solves the issue of public goods or projects such as Safe not having a solid revenue source.',
		},
		{
			name: 'Shhh Spirits',
			link: 'projects/front/shhh_spirits',
			image: '/img/shhh_spirits.png',
			description:
				'Shhh Spirits is a platform where users can look at their NFTs related to Shhh and buy Shhh Spirits products by using a Shopify Store by and easy and secure purchase process.',
		},
		{
			name: 'Shhh Spirits Shopify',
			link: 'projects/front/shhh_spirits_shopify',
			liveDemo: 'https://shhhspirits.myshopify.com/',
			image: '/img/shhh_spirits_shopify.png',
			description:
				'Shh Spirits is a platform that not only transports you to the world of ultra-premium Mezcal but also provides a unique marketplace where you can purchase bottles intimately connected to Shh Spirits. Lovingly crafted in Oaxaca, Mexico, our extraordinary and delectable liquid holds a secret SOUL infused within each bottle, which can only be revealed to its rightful owner. A spirit that embodies another spirit, acting as a guardian and reflecting your uniqueness.',
		},
	];

	const contractsProjects = [
		{
			name: 'Enders Gate Marketplace',
			contractName: 'ClockSaleMultiTokens.sol',
			link: 'projects/contract/eg_marketplace',
			image: '/img/eg_marketplace.png',
		},
		{
			name: 'Enders Gate Packs Shop',
			contractName: 'ClockSaleOwnable.sol',
			link: 'projects/contract/eg_shop',
			image: '/img/shop.png',
		},
		{
			name: 'DAO Factoring Smart Contracts',
			image: '/img/daofactoring.png',
			link: 'projects/contract/dao_factoring',
			contractName: 'Factoring.sol',
		},
		{
			name: 'Mezcal Bottle Collection',
			contractName: 'MezcalBottleCollection.sol',
			link: 'projects/contract/bottle_collection',
			image: '/img/shhh_spirits.png',
		},

		{
			name: 'CoCo Bottle Collection',
			contractName: 'CoCoBottleCollection.sol',
			link: 'projects/contract/bottle_collection',
			image: '/img/coco.png',
		},
		{
			name: 'CoCo Bottle Exchange',
			contractName: 'BottleExchange.sol',
			link: 'projects/contract/bottle_collection',
			image: '/img/coco.png',
		},

		{
			name: 'Enders Pass Pack Collection',
			contractName: 'ERC721SeaDrop.sol',
			link: 'projects/contract/eg_pass_packs',
			image: '/img/CommonPass.png',
		},
	];

	const [section, setSection] = React.useState('front');

	return (
		<div className="min-h-screen flex flex-col items-center py-28 bg-gray-900 gap-6 relative">
			<img
				src="img/bgPortfolio.png"
				className="fixed top-0 left-0 h-full w-[125vw] opacity-[0.25]"
				alt=""
			/>
			<h2 className="flex gap-1 text-center md:text-4xl text-xl titleLogo text-primary font-[600] whitespace-nowrap relative">
				<span className="text-white">{'< '}</span>
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
				<span className="text-white">{' />'}</span>
			</h2>
			<div className="flex sm:flex-row flex-col items-center justify-center w-full gap-x-12 gap-y-4 relative">
				<div
					className={clsx(
						'text-center text-white md:text-xl text-sm font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54',
						{ ['!text-white !bg-primary']: section == 'front' }
					)}
					onClick={() => setSection('front')}
				>
					FrontEnd Projects
				</div>
				<div
					className={clsx(
						'text-center text-white md:text-xl text-sm font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54',
						{ ['!text-white !bg-primary']: section == 'contracts' }
					)}
					onClick={() => setSection('contracts')}
				>
					Smart Contracts
				</div>
			</div>
			{section == 'front' ? (
				<div className="flex flex-wrap items-center justify-center md:gap-x-12 gap-x-4 md:gap-y-8 gap-y-4 px-4 w-full">
					{frontProjects.map(({ name, link, image, description }, e) => {
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
			) : (
				<div className="flex flex-wrap items-center justify-center md:gap-x-12 gap-x-4 md:gap-y-8 gap-y-4 px-4 w-full">
					{contractsProjects.map(({ name, contractName, link, image }, e) => {
						return (
							<ContractProjectItem
								name={name}
								link={link}
								image={image}
								contractName={contractName}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};
export default Projects;
