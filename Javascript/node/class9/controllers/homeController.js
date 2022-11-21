exports.initialPage = (req, res) => {
    res.send(`
        <h1>Hello World!</h1>
        <form action="/" method="POST">
            Firstname:
            <input type="text" name="firstname">
            <button>Send</button>
        </form>
    `)
}

exports.handlePost = (req, res)  => {
    res.send('New post route')
}