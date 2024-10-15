import express from "express";
import usersRoutes from "./routes/users.js";
import cardsRoutes from "./routes/cards.js";
import mongoose from "mongoose";

const app = express();
//const mongoose = mongoose();
const { PORT = 3000 } = process.env;

mongoose
  .connect("mongodb://localhost:27017/aroundb")
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.log("Algo salio mal -------", err);
  });

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "670bd30f2512d05f72beb2f5",
  };
  next();
});

app.use("/users", usersRoutes);
app.use("/cards", cardsRoutes);

app.get("/", (req, res) => {
  res.send("ERROR 404 --- No hay frontend");
});

app.listen(PORT, function () {
  console.log("Hola mundo del backend....");
});
