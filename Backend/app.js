const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbUrl = 'mongodb://localhost:27017/test';
const Form = require("./models/Form");
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();


app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    res.json("it works");
});

app.post('/api/form/submit', async (req, res) => {
    try {
        const data = { ...req.body };
        const newSubmission = new Form(data);
        await newSubmission.save();

        res.json({ success: true });
        console.log(req.body)
    } catch (error) {

        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use((err, req, res, next) => {
    res.json({ error: err });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
});

