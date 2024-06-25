import { House } from "@/interfaces/House";
import houseStore from "@/mobx/houseStore";

import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import Image from "next/image";

const AddHouseForm = () => {
  const [newHouse, setNewHouse] = useState<House>({
    title: "",
    location: "",
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    square_feet: 0,
    amenities: [],
    images: [],
    description: "",
    occupancy: 0,
  });
  const [images, setImages] = useState<File[]>([]);

  console.log(newHouse.images);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewHouse({
      ...newHouse,
      [name]:
        name === "price" ||
        name === "bedrooms" ||
        name === "bathrooms" ||
        name === "square_feet"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!images) {
      throw new Error(" you have to add images ");
    }
    houseStore.addHouse(newHouse, images);
    setNewHouse({
      id: 0,
      title: "",
      location: "",
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      square_feet: 0,
      amenities: [],
      images: [],
      description: "",
      occupancy: 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-black  shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Apartment</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={newHouse.title}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={newHouse.location}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Price per day</label>
          <input
            type="number"
            name="price"
            value={newHouse.price}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={newHouse.bedrooms}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            value={newHouse.bathrooms}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Square feet</label>
          <input
            type="number"
            name="square_feet"
            value={newHouse.square_feet}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          Amenities (comma separated)
        </label>
        <input
          type="text"
          name="amenities"
          value={newHouse.amenities.join(", ")}
          onChange={(e) =>
            setNewHouse({
              ...newHouse,
              amenities: e.target.value.split(", "),
            })
          }
          className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <ImageUploader
        images={images}
        onChangeImages={(images) => setImages(images)}
      />

      {/* <div className="mb-4">
        <label className="block text-gray-700">
          Images URLs (comma separated)
        </label>
        <input
          type="text"
          name="images"
          value={newHouse.images.join(", ")}
          onChange={(e) =>
            setNewHouse({
              ...newHouse,
              images: e.target.value.split(", "),
            })
          }
          className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div> */}
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={newHouse.description}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Apartment
      </button>
    </form>
  );
};

export default AddHouseForm;
