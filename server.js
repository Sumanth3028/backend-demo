const http = require("http");

const path=require('path')

const bodyParser = require("body-parser");

const express = require("express");

const app = express();


const adminRoutes=require('./routes/admin')

const shopRoutes=require('./routes/shop')

const contactRoutes=require('./routes/contact')

const errorController=require('./controllers/404')

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes)

app.use('/',shopRoutes)

app.use(contactRoutes)


app.use(errorController.get404)

const server = http.createServer(app);

server.listen(4000);
