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
	const [isInputFocus, setIsInputFocus] = useState(false);
	const [searchText, setSearchText] = useState('');

	return (
		<div className="font-mont flex flex-col min-h-[100dvh] bg-[#EDF0F4]">
			<Header />
			<main className="grow-[3]">
				<Breadcrumbs />
				<DoctorsTitle />
				<div className="px-[16rem] mb-[40rem] md:mb-[0rem] md:px-[95rem] flex flex-col md:flex-row md:justify-between">
					<div className="mb-[10rem] min-h-[50rem] snap-mandatory snap-x md:mb-[60rem] flex flex-row overflow-scroll gap-[10rem] ">
						{dataTabs.map((e, i) => {
							const current = currentTab === e.name;
							return (
								<div className="snap-center h-min" onClick={() => setCurrentTab(e.name)} key={i}>
									<Tab text={e.name} current={current} />
								</div>
							);
						})}
					</div>
					<div className="relative">
						<label
							className={`absolute top-[12rem] left-[16rem] ${
								isInputFocus ? 'stroke-[#3563E9] ' : 'stroke-[#242E49] '
							} `}>
							<svg
								className="w-[20rem] h-[20rem]"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8.63633 2.5C7.42268 2.5 6.23628 2.85989 5.22717 3.53416C4.21806 4.20843 3.43155 5.16679 2.9671 6.28806C2.50266 7.40932 2.38114 8.64314 2.61791 9.83347C2.85468 11.0238 3.43911 12.1172 4.29729 12.9754C5.15547 13.8335 6.24886 14.418 7.43919 14.6547C8.62952 14.8915 9.86334 14.77 10.9846 14.3056C12.1059 13.8411 13.0642 13.0546 13.7385 12.0455C14.4128 11.0364 14.7727 9.84998 14.7727 8.63633C14.7726 7.0089 14.126 5.44817 12.9753 4.2974C11.8245 3.14664 10.2638 2.5001 8.63633 2.5Z"
									strokeMiterlimit="10"
								/>
								<path
									d="M13.2144 13.2148L17.4999 17.5004"
									strokeMiterlimit="10"
									strokeLinecap="round"
								/>
							</svg>
						</label>
						<div
							onClick={() => setSearchText('')}
							className={`cursor-pointer absolute right-[16rem] top-[16rem] ${
								searchText ? '' : 'hidden'
							}`}>
							<svg
								className="w-[14rem] h-[14rem]"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<rect
									x="1.63818"
									y="11.6504"
									width="14"
									height="1.16667"
									transform="rotate(-45 1.63818 11.6504)"
									fill="#5D6A85"
								/>
								<rect
									width="14"
									height="1.16667"
									transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 12.3618 11.6504)"
									fill="#5D6A85"
								/>
							</svg>
						</div>
						<input
							onChange={(e) => setSearchText(e.target.value)}
							value={searchText}
							className="outline-none w-full md:w-[255rem] h-[46rem] pl-[45rem] pr-[38rem] py-[12rem] rounded-[100rem] text-[14rem] font-normal leading-[160%]"
							type="text"
							placeholder="Поиск"
							onFocus={() => setIsInputFocus(true)}
							onBlur={() => setIsInputFocus(false)}
						/>
					</div>
				</div>
				<div className="px-[16rem] md:px-[95rem] flex flex-row flex-wrap gap-[40rem] md:gap-[25rem] mb-[70rem] md:mb-[100rem]">
					{teamData
						.filter((e) => {
							if (currentTab === 'Все врачи') return e;
							return e.department === currentTab;
						})
						.filter((e) => {
							if (searchText.length > 0) {
								return e.name.toLowerCase().includes(searchText.toLowerCase());
							} else {
								return e;
							}
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
