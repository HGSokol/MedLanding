import ClinicImage from '../../Components/clinicImage';

export default function Clinic() {
	return (
		<div className="relative px-[95rem] pt-[90rem] flex flex-col mb-[150rem]">
			<div className="flex flex-row justify-between mb-[60rem]">
				<div className="w-[621rem] text-[36rem] font-bold leading-[56rem] tracking-[-0.72rem]">
					<span className="text-[#3563E9]">Наша клиника</span> - это место, где забота о вашем
					здоровье на первом месте.
				</div>
				<div className="w-[544rem] pt-[10rem] flex flex-col gap-[22rem] ">
					<div className="text-[#5D6A85] text-[18rem] font-medium leading-[160%]">
						Здесь вы найдете высококачественную медицинскую помощь и дружелюбную атмосферу, которая
						поможет вам почувствовать себя комфортно и уверенно на пути к выздоровлению.{' '}
					</div>
					<div className="w-[165rem] cursor-pointer flex flex-row items-center text-[#3563E9] text-[16rem] font-semibold leading-[150%] tracking-[-0.32rem] gap-[10rem]">
						<div>Узнать больше</div>
						<div className="rotate-45">
							<svg
								className="w-[23rem] h-[23rem]"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M18.5788 7.1284L5.70718 20L5.00008 19.2929L17.8717 6.4213L18.4844 5.80858L17.6473 5.58472C17.4403 5.52936 17.2232 5.5 17.0001 5.5L10.5001 5.5V4.5H17.0001C18.9331 4.5 20.5001 6.067 20.5001 8V14.5H19.5001V8C19.5001 7.77684 19.4707 7.55976 19.4154 7.35278L19.1915 6.51568L18.5788 7.1284Z"
									fill="#3563E9"
									stroke="#3563E9"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<ClinicImage />
		</div>
	);
}
