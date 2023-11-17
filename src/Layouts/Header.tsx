
export default function Header() {
  return (
    <header className='relative flex flex-row px-[95rem] h-[102rem] justify-between items-center w-[100%]'>
        <div className='flex flex-row items-center'>
            <div className='text-[28rem] font-semibold leading-[160%] text-[#242E49] mr-[55rem]'>Логотип</div>
            <div className='flex flex-row gap-[40rem] text-[16rem] font-medium leading-[160%] text-[#242E49] duration-200'>
                <div className='z-[10] cursor-pointer hover:text-[#3563E9] duration-200'>Услуги и цены</div>
                <div className='z-[10] cursor-pointer hover:text-[#3563E9] duration-200'>Врачи</div>
                <div className='z-[10] cursor-pointer hover:text-[#3563E9] duration-200'>Клиника</div>
                <div className='z-[10] cursor-pointer hover:text-[#3563E9] duration-200'>Контакты</div>
            </div>
        </div>
        <div className='flex flex-row gap-[36rem] font-semibold leading-[160%] items-center'>
            <div className='z-[10] text-[18rem] text-[#242E49]'>+8 (495) 897-74-16</div>
            <div className='z-[10] text-[16rem] text-[white] flex items-center justify-center w-[230rem] h-[46rem] px-[20rem] bg-[#3563E9] rounded-[8rem] cursor-pointer'>Записаться на прием</div>
        </div>
    </header>
  )
}
