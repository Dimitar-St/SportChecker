const express = require('express');
const expressSession = require('express-session');
const { Router } = require('express');
const path = require('path');


module.exports = function() {
    const app = express();

    let publicFiles = express.static(path.join(__dirname , './public_files')),
        libs = express.static(path.join(__dirname, './node_modules'));;


    app.use('/static', publicFiles);
    app.use('/libs', libs);

    app.set('view engine', 'pug');
    app.set('views', './views');

    app.use(expressSession({
        secret: 'mrmw',
        cookie: { maxAge: 60 * 60 * 60 * 1000 },
        rolling: true,
        resave: true,
        saveUninitialized: false,
      }));

    require('./routes/routes-loader')(Router, app);

    return app;
}