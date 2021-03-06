const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    course_id: {
        type: String
    },
    learning_route_id: {
        type: Schema.Types.ObjectId,
        ref: "LearningRoute"
    },
});

const Course = model("Course", courseSchema);

module.exports = Course;