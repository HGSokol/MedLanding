import { useContext } from "react";
import { AppContext } from "../App";
import Footer from "../Layouts/Home/Footer";
import Header from "../Layouts/Home/Header";
import usePopup from "../hooks/usePopup";
import History from "../Layouts/Clinic/History";
import ClinicPromo from "../Layouts/Clinic/ClinicPromo";
import Breadcrumbs from "../Components/Breadcrumbs";
import ContactFormPopup from "../Components/ContactFormPopup";
import Title from "../Components/Titile";
import ClinicImage from "../Components/clinicImage";

export default function Clinic() {
  const { activePopup } = useContext(AppContext);

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
      <Title
        title="Наша клиника “Клиника”"
        text="Здесь вы найдете полезную информацию о нашей клинике. Узнайте больше о том, как мы можем заботиться о вашем здоровье и благополучии"
      />
      <div className="px-[30rem] md:px-[95rem] mb-[30rem] md:mb-[70rem]">
        <ClinicImage />
      </div>
      <History />
      <ClinicPromo />
      <Footer />
    </div>
  );
}
