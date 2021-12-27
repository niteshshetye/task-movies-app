import {
    FETCH_POPULAR_MOVIES,
    POPULAR_MOVIES_FETCHED
} from '../actionsTypes'

export const fetchPopular = () => {
    return {
        type: FETCH_POPULAR_MOVIES
    }
}

export const popularFetched = (data) => {
    return {
        type: POPULAR_MOVIES_FETCHED,
        payload: data
    }
}