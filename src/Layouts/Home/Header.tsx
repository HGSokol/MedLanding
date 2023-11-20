import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import PortalModal from '../../Components/PortalBurgerMenu';
import PortalForm from '../../Components/PortalForm';

export default function Header() {
	const { activePopup, setActivePopup } = useContext(AppContext);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className="relative flex flex-row px-[30rem] md:px-[95rem] h-[80rem] md:h-[102rem] justify-between items-center w-[100%]">
			<div className="flex flex-row items-center">
				<Link
					to="/"
					className="text-[28rem] font-semibold leading-[160%] text-[#242E49] mr-[55rem]">
					Логотип
				</Link>
				<div className="hidden md:flex flex-row gap-[40rem] text-[16rem] font-medium leading-[160%] text-[#242E49] duration-200">
					<Link to="/services" className="z-[10] cursor-pointer hover:text-[#3563E9] duration-200">
						Услуги и цены
					</Link>
					<Link to="/doctors" className="z-[10] cursor-pointer hover:text-[#3563E9] duration-200">
						Врачи
					</Link>
					<Link to="/clinic" className="z-[10] cursor-pointer hover:text-[#3563E9] duration-200">
						Клиника
					</Link>
					<Link to="/contacts" className="z-[10] cursor-pointer hover:text-[#3563E9] duration-200">
						Контакты
					</Link>
				</div>
			</div>
			<div className="hidden md:flex flex-row gap-[36rem] font-semibold leading-[160%] items-center">
				<div className="z-[10] text-[18rem] text-[#242E49]">+8 (495) 897-74-16</div>
				<div
					onClick={() => setActivePopup(true)}
					className="z-[10] text-[16rem] text-[white] flex items-center justify-center w-[230rem] h-[46rem] px-[20rem] duration-200 bg-[#3563E9] hover:bg-[#1941B9] rounded-[8rem] cursor-pointer">
					Записаться на прием
				</div>
			</div>
			<div onClick={() => setIsOpen((prev) => !prev)} className="hamburger md:hidden">
				<div
					className="burger burger1"
					style={{ transform: `${isOpen ? 'rotate(45deg)' : 'rotate(0)'}` }}
				/>
				<div
					className="burger burger2"
					style={{
						transform: `${isOpen ? 'translateY(100%)' : 'translateY(0)'}`,
						opacity: `${isOpen ? 0 : 1}`,
					}}
				/>
				<div
					className="burger burger3"
					style={{ transform: `${isOpen ? 'rotate(-45deg)' : 'rotate(0)'}` }}
				/>
			</div>
			<PortalModal setIsOpen={setIsOpen} isOpen={isOpen} />
			{activePopup && <PortalForm />}
		</header>
	);
}
