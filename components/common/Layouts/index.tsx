import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import clsx from 'clsx';
// import { AreaChartOutlined, GoldenFilled } from '@ant-design/icons';
import { MenuIcon } from '@heroicons/react/outline';
import { DropdownMenu } from '../dropdownMenu';
import Styles from '../../landing/styles.module.scss';
import { Button } from '../button';
import { Dropdown } from '../dropdown/dropdown';

const navItems = [
	{ name: 'Home', link: '/', icon: <MenuIcon /> },
	{ name: 'Projects', link: '/projects', icon: <MenuIcon /> },
	{ name: 'Hackathons', link: '/hackathons', icon: <MenuIcon /> },
	{ name: 'Certificates', link: '/certificates', icon: <MenuIcon /> },
	// { name: 'E-BAR', link: '/eBar', icon: <MenuIcon /> },
];

export default function AppLayout() {
	const router = useRouter();

	return (
		<>
			<nav
				className={clsx(
					'fixed top-0 z-50',
					'bg-gray-900',
					'w-[100%] xl:px-56 lg:px-36 px-8 py-4 flex flex-row items-center justify-between shadow-md'
				)}
			>
				<div className="flex items-center">
					<Logo />
				</div>
				<div className="md:flex hidden items-center">
					{navItems.map((item, index) => {
						return (
							<div key={item.name + index}>
								<NavbarItem
									key={index}
									name={item.name}
									icon={item.icon}
									link={item.link}
									route={router.asPath}
								/>
							</div>
						);
					})}
				</div>
			</nav>
		</>
	);
}

export const Message: React.FunctionComponent<{
	content: string;
	open: boolean;
}> = (props) => {
	const { content, open } = props;

	return (
		<div
			className={clsx(
				`absolute bottom-3.5 left-3.5 bg-purple-300 px-10 py-4 rounded-md`,
				'ease-out duration-300',
				open ? 'scale-100' : 'scale-0'
			)}
		>
			{content}
		</div>
	);
};

export const Logo = () => (
	<Link href="/">
		<div className="mr-4 md:py-0 h-10 cursor-pointer">
			<img src="/logos/ac.png" className="h-10" alt="" />
		</div>
	</Link>
);

export const NavbarItem: React.FC<any> = ({ name, link, route }) => {
	return (
		<Link href={link}>
			<div className={clsx('sm:px-4 px-2 py-2 relative cursor-pointer')}>
				<div
					className={clsx(
						{ 'text-white': link !== route },
						{ 'text-primary': link === route },
						'gap-2 flex items-center'
					)}
				>
					{/* <div className="flex items-center w-4">{icon}</div> */}
					<h3 className={clsx('text-sm font-bold text-center')}>{name}</h3>
				</div>
			</div>
		</Link>
	);
};
