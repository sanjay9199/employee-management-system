const express = require("express");

const router = express.Router();

const {
    addEmployee,
    getEmployees,
    updateEmployee,
      deleteEmployee
} = require("../controllers/employeeController");


router.post("/employees", addEmployee);

router.get("/employees", getEmployees);
router.put("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);


module.exports = router;