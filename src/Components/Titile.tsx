type TitleType = {
	title: string;
	text: string;
};

export default function Title({ title, text }: TitleType) {
	return (
		<div className="px-[16rem] md:px-[95rem] mb-[30rem] md:mb-[60rem]">
			<div className="mb-[20rem] md:mb-[34rem] text-[26rem] md:text-[40rem] font-bold leading-[140%]">
				{title}
			</div>
			<div className="w-full md:w-[790rem] text-[#5D6A85] text-[16rem] md:text-[18rem] font-medium leading-[160%]">
				{text}
			</div>
		</div>
	);
}
