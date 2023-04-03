import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react';

export const FrontProjectItem: React.FC<any> = ({
	className,
	name,
	link,
	image,
	description,
	hover,
}) => {
	return (
		<Link href={link}>
			<div
				className={clsx(
					className,
					'flex flex-col items-center justify-center border border-white rounded-3xl',
					{ ['hover:scale-[105%] xl:w-[800px] sm:w-[500px] w-full']: hover },
					{ ['w-full']: !hover },
					'transition-all duration-500  overflow-hidden cursor-pointer relative'
				)}
			>
				<img src={image} className="w-full" alt="" />
				<div className="absolute w-full h-full bg-[#00000066]"></div>
				<div className="flex flex-col md:p-4 p-2 md:gap-2 gap-1 items-center justify-center absolute bottom-0 bg-[#000000bb] w-full">
					<div className="flex items-center justify-center md:text-xl text-sm text-white font-bold">
						{name}
					</div>
					<div className="md:text-sm text-[10px] text-white w-full text-center">
						{description}
					</div>
				</div>
			</div>
		</Link>
	);
};

export const CertificateItem: React.FC<any> = ({
	className,
	name,
	link,
	image,
}) => {
	return (
		<div
			className={clsx(
				className,
				'flex flex-col items-center justify-center border border-white rounded-3xl',
				'hover:scale-[105%] xl:w-[800px] sm:w-[500px] w-full',
				'transition-all duration-500  overflow-hidden relative'
			)}
		>
			<img src={image} className="w-full" alt="" />
			<div className="absolute w-full h-full bg-[#00000066]"></div>
			<div className="flex flex-col p-4 gap-2 items-center justify-center absolute bottom-0 bg-[#000000bb] w-full">
				<div className="flex items-center justify-center md:text-left text-center md:text-xl text-md text-white font-bold">
					{name}
				</div>
				<a
					href={link}
					target="_blank"
					className={clsx(
						'text-center text-white md:text-xl text-sm font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54',
						'hover:text-white hover:bg-primary transition-all duration-500'
					)}
				>
					View Certificate
				</a>
			</div>
		</div>
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
					'hover:scale-[105%] transition-all duration-500 xl:w-[800px] sm:w-[500px] w-full overflow-hidden cursor-pointer relative'
				)}
			>
				<img src={image} className={clsx(classNameImage, 'w-full')} alt="" />
				<div className="absolute w-full h-full bg-[#00000066]"></div>
				<div className="flex flex-col md:p-4 p-2 md:gap-2 gap-1 items-center justify-center absolute bottom-0 bg-[#000000bb] w-full">
					<div className="flex items-center justify-center md:text-xl text-sm text-white font-bold">
						{name}
					</div>
					<div className="flex items-center justify-center md:text-sm text-[11px] text-white">
						{contractName}
					</div>
				</div>
			</div>
		</Link>
	);
};
