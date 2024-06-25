import { Property } from "./Property";

export type User = {
  uid: string;
  role: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  properties: Property[];
};
