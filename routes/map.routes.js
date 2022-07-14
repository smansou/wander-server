import express from "express";
const router = express.Router();
import MapsController from "../controllers/mapsController.js"
const { getAllMaps, getMapByMode, addMap} = MapsController;



router.get("/:id", getMapByMode);
router.get("/", getAllMaps);
router.post("/", addMap);


export {router as mapRouter}
