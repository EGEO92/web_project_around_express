import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", function (req, res) {
  fs.readFile("./data/users.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const users = JSON.parse(data.toString("utf-8"));
    res.send(users);
  });
});

router.get("/:id", function (req, res) {
  fs.readFile("./data/users.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const users = JSON.parse(data.toString("utf-8"));

    users.forEach((user) => {
      if (user._id === req.params.id) {
        res.send(`Usuario: ${user.name}`);
        return;
      }
    });
    res.send(`ERROR 404 --- Usuario inexistente`);
  });
});

export default router;
