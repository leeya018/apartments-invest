"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Modal from "@/components/Modal";
import { ModalStore } from "@/mobx/modalStore";
import { modals } from "@/util";
import { observer } from "mobx-react-lite";
import ApartmentInfo from "@/components/HouseInfo";
import { Alert, AlertTitle } from "@mui/material";
import { messageStore } from "@/mobx/messageStore";

// import url('https://fonts.googleapis.com/css2?family=Danfo&display=swap');

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "apartments-invest",
//   description: "Generated by Lee Yahav",
// };

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        {messageStore.status !== 0 && (
          <Alert
            severity={messageStore.getSevirity()}
            sx={{
              bgcolor: "background.paper",
              position: "fixed",
              top: 0,
              right: 0,
              left: 0,
              zIndex: 50,
            }}
          >
            <div className={messageStore.getColor()}>
              {messageStore.message}
            </div>
          </Alert>
        )}

        <Modal
          bgColor="bg-card-gradient"
          isOpen={ModalStore.modalName === modals.apartment}
          closeModal={() => {
            ModalStore.closeModal();
          }}
        >
          <ApartmentInfo />
        </Modal>

        <main className="mt-24 min-h-screen">{children}</main>
      </body>
    </html>
  );
}

export default observer(RootLayout);
