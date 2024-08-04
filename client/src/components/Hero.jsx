import { HERO_CONTENT } from '../constants';
import profile from '../assets/me-3.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className='border-b border-neutral-900 pb-4 lg:pb-16 lg:mb-35'>
			<div className='flex flex-col lg:flex-row'>
				<div className='w-full lg:w-1/2'>
					<motion.div
						whileInView
						className='flex flex-col items-center lg:items-start'
					>
						<motion.h1
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5 }}
							className='text-4xl sm:text-6xl pb-8 sm:pb-16 font-thin tracking-tight lg:mt-16 lg:text-8xl'
						>
							Abdulloh Qurbonov
						</motion.h1>
						<motion.span
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1, delay: 0.5 }}
							className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-4xl tracking-tight text-transparent'
						>
							Full Stack Developer
						</motion.span>
						<motion.p
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 2, delay: 1 }}
							className='my-2 max-w-xl py-4 sm:py-6 font-light tracking-tight text-center lg:text-left'
						>
							{HERO_CONTENT}
						</motion.p>
					</motion.div>
				</div>
				<div className='w-full lg:w-1/2 lg:p-8'>
					<div className='flex justify-center lg:justify-end'>
						<motion.img
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 3, delay: 1 }}
							src={profile}
							alt='Abdulloh Qurbonov'
							className='h-[300px] sm:h-[400px] lg:h-[550px] w-[300px] sm:w-[400px] object-cover rounded-xl'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
