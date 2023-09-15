import { ChevronLeftIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import hackathons from 'hackathons.json';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import Typewriter from 'typewriter-effect';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom } from 'swiper';

const Contract = () => {
	const { query } = useRouter();
	const hackathon = hackathons.filter((hackathon, i) => {
		console.log(hackathon);
		return hackathon.link.includes(query.hackathon?.toString() || '');
	})[0];

	return (
		<div className="min-h-screen flex flex-col items-center py-28 bg-gray-900 gap-6 md:px-36 px-10 relative">
			<img
				src={hackathon.image}
				className="w-full h-full fixed top-0 left-0 opacity-[0.10]"
				alt=""
			/>
			<div className="absolute top-28 md:left-16 left-10 text-primary">
				<Link href={'/hackathons'}>
					<ChevronLeftIcon className="w-8 cursor-pointer" />
				</Link>
			</div>
			<h2 className="flex gap-1 text-center text-white md:text-4xl text-xl titleLogo text-primary font-[600] whitespace-nowrap relative">
				<span className="text-white">{'< '}</span>
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString(hackathon.name)
							.pauseFor(8000)
							.deleteAll()
							.start();
						setInterval(() => {
							typewriter
								.typeString(hackathon.name)
								.pauseFor(8000)
								.deleteAll()
								.start();
						}, 10000);
					}}
				/>
				<span className="text-white">{' />'}</span>
			</h2>

			<Swiper
				slidesPerView={2}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				zoom={true}
				initialSlide={0}
				modules={[Zoom]}
				className="mySwiper w-full"
				spaceBetween={10}
				breakpoints={{
					700: {
						slidesPerView: 2,
						centeredSlides: false,
					},
					100: {
						slidesPerView: 1,
						centeredSlides: true,
					},
				}}
			>
				{(hackathon as any)?.images?.map((item: any) => (
					<SwiperSlide className="w-full sm:min-w-[450px] min-w-[300px]">
						<div className="w-full flex items-center justify-center">
							<img className="cursor-pointer w-full" src={item}></img>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="flex sm:flex-row flex-col gap-6 items-centes justify-center w-full">
				<a
					href={(hackathon as any).liveDemo}
					target="_blank"
					className={clsx(
						'relative text-center text-white text-xl font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54 hover:text-white hover:bg-primary transition-all duration-500'
					)}
				>
					Live Demo
				</a>{' '}
				<a
					href={(hackathon as any).hackathonPage}
					target="_blank"
					className={clsx(
						'relative text-center text-white text-xl font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54 hover:text-white hover:bg-primary transition-all duration-500'
					)}
				>
					Hackathon Page
				</a>
			</div>

			<div className="flex flex-col gap-8 items-center justify-center w-full relative">
				{' '}
				{hackathon.codeDescription.paragraphs.map((paragraph, i) => {
					return (
						<p className="text-lg font-bold text-white text-justify w-full">
							{paragraph.text}
						</p>
					);
				})}
			</div>
		</div>
	);
};
export default Contract;
