import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react';

export const FrontProjectItem: React.FC<any> = ({
	className,
	name,
	link,
	image,
	description,
}) => {
	return (
		<Link href={link}>
			<div
				className={clsx(
					className,
					'flex flex-col items-center justify-center border border-white rounded-3xl',
					'hover:scale-[105%] transition-all duration-500 xl:w-[800px] sm:w-[500px] w-[200px] overflow-hidden cursor-pointer relative'
				)}
			>
				<img src={image} className="w-full" alt="" />
				<div className="absolute w-full h-full bg-[#00000066]"></div>
				<div className="flex flex-col p-4 gap-2 items-center justify-center absolute bottom-0 bg-[#000000bb] w-full">
					<div className="flex items-center justify-center text-xl text-white font-bold">
						{name}
					</div>
					<div className="text-sm text-white w-full text-center">
						{description}
					</div>
				</div>
			</div>
		</Link>
	);
};

export const ContractProjectItem: React.FC<any> = ({
	className,
	classNameImage,
	name,
	contractName,
	link,
	image,
	description,
}) => {
	return (
		<Link href={link}>
			<div
				className={clsx(
					className,
					'flex flex-col items-center justify-center border border-white rounded-3xl',
					'hover:scale-[105%] transition-all duration-500 xl:w-[800px] sm:w-[500px] w-[200px] overflow-hidden cursor-pointer relative'
				)}
			>
				<img src={image} className={clsx(classNameImage, 'w-full')} alt="" />
				<div className="absolute w-full h-full bg-[#00000066]"></div>
				<div className="flex flex-col p-4 gap-2 items-center justify-center absolute bottom-0 bg-[#000000bb] w-full">
					<div className="flex items-center justify-center text-xl text-white font-bold">
						{name}
					</div>
					<div className="flex items-center justify-center text-md text-white">
						{contractName}
					</div>
				</div>
			</div>
		</Link>
	);
};
