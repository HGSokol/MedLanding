import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function Address({ height }: { height: string }) {
	return (
		<div className="px-[30rem] md:px-[95rem] mb-[25rem] md:mb-[100rem] flex flex-col gap-[30rem] md:gap-[40rem]">
			<div className="flex flex-col md:flex-row gap-[15rem] md:gap-[0rem] justify-start md:justify-between text-[14rem] md:text-[18rem]">
				<div>
					<div className="md:mb-[10rem] text-[14rem] md: font-semibold leading-[160%]">Адрес</div>
					<div className=" font-normal leading-[160%]">Москва, Мичуринский пр-т, д. 15</div>
				</div>
				<div>
					<div className="md:mb-[10rem]  font-semibold leading-[160%]">
						Время работы call-центра
					</div>
					<div className=" font-normal leading-[160%]">Пн - Вс: с 7:00 до 22:00</div>
				</div>
				<div>
					<div className="md:mb-[10rem]  font-semibold leading-[160%]">Телефон</div>
					<div className=" text-[#3563E9] font-normal leading-[160%]">+8 (903) 799-30-30</div>
				</div>
				<div>
					<div className="md:mb-[10rem]  font-semibold leading-[160%]">E-mail</div>
					<div className=" underline text-[#3563E9] font-normal leading-[160%]">
						biochek@inbox.ru
					</div>
				</div>
			</div>
			<div className="rounded-[8rem] md:rounded-[22rem]">
				<YMaps>
					<div className="rounded-[8rem] md:rounded-[22rem] overflow-hidden">
						<Map
							width={'1250rem'}
							height={`${height}rem`}
							defaultState={{ center: [55.696757, 37.511697], zoom: 16 }}
						/>
					</div>
				</YMaps>
			</div>
		</div>
	);
}
