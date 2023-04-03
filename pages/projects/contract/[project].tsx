import { ChevronLeftIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import contracts from 'contractsProjects.json';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import Typewriter from 'typewriter-effect';

const Contract = () => {
	const { query } = useRouter();
	const contract = contracts.filter((contract, i) =>
		contract.link.includes(query.project?.toString() || '')
	)[0];
	return (
		<div className="min-h-screen flex flex-col items-center py-28 bg-gray-900 gap-6 md:px-36 px-10 relative">
			<img
				src={contract.image}
				className="w-full h-full fixed top-0 left-0 opacity-[0.10]"
				alt=""
			/>
			<div className="absolute sm:top-28 top-16 md:left-16 sm:left-10 left-4 text-primary">
				<Link href={'/projects'}>
					<ChevronLeftIcon className="sm:w-8 w-6 cursor-pointer" />
				</Link>
			</div>
			<h2 className="flex gap-1 text-center text-white md:text-4xl text-xl titleLogo text-primary font-[600] whitespace-nowrap relative">
				<span className="text-white">{'< '}</span>
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString(contract.name)
							.pauseFor(8000)
							.deleteAll()
							.start();
						setInterval(() => {
							typewriter
								.typeString(contract.name)
								.pauseFor(8000)
								.deleteAll()
								.start();
						}, 10000);
					}}
				/>
				<span className="text-white">{' />'}</span>
			</h2>

			<a
				href={(contract as any).code}
				target="_blank"
				className={clsx(
					'relative text-center text-white md:text-xl sm:text-md text-[11px] font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54 hover:text-white hover:bg-primary transition-all duration-500'
				)}
			>
				Verified Code
			</a>
			<div className="flex flex-col gap-8 items-center justify-center w-full relative">
				{' '}
				{contract.codeDescription.paragraphs.map((paragraph, i) => {
					return paragraph.subTexts ? (
						<div className="flex flex-col gap-4 w-full">
							<h2 className="sm:text-lg text-sm font-bold text-white text-justify">
								{paragraph.text}
							</h2>
							{paragraph.subTexts.map((text, i) => (
								<p className="sm:text-md text-[11px] text-white text-justify pl-4">
									<span className="font-bold">{i + 1} -</span> {text}
								</p>
							))}
						</div>
					) : (
						<p className="sm:text-lg text-sm font-bold text-white text-justify w-full">
							{paragraph.text}
						</p>
					);
				})}
			</div>
		</div>
	);
};
export default Contract;
