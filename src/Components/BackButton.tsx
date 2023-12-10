export default function BackButton() {
  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className="cursor-pointer fixed translate-x-[-50%] md:translate-x-[0] left-[50%] md:left-auto md:right-[10rem] bottom-[50rem] md:bottom-[120rem] p-[10rem] border-1 z-[10] text-[16rem] text-[white] flex items-center justify-center md:w-[75rem] h-[46rem] px-[20rem] duration-200 bg-[#3563E9]/[80%] md:hover:bg-[#1941B9] rounded-[8rem]"
    >
      Вверх
    </div>
  );
}
