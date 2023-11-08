const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const bodyParsor = require('body-parser');

//.env 파일을 읽어와서 process.env로 만든다
dotenv.config();
const app = express();
app.set('port',process.env.PORT || 3000);

app.use(bodyParsor.raw());
app.use(bodyParsor.text());
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname,'pulbic')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.cookieParser(process.env.COOKIE_SECRET));
app.une(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    }, 
    name: 'session-cookie',
}));

app.use((req, res, next) => {
    console.log('all request');
    next();
});
