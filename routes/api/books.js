const router = require("express").Router();
const bookController = require("../../controllers/bookController");

//api for books
router.route("/")
    .get(bookController.findAll())
    .post(bookController.create());

// Find the books by id with id in url
router
    .route("/:id")
    .get(bookController.findById({}))
    .put(bookController.update())
    .delete(bookController.remove());

module.exports = router;
