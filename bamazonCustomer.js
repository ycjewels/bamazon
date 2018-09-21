
const mysql    = require("mysql");

let items;

const connection = mysql.createConnection({
    "host"              : "localhost",
    "port"              : 3306,
    "user"              : "root",
    "password"          : "password1",
    "database"          : "bamazon",
    "multipleStatements": true
});

connection.connect(error => {
    try {
        if (error) throw "Error: Connection to bamazon failed.\n";

    } catch(error) {
        displayError(error);

    }

    });