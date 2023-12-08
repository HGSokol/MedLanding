import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import image1 from '../../assets/historyClinic.png';
import img from '../../assets/Im.svg';

export default function History() {
	const isMobile = window.innerWidth > 768 ? 475 : 210;
	return (
		<div className="px-[16rem] md:px-[95rem] mb-[40rem] md:mb-[120rem] flex flex-col md:flex-row gap-[30rem] md:gap-[60rem]">
			<div className="md:pb-[50rem] md:sticky md:top-[140rem] h-full w-full md:w-[400rem] flex flex-col gap-[22rem] md:gap-[40rem] text-[16rem]">
				<div className="flex flex-col gap-[6rem]">
					<div className="font-bold leading-[160%]">Адрес</div>
					<div className="w-[304rem] md:w-auto font-medium leading-[160%]">
						Москва, вн.тер.г. муниципальный округ Дорогомилово, Кутузовский пр-кт, д. 18, пом. 4/2
					</div>
				</div>
				<div className="flex flex-col gap-[6rem]">
					<div className="font-bold leading-[160%]">Телефон</div>
					<div className="text-[#3563E9] font-medium leading-[160%]">+8 (903) 799-30-30</div>
				</div>
				<div className="flex flex-col gap-[6rem]">
					<div className="font-bold leading-[160%]">Время работы call-центра</div>
					<div className="font-medium leading-[160%]">Пн - Вс: с 7:00 до 22:00</div>
				</div>
			</div>
			<div className="w-full md:w-[1050rem]">
				<div className="flex flex-col gap-[10rem] md:gap-[24rem] mb-[40rem] md:mb-[50rem]">
					<div className="text-[20rem] md:text-[24rem] font-semibold leading-[160%]">
						История компании
					</div>
					<div className="w-full md:w-[856rem] text-[16rem] font-normal leading-[160%]">
						Наша история началась в 2018 году. Тогда в Москве мы открыли свою первую клинику всего
						на 4 амбулаторных кабинета. Затем там же появились еще 2 клиники и большой
						многопрофильный центр. В 2020 году была основана генетическая лаборатория “Medical
						Genomics”. Сейчас она крупнейшая в России. Помимо пренатальной диагностики и
						преимплантационного генетического тестирования при беременности здесь проводятся
						медико-генетические анализы, установление отцовства и родства, криминалистический анализ
						ДНК, генеалогические исследования.
					</div>
					<div className="w-full md:w-[856rem] text-[16rem] font-normal leading-[160%]">
						Наша история началась в 2018 году. Тогда в Москве мы открыли свою первую клинику всего
						на 4 амбулаторных кабинета. Затем там же появились еще 2 клиники и большой
						многопрофильный центр. В 2020 году была основана генетическая лаборатория “Medical
						Genomics”. Сейчас она крупнейшая в России. Помимо пренатальной диагностики и
						преимплантационного генетического тестирования при беременности здесь проводятся
						медико-генетические анализы, установление отцовства и родства, криминалистический анализ
						ДНК, генеалогические исследования.
					</div>
				</div>
				<div className="flex flex-col mb-[30rem] md:mb-[50rem]">
					<div className="text-[20rem] md:text-[24rem] font-semibold leading-[160%] mb-[10rem] md:mb-[24rem]">
						Наши достижения
					</div>
					<div className="w-full md:w-[856rem] text-[16rem] font-normal leading-[160%] mb-[24rem]">
						Наша история началась в 2018 году. Тогда в Москве мы открыли свою первую клинику всего
						на 4 амбулаторных кабинета. Затем там же появились еще 2 клиники и большой
						многопрофильный центр. В 2020 году была основана генетическая лаборатория “Medical
						Genomics”. Сейчас она крупнейшая в России. Помимо пренатальной диагностики и
						преимплантационного генетического тестирования при беременности здесь проводятся
						медико-генетические анализы, установление отцовства и родства, криминалистический анализ
						ДНК, генеалогические исследования.
					</div>
					<div className="w-full md:w-[856rem] text-[16rem] font-normal leading-[160%] mb-[20rem] md:mb-[40rem]">
						Наша история началась в 2018 году. Тогда в Москве мы открыли свою первую клинику всего
						на 4 амбулаторных кабинета. Затем там же появились еще 2 клиники и большой
						многопрофильный центр. В 2020 году была основана генетическая лаборатория “Medical
						Genomics”. Сейчас она крупнейшая в России. Помимо пренатальной диагностики и
						преимплантационного генетического тестирования при беременности здесь проводятся
						медико-генетические анализы, установление отцовства и родства, криминалистический анализ
						ДНК, генеалогические исследования.
					</div>
					<img
						className="w-full md:w-[856rem] h-[340rem] md:h-[475rem] mb-[24rem] md:mb-[40rem] object-cover rounded-[16rem]"
						src={image1}
						alt="history"
					/>
					<div className="w-full md:w-[856rem] text-[16rem] font-normal leading-[160%]">
						Наша история началась в 2018 году. Тогда в Москве мы открыли свою первую клинику всего
						на 4 амбулаторных кабинета. Затем там же появились еще 2 клиники и большой
						многопрофильный центр. В 2020 году была основана генетическая лаборатория “Medical
						Genomics”. Сейчас она крупнейшая в России. Помимо пренатальной диагностики и
						преимплантационного генетического тестирования при беременности здесь проводятся
						медико-генетические анализы, установление отцовства и родства, криминалистический анализ
						ДНК, генеалогические исследования.
					</div>
				</div>
				<div className="flex flex-col mb-[50rem]">
					<div className="text-[20rem] md:text-[24rem] font-semibold leading-[160%] mb-[70rem] md:mb-[24rem]">
						Наше месторасположение
					</div>
					<div className="w-full md:w-[856rem] text-[16rem] font-normal leading-[160%] mb-[24rem] md:mb-[40rem]">
						Добраться до медицинского центра "Надежда" от метро Щелковская можно на общественном
						транспорте. Номера автобусов т41, т32, т83, 735, 171, 3, 68. На схеме ниже отображено в
						каких местах можно сесть на эти автобусы около метро Щелковская. На первом варианте
						отображены места посадки на автобусы т41, т32, т83, 735, 171. Необходимо выйти из метро
						под номером - 4. И пройти до автобусных остановок указанных на схеме. Конечная остановка
						- Хабаровская улица 4.
					</div>

					<YMaps>
						<div className="rounded-[22rem] overflow-hidden">
							<Map
								width={'100%'}
								height={`${isMobile}rem`}
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
			</div>
		</div>
	);
}
