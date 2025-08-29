const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');

const db = require("./config/mongoose-connection");
const ownernsRouter = require("./routes/ownersRouter");
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine",ejs);

app.use('/owners',ownernsRouter);
app.use('/users',usersRouter);
app.use('/products',productsRouter);


app.get('/',  (req,res) => {
    res.send('hello');
})

 app.listen(3000);
