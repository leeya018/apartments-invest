"use client";
// pages/index.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { observer } from "mobx-react-lite";
import ApartmentList from "@/components/HouseList";

import ProtectedRoute from "@/components/protectedRout";

const Main = observer(() => {
  return (
    <ProtectedRoute>
      <Header />
      <ApartmentList />
      <Footer />
    </ProtectedRoute>
  );
});

export default Main;
