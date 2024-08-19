const Book = require('../models/book');
const asyncWapper = require("../middleware/asyncWrapper");

const getAllBooksForQuery = asyncWapper(async (req, res, next) => {
    const {sort, author, genre, field} = req.query;
    const queryObject = {}

    // Adding query conditions for author and genre
    if(author) {
        queryObject.author = {$regex: author, $options: 'i' }
    }
    if(genre) {
        queryObject.genre = {$regex: genre, $options: 'i'}
    }

     // Initializing the query
    let result = Book.find(queryObject);

    // Adding sort functionality
    if(sort) {
        const sortList = sort.split(',').join(" ");
        result = result.sort(sortList);
    }

    // Adding field selection functionality
    if(field) {
        const fieldList = field.split(',').join(" ");
        result = result.select(fieldList);
    }

    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit)

    // Executing the query and getting the result
    const book = await result;
    //sending the response
    res.status(200).json({book, bookLenght: book.length})
})

module.exports = {getAllBooksForQuery}