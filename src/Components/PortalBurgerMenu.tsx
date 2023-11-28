import { Dispatch, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

type PortalMenu = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function PortalBurgerMenu({ isOpen, setIsOpen }: PortalMenu) {
  useEffect(() => {
    document.addEventListener("click", closePopup);
    return () => {
      document.removeEventListener("click", closePopup);
    };
  });

  function closePopup(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;

    if (target.matches("#portalMenu")) {
      setIsOpen(false);
    }
  }

  return createPortal(
    <div
      id="portalMenu"
      className={`${
        isOpen ? "z-[500] translate-x-0" : "z-[-1] -translate-x-[1000rem]"
      } overflow-y-hidden md:hidden fixed top-0 w-full max-h-[100vh] duration-[300ms] delay-[300ms] text-[#242E49]`}
    >
      <div className="p-[16rem] flex flex-col w-[100vw] h-[100dvh] bg-[#EDF0F4] ">
        <div className="flex h-[46rem] mb-[72rem] flex-row items-center justify-between">
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="mr-[16rem] md:mr-[0rem] hamburger md:hidden"
          >
            <div
              className="burger burger1"
              style={{ transform: `${isOpen ? "rotate(45deg)" : "rotate(0)"}` }}
            />
            <div
              className="burger burger2"
              style={{
                transform: `${isOpen ? "translateY(100%)" : "translateY(0)"}`,
                opacity: `${isOpen ? 0 : 1}`,
              }}
            />
            <div
              className="burger burger3"
              style={{
                transform: `${isOpen ? "rotate(-45deg)" : "rotate(0)"}`,
              }}
            />
          </div>
          <Link
            to="/"
            className="duration-200 text-[19rem] font-semibold leading-[140%]"
          >
            Логотип
          </Link>
        </div>
        <div className="flex flex-col items-center gap-[24rem] text-[20rem] font-medium leading-[140%] duration-200 pb-[49rem]">
          <Link to="/services" className="hover:text-[#3563E9] duration-200">
            Услуги и цены
          </Link>
          <div className="w-[245rem] h-[1rem] bg-[#F6F7F9]"></div>
          <Link to="/doctors" className="hover:text-[#3563E9] duration-200">
            Врачи
          </Link>
          <div className="w-[245rem] h-[1rem] bg-[#F6F7F9]"></div>
          <Link to="/clinic" className="hover:text-[#3563E9] duration-200">
            Клиника
          </Link>
          <div className="w-[245rem] h-[1rem] bg-[#F6F7F9]"></div>
          <Link to="/contacts" className="hover:text-[#3563E9] duration-200">
            Контакты
          </Link>
        </div>
        <div className="flex items-end justify-center pb-[70rem] grow-[3] w-full text-center text-[20rem] font-medium leading-[140%]">
          +8 (903) 799-30-30
        </div>
      </div>
    </div>,
    document.getElementById("root")!
  );
}
