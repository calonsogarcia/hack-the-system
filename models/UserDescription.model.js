const { Schema, model } = require("mongoose");

const userDescriptionSchema = new Schema(
  {
    descripcionPersonal: String,
    nivelProgramador:{
        type: String,

    },
    leguajesDeProgramacion: String,
    queQuieroAprender: String
  },
  {
    timestamps: true,
  }
);

const UserDescription = model("UserDescription", userDescriptionSchema);

module.exports = UserDescription;