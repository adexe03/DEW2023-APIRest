const express = require("express");
const cors = require('cors');
const mysql = require('mysql2');
let morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'videojuegosdb',
});


// Connect to the database.
db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});


app.get('/', (req, res) => {
    res.send(`API Running on port ${PORT}`);
});

app.get("/juegos", (req, res) => {
    const query = 'SELECT * FROM juegos';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(results);
        }
    });
});

app.get('/juegos/:id', (req, res) => {
    db.execute(
        'SELECT * FROM juegos WHERE id = ?',
        [req.params.id],
        (err, results) => {
            if (err) {
                console.error('Error fetching post from database:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'Post not found' });
            }

            res.json(results[0]);
        }
    );
});

app.post("/juegos", (req, res) => {
    const { titulo, genero, plataforma, lanzamiento, desarrolladora } = req.body;

    if (!titulo || !genero || !plataforma || !lanzamiento || !desarrolladora) {
        return res.status(400).json({ error: 'Los campos no pueden quedar vacios' });
    }

    db.execute(
        'INSERT INTO juegos (titulo, genero, plataforma, lanzamiento, desarrolladora) VALUES (?, ?, ?, ?, ?)',
        [titulo, genero, plataforma,  lanzamiento, desarrolladora],
        (err, results) => {
            if (err) {
                console.error('Error inserting new game:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            res.status(201).json({ success: true, message: 'Post created successfully' });
        }
    );
});
app.put("/juegos/:id", (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required for update' });
    }

    // Update the post in the database based on the ID
    db.execute(
        'UPDATE posts SET title = ?, content = ? WHERE id_post = ?',
        [title, content, req.params.id],
        (err, results) => {
            if (err) {
                console.error('Error updating post in database:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (results.affectedRows === 0) {
                // If no rows were affected, the post was not found
                return res.status(404).json({ error: 'Post not found' });
            }

            // Send a success response
            res.json({ success: true, message: 'Post updated successfully' });
        }
    );
});

app.delete("/juegos/:id", (req, res) => {
    db.execute(
        'DELETE FROM juegos WHERE id = ?',
        [req.params.id],
        (err, results) => {
            if (err) {
                console.error('Error deleting game from database:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Game not found' });
            }

            res.status(201).json({ success: true, message: 'Game deleted successfully' });
        }
    );
})

app.listen(PORT, () => {
    console.log(`La aplicación se esta ejecutando en http://localhost:${PORT}`);
});
