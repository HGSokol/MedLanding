import ServiceTab from "../../Components/ServiceTab";
import { DataServicesType } from "../../@types/appType";

export default function PriceInfo({
  name,
  services,
  searchText,
}: { searchText: string } & DataServicesType) {
  return (
    <div className="px-[16rem] md:px-[95rem]">
      <div className="mb-[20rem] text-[20rem] md:text-[26rem] font-semibold leading-[160%] md:leading-[56rem] md:tracking-[-0.52rem]">
        {name}
      </div>
      <div className="flex flex-col gap-[16rem]">
        {services
          .filter((e) => {
            if (searchText.length > 0) {
              return e.serviceName
                .toLowerCase()
                .includes(searchText.toLowerCase());
            } else {
              return e;
            }
          })
          .map((e, i) => {
            return (
              <div key={i}>
                <ServiceTab serviceName={e.serviceName} price={e.price} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
