import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import img from "../assets/Im.svg";

export default function Address({ height }: { height: string }) {
  return (
    <div className="px-[16rem] md:px-[95rem] mb-[70rem] md:mb-[100rem] flex flex-col gap-[22rem] md:gap-[40rem]">
      <div className="flex flex-col md:flex-row gap-[22rem] md:gap-[0rem] justify-start md:justify-between text-[16rem] md:text-[18rem]">
        <div>
          <div className="mb-[6rem] md:mb-[10rem] text-[14rem] md: font-semibold leading-[160%]">
            Адрес
          </div>
          <div className=" font-normal leading-[160%]">
            Москва, Кутузовский пр-кт, д. 18, пом. 4/2
          </div>
        </div>
        <div>
          <div className="mb-[6rem] md:mb-[10rem] font-semibold leading-[160%]">
            Время работы call-центра
          </div>
          <div className="font-normal leading-[160%]">
            Пн - Вс: с 7:00 до 22:00
          </div>
        </div>
        <div>
          <div className="mb-[6rem] md:mb-[10rem] font-semibold leading-[160%]">
            Телефон
          </div>
          <div className=" text-[#3563E9] font-normal leading-[160%]">
            +8 (903) 799-30-30
          </div>
        </div>
        <div>
          <div className="mb-[6rem] md:mb-[10rem] font-semibold leading-[160%]">
            E-mail
          </div>
          <div className=" underline text-[#3563E9] font-normal leading-[160%]">
            biochek@inbox.ru
          </div>
        </div>
      </div>
      <div className="rounded-[22rem]">
        <YMaps>
          <div className="rounded-[22rem] overflow-hidden">
            <Map
              width={"100%"}
              height={`${height}rem`}
              defaultState={{
                center: [55.746922, 37.551465],
                zoom: 14,
                controls: [],
              }}
            >
              <Placemark
                geometry={[55.746922, 37.551465]}
                options={{
                  iconLayout: "default#image",
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
  );
}
