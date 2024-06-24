import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { messageStore } from "@/mobx/messageStore";
let timeoutInter: any = null;

const Alerts = observer(() => {
  const { message, setMessage, status } = messageStore;
  useEffect(() => {
    timeoutInter = setTimeout(() => {
      setMessage("", 0);
    }, 30000);
    return () => clearInterval(timeoutInter);
  }, [message]);

  const isSuccess = (status: number) => {
    return status === 200 || status === 201;
  };
  console.log({ status });
  return (
    <div
      className={`border-2 border-black ${
        status === 0 ? "hidden" : "relative"
      }   top-0 left-0 right-0 z-50 w-screen flex justify-center  items-center h-10`}
    >
      <div
        className={`${
          isSuccess(status) ? "bg-green-500" : "bg-red-500"
        } w-full flex justify-center items-center h-full`}
      >
        {message}
      </div>
    </div>
  );
});

export default Alerts;
