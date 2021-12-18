const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    id: {
        type: String,
        unique: true
    },
    description: {
        type: String
    }
});

const Course = model("Course", courseSchema);

module.exports = Course;