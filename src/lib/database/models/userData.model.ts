import mongoose, { model, Schema } from "mongoose";

const clientData = new Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const clientModel = mongoose?.models?.clientmessages || model("clientmessages",clientData)
