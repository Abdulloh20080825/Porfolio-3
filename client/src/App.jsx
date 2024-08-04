import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Peojects from './components/Peojects';
import Technologies from './components/Technologies';

const App = () => {
	return (
		<div className='overflow-x-hidden text-neutral-300 antialiased slec  selection:text-cyan-900 selection:bg-cyan-300 relative'>
			<div className='fixed h-full w-full top-0 -z-10'>
				<div className='absolute top-0 z-[-2] h-[100vh] w-[100vw] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
			</div>
			<div className='container mx-auto px-8'>
				<Navbar />
				<Hero />
				<About />
				<Technologies />
				<Experience />
				<Peojects />
				<Contact />
			</div>
		</div>
	);
};

export default App;
