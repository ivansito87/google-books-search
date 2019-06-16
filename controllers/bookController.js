const db = require("../models");

// Defining the methods for the book controllers
module.exports = {
    findAll: (req, res) => {
        db.Book.find(req.query)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).)

    }

};

// find the final product here [here](https://github.com/craigcompton/NYT-Google-Books/blob/master/controllers/bookController.js)