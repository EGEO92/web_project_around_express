import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  updateAvatar,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:_id", getUserById);

router.post("/", createUser);

router.patch("/me", updateUser);

router.patch("/me/avatar", updateAvatar);

export default router;
