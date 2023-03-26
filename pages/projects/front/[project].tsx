import { ArrowLeftIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import contracts from 'frontprojects.json';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

const Project = () => {
	const { query } = useRouter();
	const project = contracts.filter((contract, i) =>
		contract.link.includes(query.project?.toString() || '')
	)[0];
	return (
		<div className="min-h-screen flex flex-col items-center py-28 bg-gray-900 gap-6 md:px-36 px-10 relative">
			<div className="absolute top-28 md:left-16 left-10 text-primary">
				<Link href={'/projects'}>
					<ChevronLeftIcon className="w-8 cursor-pointer" />
				</Link>
			</div>
			<h1 className="text-center text-white text-4xl font-bold">
				{project.name}
			</h1>
			<img src={project.image} className="md:w-2/3 rounded-xl" alt="" />
			<a
				href={(project as any).code}
				target="_blank"
				className={clsx(
					'text-center text-white text-xl font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54 hover:text-white hover:bg-primary transition-all duration-500'
				)}
			>
				Code
			</a>
			<div className="flex flex-col gap-8 items-center justify-center w-full">
				{' '}
				{(project as any).codeDescription.paragraphs.map((paragraph: any) => {
					return (
						<p className="text-lg text-white text-justify w-full">
							{paragraph.text}
						</p>
					);
				})}
			</div>
		</div>
	);
};
export default Project;
