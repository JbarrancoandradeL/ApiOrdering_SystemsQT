const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const morgan  = require('morgan');
const http    = require('http');
const path    = require('path');
const app     = express();
const port    = (process.env.PORT || 3000);
const route   = require('./app/routes/main');


app.set('port', 3000);
//app.set('views', path.join(__dirname, 'views'));


app.use(route);

http.createServer(app).listen(3000);