exports.initialPage = (req, res) => {
    res.render('index');
    return;
};

exports.treatPost = (req, res) => {
    res.send(req.body);
    return;
}