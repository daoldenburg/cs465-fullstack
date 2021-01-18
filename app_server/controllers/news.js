// GET news view
const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', { title: 'Test title lol' });
};

module.exports = {
    news
};