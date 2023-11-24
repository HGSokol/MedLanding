import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../App';
import Breadcrumbs from '../Components/Breadcrumbs';
import Address from '../Components/Address';
import { teamData } from '../Components/data/DoctorsData';
import Header from '../Layouts/Home/Header';
import Footer from '../Layouts/Home/Footer';

export default function Doctor() {
	const { setActivePopup, setDoctorName } = useContext(AppContext);
	const params = useParams();

	const { name, position, image, specialization, training } = teamData.filter(
		(e) => e.name === params.name,
	)[0];

	const isMobile = window.innerWidth > 768 ? '360' : '240';

	return (
		<div className="font-mont bg-[#EDF0F4]">
			<Header />
			<Breadcrumbs />
			<div className="px-[16rem] md:px-[95rem] mb-[70rem] md:mb-[100rem] flex flex-col md:flex-row gap-[40rem] md:gap-[60rem]">
				<div className="w-full md:w-[334rem] flex flex-col md:gap-[36rem]">
					<div className="md:hidden mb-[40rem]">
						<div className="mb-[20rem] text-[26rem] font-bold leading-[140%]">{name}</div>
						<div className="text-[16rem] text-[#5D6A85] font-normal leading-[160%]">{position}</div>
					</div>
					<img
						className="mb-[22rem] md:mb-[0rem] w-full md:w-[334rem] h-[345rem] md:h-[372rem] rounded-[16rem] object-cover object-top"
						src={image}
						alt={name}
					/>
					<div
						onClick={() => {
							setDoctorName(name);
							setActivePopup(true);
						}}
						className="w-full h-[46rem] md:h-[50rem] rounded-[8rem] flex items-center justify-center px-[20rem] duration-200 bg-[#3563E9] hover:bg-[#1941B9] text-[#FFF] text-[16rem] font-semibold leading-[160%]">
						Записаться
					</div>
				</div>
				<div className="w-full md:w-[856rem] flex flex-col gap-[40rem]">
					<div className="hidden md:block">
						<div className="md:mb-[10rem] text-center md:text-start text-[18rem] md:text-[30rem] font-bold leading-[140%]">
							{name}
						</div>
						<div className="text-[14rem] text-center md:text-start md:text-[16rem] font-normal leading-[160%]">
							{position}
						</div>
					</div>
					<div>
						<div className="mb-[14rem] md:mb-[24rem] text-[20rem] md:text-[24rem] font-semibold leading-[160%]">
							Специализация
						</div>
						<div className="text-[16rem] font-normal leading-[160%]">{specialization}</div>
					</div>
					<div>
						<div className="mb-[14rem] md:mb-[24rem] text-[20rem] md:text-[24rem] font-semibold leading-[160%]">
							Обучение и повышение квалификации
						</div>
						<div className="flex flex-col gap-[20rem]">
							{training.map((e, i) => {
								return (
									<div key={i} className="text-[16rem]">
										<div className="mb-[6rem] font-semibold leading-[160%]">{e.year}</div>
										<div className="font-normal leading-[160%]">{e.text}</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<Address height={isMobile} />
			<Footer />
		</div>
	);
}
