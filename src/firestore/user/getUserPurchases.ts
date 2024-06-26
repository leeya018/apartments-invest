import { db } from "@/firebase";
import { House } from "@/interfaces/House";
import { Purchase } from "@/interfaces/Purchase";
import { doc, getDoc } from "firebase/firestore";
import { getHouseById } from "../house/getHouseById";
import { PurchaseDetails } from "@/interfaces/PurchaseDetails";

export const getUserPurchases = async (
  userId: string
): Promise<PurchaseDetails[]> => {
  try {
    if (!userId) {
      throw new Error("userId is not defined");
    }
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const purchases = userDoc.data().purchases as Purchase[];
      const purchaseDetails = await Promise.all(
        purchases.map(async (purchase) => {
          const house = await getHouseById(purchase.houseId);
          if (!house) {
            throw new Error("house Id " + purchase.houseId + " not exists");
          }
          return {
            ...purchase,
            house,
          };
        })
      );
      return purchaseDetails;
    } else {
      console.log(`No such document with ID: ${userId}`);
      return [];
    }
  } catch (error: any) {
    console.error("Error fetching user purchases: ", error);
    throw new Error("Failed to fetch user purchases");
  }
};
