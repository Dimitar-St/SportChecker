class UserController {
    constructor() {}

    getSignInPage(req, res) {
        res.render('user/sign-in.pug');
    }

    getSignUpPage(req, res) {
        res.render('user/sign-up.pug');
    }
}

module.exports = UserController;