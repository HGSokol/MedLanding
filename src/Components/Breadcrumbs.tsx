import { Link, useParams, useNavigate } from 'react-router-dom';
import { teamData } from '../Layouts/Home/Team';
import { useEffect } from 'react';

type BreadcrumbsType = {
	path?: string;
	name: string;
};

const data: BreadcrumbsType[] = [
	{
		path: 'price',
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
		<div className="px-[95rem] pt-[30rem] flex flex-row gap-[10rem] text-[20rem] mb-[53rem]">
			<Link to="/" className="">
				Главная
			</Link>
			<div>/</div>
			<Link to={`/${secondParams}`} className="">
				{secPath}
			</Link>
			{ff && (
				<div className="flex flex-row gap-[10rem] text-[20rem]">
					<div>/</div>
					<div>{name}</div>
				</div>
			)}
		</div>
	);
}
