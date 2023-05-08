require("dotenv").config();

const express = require("express");

const cookieParser = require("cookie-parser");

const router = require("./router");

const {errorHandler} = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api", router, errorHandler);





app.get("*", (req, res) => {
    res.status(404).json({ message: "Not found !" });
  });

module.exports = app;