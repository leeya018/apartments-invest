import houseStore from "@/mobx/houseStore";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import ProgressBar from "../ui/ProgressBar";
import SliderSizes from "@/ui/Slicder";
import { useState } from "react";
import { messageStore } from "@/mobx/messageStore";
import userStore from "@/mobx/userStore";
import { addHouseToUserApi, updateHouseApi } from "@/firestore";
import { auth } from "@/firebase";
import { CircularProgress } from "@mui/material";

const ApartmentInfo = observer(() => {
  const [portionToBuy, setPortionToBuy] = useState(0);
  const { chosenHouse } = houseStore;
  if (!chosenHouse) {
    throw new Error("chosen Apartment is null");
  }

  const buyHouse = async () => {
    try {
      console.log(userStore.user.uid);
      if (!chosenHouse.id) throw new Error("house has no id");
      const newProperty = {
        houseId: chosenHouse.id,
        portion: portionToBuy,
        buyPrice: getPrice(),
      };
      await addHouseToUserApi(userStore.user.uid, newProperty);
      userStore.addProperty(newProperty);
      await updateHouseApi(chosenHouse.id, {
        occupency: Number(chosenHouse.occupency) + portionToBuy,
      });
      houseStore.updateHouse(chosenHouse.id, {
        occupency: Number(chosenHouse.occupency) + portionToBuy,
      });
      messageStore.setMessage(
        "Propery has added succesfully to user porpreties",
        200
      );
    } catch (error) {
      console.log(error);
      messageStore.setMessage(error.message, 500);
    }
  };

  const getPrice = () => {
    return ((chosenHouse.price * portionToBuy) / 100).toFixed(2); //nnumber
  };
  return (
    <div className="bg-card-gradient">
      {/* <CircularProgress disableShrink />; */}
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
          <div className="mb-2">occupency: {chosenHouse.occupency}</div>
          <ProgressBar value={chosenHouse.occupency} />
        </div>
        <div className=" flex flex-col gap-2 line-clamp-3">
          <div className="mb-2">choose portion:</div>
          <SliderSizes
            onChange={(e) => setPortionToBuy(e.target.value)}
            value={portionToBuy}
            max={100 - chosenHouse.occupency}
          />
        </div>
        <div className="mt-2 flex flex-col gap-2 line-clamp-3">
          <div>portion to buy:{portionToBuy}%</div>
          <div className="mt-2">value:{getPrice()}$</div>
          <button
            onClick={buyHouse}
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
