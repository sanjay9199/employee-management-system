<div align="center">

# 🚀 Employee Management System

### 🧑‍💼 A Dockerized Employee Management Application

Built with Node.js, Express.js, MySQL 8 and Docker.

<p>
  <img src="https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MySQL-8-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  <img src="https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
</p>

<p>
  <img src="https://img.shields.io/badge/Docker%20Compose-Multi--Container-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker Compose">
  <img src="https://img.shields.io/badge/Database-MySQL%208-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="Database">
  <img src="https://img.shields.io/badge/Status-Working-2ea44f?style=flat-square" alt="Status">
</p>

</div>

---

## 🌟 Overview

The **Employee Management System** is a web-based application for managing employee records.

### ✨ Features

| Feature | Description |
|---|---|
| ➕ **Add Employee** | Create a new employee record |
| 👀 **View Employees** | Display employee records |
| ✏️ **Update Employee** | Modify employee information |
| 🗑️ **Delete Employee** | Remove employee records |
| 🐳 **Dockerized** | Application and MySQL run in containers |
| ⚙️ **Automatic Database Setup** | `init.sql` creates the database table on fresh initialization |

---

## 🧰 Tech Stack

<p>
  <img src="https://img.shields.io/badge/Backend-Node.js%20%2B%20Express.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Database-MySQL%208-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/Container-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
</p>

- 🟢 **Node.js** — Backend runtime
- 🚂 **Express.js** — Web framework
- 🐬 **MySQL 8** — Relational database
- 🌐 **HTML / CSS / JavaScript** — Frontend
- 🐳 **Docker** — Containerization
- 📦 **Docker Compose** — Multi-container orchestration

---

## 📁 Project Structure

```text
employee-management-system/
│
├── 📂 config/
├── 📂 controllers/
├── 📂 public/
├── 📂 routes/
│
├── 🐳 Dockerfile
├── 🐳 docker-compose.yml
├── 🗄️ init.sql
├── 📦 package.json
├── 📦 package-lock.json
├── 🚀 server.js
└── 🔒 .gitignore
```

---

## ✅ Prerequisites

Install only:

- 🐙 **Git**
- 🐳 **Docker Desktop**

> 💡 **MySQL does NOT need to be installed separately.**
>
> MySQL runs inside the Docker container.

---

# 🚀 Quick Start

### 1️⃣ Clone the repository

```bash
git clone https://github.com/sanjay9199/employee-management-system.git
```

### 2️⃣ Enter the project

```bash
cd employee-management-system
```

### 3️⃣ Start everything

```bash
docker compose up -d --build
```

> 🎯 This starts both the **Node.js application** and **MySQL database**.

### 4️⃣ Check containers

```bash
docker compose ps
```

Expected:

```text
app      → Up
mysql    → Up (healthy)
```

### 5️⃣ Open the application

<div align="center">

## 🌐 http://localhost:3000

</div>

---

# 🐳 Architecture

<div align="center">

```text
              🌐 Browser
                   │
                   │ :3000
                   ▼
        ┌─────────────────────┐
        │   🟢 Node.js App    │
        │      Express.js     │
        └──────────┬──────────┘
                   │
                   │ Docker Network
                   ▼
        ┌─────────────────────┐
        │     🐬 MySQL 8      │
        │                     │
        │    employee_db7     │
        └──────────┬──────────┘
                   │
                   ▼
             employees
                table
```

</div>

---

## 🗄️ Database

| Setting | Value |
|---|---|
| 🐬 Database | `employee_db7` |
| 📋 Table | `employees` |
| 🔌 MySQL Port | `3306` inside Docker network |
| 🌐 App Port | `3000` |

### Automatic Table Creation

On a **fresh MySQL data directory**, Docker executes:

```text
init.sql
   ↓
CREATE TABLE IF NOT EXISTS employees
```

So a new user does **not** need to manually create the `employees` table.

---

# 🔧 Useful Docker Commands

| Action | Command |
|---|---|
| 📋 Check containers | `docker compose ps` |
| 📜 App logs | `docker compose logs app` |
| 🐬 MySQL logs | `docker compose logs mysql` |
| 🔄 Rebuild | `docker compose up -d --build` |
| 🛑 Stop | `docker compose down` |

---

## 🔒 Security

The following local files should **not** be committed to GitHub:

```text
.env
employee_db7_backup.sql
```

They are excluded through `.gitignore`.

> ⚠️ Never commit real passwords, API keys, tokens, or database credentials to GitHub.

---

## 👨‍💻 Author

<div align="center">

### **Sanjay Choudhry**

💻 Cloud & DevOps Learning Project

</div>

---

<div align="center">

⭐ **Employee Management System**  
🐳 **Dockerized Application**  
🚀 **Ready for Deployment**

</div>

---
