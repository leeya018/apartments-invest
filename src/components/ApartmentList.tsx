import apartmentStore from "@/mobx/apartmentStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import ApartmentCard from "./ApartmentCard";

const ApartmentList = observer(() => {
  return (
    <div className="w-full ">
      <h1>Apartment List</h1>
      <ul className=" grid grid-cols-4 mx-auto gap-3">
        {apartmentStore.apartments.map((apartment, key) => (
          <li
            key={key}
            className={`relative border border-gold leading-7 overflow-hidden rounded-lg shadow-lg 
                pb-2 transition-all duration-300`}
          >
            <ApartmentCard apartment={apartment} />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ApartmentList;
