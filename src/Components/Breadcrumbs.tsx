import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { teamData } from './data/DoctorsData';

type BreadcrumbsType = {
	path?: string;
	name: string;
};

const data: BreadcrumbsType[] = [
	{
		path: 'services',
		name: 'Услуги и цены',
	},
	{
		path: 'doctors',
		name: 'Врачи',
	},
	{
		path: 'clinic',
		name: 'Клиника',
	},
	{
		path: 'contacts',
		name: 'Контакты',
	},
];

export default function Breadcrumbs() {
	const navigate = useNavigate();
	const { name } = useParams();
	const doctorsName = teamData.map(({ name }) => name);
	const ff = doctorsName.includes(name!);

	useEffect(() => {
		if (name && !ff) return navigate('/404');
	});

	const secondParams = window.location.pathname.split('/').filter((e) => e !== '')[0];
	const secPath = data.filter((e) => e.path === secondParams)[0].name;

	return (
		<div
			className={`px-[16rem] md:px-[95rem] mt-[16rem] md:mt-[30rem] flex flex-row gap-[10rem] text-[14rem] md:text-[14rem] mb-[30rem] md:mb-[53rem]`}>
			<Link to="/" className="">
				Главная
			</Link>
			<div>/</div>
			<Link to={`/${secondParams}`} className={`${name ? 'text-[#242E49]' : 'text-[#5D6A85]'}`}>
				{secPath}
			</Link>
			{ff && (
				<div className="flex flex-row gap-[10rem] text-[14rem] md:text-[14rem] whitespace-nowrap">
					<div>/</div>
					<div className="text-[#5D6A85]">{name}</div>
				</div>
			)}
		</div>
	);
}
