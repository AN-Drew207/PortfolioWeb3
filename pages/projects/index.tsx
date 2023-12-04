import clsx from 'clsx';
import { ProjectItem } from 'components/projects/ProjectItem';
import web2Projects from 'web2Projects.json';
import web3Projects from 'web3Projects.json';

import * as React from 'react';
import Typewriter from 'typewriter-effect';

const Projects = () => {
	const [section, setSection] = React.useState('web2');

	return (
		<div className="min-h-screen flex flex-col items-center py-28 bg-gray-900 gap-20 relative">
			<div className="w-full h-full bg-white fixed top-0 left-0 opacity-[0.25]"></div>
			<img
				src="img/bgPortfolio.png"
				className="fixed top-0 left-0 h-full w-[125vw] opacity-[0.75]"
				alt=""
			/>
			<h2 className="flex text-center md:text-5xl text-xl titleLogo text-primary whitespace-nowrap relative">
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
			<div className="flex sm:flex-row flex-col items-center justify-center w-full gap-x-12 gap-y-4 relative">
				<div
					className={clsx(
						'text-center md:text-xl text-sm font-[500] px-4 py-2 rounded-xl border border-white cursor-pointer w-54',
						'hover:text-[#000] hover:bg-white',
						{ ['text-white']: section != 'web2' },
						{ ['!text-[#000] bg-white']: section == 'web2' }
					)}
					onClick={() => setSection('web2')}
				>
					Web2 Projects
				</div>
				<div
					className={clsx(
						'text-center text-white md:text-xl text-sm font-[450] px-4 py-2 rounded-xl border border-white cursor-pointer w-54',
						'hover:text-[#000] hover:bg-white transition-all duration-500',
						{
							['!text-black-0 !bg-white !border-white']: section == 'web3',
						}
					)}
					onClick={() => setSection('web3')}
				>
					Web3 Projects
				</div>
			</div>
			{section == 'web2' ? (
				<div className="flex flex-wrap items-center justify-center md:gap-x-12 gap-x-4 md:gap-y-8 gap-y-4 px-4 w-full">
					{web2Projects.map(({ name, link, image, description }, e) => {
						return (
							<ProjectItem
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
					{web3Projects.map(({ name, description, link, image }, e) => {
						return (
							<ProjectItem
								name={name}
								link={link}
								image={image}
								description={description}
								hover
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};
export default Projects;
