import React from 'react';
import placeholderImg from '../assets/profile-img.png';

const Portfolio = () => {
	const projects = [
		{
			id: 1,
			projectName: 'project 1',
			thumbnailPic: placeholderImg,
			link: 'google.com',
			code: 'github.com',
		},
		{
			id: 2,
			projectName: 'project 2',
			thumbnailPic: placeholderImg,
			link: 'google.com',
			code: 'github.com',
		},
		{
			id: 3,
			projectName: 'project 3',
			thumbnailPic: placeholderImg,
			link: 'google.com',
			code: 'github.com',
		},
		{
			id: 4,
			projectName: 'project 4',
			thumbnailPic: placeholderImg,
			link: 'google.com',
			code: 'github.com',
		},
		{
			id: 5,
			projectName: 'project 5',
			thumbnailPic: placeholderImg,
			link: 'google.com',
			code: 'github.com',
		},
		{
			id: 6,
			projectName: 'project 6',
			thumbnailPic: placeholderImg,
			link: 'google.com',
			code: 'github.com',
		},
	];

	return (
		<div
			name='portfolio'
			className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
		>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-gray-500'>
						Portfolio
					</p>
				</div>

				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
					{projects.map(({ id, projectName, thumbnailPic, link, code }) => (
						<div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
							<img
								src={thumbnailPic}
								alt={projectName}
								className='rounded-md duration-200 hover:scale-105'
							/>
							<div className='flex items-center justify-center'>
								<button
									href={link}
									className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
									target='_blank'
								>
									Link
								</button>
								<button
									href={code}
									className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
									target='_blank'
								>
									Code
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
