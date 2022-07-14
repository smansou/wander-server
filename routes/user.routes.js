import express from "express";
import { UsersController } from "../controllers/usersController.js";
const { getAllUsers, CreateUser, checkExists, getUserByEmail, incGamesPlayed,  updateScore } = UsersController;
const router = express.Router();
// router.delete('/:id', getAccount, deleteAccount);
router.get("/check-exists", checkExists);
router.post("/fetch-user", getUserByEmail);
router.get("/", getAllUsers);
// router.get('/:id', getAccount);
router.post("/", CreateUser);
router.patch('/inc-games-played',incGamesPlayed);
router.patch('/update-score',updateScore);

export {router as userRouter};