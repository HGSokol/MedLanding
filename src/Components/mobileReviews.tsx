import { Dispatch, SetStateAction, useRef } from "react";
import { ReviewsType } from "../Layouts/Home/Reviews";
import useObserver from "../hooks/useObserver";
import ReviewCard from "./reviewCard";

type MobileReviewsType = {
  element: ReviewsType[];
  number: number;
  setActiveCircle: Dispatch<SetStateAction<number>>;
};

export default function MobileReviews({
  element,
  number,
  setActiveCircle,
}: MobileReviewsType) {
  const currentRef = useRef<HTMLDivElement | null>(null);

  useObserver(currentRef, number, setActiveCircle);

  return (
    <div className="flex flex-col gap-[10rem] snap-center">
      {element.map((e, i) => {
        return (
          <div ref={currentRef} key={i}>
            <ReviewCard
              name={e.name}
              date={e.date}
              image={e.image}
              text={e.text}
            />
          </div>
        );
      })}
    </div>
  );
}
