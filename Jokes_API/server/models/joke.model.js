const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: {type: String, minLength: [10, "Must be at least 10 characters long."]},
    punchLine: {type: String, minLength: [3, "Must be at least 3 characters long."]}
}, {timestamps: true});

const Joke = mongoose.model('Joke', JokesSchema);


module.exports = Joke;