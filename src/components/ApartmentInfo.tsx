import { Apartment } from "@/interfaces/Apartment";
import apartmentStore from "@/mobx/apartmentStore";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import ProgressBar from "../ui/ProgressBar";
import SliderSizes from "@/ui/Slicder";
import { useState } from "react";

const ApartmentInfo = observer(() => {
  const [portionToBuy, setPortionToBuy] = useState(0);
  const { chosenApartment } = apartmentStore;
  if (!chosenApartment) {
    throw new Error("chosen Apartment is null");
  }
  return (
    <div className="bg-card-gradient">
      <Image
        className="w-full h-6/10"
        alt={"house"}
        width={500}
        height={500}
        src={chosenApartment.images[0]}
      />
      <div className="p-3">
        <h2 className=" text-xl font-semibold mt-2 line-clamp-1">
          {chosenApartment.title}
        </h2>
        <div className="flex flex-col gap-2 line-clamp-3">
          {chosenApartment.description}
        </div>
        <div className="flex flex-col gap-2 line-clamp-3">
          {chosenApartment.location}
        </div>
        <div className="flex flex-col gap-2 line-clamp-3">
          {chosenApartment.price}$
        </div>

        <div className="flex flex-col gap-2 line-clamp-3">
          <div className="mb-2">occupancy: {chosenApartment.occupancy}</div>
          <ProgressBar value={chosenApartment.occupancy} />
        </div>
        <div className=" flex flex-col gap-2 line-clamp-3">
          <div className="mb-2">choose portion:</div>
          <SliderSizes
            onChange={(e) => setPortionToBuy(e.target.value)}
            value={portionToBuy}
            max={100 - chosenApartment.occupancy}
          />
        </div>
        <div className="mt-2 flex flex-col gap-2 line-clamp-3">
          <div>portion to buy:{portionToBuy}%</div>
          <div className="mt-2">
            value:{((chosenApartment.price * portionToBuy) / 100).toFixed(2)}$
          </div>
          <button
            disabled={portionToBuy === 0}
            className={`button mt-2 ${
              portionToBuy > 0
                ? "border-white text-white"
                : "border-gray text-gray"
            }`}
          >
            buy
          </button>
        </div>
      </div>
    </div>
  );
});

export default ApartmentInfo;
