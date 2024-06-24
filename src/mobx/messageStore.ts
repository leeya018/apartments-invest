import { makeAutoObservable } from "mobx";

class Message {
  message: string = "";
  status: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setMessage = (msg: string, st: number) => {
    this.message = msg;
    this.status = st;
    setTimeout(() => {
      this.message = "";
      this.status = 0;
    }, 3000);
  };

  getSevirity = () => {
    return this.isSuccess() ? "success" : "error";
  };

  isSuccess = () => {
    return this.status === 200 || this.status === 201;
  };
  getColor = () => {
    return this.isSuccess() ? "text-green-500" : "text-red-500";
  };
}

export const messageStore = new Message();
