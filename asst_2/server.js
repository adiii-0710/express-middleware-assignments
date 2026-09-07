const express = require("express");

const app = express();
const PORT = 3000;

// Global middleware
function logger(req, res, next) {
    const dateTime = new Date().toLocaleString();

    console.log(`${req.method} ${req.url} ${dateTime}`);

    next();
}

// Apply middleware before every route
app.use(logger);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Us");
});

app.get("/contact", (req, res) => {
    res.send("Contact Information");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});