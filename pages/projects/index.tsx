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
			name: 'CoCo Mint Page',
			link: 'projects/front/coco',
			image: '/img/coco.png',
			description:
				'CoCo Mint Web is a platform where Luxury Bottles are available to purchase, these bottles are divided into NFTs and these NFTs can be either collected or exchanged in the platform.',
		},

		{
			name: 'NFT Bolster',
			link: 'projects/front/nft_bolster',
			image: '/img/bolster.png',
			description:
				'NFT Bolster is a platform where NFTs are backed by real assets in order to have a floor price in the market, this platform allo users to purchase NFTs backed by certificated assets in the market',
		},
		{
			name: 'Shhh Spirits',
			link: 'projects/front/shhh_spirits',
			image: '/img/shhh_spirits.png',
			description:
				'Shhh Spirits is a platform where users can look at their NFTs related to Shhh and buy Shhh Spirits products by using a Shopify Store by and easy and secure purchase process.',
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
		<div className="min-h-screen flex flex-col items-center py-28 bg-gray-900 gap-6">
			<h2 className="flex gap-1 text-center text-white md:text-4xl text-xl titleLogo text-primary font-[600] whitespace-nowrap">
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
			<div className="flex sm:flex-row flex-col items-center justify-center w-full gap-12">
				<div
					className={clsx(
						'text-center text-white text-xl font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54',
						{ ['!text-white !bg-primary']: section == 'front' }
					)}
					onClick={() => setSection('front')}
				>
					FrontEnd Projects
				</div>
				<div
					className={clsx(
						'text-center text-white text-xl font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54',
						{ ['!text-white !bg-primary']: section == 'contracts' }
					)}
					onClick={() => setSection('contracts')}
				>
					Smart Contracts
				</div>
			</div>
			{section == 'front' ? (
				<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
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
				<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
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
