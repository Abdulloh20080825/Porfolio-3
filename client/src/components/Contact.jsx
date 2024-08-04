import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import axiosInstance from '../server/get-backend-api';
import { useState } from 'react';

const Contact = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSend, setIsSend] = useState(false);

	const sendMessage = async (e) => {
		e.preventDefault();
		try {
			const response = await axiosInstance.post('/message', {
				username,
				email,
				message,
			});
			setUsername('');
			setEmail('');
			setMessage('');
			setIsSend(true);
			window.setTimeout(() => setIsSend(false), 3000);
			console.log('Your message: ' + response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='border-b border-neutral-900 pb-20 px-4 lg:px-0 relative'>
			{isSend && (
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
					className='absolute bg-gradient-to-r from-pink-300  to-purple-500 text-white p-4 rounded-md'
				>
					Message sent successfully
				</motion.div>
			)}
			<motion.h1
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -50 }}
				transition={{ duration: 1.5 }}
				className='my-10 text-center text-4xl'
			>
				Contact Us
			</motion.h1>
			<div className='text-center tracking-tighter'>
				<motion.p
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 1.5 }}
					className='my-4'
				>
					{CONTACT.address}
				</motion.p>
				<motion.p
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 1.5 }}
					className='my-4'
				>
					{CONTACT.phoneNo}
				</motion.p>
				<motion.a
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 1.5 }}
					href='#'
					className='border-b'
				>
					{CONTACT.email}
				</motion.a>
				<form
					className='mt-10 flex flex-col items-center'
					onSubmit={(e) => sendMessage(e)}
				>
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 1.5 }}
						className='mb-4 w-full max-w-md'
					>
						<label
							htmlFor='username'
							className='block text-left mb-2 text-sm font-medium'
						>
							Full Name
						</label>
						<input
							type='text'
							id='username'
							name='username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder='Full Name'
							className='w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
						/>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: 100 }}
						transition={{ duration: 1.5 }}
						className='mb-4 w-full max-w-md'
					>
						<label
							htmlFor='email'
							className='block text-left mb-2 text-sm font-medium'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Email'
							className='w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
						/>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 1.5 }}
						className='mb-4 w-full max-w-md'
					>
						<label
							htmlFor='message'
							className='block text-left mb-2 text-sm font-medium'
						>
							Message
						</label>
						<textarea
							name='message'
							id='message'
							placeholder='Message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className='w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
							rows='4'
						></textarea>
					</motion.div>
					<button className='mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
