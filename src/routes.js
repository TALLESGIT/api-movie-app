import { Router } from 'express';
import {
    createMovie,
    deleteMovie,
    getMovies,
} from './controllers/MovieController.js';

const routes = Router();

routes.get('/movies', getMovies);
routes.post('/movie', createMovie);
routes.delete('/movie/:id', deleteMovie);

export default routes;
