import { useContext } from "react";
import { AppContext } from "../App";
import Breadcrumbs from "../Components/Breadcrumbs";
import ContactFormPopup from "../Components/ContactFormPopup";
import Footer from "../Layouts/Home/Footer";
import Header from "../Layouts/Home/Header";
import usePopup from "../hooks/usePopup";
import Title from "../Components/Titile";
import Address from "../Components/Address";

export default function Contacts() {
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
        title="Контактные данные"
        text="Вы всегда можете нас найти и связаться с нами. Мы готовы ответить на ваши вопросы, поделиться информацией и оказать медицинскую помощь"
      />
      <Address height={"573"} />
      <Footer />
    </div>
  );
}
