import { addFileApi, addHouseApi, getHousesApi } from "@/firestore";
import { House } from "@/interfaces/House";

import { houses } from "@/util";
import { autorun, makeAutoObservable, toJS } from "mobx";
import userStore from "./userStore";
import { User } from "@/interfaces/User";
import { messageStore } from "./messageStore";

class HouseStore {
  houses: House[] = [];
  chosenHouse: House | null = null;

  constructor() {
    makeAutoObservable(this);
    this.getHouses();
  }

  async addHouse(house: House, Images: File[]) {
    try {
      const user: User = userStore.user;
      const imageUrls = await addFileApi(user, Images);
      if (!imageUrls) {
        throw new Error("could not creaet the imagesUrls ");
      }
      const updatedHouse = { ...house, images: imageUrls };
      const newHouse = await addHouseApi(user, updatedHouse);
      this.houses.push(newHouse);
      messageStore.setMessage("house added successfully", 201);
    } catch (error) {
      console.log(error);
      messageStore.setMessage("Failed to add house ", error?.code || 500);
    }
  }

  async getHouses() {
    try {
      this.houses = await getHousesApi();
    } catch (error) {
      console.log(error);
      messageStore.setMessage("Failed to add house ", error?.code || 500);
    }
  }
  async updateHouse(houseId: string, info: any) {
    this.houses = this.houses.map((house) => {
      if (house.id === houseId) {
        return { ...house, ...info };
      }
      return house;
    });
    // this.chosenHouse = { ...this.chooseHouse, ...info };
  }

  chooseHouse(house: House) {
    this.chosenHouse = house;
  }
}

const houseStore = new HouseStore();
export default houseStore;

autorun(() => {
  console.log(toJS(houseStore.houses));
});
