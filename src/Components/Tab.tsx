type PriceTabsType = {
  text: string;
  current: boolean;
};

export default function Tab({ text, current }: PriceTabsType) {
  return (
    <div
      className={`cursor-pointer rounded-[100rem] max-h-[46rem] px-[24rem] py-[12rem] flex items-center justify-center text-[14rem] font-semibold leading-[160%] ${
        current ? "text-[#FFF] bg-[#3563E9]" : "text-[#3563E9] bg-[#D0E4FF]"
      }`}
    >
      {text}
    </div>
  );
}
