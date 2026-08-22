const db = require("../config/db");


// ADD EMPLOYEE
const addEmployee = (req, res) => {

    const { name, email, department, salary } = req.body;

    const sql = `
        INSERT INTO employees (name, email, department, salary)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, department, salary],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    message: "Failed to add employee"
                });
            }

            res.status(201).json({
                message: "Employee added successfully",
                employeeId: result.insertId
            });
        }
    );
};


// GET ALL EMPLOYEES
const getEmployees = (req, res) => {

    const sql = "SELECT * FROM employees";

    db.query(sql, (err, results) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Failed to fetch employees"
            });
        }

        res.status(200).json(results);
    });
};
// DELETE EMPLOYEE
const deleteEmployee = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM employees WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Failed to delete employee"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json({
            message: "Employee deleted successfully"
        });
    });
};
// UPDATE EMPLOYEE
const updateEmployee = (req, res) => {

    const { id } = req.params;

    const { name, email, department, salary } = req.body;

    const sql = `
        UPDATE employees
        SET name = ?, email = ?, department = ?, salary = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [name, email, department, salary, id],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    message: "Failed to update employee"
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Employee not found"
                });
            }

            res.status(200).json({
                message: "Employee updated successfully"
            });
        }
    );
};


module.exports = {
    addEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee
};