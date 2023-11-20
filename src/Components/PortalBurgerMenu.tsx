import { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

type PortalMenu = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function PortalBurgerMenu({ isOpen, setIsOpen }: PortalMenu) {
	const { setActivePopup } = useContext(AppContext);

	useEffect(() => {
		document.addEventListener('click', closePopup);
		return () => {
			document.removeEventListener('click', closePopup);
		};
	});

	function closePopup(e: MouseEvent) {
		const target = e.target as HTMLButtonElement;

		if (target.matches('#portalMenu')) {
			setIsOpen(false);
		}
	}

	return createPortal(
		<div
			id="portalMenu"
			className={`${
				isOpen ? 'z-[100]' : 'z-[-1]'
			} md:hidden fixed top-0 w-full h-full duration-500 ${
				isOpen ? 'translate-x-0' : '-translate-x-[1000rem]'
			}`}>
			<div className="p-[25rem] w-[270rem] h-full bg-[#3563E9]">
				<div className="flex flex-col gap-[15rem] text-[20rem] font-medium leading-[160%] text-[#FFF] duration-200 pb-[20rem] border-b-[1rem] border-[#FFF]/[0.5]">
					<Link to="/" className="hover:text-[#3563E9] duration-200 text-[28rem] mb-[15rem]">
						Логотип
					</Link>
					<Link to="/services" className="hover:text-[#3563E9] duration-200">
						Услуги и цены
					</Link>
					<Link to="/doctors" className="hover:text-[#3563E9] duration-200">
						Врачи
					</Link>
					<Link to="/clinic" className="hover:text-[#3563E9] duration-200">
						Клиника
					</Link>
					<Link to="/contacts" className="hover:text-[#3563E9] duration-200">
						Контакты
					</Link>
				</div>
				<div className="pt-[20rem] flex flex-col gap-[10rem]">
					<div className=" text-[18rem] font-medium leading-[160%] text-[#FFF]">
						+8 (495) 897-74-16
					</div>
					<div
						onClick={() => {
							setIsOpen(false);
							setActivePopup(true);
						}}
						className="text-[20rem] font-medium leading-[160%] text-[#FFF]">
						Записаться на прием
					</div>
				</div>
			</div>
		</div>,
		document.getElementById('root')!,
	);
}
