import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import { storage } from "@/firebase";

const ImageUploader: React.FC<{ onUpload: (urls: string[]) => void }> = ({
  onUpload,
}) => {
  const [images, setImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);

      // Generate image previews
      const previews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
    }
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const uploadPromises = images.map(async (image) => {
        const folderName = "images";
        const uid = "n3209kl32";
        const storageRef = ref(
          storage,
          `users/${uid}/${folderName}/${image.name}`
        );

        // const storageRef = ref(getStorage(), `images/${image.name}`);
        const snapshot = await uploadBytes(storageRef, image);
        return await getDownloadURL(snapshot.ref);
      });

      const urls = await Promise.all(uploadPromises);
      onUpload(urls);
      setImages([]);
    } catch (error) {
      console.error("Error uploading images: ", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Images"}
      </button>
      <div className="flex gap-2">
        {imagePreviews.map((preview, index) => (
          <Image
            width={100}
            height={100}
            src={preview}
            alt={`Preview ${index}`}
            className="image-preview"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
