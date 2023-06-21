import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema(
  {
    review: String,
    idSong: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
    date: Date,
  },
  { collection: "reviews" }
);
export default reviewsSchema;
