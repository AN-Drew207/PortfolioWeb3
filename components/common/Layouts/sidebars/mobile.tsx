import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'components/common/button';
import Styles from '../../../landing/styles.module.scss';
import { useSelector } from 'react-redux';

interface LayoutDashboardProps {
	title?: string;
	isLoading?: boolean;
	sidebarOpen?: boolean;
	setSidebarOpen?: any;
	initialFocus?: any;
	navItems: any[];
}
export const SidebarMobile: React.FC<LayoutDashboardProps & any> = ({
	// title = '',
	// isLoading = false,
	// children,
	sidebarOpen = false,
	setSidebarOpen = {},
	initialFocus = null,
	navItems = [],
}) => {
	const router = useRouter();

	return (
		<>
			{/* Sidebar mobile */}

			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog
					as="div"
					static
					className="fixed h-screen top-0 right-0 pt-14 flex z-40 md:hidden bg-overlay"
					open={sidebarOpen}
					onClose={setSidebarOpen}
					initialFocus={initialFocus}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 z-0 blur-xl bg-transparent-color-gray-200" />
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-[-300px]"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-[-300px]"
					>
						<div className="bg-overlay relative flex-1 flex flex-col max-w-xs w-full w-64">
							<Transition.Child
								as={Fragment}
								enter="ease-in-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in-out duration-300"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="absolute top-0 left-[-50px] pt-2">
									<button
										className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
										onClick={() => setSidebarOpen(false)}
									>
										<span className="sr-only">Close sidebar</span>
										<XIcon
											className="w-full p-1 text-white bg-secondary rounded-full"
											aria-hidden="true"
										/>
									</button>
								</div>
							</Transition.Child>
							<div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
								<nav className="mt-5 flex-1 px-7">
									{navItems.map((item: any, index: number) => {
										return item.link ? (
											<Fragment key={'nav-mobile-' + index}>
												<Link href={item.link} key={'nav-desktop-' + index}>
													<p
														className={clsx(
															'group flex items-center px-3 py-4 font-bold hover:opacity-90 text-md rounded-md  relative ',
															{
																'text-white': item.link !== router.asPath,
															},
															{ 'text-primary': item.link === router.asPath }
														)}
														onClick={() => setSidebarOpen(false)}
													>
														{item.name}
													</p>
												</Link>
												<div className="divider mx-3 mt-4"></div>
											</Fragment>
										) : (
											<Fragment key={'nav-mobile-' + index}>
												<a
													href={item.externalLink}
													key={'nav-desktop-' + index}
												>
													<p
														className={clsx(
															'group flex items-center px-3 py-4 font-bold hover:opacity-90 text-md rounded-md  relative ',
															{
																'text-white': item.link !== router.asPath,
															},
															{ 'text-primary': item.link === router.asPath }
														)}
														onClick={() => setSidebarOpen(false)}
													>
														{item.name}
													</p>
												</a>
												<div className="divider mx-3 mt-4"></div>
											</Fragment>
										);
									})}
								</nav>
							</div>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition.Root>
		</>
	);
};
