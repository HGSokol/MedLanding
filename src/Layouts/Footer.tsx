import React from 'react'

export default function Footer() {
  return (
    <footer className='pt-[50rem] pb-[30rem] px-[95rem] w-full h-[340rem] bg-[#3563E9] flex flex-col gap-[72rem]'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col w-[403rem] gap-[18rem]'>
            <div className='text-[34rem] text-[#FFF] font-semibold leading-[140%]'>Логотип</div>
            <div className='text-[14rem] font-normal leadig-[160%] text-[#FFF]'>Наша клиника — это федеральная сеть многопрофильных медицинских центров. Мы помогаем на всех уровнях: от амбулаторного до хирургического лечения.</div>
          </div>
          <div className='flex flex-row gap-[133rem] pt-[30rem]'>
            <div className='flex flex-col gap-[20rem] text-[16rem] text-[#FFF] leading-[160%]'>
              <div className='cursor-pointer hover:underline'>Услуги</div>
              <div className='cursor-pointer hover:underline'>Цены</div>
              <div className='cursor-pointer hover:underline'>Врачи</div>
            </div>
            <div className='flex flex-col gap-[20rem] text-[16rem] text-[#FFF] leading-[160%]' >
              <div className='cursor-pointer hover:underline'>Контакты</div>
              <div className='cursor-pointer hover:underline'>Клиника</div>
            </div>
          </div>
          <div className='flex flex-col gap-[22rem] pt-[30rem]'>
            <div className='flex flex-col gap-[5rem] text-[16rem] text-[#FFF]'>
              <div className='font-normal leading-[160%]'>Телефон</div>
              <div className='font-semibold leading-[160%] hover:underline'>+7 (977) 897-74-16</div>
            </div>
            <div className='flex flex-col gap-[5rem] text-[16rem] text-[#FFF]'>
              <div className='font-normal leading-[160%]'>E-mail</div>
              <div className='font-semibold leading-[160%] hover:underline'>superclinika@gmail.com</div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between text-[#FFF] text-[14rem] font-normal leading-[160%]'>
          <div>Политика конфиденциальности</div>
          <div>Политика конфиденциальности</div>
          <div>© OOO “Клиника”, 2023г.</div>
        </div>
    </footer>
  )
}
