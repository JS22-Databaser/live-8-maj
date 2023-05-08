const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = './todos.sqlite';

function createDbConnection() {
    //if (fs.existsSync(path)) return new sqlite3.Database(path);

    const db = new sqlite3.Database('./todos.sqlite', (error) => {
        if (error) return console.log(error.message);
        createTable(db);
    });

    return db;
}

function createTable(db) {
    db.exec(`
        CREATE TABLE IF NOT EXISTS todos (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            todo varchar(100) NOT NULL,
            done BOOLEAN NOT NULL
        );
    `);
}

module.exports = createDbConnection;