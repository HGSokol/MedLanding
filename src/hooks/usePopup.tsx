import { useContext, useEffect } from "react";
import { AppContext } from "../App";

export default function usePopup() {
  const { setActivePopup } = useContext(AppContext);

  useEffect(() => {
    document.addEventListener("click", closePopup);
    return () => {
      document.removeEventListener("click", closePopup);
    };
  }, []);

  function closePopup(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;

    if (target.matches("#contactForm")) {
      setActivePopup(false);
    }
  }
}
