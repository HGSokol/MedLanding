import { Link } from "react-router-dom";
import ClinicImage from "../../Components/ClinicImage";

export default function ClinicHome() {
  return (
    <div className="relative px-[16rem] md:px-[95rem] flex flex-col mb-[70rem] md:mb-[150rem]">
      <div className="flex flex-col md:flex-row gap-[30rem] md:gap-[0rem] justify-between mb-[30rem] md:mb-[60rem]">
        <div className="w-full md:w-[621rem] text-[28rem] md:text-[36rem] font-bold leading-[150%] md:leading-[56rem] md:tracking-[-0.72rem]">
          <span className="text-[#3563E9]">Наша клиника</span> - это место, где
          забота о вашем здоровье на первом месте.
        </div>
        <div className="w-full md:w-[544rem] md:pt-[10rem] flex flex-col gap-[18rem] md:gap-[22rem] ">
          <div className="text-[#5D6A85] text-[16rem] md:text-[18rem] font-medium leading-[160%]">
            Здесь вы найдете высококачественную медицинскую помощь и дружелюбную
            атмосферу, которая поможет вам почувствовать себя комфортно и
            уверенно на пути к выздоровлению.{" "}
          </div>
          <Link
            to="/clinic"
            className="w-full md:w-[195rem] cursor-pointer flex flex-row items-center text-[#3563E9] text-[16rem] font-semibold leading-[150%] tracking-[-0.32rem] duration-200 gap-[10rem] hover:gap-[20rem]"
          >
            <div>Узнать больше</div>
            <div className="rotate-45">
              <svg
                className="w-[23rem] h-[23rem]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5788 7.1284L5.70718 20L5.00008 19.2929L17.8717 6.4213L18.4844 5.80858L17.6473 5.58472C17.4403 5.52936 17.2232 5.5 17.0001 5.5L10.5001 5.5V4.5H17.0001C18.9331 4.5 20.5001 6.067 20.5001 8V14.5H19.5001V8C19.5001 7.77684 19.4707 7.55976 19.4154 7.35278L19.1915 6.51568L18.5788 7.1284Z"
                  fill="#3563E9"
                  stroke="#3563E9"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <ClinicImage />
    </div>
  );
}
