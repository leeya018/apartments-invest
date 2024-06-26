"use client";
// pages/index.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { observer } from "mobx-react-lite";
import ProtectedRoute from "@/components/protectedRout";
import MyProperties from "@/components/MyProperties";
import MyPurchases from "@/components/MyPurchases";

const myPropertiesPage = observer(() => {
  return (
    <ProtectedRoute>
      <Header />
      <MyPurchases />
      <Footer />
    </ProtectedRoute>
  );
});

export default myPropertiesPage;
