import ServiceTab from '../../Components/serviceTab';
import { DataServicesType } from '../../Pages/Price';

export default function PriceInfo({ name, services }: DataServicesType) {
	return (
		<div className="px-[95rem]">
			<div className="mb-[20rem] text-[26rem] font-semibold leading-[56rem] tracking-[-0.52rem]">
				{name}
			</div>
			<div className="flex flex-col gap-[16rem]">
				{services.map((e, i) => {
					return (
						<div key={i}>
							<ServiceTab serviceName={e.serviceName} price={e.price} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
