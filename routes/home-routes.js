const HomeController = require('../controllers/home-controller');

module.exports = function(router) {
    const controller = new HomeController();

    router.get('/', (req, res) => controller.getHomePage(req, res));
}