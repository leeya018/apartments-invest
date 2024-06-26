import { House } from "./House";

export type PurchaseDetails = {
  houseId: string;
  portion: number;
  buyPrice: string;
  house: House;
};
