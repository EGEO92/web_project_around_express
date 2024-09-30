import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", function (req, res) {
  fs.readFile("./data/cards.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const cards = JSON.parse(data.toString("utf-8"));
    res.send(cards);
  });
});

export default router;
