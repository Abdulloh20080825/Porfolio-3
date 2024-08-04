import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Peojects = () => {
	return (
		<div className='border-b border-neutral-900 pb-4'>
			<motion.h1
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -50 }}
				transition={{ duration: 1.5 }}
				className='text-center text-4xl my-20'
			>
				Projects
			</motion.h1>
			<div>
				{PROJECTS.map((item, index) => (
					<div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1.5 }}
							className='w-full lg:w-1/4'
						>
							<Link to={item.link}>
								<img
									src={item.image}
									alt={item.title}
									height={150}
									width={250}
									className='mb-6 rounded'
								/>
							</Link>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1.5 }}
							className='w-full max-w-xl lg:w-3/4'
						>
							<h6 className='mb-2 font-semibold'>{item.title}</h6>
							<p className='mb-4 text-neutral-400'>{item.description}</p>
							{item.technologies.map((lang, idx) => (
								<span
									key={idx}
									className='mr-2 rounded bg-neutral-900 px-2 py-1 text-purple-900 text-sm font-medium'
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

export default Peojects;
