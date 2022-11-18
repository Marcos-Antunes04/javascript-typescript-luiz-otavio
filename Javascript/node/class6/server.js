const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello World!</h1>
        <form action="/" method="POST">
            Firstname:
            <input type="text" name="firstname">
            <button>Send</button>
        </form>
    `)
});

app.post('/', (req, res) => {
    res.send('Form received.')
});

app.get('/contacts', (req, res) => {
    res.send('Thank you for contacting us.')
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('Access http://localhost:3000');
});