import { navLists } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className="w-full py-5 sm:px-10 px-5 ">
			<div className="flex justify-between items-center max-w-5xl w-full mx-auto">
				<Link href="/">
					<Image
						src="/assets/images/apple.svg"
						width={14}
						height={18}
						alt="Logo"
					/>
				</Link>
				<nav className="flex items-center">
					<ul className=" lg:flex items-center hidden">
						{navLists.map((link) => (
							<li key={link.id} className="mr-2">
								<Link
									href={link.href}
									className="inline-flex items-center py-2 px-4 capitalize text-slate-300 hover:text-white transition"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="flex items-center gap-7">
					<Image
						src="/assets/images/search.svg"
						width={18}
						height={18}
						alt="Search"
					/>
					<Image
						src="/assets/images/bag.svg"
						width={18}
						height={18}
						alt="Bag"
					/>
				</div>
			</div>
		</header>
	);
};
