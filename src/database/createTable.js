class Table {
    init(connection){
        this.connection = connection
        this.createTable()
    }

    createTable(){
        const sql = `CREATE TABLE IF NOT EXISTS person (
            id SERIAL PRIMARY KEY,
            firstName varchar(30) NOT NULL,
            lastName varchar(30) NOT NULL,
            age int NOT NULL
        )`;

        this.connection.query(sql, (err, res) => {
            if(err){
                console.log(err);
            }else{
                console.log('Created Table');
            }
        })
    }
}

module.exports = new Table();