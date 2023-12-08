import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import img from '../../assets/Im.svg';

export default function Contacts() {
	const isMobileHeight = window.innerWidth > 768 ? 511 : 210;
	const isMobileWidth = window.innerWidth > 768 ? '652rem' : '100%';
	return (
		<div className="relative px-[16rem] md:px-[95rem] mb-[70rem] md:mb-[150rem] gap-[25rem] md:gap-[0rem] flex flex-col-reverse md:flex-row">
			<div className="md:mr-[107rem]">
				<YMaps>
					<div className="rounded-[22rem] overflow-hidden">
						<Map
							width={`${isMobileWidth}`}
							height={`${isMobileHeight}rem`}
							defaultState={{
								center: [55.746922, 37.551465],
								zoom: 14,
								controls: [],
							}}>
							<Placemark
								geometry={[55.746922, 37.551465]}
								options={{
									iconLayout: 'default#image',
									iconImageHref: img,
									iconImageSize: [32, 32],
									iconImageOffset: [-15, -20],
								}}
							/>
						</Map>
					</div>
				</YMaps>
			</div>
			<div className="md:pt-[54rem]">
				<div className="mb-[30rem] md:mb-[40rem] text-[28rem] md:text-[36rem] font-bold leading-[56rem] tracking-[-0.72rem]">
					Наши контакты
				</div>
				<div className="flex flex-col gap-[22rem] md:gap-[28rem]">
					<div className="flex flex-col gap-[6rem]">
						<div className="text-[16rem] md:text-[18rem] text-[#242E49] font-medium leading-[160%]">
							Адрес:
						</div>
						<div className="text-[16rem] md:text-[18rem] text-[#242E49] font-semibold leading-[160%]">
							Москва, вн.тер.г. муниципальный округ Дорогомилово, Кутузовский пр-кт, д. 18, пом. 4/2
						</div>
					</div>
					<div className="flex flex-col gap-[6rem]">
						<div className="text-[16rem] md:text-[18rem] text-[#242E49] font-medium leading-[160%]">
							Телефон:
						</div>
						<div className="text-[16rem] md:text-[18rem] text-[#3563E9] font-semibold leading-[160%]">
							+8 (903) 799-30-30
						</div>
					</div>
					<div className="flex flex-col gap-[6rem]">
						<div className="text-[16rem] md:text-[18rem] text-[#242E49] font-medium leading-[160%]">
							Время работы call-центра:
						</div>
						<div className="text-[16rem] md:text-[18rem] text-[#242E49] font-semibold leading-[160%]">
							Пн - Вс: с 9:00 до 21:00
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
