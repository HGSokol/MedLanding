import { useContext } from "react";
import { AppContext } from "../App";
import { TeamCardType } from "../@types/appType";

type TeamCardExtendType = Pick<TeamCardType, "image" | "name" | "position"> & {
  currentSlider: boolean;
};

export default function TeamCard({
  image,
  name,
  position,
  currentSlider,
}: TeamCardExtendType) {
  const { setActivePopup } = useContext(AppContext);

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
          className="cursor-pointer duration-200 bg-[#3563E9] hover:bg-[#1941B9] p-[20rem] h-[46rem] rounded-[8rem] text-[16rem] font-semibold leading-[160%] text-[#FFF] flex items-center justify-center"
        >
          Записаться
        </div>
      )}
    </div>
  );
}
