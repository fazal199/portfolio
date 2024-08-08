import { ReceiptRussianRubleIcon } from "lucide-react";
import mongoose from "mongoose";

let isConnected = false;

const dbConnect = async () => {
  try {
    if (isConnected) return;
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("database connected!");
    
    isConnected = true;
  } catch (error: any) {
    console.log(
      "something went wrong while connecting to db! place:dbConnect.ts " +
        error.message
    );
  }
};
export default dbConnect;