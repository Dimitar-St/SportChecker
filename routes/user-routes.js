const UserController = require('../controllers/user-controller');

module.exports = function(router) {
    let controller = new UserController();

    router.get('/sign-in', (req, res) => controller.getSignInPage(req, res))
          .get('/sign-up', (req, res) => controller.getSignUpPage(req, res));
}