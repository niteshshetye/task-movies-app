import {
    SEARCH_MOVIES,
    MOVIES_SEARCHED,
    CLEAR_SEARCHED
} from '../actionsTypes'

export const fetchSearch = (query) => {
    return {
        type: SEARCH_MOVIES,
        payload: query
    }
}

export const searchFetched = (data) => {
    return {
        type: MOVIES_SEARCHED,
        payload: data
    }
}

export const searchClear = () => {
    return {
        type: CLEAR_SEARCHED
    }
}