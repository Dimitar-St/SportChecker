class HomeController {
    constructor() {}

    getHomePage(req, res) {
        res.render('home-page.pug');
    }
}

module.exports = HomeController;