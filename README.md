# Profitability Management Dashboard
A full-stack application for calculating and displaying profitability based on order data. Users can view profitability by orders or products, with dynamic currency conversion between USD and TL. Built with React.js and Node.js for a seamless and modern user experience.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologiesUsed)
- [Installation](#installation)

## Demo
[Video Demo](https://drive.google.com/file/d/14M4fmxLRLfGvTF6T9PvCjjttxyLW-Uyc/view)

## Features
- ### **Profitability Calculation**
  - **Calculates profit for each order and product based on the provided JSON data.**
  - **Supports viewing data in both `primaryCurrency (USD)` and `secondaryCurrency (TL)`.**
- ### **Listing Options**
  - View profitability grouped by:
    - **Orders**
    - **Products**

- ### **Dynamic Currency Conversion**
  - Prices and profits are dynamically calculated and displayed based on the selected currency (`USD` or `TL`).

## Technologies Used

- **Frontend**:
  - React: JavaScript library for building user interfaces.
  - RTK Query: Fetch and manage data.
  - RTK Toolkit: State management.
  - React Router: Routing.
  - TailwindCSS: Styling.
  - Ant Design: UI components.

- **Backend**:
  - Node.js: JavaScript runtime for building server-side applications.
  - Express.js: Web application framework for Node.js, used for building RESTful APIs.
  - PostgreSQL: Open-source relational database management system.
  - Sequelize : Promise-based Node.js ORM for relational databases, used for simplifying database operations and managing database models.
 
## Installation

1. Clone the repository: `git clone https://github.com/jwanhussein151044078/profit.git`
2. Install dependencies for frontend and backend:
   - Frontend: `cd react-js-v2 && npm install`
   - Backend: `cd server && npm install`
3. Create a new schema in your PostgreSQL database and name it as you prefer.
4. **Configure the database connection in the backend**:
   - In the server project main directory, create a file called `.env`.
   - Add the following environment variables to the `.env` file:
     ```
     DB_NAME=""
     DB_USERNAME=""
     DB_PASSWORD=""
     DB_HOST="127.0.0.1"
     DB_PORT="5432"
     DB_SCHEMA = "The name of the schema"
     ```
5. Run migrations to create tables: `cd server && npx sequelize-cli db:migrate`.
6. Run seeders to populate initial data: `cd server && npx sequelize-cli db:seed:all`.
7. Start the backend server: `cd server && node src/index.js`
8. Start the frontend development server: `cd react-js-v2 && npm start`
9. Access the application in your web browser at `http://localhost:3000`.

## Contributors

- [Jvan Hussein]([https://github.com/your-username](https://github.com/jwanhussein151044078))
