(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[327],
	{
		5583: function (e, t, r) {
			'use strict';
			r.d(t, {
				Ns: function () {
					return o;
				},
				Wq: function () {
					return l;
				},
				ED: function () {
					return c;
				},
			});
			var a = r(2809),
				s = r(6010),
				i = r(1664),
				n = (r(7294), r(5893)),
				o = function (e) {
					var t = e.className,
						r = e.name,
						o = e.link,
						l = e.image,
						c = e.description,
						m = e.hover;
					return (0, n.jsx)(i.default, {
						href: o,
						children: (0, n.jsxs)('div', {
							className: (0, s.Z)(
								t,
								'flex flex-col items-center justify-center border border-white rounded-3xl',
								(0, a.Z)(
									{},
									'hover:scale-[105%] xl:w-[800px] sm:w-[500px] w-full',
									m
								),
								(0, a.Z)({}, 'w-full', !m),
								'transition-all duration-500  overflow-hidden cursor-pointer relative'
							),
							children: [
								(0, n.jsx)('img', { src: l, className: 'w-full', alt: '' }),
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
											children: r,
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
				l = function (e) {
					var t = e.className,
						r = e.name,
						a = e.link,
						i = e.image;
					return (0, n.jsxs)('div', {
						className: (0, s.Z)(
							t,
							'flex flex-col items-center justify-center border border-white rounded-3xl',
							'hover:scale-[105%] xl:w-[800px] sm:w-[500px] w-full',
							'transition-all duration-500  overflow-hidden relative'
						),
						children: [
							(0, n.jsx)('img', { src: i, className: 'w-full', alt: '' }),
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
										children: r,
									}),
									(0, n.jsx)('a', {
										href: a,
										target: '_blank',
										className: (0, s.Z)(
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
						r = e.classNameImage,
						a = e.name,
						o = e.contractName,
						l = e.link,
						c = e.image;
					e.description;
					return (0, n.jsx)(i.default, {
						href: l,
						children: (0, n.jsxs)('div', {
							className: (0, s.Z)(
								t,
								'flex flex-col items-center justify-center border border-white rounded-3xl',
								'hover:scale-[105%] transition-all duration-500 xl:w-[800px] sm:w-[500px] w-full overflow-hidden cursor-pointer relative'
							),
							children: [
								(0, n.jsx)('img', {
									src: c,
									className: (0, s.Z)(r, 'w-full'),
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
											children: a,
										}),
										(0, n.jsx)('div', {
											className:
												'flex items-center justify-center md:text-sm text-[11px] text-white',
											children: o,
										}),
									],
								}),
							],
						}),
					});
				};
		},
		7583: function (e, t, r) {
			'use strict';
			r.r(t);
			var a = r(2809),
				s = r(6311),
				i = r(6010),
				n = r(5583),
				o = r(7294),
				l = r(5459),
				c = r.n(l),
				m = r(5893);
			t.default = function () {
				var e = o.useState('front'),
					t = (0, s.Z)(e, 2),
					r = t[0],
					l = t[1];
				return (0, m.jsxs)('div', {
					className:
						'min-h-screen flex flex-col items-center py-28 bg-gray-900 gap-6 relative',
					children: [
						(0, m.jsx)('img', {
							src: 'img/bgPortfolio.png',
							className: 'fixed top-0 left-0 h-full w-[125vw] opacity-[0.25]',
							alt: '',
						}),
						(0, m.jsxs)('h2', {
							className:
								'flex gap-1 text-center md:text-4xl text-xl titleLogo text-primary font-[600] whitespace-nowrap relative',
							children: [
								(0, m.jsx)('span', { className: 'text-white', children: '< ' }),
								(0, m.jsx)(c(), {
									onInit: function (e) {
										e.typeString('Projects').pauseFor(8e3).deleteAll().start(),
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
						(0, m.jsxs)('div', {
							className:
								'flex sm:flex-row flex-col items-center justify-center w-full gap-x-12 gap-y-4 relative',
							children: [
								(0, m.jsx)('div', {
									className: (0, i.Z)(
										'text-center text-white md:text-xl text-sm font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54',
										(0, a.Z)({}, '!text-white !bg-primary', 'front' == r)
									),
									onClick: function () {
										return l('front');
									},
									children: 'FrontEnd Projects',
								}),
								(0, m.jsx)('div', {
									className: (0, i.Z)(
										'text-center text-white md:text-xl text-sm font-bold px-4 py-2 rounded-xl border border-primary cursor-pointer w-54',
										(0, a.Z)({}, '!text-white !bg-primary', 'contracts' == r)
									),
									onClick: function () {
										return l('contracts');
									},
									children: 'Smart Contracts',
								}),
							],
						}),
						'front' == r
							? (0, m.jsx)('div', {
									className:
										'flex flex-wrap items-center justify-center md:gap-x-12 gap-x-4 md:gap-y-8 gap-y-4 px-4 w-full',
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
									].map(function (e, t) {
										var r = e.name,
											a = e.link,
											s = e.image,
											i = e.description;
										return (0,
										m.jsx)(n.Ns, { name: r, link: a, image: s, description: i, hover: !0 });
									}),
							  })
							: (0, m.jsx)('div', {
									className:
										'flex flex-wrap items-center justify-center md:gap-x-12 gap-x-4 md:gap-y-8 gap-y-4 px-4 w-full',
									children: [
										{
											name: 'Enders Gate Marketplace',
											contractName: 'ClockSaleMultiTokens.sol',
											link: 'projects/contract/eg_marketplace',
											image: '/img/eg_marketplace.png',
										},
										{
											name: 'Enders Gate Packs Shop',
											contractName: 'ClockSaleOwnable.sol',
											link: 'projects/contract/eg_shop',
											image: '/img/shop.png',
										},
										{
											name: 'DAO Factoring Smart Contracts',
											image: '/img/daofactoring.png',
											link: 'projects/contract/dao_factoring',
											contractName: 'Factoring.sol',
										},
										{
											name: 'Mezcal Bottle Collection',
											contractName: 'MezcalBottleCollection.sol',
											link: 'projects/contract/bottle_collection',
											image: '/img/shhh_spirits.png',
										},
										{
											name: 'CoCo Bottle Collection',
											contractName: 'CoCoBottleCollection.sol',
											link: 'projects/contract/bottle_collection',
											image: '/img/coco.png',
										},
										{
											name: 'CoCo Bottle Exchange',
											contractName: 'BottleExchange.sol',
											link: 'projects/contract/bottle_collection',
											image: '/img/coco.png',
										},
										{
											name: 'Enders Pass Pack Collection',
											contractName: 'ERC721SeaDrop.sol',
											link: 'projects/contract/eg_pass_packs',
											image: '/img/CommonPass.png',
										},
									].map(function (e, t) {
										var r = e.name,
											a = e.contractName,
											s = e.link,
											i = e.image;
										return (0,
										m.jsx)(n.ED, { name: r, link: s, image: i, contractName: a });
									}),
							  }),
					],
				});
			};
		},
		953: function (e, t, r) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				'/projects',
				function () {
					return r(7583);
				},
			]);
		},
	},
	function (e) {
		e.O(0, [459, 774, 888, 179], function () {
			return (t = 953), e((e.s = t));
			var t;
		});
		var t = e.O();
		_N_E = t;
	},
]);
