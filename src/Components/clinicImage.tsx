import { useState } from 'react';
import img1 from '../assets/clinicFrame1.png';
import img2 from '../assets/clinicFrame2.png';
import img3 from '../assets/clinicFrame3.png';
import ClinicImageMobile from './ClinicImageMobile';

const dataImage: { image: string }[] = [{ image: img1 }, { image: img2 }, { image: img3 }];

export default function ClinicImage() {
	const [activeCircle, setActiveCircle] = useState(0);

	return (
		<div className="">
			<div className="mb-[40rem] md:mb-[0rem] hidden md:flex flex-row flex-wrap gap-[8rem] md:gap-[25rem]">
				<div className='w-full md:w-[590rem] h-[210rem] md:h-[340rem] rounded-[8rem] md:rounded-[16rem] bg-[url("./assets/clinicFrame1.png")] bg-no-repeat bg-cover'></div>
				<div className='w-[calc(50%-4rem)] md:w-[305rem] h-[210rem] md:h-[340rem] rounded-[8rem] md:rounded-[16rem] bg-[url("./assets/clinicFrame2.png")] bg-no-repeat bg-cover'></div>
				<div className='w-[calc(50%-4rem)] md:w-[305rem] h-[210rem] md:h-[340rem] rounded-[8rem] md:rounded-[16rem] bg-[url("./assets/clinicFrame3.png")] bg-no-repeat bg-cover'></div>
			</div>
			<div className="mb-[10rem] md:mb-[0rem] md:hidden snap-mandatory snap-x flex overflow-x-scroll flex-col flex-wrap h-[360rem] gap-x-[16rem]">
				{dataImage.map((e, i) => {
					return (
						<div key={i} className="snap-center w-[343rem]">
							<ClinicImageMobile element={e.image} setActiveCircle={setActiveCircle} number={i} />
						</div>
					);
				})}
			</div>
			<div className="md:hidden flex justify-center items-center gap-[6rem]">
				{dataImage.map((_, i) => {
					return (
						<div key={i}>
							<svg
								className={`w-[8rem] h-[8rem] 
                ${i === activeCircle ? 'fill-[#3563E9] ' : 'fill-[#D0E4FF] '} 
                `}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 9 8"
								fill="none">
								<circle cx="4.5" cy="4" r="4" />
							</svg>
						</div>
					);
				})}
			</div>
		</div>
	);
}
