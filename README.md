
# SOMA — Student Overview & Management Archive

SOMA (Student Overview & Management Archive) is a full-stack student information system built using **Node.js, Express, MongoDB, and EJS**.
It provides a clean and structured way to store, view, update, and manage student records through a thoughtfully designed user interface.

The project focuses on **clarity, simplicity, and real-world backend fundamentals**, making it both a strong learning project and a portfolio-ready application.

---

## Overview

Managing student records is a common real-world requirement across educational institutions. SOMA addresses this by offering a minimal yet complete system that allows users to:

* Add new student records
* View all students in an organised layout
* Edit existing student information
* Delete records when no longer needed

Rather than being a basic form-submission demo, SOMA is designed as a **cohesive system**, where navigation, layout, and data flow feel intentional and intuitive.

---

## Key Features

* Full CRUD functionality (Create, Read, Update, Delete)
* Persistent data storage using MongoDB
* Server-side rendering with EJS templates
* Clean, neo-brutalist inspired UI
* Image support using profile image URLs
* Clear navigation between Add, View, and Edit flows
* Beginner-friendly backend architecture without unnecessary complexity

---

## Tech Stack

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB
* Mongoose (ODM)

**Frontend**

* EJS (Embedded JavaScript templates)
* Tailwind CSS

**Other Tools**

* npm for dependency management

---

## Project Structure

```
mongodb-project/
│
├── models/
│   └── StudentInfo.js        # Mongoose schema for student data
│
├── views/
│   ├── add-student.ejs       # Add student page
│   ├── read.ejs              # Students list page
│   └── edit-student.ejs      # Edit student page
│
├── public/
│   └── (static assets)
│
├── app.js                    # Express server and routes
├── package.json              # Project metadata and dependencies
└── README.md
```

---

## Data Model

Each student record contains the following fields:

* Name
* Roll Number
* Branch
* Email
* CGPA
* Profile Image URL

These fields are defined using a Mongoose schema and stored persistently in MongoDB.

---

## Routes & Application Flow

| Method | Route         | Description                           |
| ------ | ------------- | ------------------------------------- |
| GET    | `/`           | Render Add Student page               |
| POST   | `/create`     | Create a new student record           |
| GET    | `/read`       | Display all students                  |
| GET    | `/edit/:id`   | Render edit form with pre-filled data |
| POST   | `/update/:id` | Update an existing student            |
| POST   | `/delete/:id` | Delete a student record               |

---

## Screenshots

Below are some screenshots showcasing the UI and workflow of SOMA.

### Add Student (Hero Section + Form)

*Add new student records using this form layout.*


<img width="2940" height="1670" alt="image" src="https://github.com/user-attachments/assets/bc17780d-e358-43d2-a84a-44e5841fa267" />



### Students List

*View all students in a card-based layout with edit and delete actions.*

<img width="2940" height="1670" alt="image" src="https://github.com/user-attachments/assets/4a78710c-af51-4447-afdd-35ebc47d7d88" />





### Edit Student

*Update existing student information using pre-filled editable fields.*


<img width="2940" height="1670" alt="image" src="https://github.com/user-attachments/assets/9149ae5c-cc51-47e7-932b-7b41678b4d69" />





---

## Local Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/shristi482004/mongodb-project.git
cd mongodb-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod
```

The application connects to:

```
mongodb://127.0.0.1:27017/studentinfoDB
```

### 4. Start the server

```bash
node app.js
```

Visit the application at:

```
http://localhost:3000
```

---

## Design Philosophy

SOMA is intentionally minimal. The goal was to avoid overengineering while still delivering:

* Clear information hierarchy
* Calm, readable layouts
* Consistent visual language across pages
* Simple navigation without unnecessary UI noise

The design treats student data as an **archive**, not just form entries, which influenced both layout and interaction choices.

---

## Personal Note

This project represents my first complete attempt at building a **full-stack application** where backend logic, database design, and frontend experience all come together.

While working on SOMA, I focused on understanding:

* How Express routes connect to real data flows
* How MongoDB schemas translate into usable UI structures
* How small design decisions impact usability and clarity

Instead of adding unnecessary features, I prioritised **doing the fundamentals well**.
The project helped me move beyond isolated concepts and think in terms of systems, user flow, and maintainable code.

Feedback and suggestions for improvement are always welcome.

---

## What This Project Demonstrates

* Practical understanding of Express routing and middleware
* MongoDB data modeling and CRUD operations
* Integration of backend logic with EJS views
* Clean separation of concerns (routes, models, views)
* Product-oriented thinking rather than purely academic output

---

## Possible Enhancements

Some logical next steps for future improvement:

* Search and filter functionality
* Validation for unique roll numbers and emails
* Pagination for large student lists
* Authentication and role-based access
* Image upload support using cloud storage
* Improved accessibility features

---

## Conclusion

SOMA is a compact but complete full-stack project that reflects real-world backend workflows combined with thoughtful UI decisions.
It serves as both a learning milestone and a strong portfolio example demonstrating end-to-end application development.


