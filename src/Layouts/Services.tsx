import ServiceCard from "../Components/serviceCard";
import image1 from '../assets/gynecological.png'
import image2 from '../assets/hand-card.png'
import image3 from '../assets/back-card.png'
import image4 from '../assets/gloves-card.png'
import image5 from '../assets/tech-card.png'

export type ServiceCardType = {
    title: string,
    description: string,
    image?: string,
}

const data: ServiceCardType[] = [
    {
        title: 'Наши услуги',
        description: 'Здесь вы найдете высококачественную медицинскую помощь и дружелюбную атмосферу, которая поможет вам почувствовать себя комфортно.',
    },
    {
        title: 'Гинекология',
        description: 'Доказательный подход к заботе о женском здоровье',
        image: image1,
    },
    {
        title: 'Урология',
        description: 'Доказательный подход к заботе о женском здоровье',
        image: image2,
    },
    {
        title: 'Эндокринология',
        description: 'Доказательный подход к заботе о женском здоровье',
        image: image3,
    },
    {
        title: 'Терапевтия',
        description: 'Ранняя диагностика и лечение заболеваний',
        image: image4,
    },
    {
        title: 'УЗИ-диагностика',
        description: 'УЗИ во время беременности и другие виды диагностики',
        image: image5,
    }
]


export default function Services() {
    return (
      <div className='relative  px-[95rem] pt-[90rem] flex flex-col gap-[46rem] mb-[150rem]'>
        <div className='w-[756rem] text-[36rem] font-bold leading-[56rem] tracking-[-0.72rem] text-[#242E49]'><span className='text-[#3563E9]'>Наши услуги</span> - это высококачественное заботливое обслуживание</div>
        <div className='flex flex-row flex-wrap w-full gap-[25rem]'>
            {
                data.map((e, index)  => (
                    <div key={index}>
                        <ServiceCard  title={e.title} description={e.description} image={e.image}/>
                    </div>
                ))
            }
        </div>
      </div>
    )
  }
  