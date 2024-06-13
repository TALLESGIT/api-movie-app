import { Router } from 'express';
import {
    createMovie,
    deleteMovie,
    getMovies,
    updateMovie,
} from './controllers/MovieController.js';

const routes = Router();

routes.get('/movies', getMovies);
routes.post('/movie', createMovie);
routes.delete('/movie/:id', deleteMovie);
routes.put('/movie/:id', updateMovie);

export default routes;
