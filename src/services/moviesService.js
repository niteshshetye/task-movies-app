import { movies, moviesSearch } from "../api/axiosConfig";

//fetch movies
export const moviesFetch = (category) => {
    return movies(category+`?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`).then(res => res.data.results)
}

// fetch searched movie name list
export const moviesSearchFetch = (query) => {
    return moviesSearch(`?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`).then(res => res.data.results)
}

export const singleMovieFetch = (id) => {
    return movies(id+`?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(res => res.data)
}

export const castsOfSingleMovieFetch = (id) => {
    return movies(id+`/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(res => res.data.cast.slice(0, 10))
}