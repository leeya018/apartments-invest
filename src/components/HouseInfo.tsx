import apartmentStore from "@/mobx/houseStore";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import ProgressBar from "../ui/ProgressBar";
import SliderSizes from "@/ui/Slicder";
import { useState } from "react";

const ApartmentInfo = observer(() => {
  const [portionToBuy, setPortionToBuy] = useState(0);
  const { chosenHouse } = apartmentStore;
  if (!chosenHouse) {
    throw new Error("chosen Apartment is null");
  }
  return (
    <div className="bg-card-gradient">
      <Image
        className="w-full h-6/10"
        alt={"house"}
        width={500}
        height={500}
        src={chosenHouse.images[0]}
      />
      <div className="p-3">
        <h2 className=" text-xl font-semibold mt-2 line-clamp-1">
          {chosenHouse.title}
        </h2>
        <div className="flex flex-col gap-2 line-clamp-3">
          {chosenHouse.description}
        </div>
        <div className="flex flex-col gap-2 line-clamp-3">
          {chosenHouse.location}
        </div>
        <div className="flex flex-col gap-2 line-clamp-3">
          {chosenHouse.price}$
        </div>

        <div className="flex flex-col gap-2 line-clamp-3">
          <div className="mb-2">occupancy: {chosenHouse.occupancy}</div>
          <ProgressBar value={chosenHouse.occupancy} />
        </div>
        <div className=" flex flex-col gap-2 line-clamp-3">
          <div className="mb-2">choose portion:</div>
          <SliderSizes
            onChange={(e) => setPortionToBuy(e.target.value)}
            value={portionToBuy}
            max={100 - chosenHouse.occupancy}
          />
        </div>
        <div className="mt-2 flex flex-col gap-2 line-clamp-3">
          <div>portion to buy:{portionToBuy}%</div>
          <div className="mt-2">
            value:{((chosenHouse.price * portionToBuy) / 100).toFixed(2)}$
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
