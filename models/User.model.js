const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true,
    },
    email: {
      type: String,
      require: true, // still doesn't print in MongoDb
    },
    password: {
      type: String,
      require: true,
    },
    fullName: String,
    age: Number,
    UserDescription: {
      type: Schema.Types.ObjectId,
      ref: "UserDescription",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
