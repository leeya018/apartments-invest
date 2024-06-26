import { Purchase } from "./Purchase";

export type User = {
  uid: string;
  role: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  purchases: Purchase[];
};
