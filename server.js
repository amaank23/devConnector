const express = require('express');
const connectDB = require('./config/db');

const app = express();

// CONNECT DATABASE
connectDB();

//init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API Running'));


// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


require("dotenv").config()

const path = require("path")
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));