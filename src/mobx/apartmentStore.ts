import { Apartment } from "@/interfaces/Apartment";
import { apartment } from "@/util";
import { makeAutoObservable } from "mobx";

class ApartmentStore {
  apartments: Apartment[] = apartment;
  chosenApartment: Apartment | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  addApartment(apartment: Apartment) {
    this.apartments.push(apartment);
  }

  chooseApartment(apartment: Apartment) {
    this.chosenApartment = apartment;
  }
}

const apartmentStore = new ApartmentStore();
export default apartmentStore;
