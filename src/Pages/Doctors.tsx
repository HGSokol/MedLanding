import { useState } from 'react';
import Breadcrumbs from '../Components/Breadcrumbs';
import Tab from '../Components/Tab';
import DoctorCard from '../Components/doctorCard';
import { teamData } from '../Components/data/DoctorsData';
import Header from '../Layouts/Home/Header';
import Footer from '../Layouts/Home/Footer';
import DoctorsTitle from '../Layouts/Doctors/DoctorsTitle';

type DoctorsType = {
	name: string;
};
const dataTabs: DoctorsType[] = [
	{ name: 'Все врачи' },
	{ name: 'Гинекологи' },
	{ name: 'Урологи' },
	{ name: 'Эндокринологи' },
	{ name: 'Терапевты' },
	{ name: 'УЗИ-специалисты' },
];

export default function Doctors() {
	const [currentTab, setCurrentTab] = useState('Все врачи');

	return (
		<div className="font-mont bg-[#EDF0F4]">
			<Header />
			<main className="md:min-h-[calc(100dvh-102rem-340rem)]">
				<Breadcrumbs />
				<DoctorsTitle />
				<div className="px-[16rem] md:px-[95rem] flex flex-row flex-wrap gap-[10rem] mb-[30rem] md:mb-[60rem]">
					{dataTabs.map((e, i) => {
						const current = currentTab === e.name;
						return (
							<div onClick={() => setCurrentTab(e.name)} key={i}>
								<Tab text={e.name} current={current} />
							</div>
						);
					})}
				</div>
				<div className="px-[16rem] md:px-[95rem] flex flex-row flex-wrap gap-[25rem] mb-[30rem] md:mb-[100rem]">
					{teamData
						.filter((e) => {
							if (currentTab === 'Все врачи') return e;
							return e.department === currentTab;
						})
						.map((e, i) => {
							return (
								<div key={i} className="w-full md:w-[293rem]">
									<DoctorCard name={e.name} position={e.position} image={e.image} />
								</div>
							);
						})}
				</div>
			</main>
			<Footer />
		</div>
	);
}
