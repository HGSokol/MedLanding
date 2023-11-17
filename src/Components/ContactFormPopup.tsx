import { useState, useContext } from "react";
import { AppContext } from "../App";

export default function ContactFormPopup() {
  const { setActivePopup } = useContext(AppContext);
  const [checkbox, setCheckbox] = useState(false);

  return (
    <div className="relative w-[600rem] h-[538rem] bg-[#F6F7F9] rounded-[20rem] p-[50rem] text-[#242E49] flex flex-col">
      <div className="text-center text-[30rem] font-bold leading-[56rem] tracking-[-0.6rem] mb-[6rem]">
        Запись на прием
      </div>
      <div className="text-center text-[16rem] font-medium leading-[160%] mb-[38rem]">
        Оставьте ваши контактные данные и наш менеджер свяжется с вами в
        ближайшее время
      </div>
      <input
        placeholder="Имя*"
        type="text"
        className="mb-[24rem] text-[16rem] font-normal leading-[160%] outline-none w-full h-[56rem] rounded-[8rem] px-[16rem] py-[8rem]"
      />
      <input
        placeholder="Телефон*"
        type="text"
        className="mb-[28rem] text-[16rem] font-normal leading-[160%] outline-none w-full h-[56rem] rounded-[8rem] px-[16rem] py-[8rem]"
      />
      <div className="flex flex-row gap-[12rem] mb-[28rem]">
        <div
          onClick={() => setCheckbox((prev) => !prev)}
          className={`mr- cursor-pointer w-[20rem] h-[20rem] flex items-center justify-center rounded-[4rem] 
          ${
            checkbox ? "bg-[#3563E9]" : "bg-white"
            // : "bg-[#ff25250d] border-[0.3rem] border-[#FF2525]"
          }`}
        >
          {checkbox && (
            <div id="checkbox">
              <svg
                className="w-[12rem] h-[12rem]"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8984 3.77348L4.89844 9.77348C4.84618 9.82592 4.78408 9.86752 4.71571 9.89591C4.64734 9.9243 4.57403 9.93892 4.5 9.93892C4.42597 9.93892 4.35266 9.9243 4.28429 9.89591C4.21592 9.86752 4.15382 9.82592 4.10156 9.77348L1.47656 7.14848C1.42424 7.09615 1.38273 7.03404 1.35442 6.96567C1.3261 6.89731 1.31152 6.82404 1.31152 6.75004C1.31152 6.67604 1.3261 6.60277 1.35442 6.53441C1.38273 6.46604 1.42424 6.40392 1.47656 6.3516C1.52889 6.29928 1.591 6.25777 1.65937 6.22945C1.72773 6.20114 1.801 6.18656 1.875 6.18656C1.949 6.18656 2.02227 6.20114 2.09063 6.22945C2.159 6.25777 2.22111 6.29928 2.27344 6.3516L4.50047 8.57863L10.1025 2.97754C10.2082 2.87187 10.3515 2.8125 10.5009 2.8125C10.6504 2.8125 10.7937 2.87187 10.8994 2.97754C11.005 3.08321 11.0644 3.22653 11.0644 3.37598C11.0644 3.52542 11.005 3.66874 10.8994 3.77441L10.8984 3.77348Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="w-[450rem] text-[12rem] font-normal leading-[160%]">
          Нажимая кнопку «Записаться на прием», я даю согласие на обработку моих
          персональных данных.
        </div>
      </div>
      <div className="cursor-pointer w-full h-[56rem] px-[20rem] flex items-center justify-center bg-[#3563E9] rounded-[8rem] text-[16rem] text-[#FFF] font-semibold leading-[160%] ">
        Записаться на прием
      </div>
      <div
        onClick={() => setActivePopup(false)}
        className="cursor-pointer absolute top-[30rem] right-[30rem]"
      >
        <svg
          className="w-[30rem] h-[30rem]"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.8002 22.7992L7.2002 7.19922M22.8002 7.19922L7.2002 22.7992"
            stroke="#242E49"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
