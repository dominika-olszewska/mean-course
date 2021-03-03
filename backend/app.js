const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect('mongodb://localhost:27017/mean-course', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('Connected to the database')
    })
    .catch(() => {
        console.log('Connection failed')
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});


app.post('/api/posts', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    console.log(post);
    post.save();
    res.status(201).json({
        message: 'Post added successfuly',
    });
});

app.use('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: '123',
            title: 'First server-side post',
            content: 'This is coming from the server',
        },
        {
            id: '234',
            title: 'Second server-side post',
            content: 'This too',
        },
    ];
    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts,
    });
});

module.exports = app;