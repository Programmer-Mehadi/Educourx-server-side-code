const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require('./data/courses.json');
const category = require('./data/categories.json');
app.get('/', (req, res) => {
    res.send('server running ', )
})
app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const course = courses.find((course) => course.id === id);
    res.send(course);
})
app.get('/categories', (req, res) => {
    res.send(category);
})

app.listen(port, () => {
    console.log(`server running port : ${port}`);
})