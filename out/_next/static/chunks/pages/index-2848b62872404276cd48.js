(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[405],
	{
		5583: function (e, t, s) {
			'use strict';
			s.d(t, {
				Ns: function () {
					return l;
				},
				Wq: function () {
					return o;
				},
				ED: function () {
					return c;
				},
			});
			var i = s(2809),
				r = s(6010),
				a = s(1664),
				n = (s(7294), s(5893)),
				l = function (e) {
					var t = e.className,
						s = e.name,
						l = e.link,
						o = e.image,
						c = e.description,
						d = e.hover;
					return (0, n.jsx)(a.default, {
						href: l,
						children: (0, n.jsxs)('div', {
							className: (0, r.Z)(
								t,
								'flex flex-col items-center justify-center border border-white rounded-3xl',
								(0, i.Z)(
									{},
									'hover:scale-[105%] xl:w-[800px] sm:w-[500px] w-full',
									d
								),
								(0, i.Z)({}, 'w-full', !d),
								'transition-all duration-500  overflow-hidden cursor-pointer relative'
							),
							children: [
								(0, n.jsx)('img', { src: o, className: 'w-full', alt: '' }),
								(0, n.jsx)('div', {
									className: 'absolute w-full h-full bg-[#00000066]',
								}),
								(0, n.jsxs)('div', {
									className:
										'flex flex-col md:p-4 p-2 md:gap-2 gap-1 items-center justify-center absolute bottom-0 bg-[#000000bb] w-full',
									children: [
										(0, n.jsx)('div', {
											className:
												'flex items-center justify-center md:text-xl text-sm text-white font-bold',
											children: s,
										}),
										(0, n.jsx)('div', {
											className:
												'md:text-sm text-[10px] text-white w-full text-center',
											children: c,
										}),
									],
								}),
							],
						}),
					});
				},
				o = function (e) {
					var t = e.className,
						s = e.name,
						i = e.link,
						a = e.image;
					return (0, n.jsxs)('div', {
						className: (0, r.Z)(
							t,
							'flex flex-col items-center justify-center border border-white rounded-3xl',
							'hover:scale-[105%] xl:w-[800px] sm:w-[500px] w-full',
							'transition-all duration-500  overflow-hidden relative'
						),
						children: [
							(0, n.jsx)('img', { src: a, className: 'w-full', alt: '' }),
							(0, n.jsx)('div', {
								className: 'absolute w-full h-full bg-[#00000066]',
							}),
							(0, n.jsxs)('div', {
								className:
									'flex flex-col p-4 gap-2 items-center justify-center absolute bottom-0 bg-[#000000bb] w-full',
								children: [
									(0, n.jsx)('div', {
										className:
											'flex items-center justify-center md:text-left text-center md:text-xl text-md text-white font-bold',
										children: s,
									}),
									(0, n.jsx)('a', {
										href: i,
										target: '_blank',
										className: (0, r.Z)(
											'text-center text-white md:text-xl text-sm font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54',
											'hover:text-white hover:bg-primary transition-all duration-500'
										),
										children: 'View Certificate',
									}),
								],
							}),
						],
					});
				},
				c = function (e) {
					var t = e.className,
						s = e.classNameImage,
						i = e.name,
						l = e.contractName,
						o = e.link,
						c = e.image;
					e.description;
					return (0, n.jsx)(a.default, {
						href: o,
						children: (0, n.jsxs)('div', {
							className: (0, r.Z)(
								t,
								'flex flex-col items-center justify-center border border-white rounded-3xl',
								'hover:scale-[105%] transition-all duration-500 xl:w-[800px] sm:w-[500px] w-full overflow-hidden cursor-pointer relative'
							),
							children: [
								(0, n.jsx)('img', {
									src: c,
									className: (0, r.Z)(s, 'w-full'),
									alt: '',
								}),
								(0, n.jsx)('div', {
									className: 'absolute w-full h-full bg-[#00000066]',
								}),
								(0, n.jsxs)('div', {
									className:
										'flex flex-col md:p-4 p-2 md:gap-2 gap-1 items-center justify-center absolute bottom-0 bg-[#000000bb] w-full',
									children: [
										(0, n.jsx)('div', {
											className:
												'flex items-center justify-center md:text-xl text-sm text-white font-bold',
											children: i,
										}),
										(0, n.jsx)('div', {
											className:
												'flex items-center justify-center md:text-sm text-[11px] text-white',
											children: l,
										}),
									],
								}),
							],
						}),
					});
				};
		},
		7671: function (e, t, s) {
			'use strict';
			s.r(t),
				s.d(t, {
					customAnimation: function () {
						return u;
					},
					default: function () {
						return w;
					},
					gapAnimation: function () {
						return g;
					},
				});
			var i,
				r,
				a = s(2209),
				n = (s(7294), s(3657)),
				l = s(917),
				o = s(5459),
				c = s.n(o),
				d = s(6010),
				m = s(5893),
				x = function (e) {
					var t = e.className,
						s = e.classNameImage,
						i = e.name,
						r = e.img;
					return (0, m.jsxs)('div', {
						className: (0, d.Z)(
							t,
							'md:w-48 w-36 h-auto rounded-xl flex items-center justify-center relative border border-primary overflow-hidden px-2 py-2'
						),
						children: [
							(0, m.jsx)('img', {
								src: r,
								className: (0, d.Z)(s, 'md:h-8 h-6 max-w-10'),
								alt: '',
							}),
							(0, m.jsx)('div', {
								className:
									'flex flex-col gap-2 items-center justify-center relative bottom-0 pl-2 py-2',
								children: (0, m.jsx)('div', {
									className:
										'flex items-center justify-center md:text-lg text-md text-white font-bold',
									children: i,
								}),
							}),
						],
					});
				},
				h = s(91),
				p = s(2051),
				f = s(5583),
				u = (0, l.F4)(
					i ||
						(i = (0, a.Z)([
							'\n  from {\n\t\n\topacity:1;\n    width: 0%;\n  }\n\n  to {\n\t\topacity:1;\n    width: 100%;\n  }\n',
						]))
				),
				g = (0, l.F4)(
					r ||
						(r = (0, a.Z)([
							'\n  from {\n\t\n    gap: 0%;\n  }\n\n  to {\n    gap: 8px;\n  }\n',
						]))
				),
				w = function () {
					return (0, m.jsxs)('div', {
						className:
							'min-h-screen flex flex-col items-center justify-center w-full bg-overlay relative overflow-hidden',
						children: [
							(0, m.jsxs)('div', {
								className:
									'min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-overlay pt-48 md:px-36 px-10 w-full relative',
								children: [
									(0, m.jsx)('img', {
										className:
											'absolute w-full h-full top-0 left-0 opacity-[0.70]',
										src: '/img/bgPortfolio.png',
										alt: '',
									}),
									(0, m.jsxs)('div', {
										className:
											'flex flex-col gap-2 items-center justify-center relative p-4',
										children: [
											(0, m.jsxs)('div', {
												className:
													'flex flex-wrap items-center justify-center text-white 2xl:text-[120px] md:text-[80px] sm:text-[60px] text-[50px] font-bold  ',
												children: [
													(0, m.jsxs)('div', {
														className:
															'flex flex-row items-center justify-end titleLogo',
														children: [
															'<',
															(0, m.jsx)('span', {
																className: 'text-primary titleLogo',
																children: ' A',
															}),
															' ',
															(0, m.jsx)(n.Ue, {
																triggerOnce: !0,
																keyframes: u,
																duration: 4e3,
																className: 'overflow-hidden',
																children: (0, m.jsx)('h2', {
																	className: 'md:pr-6 pr-2 titleLogo',
																	children: 'ndres ',
																}),
															}),
														],
													}),
													(0, m.jsxs)('div', {
														className:
															'flex flex-row items-center justify-start titleLogo',
														children: [
															(0, m.jsx)('span', {
																className: 'text-primary titleLogo',
																children: 'C',
															}),
															(0, m.jsx)(n.Ue, {
																triggerOnce: !0,
																keyframes: u,
																duration: 4e3,
																className: 'overflow-hidden titleLogo',
																children: (0, m.jsx)('h2', {
																	className: 'titleLogo',
																	children: 'ontreras',
																}),
															}),
															'/>',
														],
													}),
												],
											}),
											(0, m.jsxs)('p', {
												className:
													'flex gap-2 items-center justify-center text-white sm:text-2xl text-lg w-full subTitleMain',
												children: [
													(0, m.jsx)(n.Ue, {
														triggerOnce: !0,
														keyframes: u,
														duration: 8e3,
														className: 'overflow-hidden ',
														children: (0, m.jsx)('div', {
															className:
																'flex flex-row w-full justify-end whitespace-nowrap subTitleMain',
															children: 'Smart Contracts',
														}),
													}),
													'/',
													(0, m.jsx)(n.Ue, {
														triggerOnce: !0,
														keyframes: u,
														duration: 8e3,
														className: 'overflow-hidden',
														children: (0, m.jsx)('div', {
															className:
																'flex flex-row w-full whitespace-nowrap justify-start subTitleMain',
															children: 'DApps Developer',
														}),
													}),
												],
											}),
										],
									}),
									(0, m.jsx)('a', {
										href: '#about',
										children: (0, m.jsx)('svg', {
											xmlns: 'http://www.w3.org/2000/svg',
											fill: 'none',
											viewBox: '0 0 24 24',
											'stroke-width': '1.5',
											stroke: 'currentColor',
											className: (0, d.Z)(
												'w-7 h-11 absolute bottom-10 left-0 right-0 mx-auto text-white border border-white rounded-full px-1 cursor-pointer',
												'hover:bg-white hover:text-primary transition-all duration-500'
											),
											children: (0, m.jsx)('path', {
												'stroke-linecap': 'round',
												'stroke-linejoin': 'round',
												d: 'M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5',
											}),
										}),
									}),
								],
							}),
							(0, m.jsxs)('div', {
								className:
									'flex md:flex-row flex-col justify-center w-full py-24 md:px-36 px-10 gap-16 bg-overlay',
								id: 'about',
								children: [
									(0, m.jsxs)('div', {
										className:
											'flex flex-col items-center gap-6 md:w-1/2 w-full',
										children: [
											(0, m.jsxs)('h2', {
												className:
													'flex gap-1 text-center md:text-4xl text-2xl titleLogo text-primary font-[600] whitespace-nowrap',
												children: [
													(0, m.jsx)('span', {
														className: 'text-white',
														children: '< ',
													}),
													(0, m.jsx)(c(), {
														onInit: function (e) {
															e
																.typeString('About Me')
																.pauseFor(3e3)
																.deleteChars(2)
																.typeString('Andres')
																.pauseFor(3e3)
																.deleteAll()
																.start(),
																setInterval(function () {
																	e.typeString('About Me')
																		.pauseFor(3e3)
																		.deleteChars(2)
																		.typeString('Andres')
																		.pauseFor(3e3)
																		.deleteAll()
																		.start();
																}, 1e4);
														},
													}),
													(0, m.jsx)('span', {
														className: 'text-white',
														children: ' />',
													}),
												],
											}),
											(0, m.jsxs)('div', {
												className: 'flex flex-col gap-4',
												children: [
													(0, m.jsx)('p', {
														className:
															'text-justify md:text-lg text-md font-bold text-white',
														children:
															'Greetings! I am a Blockchain Solidity / Front End Web Developer with expertise in Hardhat, Solidity, TypeScript, React, SASS, and Tailwind. My passion lies in the blockchain realm, where I am constantly striving to become a highly-skilled Blockchain developer and a future Smart Contract Auditor. My experience encompasses ERC20, ERC721, ERC1155, marketplaces, DeFi, various types of smart contracts, unit testing, and deployments on testnets (Goerli, Ropsten, Mumbai) as well as mainnets (Ethereum and Polygon).',
													}),
													(0, m.jsx)('p', {
														className:
															'text-justify md:text-lg text-md font-bold text-white',
														children:
															'My mission is to make a significant impact in the blockchain industry by delving deeper into DeFi, exploring cutting-edge technologies such as zkProofs and DIDs, and optimizing the performance of my smart contracts. My ultimate goal is to become a Smart Contract Auditor while continuing to excel as an experienced Smart Contract Developer.',
													}),
												],
											}),
										],
									}),
									(0, m.jsx)('div', {
										className:
											'flex flex-col items-center justify-center md:w-1/2 w-full',
										children: (0, m.jsx)('img', {
											src: '/logos/ac.png',
											className: 'md:w-1/2',
											alt: '',
										}),
									}),
								],
							}),
							(0, m.jsxs)('div', {
								className:
									'flex flex-col justify-center items-center w-full py-48 md:px-36 px-10 gap-16 bg-overlay2 relative',
								children: [
									(0, m.jsx)('img', {
										src: '/img/downredline2.png',
										className:
											'md:w-[40%] w-[80%] rotate-180 absolute top-0 left-[-20%] opacity-[0.70]',
										alt: '',
									}),
									(0, m.jsx)('img', {
										src: '/img/downredline2.png',
										className:
											'md:w-[40%] w-[80%] absolute bottom-0 right-[-20%] opacity-[0.70]',
										alt: '',
									}),
									(0, m.jsxs)('h2', {
										className:
											'flex gap-1 text-center md:text-4xl text-2xl titleLogo text-primary font-[600] whitespace-nowrap',
										children: [
											(0, m.jsx)('span', {
												className: 'text-white',
												children: '< ',
											}),
											(0, m.jsx)(c(), {
												onInit: function (e) {
													e
														.typeString('Tooling')
														.pauseFor(8e3)
														.deleteAll()
														.start(),
														setInterval(function () {
															e.typeString('Tooling')
																.pauseFor(8e3)
																.deleteAll()
																.start();
														}, 1e4);
												},
											}),
											(0, m.jsx)('span', {
												className: 'text-white',
												children: ' />',
											}),
										],
									}),
									(0, m.jsx)('div', {
										className:
											'flex flex-wrap items-center justify-center md:gap-x-8 gap-x-4 gap-y-6 p-4 md:w-2/3 w-full rounded-xl',
										children: [
											{ name: 'Next.js', img: '/icons/next-js.svg' },
											{ name: 'Typescript', img: '/icons/typescript.png' },
											{ name: 'Tailwind', img: '/icons/Tailwind.png' },
											{ name: 'Sass', img: '/icons/sass.png' },
											{ name: 'Solidity', img: '/icons/Solidity.png' },
											{ name: 'Hardhat', img: '/icons/hardhat.png' },
											{ name: 'Ethereum', img: '/icons/eth.png' },
											{ name: 'Polygon', img: '/icons/matic.png' },
										].map(function (e, t) {
											var s = e.name,
												i = e.img;
											return (0, m.jsx)(x, { name: s, img: i });
										}),
									}),
								],
							}),
							' ',
							(0, m.jsxs)('div', {
								className:
									'flex flex-col  justify-center items-center w-full pt-24 md:px-36 sm:px-10 px-2 gap-16 bg-overlay',
								children: [
									(0, m.jsxs)('h2', {
										className:
											'flex gap-1 text-center  md:text-4xl text-2xl titleLogo text-primary font-[600] whitespace-nowrap',
										children: [
											(0, m.jsx)('span', {
												className: 'text-white',
												children: '< ',
											}),
											(0, m.jsx)(c(), {
												onInit: function (e) {
													e
														.typeString('Projects')
														.pauseFor(8e3)
														.deleteAll()
														.start(),
														setInterval(function () {
															e.typeString('Projects')
																.pauseFor(8e3)
																.deleteAll()
																.start();
														}, 1e4);
												},
											}),
											(0, m.jsx)('span', {
												className: 'text-white',
												children: ' />',
											}),
										],
									}),
									(0, m.jsx)('div', {
										className: 'sm:w-2/3 w-full',
										children: (0, m.jsx)(h.tq, {
											slidesPerView: 1,
											autoplay: { delay: 5e3, disableOnInteraction: !1 },
											loop: !0,
											spaceBetween: 10,
											modules: [p.LG, p.pt],
											children: [
												{
													name: 'Enders Gate Marketplace',
													link: 'projects/front/enders_gate_marketplace',
													image: '/img/eg_marketplace.png',
													description:
														'NFT marketplace where you can sell or buy any NFT related to Enders Gate',
												},
												{
													name: 'Enders Gate Website',
													link: 'projects/front/enders_gate_website',
													image: '/img/eg_website.png',
													description:
														'Website where you can find EG roadmap, all the news about Enders Gate and all the functionalities related to their NFTs',
												},
												{
													name: 'ShareEth',
													link: 'projects/front/share_eth',
													image: '/img/share_eth.png',
													description:
														'Social media app to allow content creators to monetize over their work using streams of income. (Hackathon Project made in ETHOnline 2022)',
												},
												{
													name: 'NFT Bolster',
													link: 'projects/front/nft_bolster',
													image: '/img/bolster.png',
													description:
														'NFT Bolster is a platform where NFTs are backed by real assets in order to have a floor price in the market, this platform allo users to purchase NFTs backed by certificated assets in the market',
												},
												{
													name: 'C3 Blockchain',
													link: 'projects/front/c3',
													image: '/img/c3.png',
													description:
														'C3 blockchain consists in a L2 blockchain base in the OP Stack with Goerli as L1, where we modified the core of the EVM where gas fees implementation is located. Only users with a WorldID (as a proof of personhood) can get fees from their smart contracts. All of this allows smart contracts builders to obtain revenue from the use of their smart contracts. This solves the issue of public goods or projects such as Safe not having a solid revenue source.',
												},
												{
													name: 'Shhh Spirits',
													link: 'projects/front/shhh_spirits',
													image: '/img/shhh_spirits.png',
													description:
														'Shhh Spirits is a platform where users can look at their NFTs related to Shhh and buy Shhh Spirits products by using a Shopify Store by and easy and secure purchase process.',
												},
												{
													name: 'Shhh Spirits Shopify',
													link: 'projects/front/shhh_spirits_shopify',
													liveDemo: 'https://shhhspirits.myshopify.com/',
													image: '/img/shhh_spirits_shopify.png',
													description:
														'ShhhSpirits is a platform that not only transports you to the world of ultra-premium Mezcal but also provides a unique marketplace where you can purchase bottles intimately connected to ShhhSpirits. Lovingly crafted in Oaxaca, Mexico, our extraordinary and delectable liquid holds a secret SOUL infused within each bottle, which can only be revealed to its rightful owner. A spirit that embodies another spirit, acting as a guardian and reflecting your uniqueness.',
												},
											].map(function (e) {
												var t = e.name,
													s = e.link,
													i = e.image,
													r = e.description;
												return (0,
												m.jsx)(h.o5, { children: (0, m.jsx)('div', { className: 'px-1', children: (0, m.jsx)(f.Ns, { name: t, link: s, image: i, description: r }) }) });
											}),
										}),
									}),
								],
							}),
						],
					});
				};
		},
		5301: function (e, t, s) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/',
				function () {
					return s(7671);
				},
			]);
		},
	},
	function (e) {
		e.O(0, [459, 91, 593, 774, 888, 179], function () {
			return (t = 5301), e((e.s = t));
			var t;
		});
		var t = e.O();
		_N_E = t;
	},
]);
