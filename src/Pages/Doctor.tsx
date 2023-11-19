import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import Header from "../Layouts/Home/Header";
import Footer from "../Layouts/Home/Footer";
import Breadcrumbs from "../Components/Breadcrumbs";
import ContactFormPopup from "../Components/ContactFormPopup";
import Address from "../Components/Address";
import usePopup from "../hooks/usePopup";
import { teamData } from "../Components/data/DoctorsData";

export default function Doctor() {
  const { activePopup } = useContext(AppContext);
  const params = useParams();
  usePopup();

  const { name, position, image, specialization, training } = teamData.filter(
    (e) => e.name === params.name
  )[0];

  return (
    <div className="font-mont bg-[#EDF0F4]">
      {activePopup && (
        <div
          id="contactForm"
          className="h-[100vh] bg-slate-200 w-[100vw] grid items-center place-content-center z-[100] fixed bg-[#242E49CC]/[0.8]"
        >
          <ContactFormPopup />
        </div>
      )}
      <Header />
      <Breadcrumbs />
      <div className="px-[95rem] mb-[100rem] flex flex-row gap-[60rem]">
        <div className="w-[334rem] flex flex-col gap-[36rem]">
          <img
            className="w-[334rem] h-[372rem] rounded-[14rem]"
            src={image}
            alt={name}
          />
          <div className="w-full h-[50rem] rounded-[8rem] flex items-center justify-center px-[20rem] duration-200 bg-[#3563E9] hover:bg-[#1941B9] text-[#FFF] text-[16rem] font-semibold leading-[160%]">
            Записаться
          </div>
        </div>
        <div className="w-[856rem] flex flex-col gap-[50rem]">
          <div>
            <div className="mb-[10rem] text-[30rem] font-bold leading-[140%]">
              {name}
            </div>
            <div className="text-[16rem] font-normal leading-[160%]">
              {position}
            </div>
          </div>
          <div>
            <div className="mb-[24rem] text-[24rem] font-semibold leading-[160%]">
              Специализация
            </div>
            <div className="text-[16rem] font-normal leading-[160%]">
              {specialization}
            </div>
          </div>
          <div>
            <div className="mb-[24rem] text-[24rem] font-semibold leading-[160%]">
              Обучение и повышение квалификации
            </div>
            <div className="flex flex-col gap-[20rem]">
              {training.map((e, i) => {
                return (
                  <div key={i} className="text-[16rem]">
                    <div className="mb-[6rem] font-semibold leading-[160%]">
                      {e.year}
                    </div>
                    <div className="font-normal leading-[160%]">{e.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Address height="360" />
      <Footer />
    </div>
  );
}
