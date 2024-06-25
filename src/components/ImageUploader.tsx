import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Image from "next/image";

type ImageUploaderProps = {
  onChangeImages: (images: File[]) => void;
  images: File[];
};
const ImageUploader = ({ onChangeImages, images }: ImageUploaderProps) => {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      onChangeImages(files);

      // Generate image previews
      const previews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
    }
  };
  console.log([imagePreviews]);
  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />

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
