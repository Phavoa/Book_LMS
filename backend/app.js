require("dotenv").config();

const express = require("express");
const app = express();

//Import routes and middleware
const booksRouter = require("./routes/books");
const connectDB = require("./db/connect");
const errorMiddleware = require("./middleware/error");

//Middleware
app.use(express.json());
app.use("/api/v1/books", booksRouter);
app.use(errorMiddleware);

//Root route
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

//Start server
const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`App is listen on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
