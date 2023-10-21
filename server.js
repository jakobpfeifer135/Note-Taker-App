const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlroutes.js');
const PORT = process.env.port || 3001;
const app = express();
// requires all of the other documents parents so that we don't have to require all children files such as paths and the db.json file


// Middleware for parsing JSON and urlencoded form data as well as using the api and html code
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// deploys app in integrated term
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
