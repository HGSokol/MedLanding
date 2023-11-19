import { useContext } from "react";
import { AppContext } from "../App";
import Form from "./Form";

export default function ContactFormPopup() {
  const { setActivePopup } = useContext(AppContext);
  // const [checkbox, setCheckbox] = useState(false);

  return (
    <div className="relative w-[600rem] h-[538rem] bg-[#F6F7F9] rounded-[20rem] p-[50rem] text-[#242E49] flex flex-col">
      <div className="text-center text-[30rem] font-bold leading-[56rem] tracking-[-0.6rem] mb-[6rem]">
        Запись на прием
      </div>
      <div className="text-center text-[16rem] font-medium leading-[160%] mb-[38rem]">
        Оставьте ваши контактные данные и наш менеджер свяжется с вами в
        ближайшее время
      </div>
      <Form />
      <div
        onClick={() => setActivePopup(false)}
        className="cursor-pointer absolute top-[30rem] right-[30rem]"
      >
        <svg
          className="w-[30rem] h-[30rem]"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.8002 22.7992L7.2002 7.19922M22.8002 7.19922L7.2002 22.7992"
            stroke="#242E49"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
