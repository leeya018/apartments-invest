import { House } from "@/interfaces/House";
import houseStore from "@/mobx/houseStore";
import { ModalStore } from "@/mobx/modalStore";
import { BorderLinearProgress, modals } from "@/util";
import { observer } from "mobx-react-lite";
import Image from "next/image";

type HouseCardProps = {
  house: House;
  canSeleted: boolean;
};
const HouseCard = observer(({ house, canSeleted = true }: HouseCardProps) => {
  return (
    <div
      className={canSeleted ? "cursor-pointer" : "cursor-default"}
      onClick={() => {
        if (canSeleted) {
          houseStore.chooseHouse(house);
          ModalStore.openModal(modals.house);
        }
      }}
    >
      <Image
        className="w-full h-6/10"
        alt={"house"}
        width={500}
        height={500}
        src={house.images[0]}
      />
      <div className="p-3">
        <h2 className=" text-xl font-semibold mt-2 line-clamp-1">
          {house.title}
        </h2>
        <div className="flex flex-col gap-2 line-clamp-3">
          {house.description}
        </div>
        <div className="flex flex-col gap-2 line-clamp-3">{house.location}</div>
        <div className="flex flex-col gap-2 line-clamp-3">{house.price}</div>
        <div className="flex flex-col gap-2 line-clamp-3">
          <div className="mb-2">occupency: {house.occupency}</div>
          <BorderLinearProgress variant="determinate" value={house.occupency} />
        </div>
      </div>
    </div>
  );
});

export default HouseCard;
