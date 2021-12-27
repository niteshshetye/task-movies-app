import {takeEvery, call, put, all} from 'redux-saga/effects'

// utils
import * as actionTypes from '../redux/actionsTypes'
import {moviesFetch, moviesSearchFetch} from '../services/moviesService'

//actions
import {popularFetched} from '../redux/actions/PopularMoviesAction'
import {topRatedFetched} from '../redux/actions/TopMoviesAction'
import {upcomingFetched} from '../redux/actions/UpcomingMoviesAction'
import {searchFetched} from '../redux/actions/SearchMoviesAction'


// worker saga
function* loadPopular(){
    const popularM = yield call(moviesFetch, 'popular');
    // console.log(popularM)
    yield put(popularFetched(popularM))
}
function* loadTopRated(){
    const topM = yield call(moviesFetch, 'top_rated');
    // console.log(topM)
    yield put(topRatedFetched(topM))
}
function* loadUpcoming(){
    const upcomingM = yield call(moviesFetch, 'upcoming');
    // console.log(upcomingM)
    yield put(upcomingFetched(upcomingM))
}
function* loadSearched(action){
    const searchedM = yield call(moviesSearchFetch, action.payload);
    // console.log(searchedM)
    yield put(searchFetched(searchedM))
}


// watcher saga
function* watchPopular(){
    yield takeEvery(actionTypes.FETCH_POPULAR_MOVIES, loadPopular);
}
function* watchTopRated(){
    yield takeEvery(actionTypes.FETCH_TOP_RATED_MOVIES, loadTopRated);
}
function* watchUpcoming(){
    yield takeEvery(actionTypes.FETCH_UPCOMING_MOVIES, loadUpcoming);
}
function* watchSearch(){
    yield takeEvery(actionTypes.SEARCH_MOVIES, loadSearched);
}

export function* moviesSaga(){
    yield all([
        watchPopular(),
        watchTopRated(),
        watchUpcoming(),
        watchSearch()
    ])
}