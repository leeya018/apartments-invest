import { db } from "@/firebase";
import { Property } from "@/interfaces/Property";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export const addHouseToUser = async (
  userId: string,
  newPropertyInfo: Property
): Promise<void> => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      properties: arrayUnion(newPropertyInfo),
    });
    console.log(`User ${userId} updated successfully.`);
  } catch (error: any) {
    console.error("Error updating user: ", error);
    throw new Error("Failed to update user");
  }
};
