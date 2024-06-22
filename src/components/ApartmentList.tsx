import apartmentStore from "@/mobx/apartmentStore";
import { observer } from "mobx-react-lite";

const ApartmentList = observer(() => {
  return (
    <div>
      <h1>Apartment List</h1>
      <ul>
        {apartmentStore.apartments.map((apartment) => (
          <li key={apartment.id}>
            <h2>{apartment.title}</h2>
            <p>{apartment.description}</p>
            <p>{apartment.location}</p>
            <p>Price per day: ${apartment.price_per_day}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ApartmentList;
