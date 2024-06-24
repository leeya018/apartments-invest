import { Apartment } from "@/interfaces/Apartment";
import apartmentStore from "@/mobx/apartmentStore";
import { ModalStore } from "@/mobx/modalStore";
import ProgressBar from "@/ui/ProgressBar";
import { modals } from "@/util";
import { observer } from "mobx-react-lite";
import Image from "next/image";

type ApartmentCardProps = {
  apartment: Apartment;
};
const ApartmentCard = observer(({ apartment }: ApartmentCardProps) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        apartmentStore.chooseApartment(apartment);
        ModalStore.openModal(modals.apartment);
      }}
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
          {apartment.price}
        </div>
        <div className="flex flex-col gap-2 line-clamp-3">
          <div className="mb-2">occupancy: {apartment.occupancy}</div>
          <ProgressBar value={apartment.occupancy} />
        </div>
      </div>
    </div>
  );
});

export default ApartmentCard;
