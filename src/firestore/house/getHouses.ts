import { db } from "@/firebase";
import { House } from "@/interfaces/House";
import { collection, getDocs } from "firebase/firestore";

export const getHousesApi = async (): Promise<House[]> => {
  try {
    const housesCollection = collection(db, "houses");
    const houseSnapshot = await getDocs(housesCollection);
    const houseList = houseSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as House[];
    return houseList;
  } catch (error: any) {
    console.error("Error fetching houses: ", error);
    throw new Error("Failed to fetch houses");
  }
};
