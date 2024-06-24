"use client";
import React, { useEffect, useRef, useState } from "react";

import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/firebase";

import Image from "next/image";

import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";

// import Alerts from "@/ui/Alerts";
import { messageStore } from "@/mobx/messageStore";
import Alerts from "@/ui/Alerts";

import { getUserFirestore } from "@/firestore";
import userStore from "@/mobx/userStore";

function login() {
  const router = useRouter();
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userData = await getUserFirestore(user);
      userStore.setUser(userData);

      console.log({ userData });
      router.push("/");
    } catch (error) {
      console.error("Error logging in with Google: ", error);
      throw error;
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex  border-2 mt-10 rounded-xl w-[90%] h-[90%]">
        {/* part left */}
        <div className="flex flex-1 flex-col items-center justify-center   ">
          <h1 className="title"> Apartments Invest</h1>
          <div className="">
            When you cannot buy a house but still want to invert in realstate
          </div>
          <button
            onClick={googleSignIn}
            className="bg-[##4284F3] group mt-10
                mb-2  border-2 border-white  rounded-xl
                 py-4 px-6 text-white
                font-semibold flex justify-center items-center gap-2  hover:bg-slate-100"
          >
            <Image
              alt="google image"
              width={32}
              height={32}
              className="rounded-lg "
              src={"/images/google.png"}
            />
            <div className="text-white group-hover:text-black">
              Sign in with Google
            </div>
          </button>
        </div>
        {/* part second */}
        <div className="flex-1 ">
          <Image
            width={500}
            height={500}
            className="w-full h-full object-fit bg-center"
            alt="house "
            src={"/images/house.png"}
          />
        </div>
      </div>
    </div>
  );
}
export default observer(login);
