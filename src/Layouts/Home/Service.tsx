import ServiceCard from "../../Components/serviceCard";
import image1 from "../../assets/gynecological.png";
import image2 from "../../assets/hand-card.png";
import image3 from "../../assets/back-card.png";
import image4 from "../../assets/gloves-card.png";
import image5 from "../../assets/tech-card.png";
import { dataTabs } from "../../Pages/Services";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";

export type ServiceCardType = {
  title: string;
  description: string;
  image?: string;
};

const data: ServiceCardType[] = [
  {
    title: "Наши услуги",
    description:
      "Здесь вы найдете высококачественную медицинскую помощь и дружелюбную атмосферу, которая поможет вам почувствовать себя комфортно.",
  },
  {
    title: "Гинекология",
    description: "Доказательный подход к заботе о женском здоровье",
    image: image1,
  },
  {
    title: "Урология",
    description: "Доказательный подход к заботе о женском здоровье",
    image: image2,
  },
  {
    title: "Эндокринология",
    description: "Доказательный подход к заботе о женском здоровье",
    image: image3,
  },
  {
    title: "Гастроэнтерология",
    description: "Ранняя диагностика и лечение заболеваний",
    image: image4,
  },
  {
    title: "Диагностика",
    description: "Проводим широкий спектр диагностики",
    image: image5,
  },
];

export default function Service() {
  const { setCurrentTabService } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="relative px-[16rem] md:px-[95rem] pt-[65rem] md:pt-[90rem] flex flex-col gap-[30rem] md:gap-[46rem] mb-[70rem] md:mb-[150rem]">
      <div className="w-full md:w-[756rem] text-[28rem] md:text-[36rem] font-bold leading-[140%] md:leading-[56rem] tracking-[-0.72rem] text-[#242E49]">
        <span className="text-[#3563E9]">Наши услуги</span> - это
        высококачественное заботливое обслуживание
      </div>
      <div className="flex flex-row flex-wrap w-full gap-[16rem] md:gap-[25rem]">
        {data.map((e, index) => (
          <div
            onClick={() => {
              const currentPage = dataTabs.map((item) => {
                return item.name.indexOf(e.title);
              });

              currentPage.indexOf(0) === -1
                ? setCurrentTabService(0)
                : setCurrentTabService(currentPage.indexOf(0));

              navigate("/services");
            }}
            key={index}
          >
            <ServiceCard
              title={e.title}
              description={e.description}
              image={e.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
