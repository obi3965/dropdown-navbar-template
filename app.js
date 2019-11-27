const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const flash = require('req-flash');
const app = express();

app.use(
  morgan("dev", {
    skip: req => !req.url.endsWith(".html") && req.url.indexOf(".") > -1
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use(session({
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized:true,
    cookie: {maxAge: 60000}
}))


app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
// app.use('/public', express.static(path.join(__dirname, 'public')))
app.locals.dateAndTime = require("date-and-time");


//import all related javascript and css files to inject in our app
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
// app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
// app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

require("./routes/routes.js")(app);








const port = 6080;
app.listen(port, error => {
  if (error) console.log(error);
  console.log(
    "\x1b[35m%s\x1b[0m",
    "================================================================"
  ); // udskriver en lilla streg i konsol
  console.log(
    "Server is listening on port %s, address: %s",
    port,
    "http://localhost:" + port
  );
});
