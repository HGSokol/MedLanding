import { useContext, useState } from "react";
import { AppContext } from "../App";
import usePopup from "../hooks/usePopup";
import ContactFormPopup from "../Components/ContactFormPopup";
import Breadcrumbs from "../Components/Breadcrumbs";
import Tab from "../Components/Tab";
import { dataServices } from "../Components/data/ServiceData";
import Header from "../Layouts/Home/Header";
import Footer from "../Layouts/Home/Footer";
import PriceTitle from "../Layouts/Price/PriceTitle";
import PriceInfo from "../Layouts/Price/PriceInfo";

type DataTabsType = {
  name: string;
};
const dataTabs: DataTabsType[] = [
  { name: "Все услуги" },
  { name: "Гинекология" },
  { name: "Урология" },
  { name: "Эндокринология" },
  { name: "Терапия" },
  { name: "УЗИ-диагностика" },
];

export default function Services() {
  const { activePopup } = useContext(AppContext);
  const [currentTab, setCurrentTab] = useState(0);

  usePopup();
  return (
    <div className="font-mont w-[100vw] bg-[#EDF0F4]">
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
      <PriceTitle />
      <div className="px-[30rem] md:px-[95rem] flex flex-row flex-wrap gap-[10rem] mb-[30rem] md:mb-[60rem]">
        {dataTabs.map((e, i) => {
          const current = currentTab === i;
          return (
            <div onClick={() => setCurrentTab(i)} key={i}>
              <Tab text={e.name} current={current} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-[30rem] md:gap-[50rem] mb-[50rem] md:mb-[100rem]">
        {dataServices
          .filter((e, i) => {
            if (currentTab === 0) return e;
            return i === currentTab - 1;
          })
          .map((e, i) => {
            return (
              <div key={i}>
                <PriceInfo name={e.name} services={e.services} />
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
}
