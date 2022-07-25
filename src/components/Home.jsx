import React from 'react';
import profilePic from '../assets/profile-img.png';
import { RiArrowRightFill } from 'react-icons/ri';

const Home = () => {
	return (
		<div
			name='home'
			className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'
		>
			<div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
				<div className='flex flex-col justify-center h-full'>
					<h2 className='text-4xl sm:text-7xl font-bond text-white'>Lorem Ipsum</h2>
					<p className='text-gray-500 py-4 max-w-md'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
					<div>
						<button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
							Portfolio
							<span className='hover:rotate-90 duration-300'>
								<RiArrowRightFill className='ml-1' size={25}/>
							</span>
						</button>
					</div>
				</div>
				<img src={profilePic} alt='img'
				className='rounded-2xl mx-auto w-2/3 md:w-full' />
			</div>
		</div>
	);
};

export default Home;
