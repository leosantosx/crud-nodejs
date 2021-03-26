const express = require('express');
const routes = require('./routes');

const connection = require('./database/connection');
const Table = require('./database/createTable');

const app = express();

app.use(express.json());
app.use(routes);

connection.connect(err => {
    if(err){
        console.log(err);
    }else{
        console.log('Database conected');

        Table.init(connection);
    
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    }
});
