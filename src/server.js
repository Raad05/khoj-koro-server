import mongoose from "mongoose";
import app from "./app.js";

const port = process.env.PORT || 5000;

// Database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/khoj-koro");
    console.log("Database connection successful!!!");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to connect to database: ", error);
  }
}

bootstrap();
