import { Dispatch, SetStateAction } from "react";
import { TeamCardType } from "../Layouts/Home/Team";

type TeamCardExtendType = TeamCardType & {
  currentSlider: boolean;
  setActivePopup: Dispatch<SetStateAction<boolean>>;
};

export default function TeamCard({
  image,
  name,
  position,
  currentSlider,
  setActivePopup,
}: TeamCardExtendType) {
  return (
    <div className="flex flex-col gap-[22rem]">
      <div>
        <img className="w-[310rem] h-[345rem]" src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-[8rem] text-center">
        <div
          className={`text-[18rem] font-semibold leading-[160%] ${
            currentSlider ? "text-[#3563E9]" : "text-[#242E49]"
          }`}
        >
          {name}
        </div>
        <div className="text-[14rem] font-medium leading-[160%] text-[#5D6A85]">
          {position}
        </div>
      </div>
      {currentSlider && (
        <div
          onClick={() => setActivePopup(true)}
          className="cursor-pointer bg-[#3563E9] p-[20rem] h-[46rem] rounded-[8rem] text-[16rem] font-semibold leading-[160%] text-[#FFF] flex items-center justify-center"
        >
          Записаться
        </div>
      )}
    </div>
  );
}
