const express = require("express");
const studentRouter = require("../studentRoutes");

const app = express();
const PORT = 3000;

app.use("/api", studentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});