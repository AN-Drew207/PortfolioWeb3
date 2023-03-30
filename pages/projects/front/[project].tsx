import { ArrowLeftIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import contracts from 'frontprojects.json';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import Typewriter from 'typewriter-effect';

const Project = () => {
	const { query } = useRouter();
	const project = contracts.filter((contract, i) =>
		contract.link.includes(query.project?.toString() || '')
	)[0];
	return (
		<div className="min-h-screen flex flex-col items-center py-28 bg-gray-900 gap-6 md:px-36 px-10 relative">
			<img
				src={project.image}
				className="w-full h-full fixed top-0 left-0 opacity-[0.10]"
				alt=""
			/>
			<div className="absolute top-28 md:left-16 left-10 text-primary">
				<Link href={'/projects'}>
					<ChevronLeftIcon className="w-8 cursor-pointer" />
				</Link>
			</div>
			<h2 className="flex gap-1 text-center text-white md:text-4xl text-xl titleLogo text-primary font-[600] whitespace-nowrap relative">
				<span className="text-white">{'< '}</span>
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString(project.name)
							.pauseFor(8000)
							.deleteAll()
							.start();
						setInterval(() => {
							typewriter
								.typeString(project.name)
								.pauseFor(8000)
								.deleteAll()
								.start();
						}, 10000);
					}}
				/>
				<span className="text-white">{' />'}</span>
			</h2>

			<a
				href={(project as any).liveDemo}
				target="_blank"
				className={clsx(
					'relative text-center text-white text-xl font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54 hover:text-white hover:bg-primary transition-all duration-500'
				)}
			>
				Live Demo
			</a>
			<div className="flex flex-col gap-8 items-center justify-center w-full relative">
				{' '}
				{(project as any).codeDescription.paragraphs.map((paragraph: any) => {
					return (
						<p className="text-lg text-white text-justify font-bold w-full">
							{paragraph.text}
						</p>
					);
				})}
			</div>
		</div>
	);
};
export default Project;
