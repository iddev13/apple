import Features from '@/components/features';
import { Hero } from '@/components/hero';
import { Highlights } from '@/components/highlights';
import HowItWorks from '@/components/how-it-works';
import Model from '@/components/model';

export default function Home() {
	return (
		<div>
			<Hero />
			<Highlights />
			<Model />
			<Features />
			<HowItWorks />
		</div>
	);
}
