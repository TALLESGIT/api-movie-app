import { Router } from "express";
import { getMovies } from "./controllers/MovieController.js";

const routes = Router();

routes.get("/movies", getMovies);

export default routes;
