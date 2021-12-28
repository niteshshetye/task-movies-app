import {
    POPULAR_MOVIES_FETCHED,
    TOP_RATED_MOVIES_FETCHED,
    UPCOMING_MOVIES_FETCHED,
    MOVIES_SEARCHED,
    CLEAR_SEARCHED,
    SINGLE_MOVIE_FETCHED,
    CAST_LIST_FETCHED
} from '../actionsTypes'

const initialState = {
    movies: [],
    filterdMovies: [],
    currentMovie: {},
    castList: []
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
        
        case SINGLE_MOVIE_FETCHED:
            return {
                ...state,
                currentMovie: {...action.payload}
            }

        case MOVIES_SEARCHED:{
            return {
                ...state,
                filterdMovies: [...action.payload]
            }
        }

        case CAST_LIST_FETCHED:{
            return {
                ...state,
                castList: [...action.payload]
            }
        }
        
        case CLEAR_SEARCHED: {
            return {
                ...state,
                filterdMovies: []
            }
        }

        default: 
            return state
    }
}