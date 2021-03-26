const Router = require('express').Router;

const Person = require('../models/person');

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
    const { firstName, lastName, age } = request.body;

    const person = {
        firstName,
        lastName,
        age,
    };

    Person.create(person, response);
})

usersRouter.get('/', (request, response) => {
    Person.list(response);
})

usersRouter.delete('/:id', (request, response) => {
    const { id } = request.params;
    Person.delete(id, response);
})

usersRouter.put('/:id', (request, response) => {
    const { id } = request.params;

    const { firstName, lastName, age } = request.body;

    const person = {
        firstName,
        lastName,
        age,
    };

    Person.update(person, id, response);

})

module.exports = usersRouter;