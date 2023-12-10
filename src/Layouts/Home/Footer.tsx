import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export default function Footer() {
	return (
		<footer className="px-[16rem] md:pt-[50rem] md:pb-[30rem] md:px-[95rem] w-full md:h-min bg-[#3563E9] flex flex-col gap-[80rem] md:gap-[72rem]">
			<div className="flex flex-row flex-wrap md:flex-nowrap justify-between">
				<div className="mb-[40rem] md:mb-[40rem] flex flex-col pt-[26rem] md:pt-[0rem] md:w-[403rem] gap-[18rem] md:gap-[18rem]">
					<div className="flex justify-center items-center w-[151rem] h-[48rem] md:w-[160rem] md:h-[51rem] fill-[white]">
						<img
							className="fill-[currentColor]"
							src={logo}
							alt="logo"
						/>
					</div>
					<div className="text-[14rem] text-start font-normal leadig-[160%] text-[#FFF]">
						В нашем медицинском центре вы можете быть уверены в
						профессионализме наших специалистов, на команду врачей
						распространяются высокие профессиональные стандарты.
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-between md:justify-start gap-[20rem] md:gap-[133rem] md:pt-[30rem]">
					<div className="flex flex-col gap-[20rem] text-[16rem] text-[#FFF] leading-[160%]">
						<Link
							to="/services"
							className="cursor-pointer hover:underline"
						>
							Услуги и цены
						</Link>
						<Link
							to="/doctors"
							className="cursor-pointer hover:underline"
						>
							Врачи
						</Link>
					</div>
					<div className="flex flex-col gap-[20rem] text-[16rem] text-[#FFF] leading-[160%]">
						<Link
							to="/contacts"
							className="cursor-pointer hover:underline"
						>
							Контакты
						</Link>
						<Link
							to="/clinic"
							className="cursor-pointer hover:underline"
						>
							Клиника
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-[20rem] md:gap-[22rem]  md:pt-[30rem]">
					<div className="flex flex-col justify-between md:justify-start gap-[5rem] text-[16rem] text-[#FFF]">
						<div className="font-normal leading-[160%]">
							Телефон
						</div>
						<div className="font-semibold leading-[160%] hover:underline">
							+8 (903) 799-30-30
						</div>
					</div>
					<div className="flex flex-col justify-between md:justify-start gap-[5rem] text-[16rem] text-[#FFF]">
						<div className="font-normal leading-[160%]">E-mail</div>
						<div className="font-semibold leading-[160%] hover:underline">
							biochek@inbox.ru
						</div>
					</div>
				</div>
			</div>
			<div className="mb-[26rem] md:mb-[0rem] flex flex-col-reverse gap-[8rem] md:gap-[0rem] md:flex-row items-start md:items-center justify-between text-[#FFF] text-[14rem] font-normal leading-[160%]">
				<div className="hidden md:block">
					Политика конфиденциальности
				</div>
				<div>Политика конфиденциальности</div>
				<div>© OOO “Дзидзария и Греков Биочек”, 2023г.</div>
			</div>
		</footer>
	)
}
