require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./models/book");
const jsonBooks = require("../books.json");
const connectDB = require("./db/connect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Database connected successfully.');

    await Book.deleteMany();
    console.log('Old books data deleted.');

    await Book.create(jsonBooks);
    console.log('New books data added successfully.');

    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
