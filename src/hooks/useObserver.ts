import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

export default function useObserver(
  ref: RefObject<HTMLDivElement>,
  currentCircle: number = 0,
  func: Dispatch<SetStateAction<number>>
) {
  const options = {
    root: document.body,
    rootMargin: "0px",
    threshold: 0.9,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      console.log(e[0].isIntersecting);
      if (e[0].isIntersecting) {
        func(currentCircle);
      }
    }, options);
    window.addEventListener("scroll", () => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      window.addEventListener("scroll", () => {
        if (ref.current) observer.observe(ref.current);
      });
    };
  }, []);
}
