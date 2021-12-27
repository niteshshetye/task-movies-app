import React from 'react'
import styled from 'styled-components'

const Conatiner = styled.div`
    // border: 1px solid white;
    width: 250px;
    height: 300px;
    margin: 10px;
    padding: 3px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    img{
        width: 80%;
        height: 70%;
        object-fit: contain;
    }

    h5{
        margin: 5px 0px;
        font-size: 1rem;
        text-align: center;
        margin-bottom: 4px;
        letter-spacing: 1px;
        font-weight: 500;
    }

    p{
        font-size: 15px;
    }
`
const Movie = ({movie}) => {
    return (
        <Conatiner>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h5>{movie.title}</h5>
            <p>Rating: {movie.vote_average}</p>
        </Conatiner>
    )
}

export default Movie
