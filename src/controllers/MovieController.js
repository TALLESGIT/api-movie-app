import Movie from "../models/movie.js";

export const getMovies = async (req, res) => {
  const movies = await Movie.find();

  return res.status(200).json(movies);
};
