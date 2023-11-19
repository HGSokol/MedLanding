import { useContext, useState } from "react";
import { AppContext } from "../App";
import usePopup from "../hooks/usePopup";
import Breadcrumbs from "../Components/Breadcrumbs";
import ContactFormPopup from "../Components/ContactFormPopup";
import Tab from "../Components/Tab";
import DoctorCard from "../Components/doctorCard";
import { teamData } from "../Components/data/DoctorsData";
import Header from "../Layouts/Home/Header";
import Footer from "../Layouts/Home/Footer";
import DoctorsTitle from "../Layouts/Doctors/DoctorsTitle";

type DoctorsType = {
  name: string;
};
const dataTabs: DoctorsType[] = [
  { name: "Все врачи" },
  { name: "Гинекологи" },
  { name: "Урологи" },
  { name: "Эндокринологи" },
  { name: "Терапевты" },
  { name: "УЗИ-специалисты" },
];

export default function Doctors() {
  const { activePopup } = useContext(AppContext);
  const [currentTab, setCurrentTab] = useState("Все врачи");

  usePopup();

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
      <DoctorsTitle />
      <div className="px-[30rem] md:px-[95rem] flex flex-row flex-wrap gap-[10rem] mb-[30rem] md:mb-[60rem]">
        {dataTabs.map((e, i) => {
          const current = currentTab === e.name;
          return (
            <div onClick={() => setCurrentTab(e.name)} key={i}>
              <Tab text={e.name} current={current} />
            </div>
          );
        })}
      </div>
      <div className="px-[30rem] md:px-[95rem] flex flex-row flex-wrap gap-[25rem] mb-[30rem] md:mb-[100rem]">
        {teamData
          .filter((e) => {
            if (currentTab === "Все врачи") return e;
            return e.department === currentTab;
          })
          .map((e, i) => {
            return (
              <div key={i} className="w-full md:w-[293rem]">
                <DoctorCard
                  name={e.name}
                  position={e.position}
                  image={e.image}
                />
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
}
