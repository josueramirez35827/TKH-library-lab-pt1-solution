const express = require("express");
const bookModel = require("../models/book");
const app = express();

//GET
app.get("/books", async (request, response) => {
  const books = await bookModel.find({});

  try {
    response.send(books);
  } catch (error) {
    response.status(500).send(error);
  }
});



module.exports = app;
