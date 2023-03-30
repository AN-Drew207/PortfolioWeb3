import clsx from 'clsx';
import {
	FrontProjectItem,
	ContractProjectItem,
	CertificateItem,
} from 'components/projects/ProjectItem';
import * as React from 'react';
import Typewriter from 'typewriter-effect';
import certificates from 'certificates.json';

const Projects = () => {
	return (
		<div className="min-h-screen flex flex-col items-center py-28 bg-gray-900 gap-16 relative">
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
							.typeString('Certificates')
							.pauseFor(8000)
							.deleteAll()
							.start();
						setInterval(() => {
							typewriter
								.typeString('Certificates')
								.pauseFor(8000)
								.deleteAll()
								.start();
						}, 10000);
					}}
				/>
				<span className="text-white">{' />'}</span>
			</h2>

			<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
				{certificates.map(({ name, link, image }, e) => {
					return <CertificateItem name={name} link={link} image={image} />;
				})}
			</div>
		</div>
	);
};
export default Projects;
