const connectToDb = require('./db');
const db = connectToDb();

function insert(todo, done) {
    db.run(
        `INSERT INTO todos (todo, done) VALUES (?, ?)`,
        [todo, done],
        (error) => {
            if (error) console.log(error.message);

            console.log('Inserted a new todo');
        }
    )
}

function getAll() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM todos`, (error, rows) => {
            if (error) {
                reject(error.message);
            } 
            else {
                resolve(rows);
            } 
        });
    });
}

function deleteTodo(id) {
    db.run(
        `DELETE FROM todos WHERE id = ?`,
        [id],
        (error) => {
            if (error) console.log(error.message);

            console.log(`Deleted todo with id: ${id}`);
        }
    )
}


module.exports = { insert, getAll, deleteTodo }
