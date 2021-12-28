import {
    FETCH_SINGLE_MOVIE,
    SINGLE_MOVIE_FETCHED,
    FETCH_CAST_LIST,
    CAST_LIST_FETCHED
} from '../actionsTypes'

export const fetchSingleMovie = (id) => {
    return {
        type: FETCH_SINGLE_MOVIE,
        payload: id
    }
}

export const singleMovieFetched = (data) => {
    return {
        type: SINGLE_MOVIE_FETCHED,
        payload: data
    }
}


export const fetchCastList = (id) => {
    return {
        type: FETCH_CAST_LIST,
        payload: id
    }
}

export const castListFetched = (data) => {
    return {
        type: CAST_LIST_FETCHED,
        payload: data
    }
}

