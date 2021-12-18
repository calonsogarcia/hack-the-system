const { Schema, model } = require("mongoose");

const theorySchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    course_id: {
        type: String
    }
});

const Theory = model("Theory", theorySchema);

module.exports = Theory;