import apartmentStore from "@/mobx/apartmentStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";

const ApartmentList = observer(() => {
  return (
    <div className="w-full ">
      <h1>Apartment List</h1>
      <ul className=" grid grid-cols-4 mx-auto gap-3">
        {apartmentStore.apartments.map((apartment) => (
          <li
            className={`relative border border-gold leading-7 overflow-hidden rounded-lg shadow-lg 
                pb-2 transition-all duration-300`}
          >
            <Image
              className="w-full h-6/10"
              alt={"house"}
              width={500}
              height={500}
              src={apartment.images[0]}
            />
            <div className="p-3">
              <h2 className=" text-xl font-semibold mt-2 line-clamp-1">
                {apartment.title}
              </h2>
              <div className="flex flex-col gap-2 line-clamp-3">
                {apartment.description}
              </div>
              <div className="flex flex-col gap-2 line-clamp-3">
                {apartment.location}
              </div>
              <div className="flex flex-col gap-2 line-clamp-3">
                {apartment.price_per_day}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ApartmentList;
