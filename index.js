const express = require('express');
const port = 4000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(expressLayouts);

//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//routes
app.use('/', require('./routes/csvRoutes'));

//server listening
app.listen(process.env.PORT||port, (err) => {
    if(err) console.log("error listening on", port);

    console.log('listening on port', port);
})
