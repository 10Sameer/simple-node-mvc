const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/auth",authRoutes);
app.use("/todo",todoRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
});
