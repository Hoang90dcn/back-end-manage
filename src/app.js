const express = require('express');
// const morgan = require('morgan'); // using to run code at local
// const hbs  = require('express-handlebars');
const app = express()
const path = require('path');
const port = 3000
const routes = require('../src/routes/index');
const db = require('../src/config/db');
// connect to db

db.connect();

//config data static
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded());
app.use(express.json());
// http
app.use(morgan('combined'));


//handlebars template
// app.engine(
//   "hbs",
//   hbs.engine({
//     extname: "hbs",
//   })
// );
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'resource/views'));

// config esj
app.set('views', path.join(__dirname, 'resource/views'));
app.set('view engine', 'ejs');
routes(app);

console.log("PATH ", path.join(__dirname, "resource/views"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
