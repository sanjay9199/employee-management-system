const form = document.getElementById("employeeForm");

const employeeTable = document.getElementById("employeeTable");


// GET EMPLOYEES

async function getEmployees() {

    const response = await fetch("/api/employees");

    const employees = await response.json();

    employeeTable.innerHTML = "";

    employees.forEach(employee => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>

            <td>
                <button onclick="editEmployee(${employee.id})">
                    Edit
                </button>

                <button onclick="deleteEmployee(${employee.id})">
                    Delete
                </button>
            </td>
        `;

        employeeTable.appendChild(row);

    });
}


// ADD / UPDATE EMPLOYEE

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const id = document.getElementById("employeeId").value;

    const employee = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        department: document.getElementById("department").value,

        salary: document.getElementById("salary").value

    };

    let response;


    // UPDATE

    if (id) {

        response = await fetch(`/api/employees/${id}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(employee)

        });

    }


    // ADD

    else {

        response = await fetch("/api/employees", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(employee)

        });

    }


    const result = await response.json();

    alert(result.message);


    form.reset();

    document.getElementById("employeeId").value = "";

    document.getElementById("submitButton").textContent =
        "Add Employee";


    getEmployees();

});


// DELETE EMPLOYEE

async function deleteEmployee(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) {
        return;
    }


    const response = await fetch(`/api/employees/${id}`, {

        method: "DELETE"

    });


    const result = await response.json();

    alert(result.message);

    getEmployees();

}


// EDIT EMPLOYEE

async function editEmployee(id) {

    const response = await fetch("/api/employees");

    const employees = await response.json();

    const employee = employees.find(emp => emp.id === id);


    if (!employee) {

        alert("Employee not found");

        return;

    }


    document.getElementById("employeeId").value =
        employee.id;

    document.getElementById("name").value =
        employee.name;

    document.getElementById("email").value =
        employee.email;

    document.getElementById("department").value =
        employee.department;

    document.getElementById("salary").value =
        employee.salary;


    document.getElementById("submitButton").textContent =
        "Update Employee";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// LOAD EMPLOYEES

getEmployees();