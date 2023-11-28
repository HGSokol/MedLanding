import { useContext, useRef, useState } from "react";
import InputMask from "react-input-mask";
import { AppContext } from "../App";

export default function Form() {
  const { setSend, setActivePopup, doctorName, serviceName } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isPhoneFocus, setIsPhoneFocus] = useState(false);

  const inputNameRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = () => {
    if (!name) {
      setNameError(true);
    }
    if (!phone) {
      setPhoneError(true);
    }
    if (!checkbox) {
      setCheckboxError(true);
    }

    if (name && phone && checkbox) {
      setName("");
      setPhone("");
      setCheckbox(false);

      const formData = {
        name,
        phone: phone.replace(/ /g, ""),
        doctorName,
        serviceName,
      };
      console.log(formData);
      setSend(true);
    }
  };

  return (
    <form>
      <div className="relative mb-[16rem] md:mb-[24rem] ">
        {!isNameFocus && !name && (
          <label
            onClick={() => inputNameRef.current?.focus()}
            className="absolute left-[16rem] top-[14rem] text-[#5D6A85] text-[16rem] font-normal leading-[160%] outline-none"
          >
            Имя<span className="text-[#FF2525]">*</span>
          </label>
        )}
        <input
          ref={inputNameRef}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError(false);
          }}
          onFocus={() => setIsNameFocus(true)}
          onBlur={() => setIsNameFocus(false)}
          type="text"
          className={`${
            nameError && "bg-[#FF2525]/[0.05] border-[#FF2525] border-[1rem]"
          } text-[16rem] font-normal leading-[160%] outline-none w-full h-[50rem] md:h-[56rem] rounded-[8rem] px-[16rem] py-[8rem]`}
        />
      </div>
      <div className="relative mb-[22rem] md:mb-[28rem] ">
        {!isPhoneFocus && !phone && (
          <label
            onClick={() => document.getElementById("phoneInput")?.focus()}
            className="absolute left-[16rem] top-[14rem] text-[#5D6A85] text-[16rem] font-normal leading-[160%] outline-none"
          >
            Телефон<span className="text-[#FF2525]">*</span>
          </label>
        )}
        <InputMask
          mask={`${
            phone.slice(0, 2).includes("8")
              ? "9 ( 999 ) 999 - 99 - 99"
              : "+9 ( 999 ) 999 - 99 - 99"
          }`}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setPhoneError(false);
          }}
          onFocus={() => setIsPhoneFocus(true)}
          onBlur={() => setIsPhoneFocus(false)}
          type="text"
          id="phoneInput"
          className={` ${
            phoneError && "bg-[#FF2525]/[0.05] border-[#FF2525] border-[1rem]"
          } text-[16rem] font-normal leading-[160%] outline-none w-full h-[50rem] md:h-[56rem] rounded-[8rem] px-[16rem] py-[8rem]`}
        />
      </div>
      <div className="flex flex-row gap-[12rem] mb-[22rem] md:mb-[28rem]">
        <div
          onClick={() => {
            setCheckbox((prev) => !prev);
            setCheckboxError(false);
          }}
          className={`${
            checkbox
              ? "bg-[#3563E9]"
              : checkboxError
              ? "bg-[#FF2525]/[0.05]"
              : "bg-white"
          } ${
            checkboxError && " border-[#FF2525] border-[1rem]"
          } cursor-pointer w-[20rem] h-[20rem] flex items-center justify-center rounded-[4rem] 
					`}
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
        <div className="w-[calc(90%-4rem)] md:w-[450rem] text-[12rem] font-normal leading-[160%]">
          Нажимая кнопку «Записаться на прием», я даю согласие на обработку моих
          персональных данных.
        </div>
      </div>
      <button
        onClick={() => {
          if (name && phone && checkbox) {
            setActivePopup(true);
          }

          onSubmit();
        }}
        type="button"
        className="cursor-pointer w-full h-[50rem] md:h-[56rem] px-[20rem] flex items-center justify-center duration-200 bg-[#3563E9] hover:bg-[#1941B9] rounded-[8rem] text-[16rem] text-[#FFF] font-semibold leading-[160%] "
      >
        Записаться на прием
      </button>
    </form>
  );
}
