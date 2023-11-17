import Header from "../Layouts/Header";
import Preview from "../Layouts/Preview";
import Services from "../Layouts/Services";
import Footer from "../Layouts/Footer";

import ReactLogo from "../assets/circle.svg";
import Clinic from "../Layouts/Clinic";
import Reviews from "../Layouts/Reviews";
import Team from "../Layouts/Team";
import Contacts from "../Layouts/Contacts";

export default function App() {
  return (
    <div className="font-mont w-[100vw]">
      <div className='relative bg-[url("./assets/bg-preview.png")] bg-no-repeat bg-cover overflow-hidden'>
        <div className="bg-gradient-radial w-full h-full">
          <div className="z-[1] absolute translate-x-[650rem] -translate-y-[0rem]">
            <img
              className="w-[831rem] aspect-square"
              src={ReactLogo}
              alt="React Logo"
            />
          </div>
          <Header />
          <Preview />
        </div>
      </div>
      <Services />
      <Clinic />
      <Reviews />
      <Team />
      <Contacts />
      <Footer />
    </div>
  );
}
