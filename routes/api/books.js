const router = require("express").Router();
const booksControllers = require("../../controllers/booksControllers");


router.route("/")
    .get(booksControllers.findAll)
    .post(booksControllers.create);


router.route("/:id")
    .delete(booksControllers.remove);

module.exports = router;