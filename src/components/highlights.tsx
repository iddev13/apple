'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { VideoSlider } from './video-slider';

export const Highlights = () => {
	useGSAP(() => {
		gsap.to('#title', { opacity: 1, y: 0 });
		gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
	}, []);

	return (
		<section
			id="highlihts"
			className="w-full overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc-950"
		>
			<div className="mb-12 w-full md:flex items-end justify-between">
				<h1
					id="title"
					className="text-gray-500 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
				>
					Get the highliht.
				</h1>
				<div className="flex flex-wrap items-end gap-5">
					<p className="text-sky-500 link hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20">
						Watch the film
						<Image
							width={20}
							height={20}
							src="/assets/images/watch.svg"
							alt="watch"
							className="ml-2"
						/>
					</p>
					<p className="text-sky-500 link hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20">
						Watch the event
						<Image
							width={10}
							height={10}
							src="/assets/images/right.svg"
							alt="right"
							className="ml-2"
						/>
					</p>
				</div>
			</div>
				<VideoSlider />
		</section>
	);
};
