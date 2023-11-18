import Header from '../Layouts/Home/Header';
import Footer from '../Layouts/Home/Footer';
import Breadcrumbs from '../Components/Breadcrumbs';
import ContactFormPopup from '../Components/ContactFormPopup';
import { useContext } from 'react';
import { AppContext } from '../App';
import usePopup from '../hooks/usePopup';
import { useParams } from 'react-router-dom';

export default function Doctor() {
	const { activePopup } = useContext(AppContext);

	usePopup();

	const params = useParams();
	console.log(params);
	return (
		<div className="font-mont bg-[#EDF0F4]">
			{activePopup && (
				<div
					id="contactForm"
					className="h-[100vh] bg-slate-200 w-[100vw] grid items-center place-content-center z-[100] fixed bg-[#242E49CC]/[0.8]">
					<ContactFormPopup />
				</div>
			)}
			<Header />
			<Breadcrumbs />
			<Footer />
		</div>
	);
}
