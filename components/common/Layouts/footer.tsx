import React from 'react';
import Typewriter from 'typewriter-effect';

const Footer: React.FC = () => {
	return (
		<footer className="bg-overlay text-white py-6 w-full">
			<div className="flex md:flex-row flex-col items-center justify-between gap-4 sm:px-16 px-8 w-full">
				<h2 className="text-center font-bold !text-xl title !m-0">
					{'< '}Connect with <span className="text-primary"> me</span>
					{' />'}
				</h2>
				<div className="space-x-4">
					<a
						href="https://www.twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-2xl hover:text-primary transition-all duration-500"
					>
						<i className="fab fa-twitter"></i>
					</a>
					<a
						href="https://www.linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-2xl hover:text-primary transition-all duration-500"
					>
						<i className="fab fa-linkedin-in"></i>
					</a>

					<a
						href="https://www.instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-2xl hover:text-primary transition-all duration-500"
					>
						<i className="fab fa-github"></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
