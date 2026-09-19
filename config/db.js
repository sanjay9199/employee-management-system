const mysql = require("mysql2");

const db = mysql.createPool({
    host: "mysql",
    user: "root",
    password: "root",
    database: "employee_db7",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection((err, connection) => {
    if (err) {
        console.log("MySQL connection failed:", err.message);
        return;
    }

    console.log("MySQL connected successfully");

    connection.release();
});

module.exports = db;