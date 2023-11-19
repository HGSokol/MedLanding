type TitleType = {
  title: string;
  text: string;
};

export default function Title({ title, text }: TitleType) {
  return (
    <div className="px-[95rem] mb-[60rem]">
      <div className="mb-[34rem] text-[40rem] font-bold leading-[140%]">
        {title}
      </div>
      <div className="w-[790rem] text-[18rem] font-medium leading-[160%]">
        {text}
      </div>
    </div>
  );
}
