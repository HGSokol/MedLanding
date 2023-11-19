import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-[30rem] md:pt-[50rem] md:pb-[30rem] md:px-[95rem] w-full md:h-[340rem] bg-[#3563E9] flex flex-col gap-[50rem] md:gap-[72rem]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col pt-[25rem] md:pt-[0rem] md:w-[403rem] gap-[15rem] md:gap-[18rem]">
          <div className="text-[34rem] text-center md:text-start text-[#FFF] font-semibold leading-[140%]">
            Логотип
          </div>
          <div className="text-[14rem] text-center md:text-start font-normal leadig-[160%] text-[#FFF]">
            Наша клиника — это федеральная сеть многопрофильных медицинских
            центров. Мы помогаем на всех уровнях: от амбулаторного до
            хирургического лечения.
          </div>
        </div>
        <div className="flex flex-row justify-between md:justify-start md:gap-[133rem] pt-[50rem] md:pt-[30rem]">
          <div className="flex flex-col gap-[20rem] text-[16rem] text-[#FFF] leading-[160%]">
            <Link to="/services" className="cursor-pointer hover:underline">
              Услуги
            </Link>
            <Link to="/services" className="cursor-pointer hover:underline">
              Цены
            </Link>
            <Link to="/doctors" className="cursor-pointer hover:underline">
              Врачи
            </Link>
          </div>
          <div className="flex flex-col gap-[20rem] text-[16rem] text-[#FFF] leading-[160%]">
            <Link to="/contacts" className="cursor-pointer hover:underline">
              Контакты
            </Link>
            <Link to="/clinic" className="cursor-pointer hover:underline">
              Клиника
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[10rem] md:gap-[22rem] pt-[50rem] md:pt-[30rem]">
          <div className="flex flex-row md:flex-col justify-between md:justify-start gap-[5rem] text-[16rem] text-[#FFF]">
            <div className="font-normal leading-[160%]">Телефон</div>
            <div className="font-semibold leading-[160%] hover:underline">
              +7 (977) 897-74-16
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-between md:justify-start gap-[5rem] text-[16rem] text-[#FFF]">
            <div className="font-normal leading-[160%]">E-mail</div>
            <div className="font-semibold leading-[160%] hover:underline">
              superclinika@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[25rem] md:mb-[0rem] flex flex-col gap-[10rem] md:gap-[0rem] md:flex-row items-center justify-between text-[#FFF] text-[14rem] font-normal leading-[160%]">
        <div>Политика конфиденциальности</div>
        <div>Политика конфиденциальности</div>
        <div>© OOO “Клиника”, 2023г.</div>
      </div>
    </footer>
  );
}
