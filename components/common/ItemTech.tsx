import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react';

export const ItemTech: React.FC<any> = ({
	className,
	classNameImage,
	name,
	img,
}) => {
	return (
		<div
			className={clsx(
				className,
				'md:w-36 h-auto rounded-xl flex items-center justify-center relative border border-primary overflow-hidden px-2 py-2'
			)}
		>
			<img
				src={img}
				className={clsx(classNameImage, 'md:h-6 max-w-10')}
				alt=""
			/>
			{/* <div className="absolute w-full h-full bg-[#00000066]"></div> */}
			<div className="flex flex-col gap-2 items-center justify-center relative bottom-0 bg-[#000000bb] pl-2 py-2">
				<div className="flex items-center justify-center text-md text-white font-bold">
					{name}
				</div>
			</div>
		</div>
	);
};
