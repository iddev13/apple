'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import { useMedia } from 'react-use';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export const Hero = () => {
	// const isMobile = useMedia('(max-width: 1024px)');
	const router = useRouter();
	const [videoSrc, setVideoSrc] = useState(
		window.innerWidth < 760
			? '/assets/videos/smallHero.mp4'
			: '/assets/videos/hero.mp4'
	);

	const handleVideoSrcSet = () => {
		if (window.innerWidth < 760) {
			setVideoSrc('/assets/videos/smallHero.mp4');
		} else {
			setVideoSrc('/assets/videos/hero.mp4');
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleVideoSrcSet);
		return () => {
			window.removeEventListener('resize', handleVideoSrcSet);
		};
	}, []);

	useGSAP(() => {
		gsap.to('#hero', { opacity: 1, delay: 2 });
		gsap.to('#cta', { opacity: 1, y: 0, delay: 2 });
	}, []);

	return (
		<section className="w-full h-[calc(100vh-60px)] bg-black relative">
			<div className="h-5/6 w-full flex flex-col items-center justify-center">
				<p
					id="hero"
					className="text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10"
				>
					iPhone 15 Pro
				</p>
				<div className="md:w-10/12 w-9/12 flex items-center justify-center">
					<video
						width="1320"
						height="540"
						autoPlay={true}
						playsInline={true}
						preload="none"
						muted
						key={videoSrc}
						className="pointer-events-none"
					>
						<source src={videoSrc} type="video/mp4" />
					</video>
				</div>
			</div>

			<div
				id="cta"
				className="flex flex-col items-center opacity-0 translate-y-20"
			>
				<Button
					className="mb-4"
					size="lg"
					onClick={() => router.push('#hightlits')}
				>
					Buy
				</Button>
				<p className="font-normal text-sm">From $199/mounth or $999</p>
			</div>
		</section>
	);
};
