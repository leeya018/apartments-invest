import { Apartment } from "@/interfaces/Apartment";
import apartmentStore from "@/mobx/apartmentStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={newApartment.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="text"
        name="location"
        value={newApartment.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <input
        type="number"
        name="price_per_day"
        value={newApartment.price_per_day}
        onChange={handleChange}
        placeholder="Price per day"
        required
      />
      <input
        type="number"
        name="bedrooms"
        value={newApartment.bedrooms}
        onChange={handleChange}
        placeholder="Bedrooms"
        required
      />
      <input
        type="number"
        name="bathrooms"
        value={newApartment.bathrooms}
        onChange={handleChange}
        placeholder="Bathrooms"
        required
      />
      <input
        type="number"
        name="square_feet"
        value={newApartment.square_feet}
        onChange={handleChange}
        placeholder="Square feet"
        required
      />
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
        placeholder="Amenities (comma separated)"
        required
      />
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
        placeholder="Images URLs (comma separated)"
        required
      />
      <textarea
        name="description"
        value={newApartment.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <button type="submit">Add Apartment</button>
    </form>
  );
};

export default observer(AddApartmentForm);
