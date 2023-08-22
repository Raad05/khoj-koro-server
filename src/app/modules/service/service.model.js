import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  warranty: {
    type: Array,
    required: true,
  },
  pricing: {
    type: Array,
    required: true,
  },
  order: {
    type: Array,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Service = model("Service", serviceSchema);

export default Service;
