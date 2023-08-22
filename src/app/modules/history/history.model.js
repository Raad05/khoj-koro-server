import { Schema, model } from "mongoose";

const historySchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  service: {
    type: Object,
    required: true,
  },
});

const History = model("History", historySchema);

export default History;
