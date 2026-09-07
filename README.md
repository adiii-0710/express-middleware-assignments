# Express Middleware Assignments

This repository contains solutions for Assignment 1, Assignment 2, and Assignment 3 based on Express.js middleware concepts.

## Assignments

### Assignment 1 - Router-Level Middleware

- Express Router
- Custom `routerLogger` middleware
- `router.use()`
- HTTP method, URL, and date/time logging

Routes:

- `GET /api/students`
- `GET /api/courses`
- `GET /api/faculty`

### Assignment 2 - Request Logger Middleware

- Global middleware using `app.use()`
- Custom `logger` middleware
- Logs HTTP method, URL, and date/time

Routes:

- `GET /`
- `GET /about`
- `GET /contact`

### Assignment 3 - Response Time Middleware

- Custom `responseTimeLogger` middleware
- Measures request processing time using `Date.now()`
- Logs HTTP method, URL, and response time

Routes:

- `GET /`
- `GET /products`
- `GET /users`

## Technologies Used

- Node.js
- Express.js
- JavaScript

## How to Run

### Assignment 1

```bash
cd asst_1
npm install
npm start
Assignment 2
cd asst_2
npm install
npm start
Assignment 3
cd asst_3
npm install
npm start

The server runs on:

http://localhost:3000
Project Structure
express-middleware-assignments/
│
├── asst_1/
│   ├── server.js
│   ├── studentRoutes.js
│   ├── package.json
│   └── package-lock.json
│
├── asst_2/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── asst_3/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── .gitignore
