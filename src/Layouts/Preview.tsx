export default function Preview() {
  return (
    <div className="relative px-[95rem] pt-[100rem] flex flex-row">
      <div>
        <div className="text-[48rem] font-bold leading-[140%] w-[735rem] mb-[34rem]">
          <span className="text-[#3563E9]">Многопрофильная</span> клиника
          мужского и женского здоровья{" "}
        </div>
        <div className="mb-[36rem] w-[557rem] text-[#242E49] text-[18rem] font-normal leading-[160%]">
          В нашей клинике вы можете быть уверены, что вас лечат специалисты,
          которым можно доверять. Наша команда врачей имеет высокие
          профессиональные стандарты
        </div>
        <div className="mb-[170rem] w-[201rem] h-[50rem] px-[20rem] rounded-[8rem] border-[1px] border-[#242E49] flex items-center justify-center text-[16rem] font-semibold leading-[150%] tracking-[-0.32rem]">
          Узнать больше
        </div>
      </div>
      <div className='z-[10] absolute translate-x-[700rem] -translate-y-[50rem] bg-[url("./assets/doc-preview.png")] w-[477rem] h-[630rem] bg-cover bg-no-repeat'></div>
    </div>
  );
}
