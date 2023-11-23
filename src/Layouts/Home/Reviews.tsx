import { useState } from "react";
import ReviewCard from "../../Components/reviewCard";

import image1 from "../../assets/reviewImg1.png";
import image2 from "../../assets/reviewImg2.png";
import image3 from "../../assets/reviewImg3.png";
import image4 from "../../assets/reviewImg4.png";
import image5 from "../../assets/reviewImg5.png";
import image6 from "../../assets/reviewImg6.png";
import image7 from "../../assets/reviewImg7.png";
import image8 from "../../assets/reviewImg8.png";
import image9 from "../../assets/reviewImg9.png";
import MobileReviews from "../../Components/mobileReviews";

export type ReviewsType = {
  name: string;
  date: string;
  image: string;
  text: string | React.ReactNode;
};

const data: ReviewsType[] = [
  {
    name: "Алина Самойлова",
    date: "4 августа",
    image: image1,
    text: "Очень заботливый персонал!",
  },
  {
    name: "Юлия Межникова",
    date: "16 августа",
    image: image2,
    text: "Врачи были терпеливы ко мне и предложили лечение, которое наконец-то принесло облегчение. Очень благодарна!",
  },
  {
    name: "Алина Стахова",
    date: "23 августа",
    image: image3,
    text: "Спасибо, ваша клиника помогла мне справиться с неприятным диагнозом. Я знаю, что нахожусь в надежных руках 💜",
  },
  {
    name: "Марина Шевчук",
    date: "8 сентября",
    image: image4,
    text: (
      <div>
        "Хочу выразить благодарность{" "}
        <span className="text-[#3563E9]">Власовой Ольге Николаевне</span>.
        Отличный специалист 😊"
      </div>
    ),
  },
  {
    name: "Артур Леонович",
    date: "20 сентября",
    image: image5,
    text: "Всем советую эту клинику 👍 Нашел не только качественное медицинское обслуживание, но и дружелюбный персонал, который всегда готов поддержать.",
  },
  {
    name: "Екатерина Агеенко",
    date: "28 сентября",
    image: image6,
    text: "Отличная клиника, рекомендую!",
  },
  {
    name: "Иван Гордеев",
    date: "30 сентября",
    image: image7,
    text: "Клиника сделала чудо - излечила меня от хронической боли",
  },
  {
    name: "Мария Ковальская",
    date: "2 октября",
    image: image8,
    text: "Спасибо за профессионализм!",
  },
  {
    name: "Максим Дементьев",
    date: "10 октября",
    image: image9,
    text: "Я посещаю эту клинику уже давно и каждый визит был для меня приятным. Я смело рекомендую эту клинику всем, кто ищет качественное медицинское обслуживание!",
  },
];

function unflatData(data: ReviewsType[], count: number) {
  const result = [];
  for (let s = 0, e = count; s < data.length; s += count, e += count)
    result.push(data.slice(s, e));
  return result;
}

export default function Reviews() {
  const [activeCircle, setActiveCircle] = useState(0);

  const mobileData = unflatData(data, 3);

  return (
    <div className="relative px-[16rem] md:px-[185rem] flex flex-col mb-[50rem] md:mb-[150rem]">
      <div className="mb-[30rem] md:mb-[60rem] md:px-[50rem] md:text-center text-[28rem] md:text-[36rem] font-bold leading-[160%] md:leading-[56rem] md:tracking-[-0.72rem]">
        <span className="text-[#3563E9]">Отзывы пациентов</span> об обслуживании
        и лечении в нашей клинике
      </div>
      <div className="md:hidden snap-mandatory snap-x flex overflow-x-scroll flex-col flex-wrap h-[602rem] gap-x-[16rem]">
        {mobileData.map((element, index) => {
          return (
            <div key={index}>
              <MobileReviews
                element={element}
                number={index}
                setActiveCircle={setActiveCircle}
              />
            </div>
          );
        })}
      </div>
      <div className="md:hidden flex justify-center items-center pt-[10rem] gap-[6rem]">
        {mobileData.map((_, i) => {
          return (
            <div key={i}>
              <svg
                className={`w-[8rem] h-[8rem] 
                ${i === activeCircle ? "fill-[#3563E9] " : "fill-[#D0E4FF] "} 
                `}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 9 8"
                fill="none"
              >
                <circle cx="4.5" cy="4" r="4" />
              </svg>
            </div>
          );
        })}
      </div>
      <div className="hidden md:flex flex-col-reverse flex-wrap-reverse h-[622rem] gap-[16rem]">
        {data.map((e) => {
          return (
            <div key={e.name}>
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
    </div>
  );
}
