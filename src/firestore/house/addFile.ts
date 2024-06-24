import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/firebase";
import { isUserExist } from "@/firestore/user/isUserExist";

// audios
// images
export const addFileApi = async (
  uid: string,
  file: any,
  folderName: string
) => {
  console.log({ uid, file, folderName });
  try {
    if (!isUserExist(uid)) {
      throw new Error(`User with id : ${uid} not found`);
    }
    console.log("folder name is " + folderName);
    const storageRef = ref(storage, `users/${uid}/${folderName}/${file.name}`);

    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    console.log(`File available at: ${downloadURL}`, db);

    return downloadURL;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};
