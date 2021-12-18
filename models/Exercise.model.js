const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    answer: {
        type: String
    }
});

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;