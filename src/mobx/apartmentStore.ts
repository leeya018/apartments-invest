import { Apartment } from "@/interfaces/Apartment";
import { apartment } from "@/util";
import { makeAutoObservable } from "mobx";

class ApartmentStore {
  apartments = apartment;

  constructor() {
    makeAutoObservable(this);
  }

  addApartment(apartment: Apartment) {
    this.apartments.push(apartment);
  }
}

const apartmentStore = new ApartmentStore();
export default apartmentStore;
