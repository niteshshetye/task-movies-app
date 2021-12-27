import React,{useEffect, useState} from 'react'
// redux
import {useDispatch, useSelector} from 'react-redux'
// actions
import {fetchPopular} from '../redux/actions/PopularMoviesAction'
import {fetchTopRated} from '../redux/actions/TopMoviesAction'
import {fetchUpcoming} from '../redux/actions/UpcomingMoviesAction'
// component
import Movie from './Movie'

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
    const {movies} = useSelector(state => state.movies);
    const state = useSelector(state => state.movies);
    const dispatch = useDispatch();
    console.log("state: ", state);

    const fetchType = moviesType ==='upcoming'? fetchUpcoming: moviesType === 'toprated'? fetchTopRated: fetchPopular

    useEffect(() => {
        dispatch(fetchType())
    },[]);

    return (
        <Container>
            {
                movies.map(movie => (
                    <Movie key={movie.id} movie={movie} />
                ))
            }
        </Container>
    )
}

export default Movies
