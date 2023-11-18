import { useContext } from 'react';
import { AppContext } from '../App';
import { TeamCardType } from '../Layouts/Home/Team';

export default function DoctorCard({ image, name, position }: TeamCardType) {
	const { setActivePopup } = useContext(AppContext);
	return (
		<div className="relative group/doc flex flex-col gap-[18rem]">
			<div>
				<img className="w-[292rem] h-[326rem]" src={image} alt={name} />
			</div>
			<div className="flex flex-col gap-[6rem] text-center">
				<div
					className={`text-[14rem] font-semibold leading-[160%]
						group-hover/doc:text-[#3563E9] text-[#242E49]
					}`}>
					{name}
				</div>
				<div className="text-[12rem] font-medium text-[#5D6A85]">{position}</div>
			</div>
			<div
				onClick={() => setActivePopup(true)}
				className="bottom-0 opacity-0 group-hover/doc:opacity-100 cursor-pointer bg-[#3563E9] p-[20rem] h-[46rem] rounded-[8rem] text-[16rem] font-semibold leading-[160%] text-[#FFF] flex items-center justify-center">
				Записаться
			</div>
		</div>
	);
}
