import mongoose from "mongoose";

const Schema = mongoose.Schema;
 const mapSchema = new Schema({
    gameMode: {
    type: String,
    enum: ['world', 'capitals', 'extreme', 'aispy'],
    description: "gameMode must be of the following ['world', 'capitals', 'extreme', 'aispy']",
    required: true
  },
    coordinates: {
      lat:{
        type: Number,
        required: true,
      },
      lng:{
        type: Number,
        required: true,
      }
  },
    difficulty: {
    type: Number,
    required: true

  },
    objectToFind: {
    type: String,
    required: true
  },
  
  
});
export const Map = mongoose.model("Map", mapSchema);
