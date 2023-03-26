// import React, { Fragment } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import clsx from 'clsx';
// import { XIcon } from '@heroicons/react/outline';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { Button } from 'components/common/button';
// import Styles from '../../../landing/styles.module.scss';
// import useMagicLink from 'hooks/useMagicLink';
// import { State } from 'redux/actions';
// import { useSelector } from 'react-redux';
// import { useConnectWalletModal } from 'hooks/useModalConnect';

// interface LayoutDashboardProps {
// 	title?: string;
// 	isLoading?: boolean;
// 	sidebarOpen?: boolean;
// 	setSidebarOpen?: any;
// 	initialFocus?: any;
// 	navItems: any[];
// }
// export const SidebarMobile: React.FC<LayoutDashboardProps & any> = ({
// 	// title = '',
// 	// isLoading = false,
// 	// children,

// 	navItems = [],
// }) => {
// 	const router = useRouter();

// 	return (
// 		<>
// 			{/* Sidebar mobile */}

// 			<Transition.Root show={sidebarOpen} as={Fragment}>
// 				<Dialog
// 					as="div"
// 					static
// 					className="fixed h-screen top-0 right-0 pt-24 flex z-40 md:hidden bg-overlay"
// 					open={sidebarOpen}
// 					onClose={setSidebarOpen}
// 					initialFocus={initialFocus}
// 				>
// 					<Transition.Child
// 						as={Fragment}
// 						enter="transition-opacity ease-linear duration-300"
// 						enterFrom="opacity-0"
// 						enterTo="opacity-100"
// 						leave="transition-opacity ease-linear duration-300"
// 						leaveFrom="opacity-100"
// 						leaveTo="opacity-0"
// 					>
// 						<Dialog.Overlay className="fixed inset-0 z-0 blur-xl bg-transparent-color-gray-200" />
// 					</Transition.Child>
// 					<Transition.Child
// 						as={Fragment}
// 						enter="transition ease-in-out duration-300 transform"
// 						enterFrom="-translate-x-[-300px]"
// 						enterTo="translate-x-0"
// 						leave="transition ease-in-out duration-300 transform"
// 						leaveFrom="translate-x-0"
// 						leaveTo="-translate-x-[-300px]"
// 					>
// 						<div className="bg-overlay relative flex-1 flex flex-col max-w-xs w-full w-64">
// 							<Transition.Child
// 								as={Fragment}
// 								enter="ease-in-out duration-300"
// 								enterFrom="opacity-0"
// 								enterTo="opacity-100"
// 								leave="ease-in-out duration-300"
// 								leaveFrom="opacity-100"
// 								leaveTo="opacity-0"
// 							>
// 								<div className="absolute top-0 left-[-50px] pt-2">
// 									<button
// 										className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
// 										onClick={() => setSidebarOpen(false)}
// 									>
// 										<span className="sr-only">Close sidebar</span>
// 										<XIcon
// 											className="w-full p-1 text-white bg-secondary rounded-full"
// 											aria-hidden="true"
// 										/>
// 									</button>
// 								</div>
// 							</Transition.Child>
// 							<div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
// 								<nav className="mt-5 flex-1 px-7">
// 									{navItems.map((item: any, index: number) => {
// 										return (
// 											<Fragment key={'nav-mobile-' + index}>
// 												<Link href={item.link} key={'nav-desktop-' + index}>
// 													<p
// 														className={clsx(
// 															'group flex items-center px-3 py-4 font-bold hover:opacity-90 text-md rounded-md  relative ',
// 															{
// 																'text-white': item.link !== router.asPath,
// 															},
// 															{ 'text-primary': item.link === router.asPath }
// 														)}
// 														onClick={() => setSidebarOpen(false)}
// 													>
// 														{item.name}
// 													</p>
// 												</Link>
// 												<div className="divider mx-3 mt-4"></div>
// 											</Fragment>
// 										);
// 									})}
// 									{address ? (
// 										<>
// 											<div>
// 												<Link href={'/eBar'}>
// 													<p
// 														className={clsx(
// 															'group flex items-center px-3 py-4 font-bold hover:opacity-90 text-md rounded-md  relative ',
// 															{
// 																'text-white': '/eBar' !== router.asPath,
// 															},
// 															{ 'text-primary': '/eBar' === router.asPath }
// 														)}
// 														onClick={() => setSidebarOpen(false)}
// 													>
// 														E-BAR
// 													</p>
// 												</Link>
// 											</div>
// 											<div className="divider mx-3 mt-4 mb-4"></div>
// 											<div>
// 												<Link href={'/yourOffers'}>
// 													<p
// 														className={clsx(
// 															'group flex items-center px-3 py-4 font-bold hover:opacity-90 text-md rounded-md  relative ',
// 															{
// 																'text-white': '/yourOffers' !== router.asPath,
// 															},
// 															{
// 																'text-primary': '/yourOffers' === router.asPath,
// 															}
// 														)}
// 														onClick={() => setSidebarOpen(false)}
// 													>
// 														YOUR OFFERS
// 													</p>
// 												</Link>
// 											</div>
// 											<div className="divider mx-3 mt-4 mb-4"></div>
// 											{typeOfWallet == 'magic' && (
// 												<>
// 													<Button
// 														className={clsx(
// 															'z-10 border borderMain px-2 py-2 text-white transition ease-in-out delay-150 hover:-translate-y-1   hover:shadow-button hover:scale-110 duration-300  ',
// 															Styles.button
// 														)}
// 														onClick={() => showWallet()}
// 													>
// 														Show Wallet
// 													</Button>
// 													<div className="divider mx-3 mt-4 mb-4"></div>
// 													<Button
// 														className={clsx(
// 															'z-10 border borderMain px-2 py-2 text-white transition ease-in-out delay-150 hover:-translate-y-1   hover:shadow-button hover:scale-110 duration-300  ',
// 															Styles.button
// 														)}
// 														onClick={() => disconnect(dispatch)}
// 													>
// 														Disconnect
// 													</Button>
// 												</>
// 											)}
// 										</>
// 									) : (
// 										<Button
// 											className={clsx(
// 												'z-10 border borderMain mt-4 px-2 py-2 text-white transition ease-in-out delay-150 hover:-translate-y-1   hover:shadow-button hover:scale-110 duration-300  ',
// 												Styles.button
// 											)}
// 											onClick={() => {
// 												setSidebarOpen(false);
// 												setTimeout(() => show(), 1000);
// 											}}
// 										>
// 											Connect Wallet
// 										</Button>
// 									)}
// 								</nav>
// 							</div>
// 						</div>
// 					</Transition.Child>
// 				</Dialog>
// 			</Transition.Root>
// 		</>
// 	);
// };
