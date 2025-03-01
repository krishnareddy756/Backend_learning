const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const posts = [
    { username: "john_doe", userAvatar: "/avatar1.jpg", imageUrl: "/post1.jpg", caption: "Beautiful day!", likes: 120 },
    { username: "jane_doe", userAvatar: "/avatar2.jpg", imageUrl: "/post2.jpg", caption: "Enjoying my coffee ☕", likes: 200 }
];

app.get('/', (req, res) => {
    res.render('index', { posts });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
