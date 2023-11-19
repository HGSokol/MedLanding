import { YMaps, Map } from "@pbe/react-yandex-maps";

export default function Address({ height }: { height: string }) {
  return (
    <div className="px-[95rem] mb-[100rem] flex flex-col gap-[40rem]">
      <div className="flex flex-row justify-between">
        <div>
          <div className="mb-[10rem] text-[18rem] font-semibold leading-[160%]">
            Адрес
          </div>
          <div className="text-[18rem] font-normal leading-[160%]">
            Москва, Мичуринский пр-т, д. 15
          </div>
        </div>
        <div>
          <div className="mb-[10rem] text-[18rem] font-semibold leading-[160%]">
            Время работы call-центра
          </div>
          <div className="text-[18rem] font-normal leading-[160%]">
            Пн - Вс: с 7:00 до 22:00
          </div>
        </div>
        <div>
          <div className="mb-[10rem] text-[18rem] font-semibold leading-[160%]">
            Телефон
          </div>
          <div className="text-[18rem] text-[#3563E9] font-normal leading-[160%]">
            +7 (977) 897-74-16
          </div>
        </div>
        <div>
          <div className="mb-[10rem] text-[18rem] font-semibold leading-[160%]">
            E-mail
          </div>
          <div className="text-[18rem] underline text-[#3563E9] font-normal leading-[160%]">
            superclinika@gmail.com
          </div>
        </div>
      </div>
      <div className="rounded-[22rem]">
        <YMaps>
          <div className="rounded-[22rem] overflow-hidden">
            <Map
              width={"1250rem"}
              height={`${height}rem`}
              defaultState={{ center: [55.696757, 37.511697], zoom: 16 }}
            />
          </div>
        </YMaps>
      </div>
    </div>
  );
}
