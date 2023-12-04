import { ArrowLeftIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import web3Projects from 'web3Projects.json';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import Typewriter from 'typewriter-effect';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Zoom } from 'swiper';

const Project = () => {
	const { query } = useRouter();
	const project: any = web3Projects.find((contract, i) =>
		contract.link.includes(query.project?.toString() || '')
	);

	return (
		<div className="min-h-screen flex flex-col items-center py-28 bg-gray-900 gap-6 md:px-36 px-10 relative">
			<div className="w-full h-full bg-white fixed top-0 left-0 opacity-[0.30]"></div>
			<img
				src={project?.image}
				className="w-full h-full fixed top-0 left-0 opacity-[0.25]"
				alt=""
			/>
			<div className="absolute top-28 md:left-16 left-10 text-[#000]">
				<Link href={'/projects'}>
					<ChevronLeftIcon className="w-8 cursor-pointer" />
				</Link>
			</div>
			<h2 className="flex gap-1 text-center text-white md:text-4xl text-xl titleLogo  font-[600] whitespace-nowrap relative">
				<span className="text-[#000] pr-2">{'< '}</span>

				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString(project?.name)
							.pauseFor(8000)
							.deleteAll()
							.start();
						setInterval(() => {
							typewriter
								.typeString(project?.name)
								.pauseFor(8000)
								.deleteAll()
								.start();
						}, 10000);
					}}
				/>
				<span className="text-[#000]">{' />'}</span>
			</h2>

			<Swiper
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				zoom={true}
				pagination={true}
				navigation={true}
				loop
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				initialSlide={0}
				modules={[Zoom, Navigation, Pagination, Autoplay]}
				className="mySwiper md:w-[75%] w-full rounded-xl"
				spaceBetween={10}
			>
				{(project as any)?.images?.map((item: any) => (
					<SwiperSlide className="w-full sm:min-w-[450px] min-w-[300px]">
						<div className="w-full flex items-center justify-center">
							<img
								className="cursor-pointer w-full rounded-xl"
								src={item}
							></img>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<a
				href={(project as any)?.liveDemo}
				target="_blank"
				className={clsx(
					'relative text-center text-white md:text-xl text-sm font-[450] px-4 py-2 rounded-xl border border-white cursor-pointer w-54',
					'hover:text-[#000] hover:bg-white transition-all duration-500'
				)}
			>
				Live Demo
			</a>
			<div className="flex flex-col gap-8 items-center justify-center md:w-[75%] w-full relative">
				{(project as any)?.codeDescription?.paragraphs?.map(
					(paragraph: any) => {
						return (
							<p className="text-lg text-white text-justify font-[500] w-full">
								{paragraph.text}
							</p>
						);
					}
				)}
			</div>
		</div>
	);
};
export default Project;
