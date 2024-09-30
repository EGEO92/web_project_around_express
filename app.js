import express from "express";
import usersRoutes from "./routes/users.js";
import cardsRoutes from "./routes/cards.js";

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/cards", cardsRoutes);

app.get("/", (req, res) => {
  res.send("ERROR 404 --- No hay frontend");
});

app.listen(PORT, function () {
  console.log("Hola mundo del backend....");
});
