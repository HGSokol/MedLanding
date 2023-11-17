import ReviewCard from "../Components/reviewCard";

import image1 from "../assets/reviewImg1.png";
import image2 from "../assets/reviewImg2.png";
import image3 from "../assets/reviewImg3.png";
import image4 from "../assets/reviewImg4.png";
import image5 from "../assets/reviewImg5.png";
import image6 from "../assets/reviewImg6.png";
import image7 from "../assets/reviewImg7.png";
import image8 from "../assets/reviewImg8.png";
import image9 from "../assets/reviewImg9.png";

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

export default function Reviews() {
  return (
    <div className="relative px-[185rem] flex flex-col mb-[150rem]">
      <div className="mb-[60rem] px-[50rem] text-center text-[36rem] font-bold leading-[56rem] tracking-[-0.72rem]">
        <span className="text-[#3563E9]">Отзывы пациентов</span> об обслуживании
        и лечении в нашей клинике
      </div>
      <div className="flex flex-col-reverse flex-wrap-reverse h-[602rem] gap-[16rem]">
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
