type TitleType = {
  title: string;
  text: string;
};

export default function Title({ title, text }: TitleType) {
  return (
    <div className="px-[30rem] md:px-[95rem] mb-[30rem] md:mb-[60rem]">
      <div className="mb-[8rem] md:mb-[34rem] text-[28rem] md:text-[40rem] font-bold leading-[140%]">
        {title}
      </div>
      <div className="w-full md:w-[790rem] text-[14rem] md:text-[18rem] font-medium leading-[160%]">
        {text}
      </div>
    </div>
  );
}
