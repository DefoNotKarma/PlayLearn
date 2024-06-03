import express from "express";
import dotenv from "dotenv";

import authRoutes from "./router/auth.router.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
