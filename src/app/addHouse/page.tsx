"use client";
// pages/index.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { observer } from "mobx-react-lite";
import ProtectedRoute from "@/components/protectedRout";
import AddHouseForm from "@/components/AddHouseForm";

const addHousePage = observer(() => {
  return (
    <ProtectedRoute>
      <Header />
      <AddHouseForm />
      <Footer />
    </ProtectedRoute>
  );
});

export default addHousePage;
