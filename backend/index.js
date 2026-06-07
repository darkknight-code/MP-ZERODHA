require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");
const { HoldingModel } = require("./models/HoldingModel");
const { PostionModel } = require("./models/PostionModel");
const { OrdersModel } = require("./models/OrdersModels");

const app = express();
const PORT = process.env.PORT || 3002;


app.use(cors({
  origin: ["http://localhost:3001","http://localhost:3000","https://mp-zerodha.vercel.app",
  "https://your-dashboard.vercel.app"],   
  credentials: true,
}));

app.use(express.json());              
app.use(cookieParser());

app.use("/api/auth", authRoute);

// Data routes
app.get("/api/holdings", async (req, res) => {
  const data = await HoldingModel.find({});
  res.json(data);
});

app.get("/api/positions", async (req, res) => {
  const data = await PostionModel.find({});
  res.json(data);
});

app.post("/api/order", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  if (!name || !qty || !price || !mode) {
    return res.status(400).json({ message: "All fields required" });
  }

  const newOrder = new OrdersModel({ name, qty, price, mode });
  await newOrder.save();

  res.status(201).json({ message: "Order saved", success: true });
});


mongoose.connect(process.env.MONOGO_URL)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => console.error(err));