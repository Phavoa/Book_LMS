const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  getBook
} = require("../controllers/books");

const {getAllBooksForQuery} = require('../controllers/booksQuery')

router.route("/").get(getAllBooks).post(createBook);
router.route("/query").get(getAllBooksForQuery);
router.route("/:id").patch(updateBook).delete(deleteBook).get(getBook);

module.exports = router;
