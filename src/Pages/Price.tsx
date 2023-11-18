import { useContext, useState } from 'react';
import { AppContext } from '../App';
import usePopup from '../hooks/usePopup';
import Header from '../Layouts/Home/Header';
import Footer from '../Layouts/Home/Footer';
import ContactFormPopup from '../Components/ContactFormPopup';
import Breadcrumbs from '../Components/Breadcrumbs';
import Tab from '../Components/Tab';
import PriceTitle from '../Layouts/Price/PriceTitle';
import PriceInfo from '../Layouts/Price/PriceInfo';

type DataTabsType = {
	name: string;
};
const dataTabs: DataTabsType[] = [
	{ name: 'Все услуги' },
	{ name: 'Гинекология' },
	{ name: 'Урология' },
	{ name: 'Эндокринология' },
	{ name: 'Терапия' },
	{ name: 'УЗИ-диагностика' },
];

export type ServiceType = {
	serviceName: string;
	price: string;
};
export type DataServicesType = {
	name: string;
	services: ServiceType[];
};
const dataServices: DataServicesType[] = [
	{
		name: 'Гинекология',
		services: [
			{
				serviceName: 'Консультация акушера-гинеколона (первичная)',
				price: '6 000 руб',
			},
			{
				serviceName: 'Консультация акушера-гинеколона (повторная)',
				price: '5 000 руб.',
			},
			{
				serviceName:
					'Консультация акушера-гинеколога (первичная), д.м.н./главный специалист/руководитель отделения',
				price: '8 000 руб.',
			},
			{
				serviceName:
					'Консультация акушера-гинеколога (повторная), к.м.н./доцент/ведущий специалист',
				price: '7 000 руб.',
			},
			{
				serviceName: 'Введение акушерского разгружающего поддерживающего кольца (пессария)',
				price: '3 800 руб.',
			},
			{
				serviceName: 'Вскрытие и дренирование флегмоны (абсцесса)/бартолиниевой железы',
				price: '9 700 руб.',
			},
		],
	},
	{
		name: 'Урология',
		services: [
			{
				serviceName: 'Консультация акушера-гинеколона (первичная)',
				price: '6 000 руб',
			},
			{
				serviceName: 'Консультация акушера-гинеколона (повторная)',
				price: '5 000 руб.',
			},
			{
				serviceName:
					'Консультация акушера-гинеколога (первичная), д.м.н./главный специалист/руководитель отделения',
				price: '8 000 руб.',
			},
			{
				serviceName:
					'Консультация акушера-гинеколога (повторная), к.м.н./доцент/ведущий специалист',
				price: '7 000 руб.',
			},
			{
				serviceName: 'Введение акушерского разгружающего поддерживающего кольца (пессария)',
				price: '3 800 руб.',
			},
			{
				serviceName: 'Вскрытие и дренирование флегмоны (абсцесса)/бартолиниевой железы',
				price: '9 700 руб.',
			},
		],
	},
	{
		name: 'Эндокринология',
		services: [
			{
				serviceName: 'Консультация акушера-гинеколона (первичная)',
				price: '6 000 руб',
			},
			{
				serviceName: 'Консультация акушера-гинеколона (повторная)',
				price: '5 000 руб.',
			},
			{
				serviceName:
					'Консультация акушера-гинеколога (первичная), д.м.н./главный специалист/руководитель отделения',
				price: '8 000 руб.',
			},
			{
				serviceName:
					'Консультация акушера-гинеколога (повторная), к.м.н./доцент/ведущий специалист',
				price: '7 000 руб.',
			},
			{
				serviceName: 'Введение акушерского разгружающего поддерживающего кольца (пессария)',
				price: '3 800 руб.',
			},
			{
				serviceName: 'Вскрытие и дренирование флегмоны (абсцесса)/бартолиниевой железы',
				price: '9 700 руб.',
			},
		],
	},
	{
		name: 'Терапевтия',
		services: [
			{
				serviceName: 'Консультация акушера-гинеколона (первичная)',
				price: '6 000 руб',
			},
			{
				serviceName: 'Консультация акушера-гинеколона (повторная)',
				price: '5 000 руб.',
			},
			{
				serviceName:
					'Консультация акушера-гинеколога (первичная), д.м.н./главный специалист/руководитель отделения',
				price: '8 000 руб.',
			},
			{
				serviceName:
					'Консультация акушера-гинеколога (повторная), к.м.н./доцент/ведущий специалист',
				price: '7 000 руб.',
			},
			{
				serviceName: 'Введение акушерского разгружающего поддерживающего кольца (пессария)',
				price: '3 800 руб.',
			},
			{
				serviceName: 'Вскрытие и дренирование флегмоны (абсцесса)/бартолиниевой железы',
				price: '9 700 руб.',
			},
		],
	},
	{
		name: 'УЗИ-диагностика',
		services: [
			{
				serviceName: 'Консультация акушера-гинеколона (первичная)',
				price: '6 000 руб',
			},
			{
				serviceName: 'Консультация акушера-гинеколона (повторная)',
				price: '5 000 руб.',
			},
			{
				serviceName:
					'Консультация акушера-гинеколога (первичная), д.м.н./главный специалист/руководитель отделения',
				price: '8 000 руб.',
			},
			{
				serviceName:
					'Консультация акушера-гинеколога (повторная), к.м.н./доцент/ведущий специалист',
				price: '7 000 руб.',
			},
			{
				serviceName: 'Введение акушерского разгружающего поддерживающего кольца (пессария)',
				price: '3 800 руб.',
			},
			{
				serviceName: 'Вскрытие и дренирование флегмоны (абсцесса)/бартолиниевой железы',
				price: '9 700 руб.',
			},
		],
	},
];

export default function Price() {
	const { activePopup } = useContext(AppContext);
	const [currentTab, setCurrentTab] = useState(0);

	usePopup();
	return (
		<div className="font-mont w-[100vw] bg-[#EDF0F4]">
			{activePopup && (
				<div
					id="contactForm"
					className="h-[100vh] bg-slate-200 w-[100vw] grid items-center place-content-center z-[100] fixed bg-[#242E49CC]/[0.8]">
					<ContactFormPopup />
				</div>
			)}
			<Header />
			<Breadcrumbs />
			<PriceTitle />
			<div className="px-[95rem] flex flex-row gap-[10rem] mb-[60rem]">
				{dataTabs.map((e, i) => {
					const current = currentTab === i;
					return (
						<div onClick={() => setCurrentTab(i)} key={i}>
							<Tab text={e.name} current={current} />
						</div>
					);
				})}
			</div>
			<div className="flex flex-col gap-[50rem] mb-[100rem]">
				{dataServices
					.filter((e, i) => {
						if (currentTab === 0) return e;
						return i === currentTab - 1;
					})
					.map((e, i) => {
						return (
							<div key={i}>
								<PriceInfo name={e.name} services={e.services} />
							</div>
						);
					})}
			</div>
			<Footer />
		</div>
	);
}
