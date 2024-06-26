import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import { observer } from "mobx-react-lite";
import { languageStore } from "@/mobx/languageStore";
import { getAuth, signOut } from "firebase/auth";
import userStore from "@/mobx/userStore";
import { toJS } from "mobx";
// components/Header.js

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations } = languageStore;
  const auth = getAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out: ", error);
      throw error;
    }
  };

  console.log({ userAuth: toJS(userStore.user) });

  return (
    <header
      className="bg-black border-white text-white p-4 fixed top-0 left-0 
    right-0 z-0 border-b-2"
    >
      <nav className=" container mx-auto flex justify-between items-center">
        {/* <div className="  ">
          <LanguageSwitcher />
        </div> */}
        <div className="logo flex items-center justify-center w-full md:w-auto">
          <Image alt="logo" width={90} height={90} src={"/images/logo.png"} />
        </div>

        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex md:items-center `}>
          <Link href="/" className="nav-button">
            {translations.header.home}
          </Link>
          {/* {userStore.user?.role === "admin" && ( */}
          <Link href={"/addHouse"} className="nav-button">
            add house
          </Link>

          <Link href={"/myPurchases"} className="nav-button">
            My Purchases
          </Link>
          <Link href={"/myProperties"} className="nav-button">
            My Properties
          </Link>

          <Link href="/about" className="nav-button">
            about
          </Link>
          <button
            onClick={() => ModalStore.openModal(modals.contact)}
            className="nav-button"
          >
            <p className="text-xl border-2 rounded-md font-semibold py-2 px-4 ml-4 relative overflow-hidden">
              <span className="inline-block transform transition-transform duration-100 ease-in-out hover:scale-105">
                {translations.header.contact}
              </span>
            </p>
          </button>
          <button className="button" onClick={logoutUser}>
            Loout
          </button>
        </div>
      </nav>
      <div className={`fixed inset-0 z-50 flex ${isOpen ? "block" : "hidden"}`}>
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
        <div
          className={`fixed right-0 top-0 h-full bg-white shadow-lg p-4 transform transition-transform duration-1000 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: "75%" }}
        >
          <button className="absolute top-4 right-4 " onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav className="flex flex-col space-y-8 mt-8 font-md ">
            <Link
              href="/"
              className=" text-xl hover:text-gray"
              onClick={toggleMenu}
            >
              {translations.header.home}
            </Link>

            <Link
              href=""
              onClick={() => {
                toggleMenu();
                ModalStore.openModal(modals.contact);
              }}
              className=" text-xl hover:text-gray"
            >
              {translations.header.contact}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default observer(Header);
