export default function ClinicImage() {
  return (
    <div className="flex flex-row flex-wrap gap-[8rem] md:gap-[25rem]">
      <div className='w-full md:w-[590rem] h-[210rem] md:h-[340rem] rounded-[8rem] md:rounded-[16rem] bg-[url("./assets/clinicFrame1.png")] bg-no-repeat bg-cover'></div>
      <div className='w-[calc(50%-4rem)] md:w-[305rem] h-[210rem] md:h-[340rem] rounded-[8rem] md:rounded-[16rem] bg-[url("./assets/clinicFrame2.png")] bg-no-repeat bg-cover'></div>
      <div className='w-[calc(50%-4rem)] md:w-[305rem] h-[210rem] md:h-[340rem] rounded-[8rem] md:rounded-[16rem] bg-[url("./assets/clinicFrame3.png")] bg-no-repeat bg-cover'></div>
    </div>
  );
}
