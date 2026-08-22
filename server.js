const express = require("express");

const db = require("./config/db");

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use("/api", employeeRoutes);

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});