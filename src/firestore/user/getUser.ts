import { db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { User } from "../../interfaces/User";

export const getUser = async (user: User) => {
  // Reference to the user's document in Firestore
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  // If user does not exist in Firestore, add them
  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      role: "user",
      displayName: user.displayName,
      photoURL: user.photoURL,
      purchases: [],
      createdAt: new Date(),
    });
  }

  // Fetch and return the user data
  const userData = (await getDoc(userRef)).data();
  return userData;
};
