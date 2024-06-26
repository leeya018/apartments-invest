import { db } from "@/firebase";
import { Purchase } from "@/interfaces/Purchase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export const addHouseToUser = async (
  userId: string,
  newPurchaseInfo: Purchase
): Promise<void> => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      purchases: arrayUnion(newPurchaseInfo),
    });
    console.log(`User ${userId} updated successfully.`);
  } catch (error: any) {
    console.error("Error updating user: ", error);
    throw new Error("Failed to update user");
  }
};
