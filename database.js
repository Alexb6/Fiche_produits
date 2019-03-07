// Je vais chercher le driver sqlite3 dans node_modules
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs'); // file system

const dbFile = 'test.db';
const db = new sqlite3.Database(dbFile); // binary file



db.serialize(() => {
    if (!fs.existsSync(dbFile)) { // assuring that a table is create the first time the code is read
        db.run('CREATE TABLE products (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT NOT NULL UNIQUE, titre TEXT, image TEXT, prix INTEGER, like BOOLEAN)');

    }
    db.run('INSERT INTO products (type, titre, image, prix, like) VALUES (?, ?, ?, ?, ?)', 'Sac', 'Sac de Sport', 'images/sac_Addidas.jpg', 55, true);
    db.run('INSERT INTO products (type, titre, image, prix, like) VALUES (?, ?, ?, ?, ?)', 'Chaussures', 'Chaussures de ville', 'images/chaussures_ville.jpg', 175, false);
    db.run('INSERT INTO products (type, titre, image, prix, like) VALUES (?, ?, ?, ?, ?)', 'TShirt', 'TShirt Manga', 'images/tShirt.jpg', 25, true);
    db.all('SELECT prix, like FROM products WHERE like == true', function (error, data) {
        if (!error) console.log(data);
        else console.log(error);
    })
});