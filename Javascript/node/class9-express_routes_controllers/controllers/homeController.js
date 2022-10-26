exports.initialPage = (req, res) => {
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
};

exports.treatPost = (req, res) => {
    res.send(`
        Hey! I'm the new POST route.
    `);
}