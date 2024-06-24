import apartmentStore from "@/mobx/houseStore";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import HouseCard from "./HouseCard";
import houseStore from "@/mobx/houseStore";

const ApartmentList = observer(() => {
  return (
    <div className="w-full ">
      <h1>Apartment List</h1>
      <ul className=" grid grid-cols-4 mx-auto gap-3">
        {houseStore.houses.map((house, key) => (
          <li
            key={key}
            className={`relative border border-gold leading-7 overflow-hidden rounded-lg shadow-lg 
                pb-2 transition-all duration-300`}
          >
            <HouseCard apartment={house} />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ApartmentList;
