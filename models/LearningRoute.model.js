const { Schema, model } = require("mongoose");

const learningRouteSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    level: {
        type: String
    },
    active: {
        type: Boolean
    },
    routeId: {
        type: String,
        unique: true
    }
});

const LearningRoute = model("LearningRoute", learningRouteSchema);

module.exports = LearningRoute;