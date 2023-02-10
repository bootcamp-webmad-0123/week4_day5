require("dotenv").config();

require("./db");

const express = require("express");
const app = express();

require("./config")(app);

app.locals.appTitle = "Book CRUD";

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const booksRoutes = require("./routes/books.routes");
app.use("/libros", booksRoutes);

require("./error-handling")(app);

module.exports = app;
