import React,{useEffect} from 'react'
// redux
import {useDispatch, useSelector} from 'react-redux'
// actions
import {fetchPopular} from '../redux/actions/PopularMoviesAction'
import {fetchTopRated} from '../redux/actions/TopMoviesAction'
import {fetchUpcoming} from '../redux/actions/UpcomingMoviesAction'
// component
import MovieCart from './MovieCart'

import styled from 'styled-components'

const Container = styled.div`
    // border: 1px solid white;
    // height: 92vh;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #041C32;
    color: white;
`


const Movies = ({moviesType}) => {
    const {movies, filterdMovies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const fetchType = moviesType ==='upcoming'? fetchUpcoming: moviesType === 'toprated'? fetchTopRated: fetchPopular

    useEffect(() => {
        dispatch(fetchType())
    },[]);

    return (
        <Container>
            {
                filterdMovies.length !== 0? filterdMovies.map(movie => (
                    <MovieCart key={movie.id} movie={movie} />
                )) : movies.map(movie => (
                    <MovieCart key={movie.id} movie={movie} />
                ))
            }
        </Container>
    )
}

export default Movies
