import { useContext } from 'react';
import { AppContext } from '../App';
import Form from './Form';
import SendResult from './SendResult';

export default function ContactFormPopup() {
	const { setActivePopup, send, setDoctorName, setServiceName } = useContext(AppContext);

	return (
		<>
			{send ? (
				<SendResult />
			) : (
				<div className="relative mx-[10rem] w-[calc(100%-20rem)] md:w-[600rem] h-max md:h-[538rem] bg-[#F6F7F9] rounded-[12rem] md:rounded-[20rem] p-[30rem] md:p-[50rem] text-[#242E49] flex flex-col">
					<div className="text-center text-[22rem] md:text-[30rem] font-bold leading-[160%] md:leading-[56rem] tracking-[-0.6rem] mb-[6rem]">
						Запись на прием
					</div>
					<div className="text-center text-[12rem] md:text-[16rem] font-medium leading-[160%] mb-[20rem] md:mb-[38rem]">
						Оставьте ваши контактные данные и наш менеджер свяжется с вами в ближайшее время
					</div>
					<Form />
					<div
						onClick={() => {
							setDoctorName('');
							setServiceName('');
							setActivePopup(false);
						}}
						className="cursor-pointer absolute top-[15rem] md:top-[20rem] right-[20rem] md:right-[30rem]">
						<svg
							className="w-[30rem] h-[30rem]"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M22.8002 22.7992L7.2002 7.19922M22.8002 7.19922L7.2002 22.7992"
								stroke="#242E49"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			)}
		</>
	);
}
