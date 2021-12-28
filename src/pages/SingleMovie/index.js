import React, {useEffect} from 'react'

// import styled from 'styled-components';
import SingleMovie from '../../components/SingleMovie';
import {useParams} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import { fetchCastList, fetchSingleMovie } from '../../redux/actions/SingleMovieAction';

const SingleMoviePage = () => {
    const {currentMovie, castList} = useSelector(state => state.movies)
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchSingleMovie(id));
        dispatch(fetchCastList(id));
    }, [])


    return (
        <SingleMovie movie={currentMovie} casters={castList} />
    )
}

export default SingleMoviePage
