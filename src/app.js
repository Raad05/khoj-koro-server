import express from "express";
import cors from "cors";
import serviceRoutes from "./app/modules/service/service.route.js";
import userRoutes from "./app/modules/users/users.route.js";
import adminRoutes from "./app/modules/admin/admin.route.js";
import providerRoutes from "./app/modules/provider/provider.route.js";
import categoryRoutes from "./app/modules/category/category.route.js";
import cartRoutes from "./app/modules/cart/cart.route.js";
import ongoingServiceRoutes from "./app/modules/OngoingService/OngoingService.route.js";
import historyRoutes from "./app/modules/history/history.route.js";

const app = express();

// Middleware
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is active.");
});

app.use("/api/v1/service", serviceRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/provider", providerRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/ongoingService", ongoingServiceRoutes);
app.use("/api/v1/history", historyRoutes);

export default app;
