import * as React from 'react';

const Home = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-secondary to-overlay w-full py-10">
				<h1 className="text-center text-white text-4xl font-bold">
					<span className="text-primary">A</span>ndres{' '}
					<span className="text-primary">C</span>ontreras
				</h1>
			</div>
			<div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-secondary to-overlay w-full py-10">
				<h2 className="text-center text-white text-4xl font-bold">
					Something <span className="text-primary">A</span>bout Me
				</h2>
			</div>
			<div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-secondary to-overlay w-full py-10">
				<h2 className="text-center text-white text-4xl font-bold">
					Something <span className="text-primary">A</span>bout Me
				</h2>
			</div>
		</div>
	);
};
export default Home;
