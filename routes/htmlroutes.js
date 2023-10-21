const path = require('path');
const router = require('express').Router();


// join the notes.html to the data
router.get("/notes", (req, res) => {
res.sendFile(path.join(__dirname, "../public/notes.html"))
});


router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});
// export this code with a name of router
module.exports = router;