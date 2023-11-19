import Form from "../../Components/Form";

export default function ClinicPromo() {
  return (
    <div className="px-[95rem] mb-[150rem] flex flex-row gap-[129rem]">
      <div className="flex flex-col gap-[34rem]">
        <div className="text-[36rem] font-bold leading-[56rem] tracking-[-0.72rem]">
          <span className="text-[#3563E9]">Наша клиника</span> - это место, где
          забота о вашем здоровье на первом месте
        </div>
        <div className="w-[602rem] text-[18rem] font-medium leading-[160%]">
          Здесь вы найдете высококачественную медицинскую помощь и дружелюбную
          атмосферу, которая поможет вам почувствовать себя комфортно и уверенно
          на пути к выздоровлению.
        </div>
      </div>
      <div className="py-[10rem]">
        <Form />
      </div>
    </div>
  );
}
