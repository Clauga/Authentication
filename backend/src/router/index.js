const express = require("express");

const movieRoutes = require("./movie.routes");
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes.js");
const authorization = require("../middleware/auth");

const router = express.Router();

router.use("/movie", authorization, movieRoutes);
router.use("/user", userRoutes);
router.use(authRoutes);

module.exports = router;