import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/firebase";
import { isUserExist } from "@/firestore/user/isUserExist";
import { User } from "@/interfaces/User";

// audios
// images
export const addFile = async (user: User, files: any) => {
  console.log({ uid: user.uid, files });
  try {
    if (!isUserExist(user.uid)) {
      throw new Error(`User with id : ${user.uid} not found`);
    }

    const uploadPromises = files.map(async (file: File) => {
      const storageRef = ref(storage, `users/${user.uid}/images/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      return await getDownloadURL(snapshot.ref);
    });

    const urls = await Promise.all(uploadPromises);
    return urls;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};
