import { Router } from 'express';

import {
    createCategory,
    deleteCategory,
    getCategories,
    updateCategory,
} from './controllers/categoryController.js';

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

routes.get('/Categories', getCategories);
routes.post('/Category', createCategory);
routes.delete('/Category/:id', deleteCategory);
routes.put('/Category/:id', updateCategory);

export default routes;
