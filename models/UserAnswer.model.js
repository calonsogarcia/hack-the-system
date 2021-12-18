const { Schema, model } = require("mongoose");

const userAnswerSchema = new Schema({
    user_id: {
        type: String
    },
    exercise_id: {
        type: String
    },
    answer: {
        type: String
    },
    validated: {
        type: Boolean
    },
    passed: {
        type: Boolean
    }
});

const UserAnswer = model("UserAnswer", userAnswerSchema);

module.exports = UserAnswer;