import { useContext } from "react";
import { AppContext } from "../App";
import usePopup from "../hooks/usePopup";
import Header from "../Layouts/Home/Header";
import Footer from "../Layouts/Home/Footer";
import ContactFormPopup from "../Components/ContactFormPopup";
import Breadcrumbs from "../Components/Breadcrumbs";

export default function Price() {
  const { activePopup } = useContext(AppContext);
  usePopup();
  return (
    <div className="font-mont w-[100vw]">
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
      <Footer />
    </div>
  );
}
