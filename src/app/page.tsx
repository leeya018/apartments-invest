"use client";
// pages/index.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { observer } from "mobx-react-lite";
import ApartmentList from "@/components/ApartmentList";
import AddApartmentForm from "@/components/AddApartmentForm";

const Main = observer(() => {
  return (
    <div>
      <ApartmentList />
      <AddApartmentForm />
    </div>
  );
});

export default Main;
