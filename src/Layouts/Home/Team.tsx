import { useState } from 'react';
import TeamCard from '../../Components/teamCard';
import { teamData } from '../../Components/data/DoctorsData';

export default function Team() {
	const [currentSliderList, setCurrentSliderList] = useState<number>(0);
	const [range, setRange] = useState(0);
	const [activeCircle, setActiveCircle] = useState(0);

	function changeRange(signs: string) {
		if (currentSliderList >= 2 && currentSliderList <= teamData.length - 3) {
			signs === 'plus' ? setRange((prev) => prev + 1) : setRange((prev) => prev - 1);
		}
	}

	const left = () => {
		if (currentSliderList >= 1) {
			setCurrentSliderList((prev) => prev - 1);

			changeRange('minus');
		}
	};
	const right = () => {
		if (currentSliderList <= teamData.length - 2) {
			setCurrentSliderList((prev) => prev + 1);

			changeRange('plus');
		}
	};

	return (
		<div className="relative mb-[70rem] md:mb-[150rem] flex flex-col justify-center overflow-hidden">
			<div className="px-[16rem] md:px-[0rem] flex flex-col w-full items-center text-start md:text-center gap-[18rem] mb-[30rem] md:mb-[60rem]">
				<div className="text-[28rem] md:text-[36rem] font-bold leading-[56rem] tracking-[-0.72rem]">
					Наши специалисты
				</div>
				<div className="text-[18rem] font-medium leading-[160%] w-full md:w-[766rem]">
					Наши врачи обладают высокой квалификацией, богатым опытом и всегда готовы предоставить
					качественное медицинское обслуживание
				</div>
			</div>
			<div className="duration-[500ms] overflow-x-scroll md:overflow-hidden snap-mandatory snap-x md:snap-none">
				<div
					className="duration-[500ms] px-[16rem] md:px-[25rem] md:mb-[20rem] flex flex-row w-max gap-[25rem]"
					style={{
						transform: `translateX(-${range * 320}rem)`,
					}}>
					{teamData.map((e, i) => {
						const currentSlide = currentSliderList === i;
						return (
							<div key={i} className="snap-center">
								<TeamCard
									number={i}
									currentSlider={currentSlide}
									image={e.image}
									name={e.name}
									position={e.position}
									setActiveCircle={setActiveCircle}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className="hidden md:flex flex-row gap-[24rem] w-full items-center justify-center">
				<div
					onClick={left}
					className={`${
						currentSliderList === 0
							? 'stroke-[#9FA8C0] fill-[#9FA8C0] border-[#9FA8C0]'
							: 'stroke-[#242E49] hover:stroke-[#3563E9] fill-[#242E49] hover:fill-[#3563E9] hover:border-[#3563E9] cursor-pointer'
					}  w-[55rem] h-[55rem] border-[1rem]  rounded-full p-[15rem] duration-[200ms]`}>
					<svg
						className="w-[24rem] h-[24rem] rotate-180"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none">
						<path d="M20.536 12.8528L2.33278 12.8528L2.33278 11.8528L20.536 11.8528L21.4025 11.8528L20.9689 11.1026C20.8616 10.9171 20.7289 10.7428 20.5711 10.585L15.9749 5.98881L16.682 5.2817L21.2782 9.8779C22.645 11.2447 22.645 13.4608 21.2782 14.8276L16.682 19.4238L15.9749 18.7167L20.5711 14.1205C20.7289 13.9627 20.8616 13.7885 20.9689 13.603L21.4025 12.8528L20.536 12.8528Z" />
					</svg>
				</div>
				<div
					onClick={right}
					className={`${
						currentSliderList === teamData.length - 1
							? 'stroke-[#9FA8C0] fill-[#9FA8C0] border-[#9FA8C0]'
							: 'stroke-[#242E49] hover:stroke-[#3563E9] fill-[#242E49] hover:fill-[#3563E9] hover:border-[#3563E9] cursor-pointer'
					} w-[55rem] h-[55rem] border-[1rem] rounded-full p-[15rem]`}>
					<svg
						className="w-[24rem] h-[24rem]"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none">
						<path d="M20.536 12.8528L2.33278 12.8528L2.33278 11.8528L20.536 11.8528L21.4025 11.8528L20.9689 11.1026C20.8616 10.9171 20.7289 10.7428 20.5711 10.585L15.9749 5.98881L16.682 5.2817L21.2782 9.8779C22.645 11.2447 22.645 13.4608 21.2782 14.8276L16.682 19.4238L15.9749 18.7167L20.5711 14.1205C20.7289 13.9627 20.8616 13.7885 20.9689 13.603L21.4025 12.8528L20.536 12.8528Z" />
					</svg>
				</div>
			</div>
			<div className="md:hidden flex justify-center items-center pt-[10rem] gap-[6rem]">
				{teamData.map((_, i) => {
					return (
						<div key={i}>
							<svg
								className={`w-[8rem] h-[8rem] 
                ${i === activeCircle ? 'fill-[#3563E9] ' : 'fill-[#D0E4FF] '} 
                `}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 9 8"
								fill="none">
								<circle cx="4.5" cy="4" r="4" />
							</svg>
						</div>
					);
				})}
			</div>
		</div>
	);
}
