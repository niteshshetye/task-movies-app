import { movies } from "../api/axiosConfig";

//fetch movies
export const moviesFetch = (category) => {
    return movies(process.env.REACT_APP_MOVIES_BASE_URL+category+`?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`).then(res => res.data.results)
}

export const moviesSearchFetch = (query) => {
    return movies(process.env.REACT_APP_SEARCH_MOVIES_BASE_URL+`?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=1&include_adult=false`).then(res => res.data)
}