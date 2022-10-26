const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require('./data/courses.json');
const category = require('./data/categories.json');
const authors = require('./data/authors.json');
app.get('/', (req, res) => {
    res.send('server running ',)
})
app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/courses/category/:categoryId', (req, res) => {
    const id = req.params.categoryId;
    if (id === '7') {
        res.send(courses);
    } else {
        const selectedCourses = courses.filter((course) => course.categoryId === id);
        res.send(selectedCourses);
    }
})

app.get('/categories', (req, res) => {
    res.send(category);
})
app.get('/author/:authorId', (req, res) => {
    const id = req.params.authorId;
    const selectedAuthor = authors.find((author) => author.authorId === id);
    res.send(selectedAuthor);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find((course) => course._id === id);
    res.send(course);
})

app.get('*', (req, res) => {
    res.send('Wrong Api.')
})

app.listen(port, () => {
    console.log(`server running port : ${port}`);
})