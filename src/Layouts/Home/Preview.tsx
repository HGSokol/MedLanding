import { Link } from 'react-router-dom';

export default function Preview() {
	return (
		<div className="relative px-[16rem] md:px-[95rem] pt-[40rem] md:pt-[100rem] flex flex-col md:flex-row">
			<div className="flex flex-col items-center md:block">
				<div className="text-[32rem] md:text-[48rem] font-bold leading-[140%] w-full md:w-[735rem] mb-[20rem] md:mb-[34rem]">
					<span className="text-[#3563E9]">Многопрофильная</span> клиника мужского и женского
					здоровья{' '}
				</div>
				<div className="mb-[30rem] w-full md:w-[557rem] text-[#242E49] text-[16rem] md:text-[18rem] font-normal leading-[160%]">
					В нашей клинике вы можете быть уверены, что вас лечат специалисты, которым можно доверять.
					Наша команда врачей имеет высокие профессиональные стандарты
				</div>
				<Link
					to="/services"
					className="cursor-pointer duration-200 mb-[437rem] md:mb-[170rem] w-full md:w-[201rem] h-[50rem] px-[20rem] rounded-[8rem] border-[1px] border-[#242E49] hover:border-[#3563E9] flex items-center justify-center text-[16rem] md:text-[16rem] hover:text-[#3563E9] font-semibold leading-[150%] md:tracking-[-0.32rem]">
					Узнать больше
				</Link>
			</div>
			<div className='z-[10] absolute md:translate-x-[700rem] right-[31rem] md:inset-auto bottom-0 md:-translate-y-[50rem] bg-[url("./assets/doc-preview.png")] w-[306rem] md:w-[477rem] h-[388rem] md:h-[630rem] bg-cover bg-no-repeat'></div>
		</div>
	);
}
