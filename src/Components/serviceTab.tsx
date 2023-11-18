import { ServiceType } from '../Pages/Price';

export default function ServiceTab({ price, serviceName }: ServiceType) {
	return (
		<div className="hover:bg-[#EDF0F4] p-[20rem] w-full bg-[#F6F7F9] rounded-[8rem] flex flex-row items-center justify-between">
			<div className="text-[16rem] font-normal leading-[160%]">{serviceName}</div>
			<div className="text-[20rem] font-medium leading-[160%]">{price}</div>
		</div>
	);
}
