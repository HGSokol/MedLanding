import Header from "../Layouts/Home/Header";
import Preview from "../Layouts/Home/Preview";
import Services from "../Layouts/Home/Services";
import Footer from "../Layouts/Home/Footer";

import Clinic from "../Layouts/Home/Clinic";
import Reviews from "../Layouts/Home/Reviews";
import Team from "../Layouts/Home/Team";
import Contacts from "../Layouts/Home/Contacts";
import { useContext } from "react";
import ContactFormPopup from "../Components/ContactFormPopup";
import { AppContext } from "../App";
import usePopup from "../hooks/usePopup";

export default function Home() {
  const { activePopup } = useContext(AppContext);
  usePopup();
  return (
    <div className="font-mont w-[100vw] bg-[#F6F7F9]">
      {activePopup && (
        <div
          id="contactForm"
          className="h-[100vh] bg-slate-200 w-[100vw] grid items-center place-content-center z-[100] fixed bg-[#242E49CC]/[0.8]"
        >
          <ContactFormPopup />
        </div>
      )}
      <div className='relative bg-[url("./assets/bg-preview.png")] bg-no-repeat bg-cover overflow-hidden'>
        <div className="relative bg-gradient-radial w-full h-full">
          <div className="absolute translate-x-[650rem] -translate-y-[0rem]">
            <div className="">
              <svg
                className="w-[831rem] h-[831rem]"
                width="791"
                height="851"
                viewBox="0 0 791 851"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="434.98"
                  cy="416.022"
                  r="26.0323"
                  stroke="white"
                  stroke-opacity="0.1"
                  strokeWidth="40"
                />
                <circle
                  cx="435"
                  cy="416"
                  r="80"
                  stroke="white"
                  stroke-opacity="0.1"
                  strokeWidth="40"
                />
                <circle
                  cx="435.5"
                  cy="415.5"
                  r="147.5"
                  stroke="white"
                  stroke-opacity="0.1"
                  strokeWidth="40"
                />
                <circle
                  cx="435"
                  cy="416"
                  r="214"
                  stroke="white"
                  stroke-opacity="0.1"
                  strokeWidth="40"
                />
                <circle
                  cx="435.5"
                  cy="415.5"
                  r="281.5"
                  stroke="white"
                  stroke-opacity="0.1"
                  strokeWidth="40"
                />
                <circle
                  cx="434.5"
                  cy="416.5"
                  r="348.5"
                  stroke="white"
                  stroke-opacity="0.1"
                  strokeWidth="40"
                />
                <circle
                  cx="435.5"
                  cy="415.5"
                  r="415.5"
                  stroke="white"
                  stroke-opacity="0.1"
                  strokeWidth="40"
                />
              </svg>
            </div>
          </div>
          <Header />
          <Preview />
        </div>
      </div>
      <main>
        <Services />
        <Clinic />
        <Reviews />
        <Team />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
