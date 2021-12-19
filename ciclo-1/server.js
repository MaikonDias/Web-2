const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
var exphbs = require('express-handlebars');
const routes = require('./src/routes');
const path = require('path');

const app = express();
const port = 3000;

// mongoose.connect('mongodb://localhost:27017', {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// }, function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("MongoDB conectado")
//     }
// })
app.engine('.hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname, 'view'));

app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(routes);

app.listen(port, function(){
    console.log(`server executando na porta ${port}`);
})