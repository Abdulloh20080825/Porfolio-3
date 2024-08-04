import { FaGoogle, FaTelegram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav className='mb-20 flex items-center justify-between py-6'>
			<div className='flex flex-shrink-0 items-center'>
				<h2 className='text-3xl cursor-pointer'>AQ</h2>
			</div>
			<div className='m-8 flex items-center justify-center gap-5 text-4xl'>
				<FaTelegram />
				<FaGithub />
				<FaGoogle />
			</div>
		</nav>
	);
};

export default Navbar;
