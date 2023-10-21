const router = require("express").Router();
const db = require("../db/db.json");
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');
// we run our require statements here too us our database in realtime, our express features, our helper functions, and universal id's


// gets information from the notes html in real time
router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });
// push the information to the page after we have received the users input
  router.post('/notes', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
  
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
  //if all criteria is met than we will save the info to the database
      readAndAppend(newNote, './db/db.json');
      //if success than display success
      const response = {
        status: 'success',
        body: newNote,
      };
      //in case of failure display that to user
      res.json(response);
    } else {
      res.json('Error in posting feedback');
    }
  });

  module.exports = router;