import { Dispatch, SetStateAction, useContext, useRef } from "react";
import { AppContext } from "../App";
import { TeamCardType } from "../@types/appType";
import useObserver from "../hooks/useObserver";

type TeamCardExtendType = Pick<TeamCardType, "image" | "name" | "position"> & {
  currentSlider: boolean;
  setActiveCircle: Dispatch<SetStateAction<number>>;
  activeCircle: number;
  number: number;
};

export default function TeamCard({
  image,
  name,
  position,
  currentSlider,
  activeCircle,
  setActiveCircle,
  number,
}: TeamCardExtendType) {
  const { setActivePopup, setDoctorName } = useContext(AppContext);
  const currentRef = useRef<HTMLDivElement | null>(null);

  useObserver(currentRef, number, setActiveCircle);

  return (
    <div ref={currentRef} className="flex flex-col gap-[22rem]">
      <div>
        <img
          className="w-[343rem] md:w-[310rem] h-[345rem] rounded-[16rem] object-cover object-top"
          src={image}
          alt={name}
        />
      </div>
      <div className="w-[343rem] md:w-[310rem] h-[70rem] flex flex-col gap-[8rem] text-center">
        <div
          className={`duration-[500ms] text-[18rem] font-semibold leading-[160%] md:${
            currentSlider ? "text-[#3563E9]" : "text-[#242E49]"
          } ${activeCircle === number ? "text-[#3563E9]" : "text-[#242E49]"}`}
        >
          {name}
        </div>
        <div className="text-[14rem] font-medium leading-[160%] text-[#5D6A85]">
          {position}
        </div>
      </div>
      <div
        onClick={() => {
          setDoctorName(name);
          setActivePopup(true);
        }}
        className={`${
          currentSlider ? "md:flex" : "md:hidden"
        } cursor-pointer duration-[500ms] bg-[#3563E9] hover:bg-[#1941B9] p-[20rem] h-[46rem] rounded-[8rem] text-[16rem] font-semibold leading-[160%] text-[#FFF] flex items-center justify-center`}
      >
        Записаться
      </div>
    </div>
  );
}
