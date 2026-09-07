const express = require("express");

const app = express();
const PORT = 3000;

// Response time middleware
function responseTimeLogger(req, res, next) {
    const startTime = Date.now();

    res.on("finish", () => {
        const responseTime = Date.now() - startTime;

        console.log(
            `${req.method} ${req.url} - ${responseTime} ms`
        );
    });

    next();
}

// Apply middleware before routes
app.use(responseTimeLogger);

// Routes
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/products", (req, res) => {
    res.send("Product List");
});

app.get("/users", (req, res) => {
    res.send("User List");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});