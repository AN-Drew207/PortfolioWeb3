import { ChevronLeftIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import contracts from 'contractsProjects.json';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

const Contract = () => {
	const { query } = useRouter();
	const contract = contracts.filter((contract, i) =>
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
				{contract.name}
			</h1>
			<img src={contract.image} className="md:w-2/3 rounded-xl" alt="" />
			<a
				href={(contract as any).code}
				target="_blank"
				className={clsx(
					'text-center text-white text-xl font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54 hover:text-white hover:bg-primary transition-all duration-500'
				)}
			>
				Code
			</a>
			<div className="flex flex-col gap-8 items-center justify-center w-full">
				{' '}
				{contract.codeDescription.paragraphs.map((paragraph, i) => {
					return paragraph.subTexts ? (
						<div className="flex flex-col gap-4 w-full">
							<h2 className="text-lg text-white text-justify">
								{paragraph.text}
							</h2>
							{paragraph.subTexts.map((text, i) => (
								<p className="text-md text-white text-justify pl-4">
									<span className="font-bold">{i + 1} -</span> {text}
								</p>
							))}
						</div>
					) : (
						<p className="text-lg text-white text-justify w-full">
							{paragraph.text}
						</p>
					);
				})}
			</div>
		</div>
	);
};
export default Contract;
