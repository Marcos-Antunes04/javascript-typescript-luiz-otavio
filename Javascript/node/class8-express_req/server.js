const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
        <p>
            <label>
                Client name: 
                <input type="text" name="name">
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

app.get('/tests/:userId?/:userName?', (req, res) => {
    console.log(req.params); // /profiles/3
    console.log(req.query); // profiles/?key1=value1&key2=value2
    res.send(req.query.name + req.query.lastname);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`What you sent me was: ${req.body.name}`);
})

app.listen(3000, () => {
    console.log('Access http://localhost:3000');
    console.log('Server running on port 3000.');
});