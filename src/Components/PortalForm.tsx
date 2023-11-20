import { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AppContext } from '../App';
import ContactFormPopup from './ContactFormPopup';

export default function PortalForm() {
	const { setActivePopup } = useContext(AppContext);

	useEffect(() => {
		document.addEventListener('click', closePopup);
		return () => {
			document.removeEventListener('click', closePopup);
		};
	}, []);

	function closePopup(e: MouseEvent) {
		const target = e.target as HTMLButtonElement;

		if (target.matches('#contactForm')) {
			setActivePopup(false);
		}
	}

	return createPortal(
		<div
			id="contactForm"
			className={` h-full z-[100] w-full top-0 grid items-center place-content-center fixed bg-[#242E49CC]/[0.8]`}>
			<ContactFormPopup />
		</div>,
		document.getElementById('root')!,
	);
}
