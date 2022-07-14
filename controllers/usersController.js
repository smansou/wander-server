import express from "express";
import mongoose from "mongoose";
import { User } from "../models/user.js";

export const UsersController = {
  // getAccount: async (req, res, next) => {
  //   let account;
  //   try {
  //     account = await Account.findById(req.params.id);
  //     if (!account) {
  //       return res.status(400).send({ message: "Account not found" });
  //     } else {
  //       res.status(200).send(account);
  //     }
  //   } catch (err) {
  //     return res.status(500).send({ message: err.message });
  //   }
  //   //set account as prop on res obj to be available in other functions
  //   res.account = account;
  //   next();
  // },

  getAllUsers: async (req, res, next) => {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (err) {
      console.log(err);
    }
    next();
  },
  CreateUser: async (req, res, next) => {
    const user = new User({
      email: req.body.email,
    });
    try {
      await user.save();
      res.status(201).send("user Created! ===>  " + user);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },

  getUserByEmail: async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if(user) return res.status(200).send(user);
      const newUser =  new User({email: req.body.email});
      newUser.save();
      res.send(newUser);
      
    } catch (err) {
      console.log(err);
    }
  
  },

 

  checkExists: async (req, res, next) => {
    console.log(req.body);
    try {
      const exists = await User.findOne({ email: req.body.email });
      exists ? res.send("true") : res.send("false");
    } catch (err) {
      res.send(err);
    }
  },

  incGamesPlayed: async (req, res, next) => {
    try {
      await User.findOneAndUpdate({ email: req.body.email}, {$inc: {'stats.gamesPlayed': 1 }});
      res.send(`updated`);
    } catch (err) {
      res.send(err.message);
    }
  },
  updateScore: async (req, res, next) => {
    try {
      await User.findOneAndUpdate({ email: req.body.email}, {$inc: {'stats.score': parseInt(req.body.score) }});
      res.send(`updated`);
    } catch (err) {
      res.send(err.message);
    }
  },
};

