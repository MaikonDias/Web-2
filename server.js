const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
var hbs = require('express-handlebars');
const routes = require('./src/routes');
const path = require('path');

const app = express();
const port = 3000;


app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'view'));

app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(routes);

app.listen(port, function(){
    console.log(`server executando na porta ${port}`);
})