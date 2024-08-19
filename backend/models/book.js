const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: [true, 'Choose another title, title already exists in the database'],
    required: true,
    maxlength: [50, 'Title cannot exceed 50 characters'],
    minlength: 7
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    enum: {
      values: [
        "Fiction",
        "Non-Fiction",
        "Science Fiction",
        "Fantasy",
        "Mystery",
        "Thriller",
        "Romance",
        "Historical Fiction",
        "Horror",
        "Biography",
        "Autobiography",
        "Self-Help",
        "Young Adult",
        "Children's",
        "Crime",
        "Adventure",
        "Dystopian",
        "Contemporary",
        "Graphic Novel",
        "Memoir",
        "Classic",
        "Poetry",
        "Spirituality",
        "Science",
        "Travel",
        "Humor",
        "Political",
        "Philosophy",
        "Paranormal",
        "Western",
        "Cookbook",
        "History",
        "Economics",
        "Astronomy",
        "Art",
        "Technology",
        "Finance",
        "Psychology",
        "Medicine",
        "Physics"
      ],
      message: '{VALUE} is not a valid genre'
    },
    required: true
  },
  publicationYear: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  coverImageURL: {
    type: String,
    required: false
  },
  bookUrl: {
    type: String,
    required: true
  },
  availableCopies: {
    type: Number,
    required: true,
    default: 1
  },
  totalCopies: {
    type: Number,
    required: true,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Book', bookSchema);
