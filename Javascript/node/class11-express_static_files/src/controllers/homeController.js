exports.initialPage = (req, res) => {
    res.render('index');
};

exports.treatPost = (req, res) => {
    res.send(`
        Hey! I'm the new POST route.
    `);
}