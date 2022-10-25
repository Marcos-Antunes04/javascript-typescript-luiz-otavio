const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    <label>
        Name: 
        <input type="text" name="name">
        <button>Send</button>
    </label>
    `);
});

app.post('/', (req, res) => {
    res.send('Received Form');
})

app.get('/contact', (req, res) => {
    res.send('Thank you for contacting us!');
})

app.listen(3000, () => {
    console.log('Access http://localhost:3000');
    console.log('Server running on port 3000.');
});