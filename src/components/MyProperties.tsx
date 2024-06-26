import { getUserPropertiesApi, getUserPurchasesApi } from "@/firestore";
import { messageStore } from "@/mobx/messageStore";
import userStore from "@/mobx/userStore";
import React, { useState, useEffect } from "react";
import HouseCard from "./HouseCard";
import { PurchaseDetails } from "@/interfaces/PurchaseDetails";
import { BorderLinearProgress } from "@/util";

export default function MyPurchases() {
  const [purchaseDetails, setPurchaseDetails] = useState([]);
  const user = userStore.user;
  useEffect(() => {
    getUserPropertiesApi(user.uid)
      .then((resProps) => setPurchaseDetails(resProps))
      .catch((err) => {
        console.log(err);
        messageStore.setMessage(err.message, 500);
      });
  }, []);
  console.log({ purchaseDetails });
  return (
    <section className="mt-40">
      <ul className="grid grid-cols-4 mx-auto gap-3">
        {purchaseDetails.map((pd: PurchaseDetails, key) => (
          <li key={key}>
            <HouseCard house={pd.house} canSeleted={false} />
            <div className="p-3">
              <div className="flex flex-col gap-2 line-clamp-3">
                portion: {pd.portion}
                <BorderLinearProgress
                  className="mt-2"
                  variant="determinate"
                  value={pd.portion}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
