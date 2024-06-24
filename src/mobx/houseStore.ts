import { addHouseFirestore } from "@/firestore";
import { House } from "@/interfaces/House";

import { houses } from "@/util";
import { makeAutoObservable } from "mobx";
import userStore from "./userStore";
import { User } from "@/interfaces/User";
import { messageStore } from "./messageStore";

class HouseStore {
  houses: House[] = houses;
  chosenHouse: House | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async addHouse(house: House) {
    try {
      const user: User = userStore.user;
      const newHouse = await addHouseFirestore(user, house);
      this.houses.push(newHouse);
      messageStore.setMessage("house added successfully", 201);
    } catch (error) {
      console.log(error);
      messageStore.setMessage("Failed to add house ", error?.code || 500);
    }
  }

  chooseHouse(house: House) {
    this.chosenHouse = house;
  }
}

const houseStore = new HouseStore();
export default houseStore;
