import { combineReducers } from 'redux';
import { createScopedReducer } from '../../scope';
import { LoadingReducer } from '../../loading';
import { MOVIE_RESULTS_SCOPE, MOVIE_SINGULAR_SCOPE } from './constants';

const MovieReducer = combineReducers({
	results: createScopedReducer(LoadingReducer, MOVIE_RESULTS_SCOPE),
	singularMovie: createScopedReducer(LoadingReducer, MOVIE_SINGULAR_SCOPE)
});

export default MovieReducer;
