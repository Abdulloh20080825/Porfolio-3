import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
	return (
		<div className='border-b border-neutral-900 pb-4'>
			<motion.h1
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -50 }}
				transition={{ duration: 1.5 }}
				className='text-center text-4xl my-20'
			>
				Experience
			</motion.h1>
			<div>
				{EXPERIENCES.map((item, index) => (
					<div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1.5 }}
							className='w-full lg:w-1/4'
						>
							<p className='mb-2 text-sm text-neutral-400'>{item.year}</p>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1.5 }}
							className='w-full max-w-xl lg:w-3/4'
						>
							<h6 className='mb-2 font-semibold'>
								{item.role} -{' '}
								<span className='text-sm text-purple-100'>{item.company}</span>
							</h6>
							<p className='mb-4 text-neutral-400'>{item.description}</p>
							{item.technologies.map((lang, idx) => (
								<span
									className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
									key={idx}
								>
									{lang}
								</span>
							))}
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
