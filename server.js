// MAIN ENTRY FILE

// 1. bring express
const express = require('express');
// db route connection
const connectDB = require('./config/db')

// 2. use express
const app = express();

// db connection
connectDB();

// 4. dev code ---------------

    app.get('/', (req, res) => res.send(`API RUNNING`))

// ---------------------------

// 3. port and env variable config
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));