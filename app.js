const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

//.env 파일을 읽어와서 process.env로 만든다
dotenv.config();
const app = express();
app.set('port',process.env.PORT || 3000);

app.use(morgan('dev'));


app.use((req, res, next) =>{
    console.log('All run');
    next();
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log('waiting for',app.get('port'));
})