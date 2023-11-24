import Form from '../../Components/Form';

export default function ClinicPromo() {
	return (
		<div className="px-[16rem] md:px-[95rem] mb-[70rem] md:mb-[150rem] flex flex-col md:flex-row gap-[40rem] md:gap-[129rem]">
			<div className="flex flex-col gap-[30rem] md:gap-[34rem]">
				<div className="text-[28rem] md:text-[36rem] font-bold leading-[140%] md:leading-[56rem] tracking-[-0.72rem]">
					<span className="text-[#3563E9]">Наша клиника</span> - это место, где забота о вашем
					здоровье на первом месте
				</div>
				<div className="w-full md:w-[602rem] text-[16rem] md:text-[18rem] font-medium leading-[160%]">
					Здесь вы найдете высококачественную медицинскую помощь и дружелюбную атмосферу, которая
					поможет вам почувствовать себя комфортно и уверенно на пути к выздоровлению.
				</div>
			</div>
			<div className="py-[10rem]">
				<Form />
			</div>
		</div>
	);
}
