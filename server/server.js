const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
/* ----- add new requires here ------- */
const passport = require('passport');
const flash = require('express-flash');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use .env file for configuration constants
require('dotenv').config();

// create connection to database
require('./handlers/dataConnector.js').connect();

// view engine setup
app.use(expressLayouts);
app.set('view engine', 'ejs'); 

// Express session
app.use(cookieParser('oreos'));
app.use(
    session({
      secret: process.env.SECRET,
      resave: true,
      saveUninitialized: true
    })
  );


/* ----- add new code here ------- */
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Use express flash
app.use(flash());
// set up the passport authentication
require('./handlers/auth.js');
// set up route handlers
const openRoutes = require('./handlers/openRouter.js');
app.use('/', openRoutes);
// these routes only if logged in
const apiRoutes = require('./handlers/apiRouter.js');
app.use('/api', apiRoutes );


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build'));
  });
}


app.listen(port, () => console.log(`Listening on port ${port}`));

