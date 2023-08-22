import { Schema, model } from "mongoose";

const providerSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  categoryRole: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Provider = model("Provider", providerSchema);

export default Provider;
