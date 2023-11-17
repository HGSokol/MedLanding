import { YMaps, Map } from "@pbe/react-yandex-maps";

export default function Contacts() {
  return (
    <div className="relative px-[95rem] mb-[150rem] flex flex-row">
      <div className="mr-[107rem]">
        <YMaps>
          <div className="rounded-[22rem] overflow-hidden">
            <Map
              width={"652rem"}
              height={"511rem"}
              defaultState={{ center: [55.696757, 37.511697], zoom: 16 }}
            />
          </div>
        </YMaps>
      </div>
      <div className="pt-[54rem]">
        <div className="mb-[40rem] text-[36rem] font-bold leading-[56rem] tracking-[-0.72rem]">
          Наши контакты
        </div>
        <div className="flex flex-col gap-[28rem]">
          <div className="flex flex-col gap-[6rem]">
            <div className="text-[18rem] text-[#242E49] font-medium leading-[160%]">
              Адрес:
            </div>
            <div className="text-[18rem] text-[#242E49] font-semibold leading-[160%]">
              Москва - Многопрофильный медицинский центр, Мичуринский пр-т, д.
              15
            </div>
          </div>
          <div className="flex flex-col gap-[6rem]">
            <div className="text-[18rem] text-[#242E49] font-medium leading-[160%]">
              Телефон:
            </div>
            <div className="text-[18rem] text-[#3563E9] font-semibold leading-[160%]">
              +7 (977) 897-74-16
            </div>
          </div>
          <div className="flex flex-col gap-[6rem]">
            <div className="text-[18rem] text-[#242E49] font-medium leading-[160%]">
              Время работы call-центра:
            </div>
            <div className="text-[18rem] text-[#242E49] font-semibold leading-[160%]">
              Пн - Вс: с 7:00 до 22:00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
