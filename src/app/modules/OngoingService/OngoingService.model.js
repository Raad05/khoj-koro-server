import { Schema, model } from "mongoose";

const ongoingServiceSchema = new Schema({
  providerId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  service: {
    type: Object,
    required: true,
  },
});

const OngoingService = model("RunningService", ongoingServiceSchema);

export default OngoingService;
