const connection = require('../database/connection');

class Person {
    create(person, response){
        const sql = `INSERT INTO person (firstName, lastName, age) 
            values(
                '${person.firstName}', 
                '${person.lastName}', 
                '${person.age}'
            )`;

        connection.query(sql, (err, res) => {
            if(err){
                response.status(400).json(res);
            }else{
                response.status(201).json(person);
            }
        })
    }

    list(response){
        const sql = 'SELECT * FROM person';

        connection.query(sql, (err, res) => {
            if(err){
                response.status(400).json(res);
            }else{
                response.json(res.rows);
            }
        });
    }

    delete(id, response){
        const sql = `DELETE FROM person WHERE id = ${id}`;

        connection.query(sql, (err, res) => {
            if(err){
                response.status(400).json(err);
            }else{
                response.status(204).json();
            }
        });
    }

    update(person, id , response){
        const sql = `update person SET 
        firstName = '${person.firstName}', 
        lastName = '${person.lastName}',
        age = '${person.age}' WHERE id = ${id}`;

        connection.query(sql, (err, res) => {
            if(err){
                response.status(400).json(err);
            }else{
                response.json(res);
            }
        })
    }
}

module.exports = new Person