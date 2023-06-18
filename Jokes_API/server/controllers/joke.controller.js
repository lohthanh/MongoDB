const Joke = require('../models/joke.model')

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ joke: allJokes })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => {
            res.json({ joke: oneJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ joke: newJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.test = (req, res) => {
    res.json({msg: "It works!"})
}

module.exports.findRandom = (req, res) => {
    Joke.aggregate().sample(1)
        .then(oneJoke => {
            res.json({ joke : oneJoke })
        })
        .catch(err=>{res.json(err)
        });
}