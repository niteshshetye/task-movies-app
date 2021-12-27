import {
    POPULAR_MOVIES_FETCHED,
    TOP_RATED_MOVIES_FETCHED,
    UPCOMING_MOVIES_FETCHED,
    MOVIES_SEARCHED
} from '../actionsTypes'

const initialState = {
    movies: [],
    filterdMovies: []
}

export const moviesReducer = (state=initialState, action) => {
    switch(action.type){
        case POPULAR_MOVIES_FETCHED:
            return {
                ...state,
                movies: [...action.payload]
            }

        case TOP_RATED_MOVIES_FETCHED:
            return {
                ...state,
                movies: [...action.payload]
            }

        case UPCOMING_MOVIES_FETCHED:
            return {
                ...state,
                movies: [...action.payload]
            }

        case MOVIES_SEARCHED:{
            return {
                ...state,
                filterdMovies: [...action.payload]
            }
        }
        
        default: 
            return state
    }
}