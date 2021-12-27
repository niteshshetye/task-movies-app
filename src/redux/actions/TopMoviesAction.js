import {
    FETCH_TOP_RATED_MOVIES,
    TOP_RATED_MOVIES_FETCHED
} from '../actionsTypes'

export const fetchTopRated = () => {
    return {
        type: FETCH_TOP_RATED_MOVIES
    }
}

export const topRatedFetched = (data) => {
    return {
        type: TOP_RATED_MOVIES_FETCHED,
        payload: data
    }
}