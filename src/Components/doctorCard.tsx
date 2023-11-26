import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import { TeamCardType } from '../@types/appType';

export default function DoctorCard({
	image,
	name,
	position,
}: Pick<TeamCardType, 'image' | 'name' | 'position'>) {
	const { setActivePopup, setDoctorName } = useContext(AppContext);
	return (
		<div className="relative group/doc flex flex-col gap-[22rem] md:gap-[18rem]">
			<Link to={`/doctors/${name}`}>
				<div className="mb-[22rem] md:mb-[18rem]">
					<img
						className="w-full md:w-[292rem] h-[345rem] md:h-[326rem] object-cover object-top rounded-[12rem]"
						src={image}
						alt={name}
					/>
				</div>
				<div className="flex flex-col gap-[8rem] md:gap-[6rem] text-center">
					<div
						className={`text-[18rem] md:text-[14rem] font-semibold leading-[160%]
						md:group-hover/doc:text-[#3563E9] text-[#242E49]
					}`}>
						{name}
					</div>
					<div className="text-[14rem] md:text-[12rem] font-medium text-[#5D6A85]">{position}</div>
				</div>
			</Link>
			<div
				onClick={() => {
					setDoctorName(name);
					setActivePopup(true);
				}}
				className="bottom-0 md:opacity-0 md:group-hover/doc:opacity-100 cursor-pointer duration-200 bg-[#3563E9] hover:bg-[#1941B9] p-[20rem] h-[46rem] rounded-[8rem] text-[16rem] font-semibold leading-[160%] text-[#FFF] flex items-center justify-center">
				Записаться
			</div>
		</div>
	);
}
