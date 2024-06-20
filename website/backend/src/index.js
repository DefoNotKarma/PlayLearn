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

app.post("/application", (req, res) => {
  const jsondata = {
      username : "user",
      coverImg : "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-girl-wearing-a-floral-crown-over-her-face-image_2905423.jpg",
      message: 'Hello from the Express server!'
    }

  res.json(jsondata);
 })


app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
