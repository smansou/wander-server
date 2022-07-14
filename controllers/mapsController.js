import express from "express";
import mongoose from "mongoose";
import { Map } from "../models/map.js";

 const MapsController = {
  getMapByMode: async (req, res, next) => {
    let map;
    try {
      map = await Map.find({ gameMode: req.params.id });
      if (!map) {
        return res.status(404).send({ message: "Not found--" });
      } else {
        res.status(200).send(map);
      }
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
    next();
  },

  getAllMaps : async (req, res, next) => {
    try {
      const maps = await Map.find();
      res.status(200).send(maps);
    } catch (err) {}
    next();
  },

  addMap: async (req, res, next) => {
    const map = new Map({
      gameMode: req.body.gameMode,
      coordinates: req.body.coordinates,
      difficulty: req.body.difficulty,
      objectToFind: req.body.objectToFind,
    });
    try {
      await map.save();
      res.status(201).send("Map Added! ===>  " + map);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
};

export default MapsController;