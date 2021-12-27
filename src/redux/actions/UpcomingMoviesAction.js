import {
    FETCH_UPCOMING_MOVIES,
    UPCOMING_MOVIES_FETCHED
} from '../actionsTypes'

export const fetchUpcoming = () => {
    return {
        type: FETCH_UPCOMING_MOVIES
    }
}

export const upcomingFetched = (data) => {
    return {
        type: UPCOMING_MOVIES_FETCHED,
        payload: data
    }
}