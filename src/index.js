const express = require('express');
require('./database');
const path = require('path');
const engine = require('ejs-mate');

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('ejs',engine);
app.set('view engine','ejs');

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname,'public')));

// start the server
app.listen(app.get('port'), () => {
    console.log('Server port '+app.get('port'));
});