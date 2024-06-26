import { db } from "@/firebase";
import { House } from "@/interfaces/House";
import { Purchase } from "@/interfaces/Purchase";
import { doc, getDoc } from "firebase/firestore";
import { getHouseById } from "../house/getHouseById";
import { PurchaseDetails } from "@/interfaces/PurchaseDetails";
import { getUserPurchases } from "./getUserPurchases";

export const getUserProperties = async (userId: string): Promise<any[]> => {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      console.log(`No such user with ID: ${userId}`);
      return [];
    }

    const userData = userDoc.data();
    const purchases = userData.purchases as Purchase[];

    // Group purchases by houseId and sum portions
    const groupedPurchases = purchases.reduce((acc, purchase) => {
      if (!acc[purchase.houseId]) {
        acc[purchase.houseId] = { ...purchase };
      } else {
        acc[purchase.houseId].portion += purchase.portion;
      }
      return acc;
    }, {} as Record<string, Purchase>);

    const purchaseDetails = await Promise.all(
      Object.values(groupedPurchases).map(async (purchase) => {
        const house = await getHouseById(purchase.houseId);
        return {
          ...purchase,
          house,
        };
      })
    );

    return purchaseDetails;
  } catch (error: any) {
    console.error("Error fetching user purchases and houses: ", error);
    throw new Error("Failed to fetch user purchases and houses");
  }
};
