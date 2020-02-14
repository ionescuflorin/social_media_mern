// MAIN ENTRY FILE

// 1. bring express
const express = require("express");
// 5.1 db route connection
const connectDB = require("./config/db");

// 2. use express
const app = express();

// 5.2 db connection
connectDB();

// 7. init middleware
app.use(express.json({ extended: false })); // body parser

// 4. dev code ---------------

app.get("/", (req, res) => res.send(`API RUNNING`));

// ---------------------------

// 6. define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// 3. port and env variable config
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
