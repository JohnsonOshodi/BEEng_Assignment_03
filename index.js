const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());


// Authentication middleware
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Authentication failed' });
    }

    // Credentials for demonstration
    const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    const username = credentials[0];
    const password = credentials[1];
    if (username === 'admin' && password === 'admin') {
        next();
    } else {
        return res.status(401).json({ message: 'Authentication failed' });
    }
};

// Endpoint to authenticate user
app.post('/login', authenticate, (req, res) => {
    res.json({ message: 'Authentication successful' });
});

//  Add more endpoints for books 

app.get('/books', (req, res) => {
    res.json({ message: 'This is the books GET endpoint' });
});

app.post('/books', (req, res) => {
    res.json({ message: 'This is the books POST endpoint' });
});

app.put('/books', (req, res) => {
    res.json({ message: 'This is the books PUT endpoint' });
});

app.patch('/books', (req, res) => {
    res.json({ message: 'This is the books PATCH endpoint' });
});

app.delete('/books', (req, res) => {
    res.json({ message: 'This is the books DELETE endpoint' });
});

//  Add more endpoints for authors
app.get('/authors', (req, res) => {
    res.json({ message: 'This is the authors GET endpoint' });
});

app.post('/authors', (req, res) => {
    res.json({ message: 'This is the authors POST endpoint' });
});

app.put('/authors', (req, res) => {
    res.json({ message: 'This is the authors PUT endpoint' });
});

app.patch('/authors', (req, res) => {
    res.json({ message: 'This is the authors PATCH endpoint' });
});

app.delete('/authors', (req, res) => {
    res.json({ message: 'This is the authors DELETE endpoint' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
