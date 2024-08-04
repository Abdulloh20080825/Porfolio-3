import me from '../assets/me-2.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<div className='border-b border-neutral-900 pb-4'>
			<h1 className='my-20 text-center text-4xl'>
				About <span className='text-neutral-500'>Me</span>
			</h1>
			<div className='flex flex-col lg:flex-row'>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 1.5 }}
					className='w-full lg:w-1/2 lg:p-8'
				>
					<div className='flex items-center justify-center'>
						<img
							src={me}
							alt='Abdullho Qurbonov'
							className='w-[400px] h-[400px] object-cover rounded-2xl'
						/>
					</div>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 1.5 }}
					className='w-full lg:w1/2'
				>
					<div className='flex justify-center lg:justify-start'>
						<p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
