module.exports = function(Router, app) {
    const router = new Router();

    require('./home-routes')(router);
    require('./user-routes')(router);

    app.use(router);
}