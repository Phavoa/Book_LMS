const asyncWapper = require("../middleware/asyncWrapper");
const Book = require("../models/book");

const getAllBooks = asyncWapper(async (req, res, next) => {
  const allBooks = await Book.find({});
  res.status(200).json({ allBooks });
});

const createBook = asyncWapper(async (req, res, next) => {
  const book = await Book.create(req.body);
  res.status(201).json({ book });
});

const getBook = asyncWapper(async (req, res, next) => {
    const {id : bookId} = req.params;
    const book = await Book.findOne({_id: bookId});
    if(!book){
        return res.status(400).json({msg: "Book not found"});
    }
    res.status(200).json({book})
})

const updateBook = asyncWapper(async (req, res, next) => {
  const { id: bookId } = req.params;
  const book = await Book.findOneAndUpdate({ _id: bookId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json({ book });
});

const deleteBook = asyncWapper(async (req, res, next) => {
  const { id: bookId } = req.params;
  const book = await Book.findOneAndDelete({ _id: bookId }, req.body);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(200).json({ book });
});

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
