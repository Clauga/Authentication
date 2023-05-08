const { findAll, findOne  } = require("../model/movie.model.js");

const getAll = async (req, res, next) => {
  try {
    const movies = await findAll();

    res.send(movies);
  } catch (e) {
    next(e);
  }
};
  const getOne = async (req, res, next) => {
    try {
      const movieId = parseInt(req.params.id);

      if (idNaN(movieId)) throw new error();

      const [movies] = await findOne(movieId);
  
      res.send(movies);
    } catch (e) {
      next(e);
    }
};

module.exports = {getAll, getOne};