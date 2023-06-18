const JokeController = require('../controllers/joke.controller');


module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/random', JokeController.findRandom);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.patch('/api/jokes/:id', JokeController.updateJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
    app.get('/api/test', JokeController.test)
}