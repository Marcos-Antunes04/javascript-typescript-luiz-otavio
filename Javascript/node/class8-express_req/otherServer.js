const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
        <p>
            <label>
                Client name: 
                <input type="text" name="firstname">
            </label>
        </p>
        <p>
            <label>
                Another Input
                <input type="text" name="anotherInput">
            </label>
        </p>
        <button>Send</button>
    </form>
    `);
});

app.get('/test/:username?', (req, res) => {
    res.send(req.params)
})

app.post('/', (req, res) => {
    res.send('Hello, ' + req.body.firstname + '.');
})

app.listen(3000, () => {
    console.log('Access http://localhost:3000');
    console.log('Server running on port 3000.');
});