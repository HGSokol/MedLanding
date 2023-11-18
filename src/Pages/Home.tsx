import Header from '../Layouts/Home/Header';
import Preview from '../Layouts/Home/Preview';
import Services from '../Layouts/Home/Services';
import Footer from '../Layouts/Home/Footer';

import ReactLogo from '../assets/circle.svg';
import Clinic from '../Layouts/Home/Clinic';
import Reviews from '../Layouts/Home/Reviews';
import Team from '../Layouts/Home/Team';
import Contacts from '../Layouts/Home/Contacts';
import { useContext } from 'react';
import ContactFormPopup from '../Components/ContactFormPopup';
import { AppContext } from '../App';
import usePopup from '../hooks/usePopup';

export default function Home() {
	const { activePopup } = useContext(AppContext);
	usePopup();
	return (
		<div className="font-mont w-[100vw] bg-[#F6F7F9]">
			{activePopup && (
				<div
					id="contactForm"
					className="h-[100vh] bg-slate-200 w-[100vw] grid items-center place-content-center z-[100] fixed bg-[#242E49CC]/[0.8]">
					<ContactFormPopup />
				</div>
			)}
			<div className='relative bg-[url("./assets/bg-preview.png")] bg-no-repeat bg-cover overflow-hidden'>
				<div className="bg-gradient-radial w-full h-full">
					<div className="z-[1] absolute translate-x-[650rem] -translate-y-[0rem]">
						<img className="w-[831rem] aspect-square" src={ReactLogo} alt="React Logo" />
					</div>
					<Header />
					<Preview />
				</div>
			</div>
			<main>
				<Services />
				<Clinic />
				<Reviews />
				<Team />
				<Contacts />
			</main>
			<Footer />
		</div>
	);
}
