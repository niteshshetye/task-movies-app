import axios from 'axios';

// WHILE FETCHING THE MOVIES
export const movies = axios.create({
    baseURL: process.env.REACT_APP_MOVIES_BASE_URL
});

// WHILE SEARCHING THE MOVIES
export const moviesSearch = axios.create({
    baseURL: process.env.REACT_APP_SEARCH_MOVIES_BASE_URL
});