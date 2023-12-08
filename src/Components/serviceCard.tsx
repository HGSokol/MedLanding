import LinkButton from './LinkButton';
import { ServiceCardType } from '../Layouts/Home/Service';

export default function ServiceCard({ title, description, image }: ServiceCardType) {
	return (
		<div
			className={`group/ser overflow-hidden relative flex flex-col justify-between w-full md:w-[400rem] h-[292rem] md:h-[260rem] px-[26rem] pt-[26rem] pb-[26rem] md:pb-[24rem] bg-[#EDF0F4] ${
				image && ' hover:bg-gradient-service'
			} rounded-[20rem] service`}>
			<div
				className={`duration-[250ms] ${
					image ? 'md:w-[274rem]' : 'md:w-[348rem]'
				} w-full flex flex-col gap-[12rem] text-[#242E49] duration-[250ms] ${
					image && 'group-hover/ser:text-[#FFF]'
				}`}>
				<div className="text-[24rem] font-bold leading-[160%]">{title}</div>
				<div className="text-[16rem] font-medium leading-[160%]">{description}</div>
			</div>
			{image ? (
				<LinkButton />
			) : (
				<div className="mt-[14rem] md:mt-[0rem] w-full md:w-[195rem] cursor-pointer flex flex-row items-center text-[#3563E9] text-[16rem] font-bold leading-[150%] md:tracking-[-0.32rem] duration-[500ms] gap-[10rem] hover:gap-[20rem]">
					<div>Узнать больше</div>
					<div className="rotate-45">
						<svg
							className="w-[24rem] h-[24rem]"
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
			)}
			<div className="z-[10] absolute translate-x-[90rem] md:translate-x-[140rem] bottom-0 md:-translate-y-[20rem]">
				{image && <img src={image} alt={image} className="w-[233rem] h-[260rem]" />}
			</div>
		</div>
	);
}
