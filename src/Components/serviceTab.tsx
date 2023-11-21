import { useContext } from 'react';
import { ServiceType } from '../@types/appType';
import { AppContext } from '../App';

export default function ServiceTab({ price, serviceName }: ServiceType) {
	const { setActivePopup, setServiceName } = useContext(AppContext);
	return (
		<div
			onClick={() => {
				setServiceName(serviceName);
				setActivePopup(true);
			}}
			className="cursor-pointer duration-[200ms] hover:bg-[#EDF0F4] gap-[10rem] md:gap-[0rem] p-[12rem] md:p-[20rem] w-full bg-[#F6F7F9] rounded-[8rem] flex flex-col md:flex-row items-center justify-between">
			<div className="text-[12rem] text-center md:text-start md:text-[16rem] font-normal leading-[160%]">
				{serviceName}
			</div>
			<div className="text-[12rem] md:text-[20rem] font-medium leading-[160%]">{price}</div>
		</div>
	);
}
