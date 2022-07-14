import mongoose from "mongoose";
const Schema = mongoose.Schema;

 const userSchema = new Schema({
    
    email: {
      type: String,
      required: true,
    },
    stats: {
      gamesPlayed: {
        type: Number,
        default: 0
      },
      distanceTravelled: {
        type: Number,
        default: 0

      },
      level: {
        type: Number,
        default: 1

      },
      score: {
        type: Number,
        default: 0

      }
    }
   
  });

export const User = mongoose.model("User", userSchema);
