import { Dispatch, SetStateAction, useRef } from "react";
import useObserver from "../hooks/useObserver";

type MobileReviewsType = {
  element: string;
  number: number;
  setActiveCircle: Dispatch<SetStateAction<number>>;
};

export default function ClinicImageMobile({
  element,
  number,
  setActiveCircle,
}: MobileReviewsType) {
  const currentRef = useRef<HTMLImageElement | null>(null);

  useObserver(currentRef, number, setActiveCircle);

  return (
    <img
      ref={currentRef}
      src={element}
      className={`w-[343rem] snap-center h-[340rem] bg-no-repeat bg-contain`}
    />
  );
}
