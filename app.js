/**
 * importation of node js core modules
 */

const path= require('path');


/**
 * importation des elements internes du projet 
 */

const FromRoutes = require('./routes/client');


/**
 * importation du package qui va nous permettre de creer notre 
 * application
 */

const express = require('express');
const bodyParser = require('body-parser');

/**
 * creation de notre application express qui fonctionne avec les 
 * middleware
 */

const App = express();

//port on which the server is listening
const port = 3000;

App.set('view engine','ejs');
App.set('views','views');

App.use(express.static(path.join(__dirname,'public')));

App.use(bodyParser.urlencoded({extended:false}));



App.use('/logis/users/',FromRoutes.requestHandler);

App.listen(port)