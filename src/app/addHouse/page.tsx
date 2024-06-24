"use client";
// pages/index.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { observer } from "mobx-react-lite";
import AddApartmentForm from "@/components/AddApartmentForm";
import ProtectedRoute from "@/components/protectedRout";

const addHousePage = observer(() => {
  return (
    <ProtectedRoute>
      <Header />
      <AddApartmentForm />
      <Footer />
    </ProtectedRoute>
  );
});

export default addHousePage;
