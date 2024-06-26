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
      <section className="mt-40 side-padding min-h-screen">
        <h1 className="title">about </h1>

        <div>
          because of the realstate become really expensive, we wanna let other
          epopel to be able to buy it . we do it by letting pepoel buying part
          of the realestate so its like a gropu exuestions, , you dont have to
          take a loan of the bank or find other epopl in your famiy for that.
          you just need to choose amount of money that you want to invest and
          thats it. you can be the owner of 1/10 of a houyse in Canada , you
          choose the portion and we will make it yours .{" "}
        </div>
      </section>
      <Footer />
    </ProtectedRoute>
  );
});

export default addHousePage;
