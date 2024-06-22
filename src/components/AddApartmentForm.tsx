import { Apartment } from "@/interfaces/Apartment";
import apartmentStore from "@/mobx/apartmentStore";
import React, { useState } from "react";

const AddApartmentForm = () => {
  const [newApartment, setNewApartment] = useState<Apartment>({
    id: 0,
    title: "",
    location: "",
    price_per_day: 0,
    bedrooms: 0,
    bathrooms: 0,
    square_feet: 0,
    amenities: [],
    images: [],
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewApartment({
      ...newApartment,
      [name]:
        name === "price_per_day" ||
        name === "bedrooms" ||
        name === "bathrooms" ||
        name === "square_feet"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    apartmentStore.addApartment({ ...newApartment, id: Date.now() });
    setNewApartment({
      id: 0,
      title: "",
      location: "",
      price_per_day: 0,
      bedrooms: 0,
      bathrooms: 0,
      square_feet: 0,
      amenities: [],
      images: [],
      description: "",
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
          value={newApartment.title}
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
          value={newApartment.location}
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
            name="price_per_day"
            value={newApartment.price_per_day}
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
            value={newApartment.bedrooms}
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
            value={newApartment.bathrooms}
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
            value={newApartment.square_feet}
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
          value={newApartment.amenities.join(", ")}
          onChange={(e) =>
            setNewApartment({
              ...newApartment,
              amenities: e.target.value.split(", "),
            })
          }
          className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          Images URLs (comma separated)
        </label>
        <input
          type="text"
          name="images"
          value={newApartment.images.join(", ")}
          onChange={(e) =>
            setNewApartment({
              ...newApartment,
              images: e.target.value.split(", "),
            })
          }
          className="mt-1 block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={newApartment.description}
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

export default AddApartmentForm;