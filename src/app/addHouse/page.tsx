"use client";
// pages/index.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { observer } from "mobx-react-lite";
import AddApartmentForm from "@/components/AddApartmentForm";

const addHousePage = observer(() => {
  return (
    <div>
      <AddApartmentForm />
    </div>
  );
});

export default addHousePage;
