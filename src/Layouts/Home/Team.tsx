import { useContext, useState } from "react";
import TeamCard from "../../Components/teamCard";
import image1 from "../../assets/teamFrame1.png";
import image2 from "../../assets/teamFrame2.png";
import image3 from "../../assets/teamFrame3.png";
import { AppContext } from "../../App";

export type TeamCardType = {
  image: string;
  name: string;
  position: string;
};

const teamData: TeamCardType[] = [
  {
    name: "Деконский Павел Николаевич",
    position: "Врач уролог, первая квалификация",
    image: image1,
  },
  {
    name: "Власова Ольга Николаевна",
    position: "Акушер-гинеколог, репродуктолог",
    image: image2,
  },
  {
    name: "Антипенко Инна Игоревна",
    position: "Акушер-гинеколог, репродуктолог",
    image: image3,
  },
  {
    name: "Маликова Анна Петровна",
    position: "Врач уролог, первая квалификация",
    image: image1,
  },
  {
    name: "Архипенко Инна Игоревна",
    position: "Врач уролог, первая квалификация",
    image: image2,
  },
  {
    name: "Деконский Павел Николаевич",
    position: "Врач уролог, первая квалификация",
    image: image3,
  },
  {
    name: "Деконский Павел Николаевич",
    position: "Врач уролог, первая квалификация",
    image: image1,
  },
  {
    name: "Деконский Павел Николаевич",
    position: "Врач уролог, первая квалификация",
    image: image2,
  },
  {
    name: "Деконский Павел Николаевич",
    position: "Врач уролог, первая квалификация",
    image: image3,
  },
];

export default function Team() {
  const { setActivePopup } = useContext(AppContext);
  const [currentSliderList, setCurrentSliderList] = useState<number>(0);
  const [range, setRange] = useState(0);

  function changeRange(signs: string) {
    if (currentSliderList >= 2 && currentSliderList <= teamData.length - 3) {
      signs === "plus"
        ? setRange((prev) => prev + 1)
        : setRange((prev) => prev - 1);
    }
  }

  const left = () => {
    if (currentSliderList >= 1) {
      setCurrentSliderList((prev) => prev - 1);

      changeRange("minus");
    }
  };
  const right = () => {
    if (currentSliderList <= teamData.length - 2) {
      setCurrentSliderList((prev) => prev + 1);

      changeRange("plus");
    }
  };

  return (
    <div className="relative mb-[150rem] flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col w-full items-center text-center gap-[18rem] mb-[60rem]">
        <div className="text-[36rem] font-bold leading-[56rem] tracking-[-0.72rem]">
          Наши специалисты
        </div>
        <div className="text-[18rem] font-medium leading-[160%] w-[766rem]">
          Наши врачи обладают высокой квалификацией, богатым опытом и всегда
          готовы предоставить качественное медицинское обслуживание
        </div>
      </div>
      <div className="">
        <div
          className="px-[25rem] mb-[40rem] flex flex-row w-max gap-[25rem]"
          style={{
            transform: `translateX(-${range * 320}rem)`,
          }}
        >
          {teamData.map((e, i) => {
            const currentSlide = currentSliderList === i;
            return (
              <div key={i}>
                <TeamCard
                  currentSlider={currentSlide}
                  image={e.image}
                  name={e.name}
                  position={e.position}
                  setActivePopup={setActivePopup}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row gap-[24rem] w-full items-center justify-center">
        <div
          onClick={left}
          className="w-[55rem] h-[55rem] border-[1rem] rounded-full p-[15rem] cursor-pointer"
        >
          <svg
            className="w-[24rem] h-[24rem] rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.536 12.8528L2.33278 12.8528L2.33278 11.8528L20.536 11.8528L21.4025 11.8528L20.9689 11.1026C20.8616 10.9171 20.7289 10.7428 20.5711 10.585L15.9749 5.98881L16.682 5.2817L21.2782 9.8779C22.645 11.2447 22.645 13.4608 21.2782 14.8276L16.682 19.4238L15.9749 18.7167L20.5711 14.1205C20.7289 13.9627 20.8616 13.7885 20.9689 13.603L21.4025 12.8528L20.536 12.8528Z"
              fill="#242E49"
              stroke="#242E49"
            />
          </svg>
        </div>
        <div
          onClick={right}
          className="w-[55rem] h-[55rem] border-[1rem] rounded-full p-[15rem] cursor-pointer"
        >
          <svg
            className="w-[24rem] h-[24rem]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.536 12.8528L2.33278 12.8528L2.33278 11.8528L20.536 11.8528L21.4025 11.8528L20.9689 11.1026C20.8616 10.9171 20.7289 10.7428 20.5711 10.585L15.9749 5.98881L16.682 5.2817L21.2782 9.8779C22.645 11.2447 22.645 13.4608 21.2782 14.8276L16.682 19.4238L15.9749 18.7167L20.5711 14.1205C20.7289 13.9627 20.8616 13.7885 20.9689 13.603L21.4025 12.8528L20.536 12.8528Z"
              fill="#242E49"
              stroke="#242E49"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
