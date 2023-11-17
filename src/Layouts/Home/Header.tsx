import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function Header() {
  const { setActivePopup } = useContext(AppContext);
  return (
    <header className="relative flex flex-row px-[95rem] h-[102rem] justify-between items-center w-[100%]">
      <div className="flex flex-row items-center">
        <Link
          to="/"
          className="text-[28rem] font-semibold leading-[160%] text-[#242E49] mr-[55rem]"
        >
          Логотип
        </Link>
        <div className="flex flex-row gap-[40rem] text-[16rem] font-medium leading-[160%] text-[#242E49] duration-200">
          <Link
            to="/price"
            className="z-[10] cursor-pointer hover:text-[#3563E9] duration-200"
          >
            Услуги и цены
          </Link>
          <Link
            to="/doctors"
            className="z-[10] cursor-pointer hover:text-[#3563E9] duration-200"
          >
            Врачи
          </Link>
          <Link
            to="/clinic"
            className="z-[10] cursor-pointer hover:text-[#3563E9] duration-200"
          >
            Клиника
          </Link>
          <Link
            to="/contacts"
            className="z-[10] cursor-pointer hover:text-[#3563E9] duration-200"
          >
            Контакты
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-[36rem] font-semibold leading-[160%] items-center">
        <div className="z-[10] text-[18rem] text-[#242E49]">
          +8 (495) 897-74-16
        </div>
        <div
          onClick={() => setActivePopup(true)}
          className="z-[10] text-[16rem] text-[white] flex items-center justify-center w-[230rem] h-[46rem] px-[20rem] bg-[#3563E9] rounded-[8rem] cursor-pointer"
        >
          Записаться на прием
        </div>
      </div>
    </header>
  );
}
