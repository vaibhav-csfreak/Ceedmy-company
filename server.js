const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const visitors = require("./routes/api/visitors");
const app = express();
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })

);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
    .connect(
        db, { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Production 

app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
});

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
});

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/visitors", visitors);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));