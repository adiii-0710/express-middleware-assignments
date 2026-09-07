const express = require("express");

const router = express.Router();

// Router-level middleware
function routerLogger(req, res, next) {
    const dateTime = new Date().toLocaleString();

    console.log(`${req.method} ${req.baseUrl}${req.url} ${dateTime}`);

    next();
}

// Apply middleware only to this router
router.use(routerLogger);

// Routes
router.get("/students", (req, res) => {
    res.send("Students List");
});

router.get("/courses", (req, res) => {
    res.send("Courses List");
});

router.get("/faculty", (req, res) => {
    res.send("Faculty List");
});

module.exports = router;