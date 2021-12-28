import React from 'react'

import styled from 'styled-components';
import CastCart from './CastCart';

const Container = styled.div`
    display: flex;
    flex-direction: column;    
    color: white; 
`
const MovieInfo = styled.div`
    width: 93vw;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    // position: relative;/
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    background: url(${(props)=>props.imgUrl});
    // background-blend-mode: overlay; 
    background-size: cover;
    background-repeat: no-repeat;
`
const Details = styled.div`
    display: flex;
    align-items: start;
    img{
        height: 180px;
        width: 140px;
        object-fit: cover;
        margin-bottom: 5px;
    }

    div{
        padding: 0px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        // border: 1px solid white;

        * {
            margin-bottom: 20px;
        }

        h3{
            font-size: 1.5rem;
        }

        h4{
            font-size: 1.2rem;
            color: #5897c7;
        }

        h5{
            padding-top: 14px;
            font-size: 1.1rem;
        }

    }
`
const Wrapper = styled.span`
    border: 1px solid white;
    padding: 3px 5px;
    display: inline;
    margin-right: 15px;
    font-size: 1.1rem;
`
const Overview = styled.div`
    width: 50%;

    h3{
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 5px;
    }
    p{
        font-size: 0.9rem;
        font-weight: 300;
    }
`
const CastInfo = styled.div`
    padding: 20px;
    h3{
        font-size: 1.2rem;
    }
`

const CastContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    gap: 10px;
`


const SingleMovie = ({movie, casters}) => {
    // console.log("movie: ",movie);
    
    const getGenres = () => {
        const genres = movie?.genres?.map(genre => genre.name)
        const sentence = genres?.join(',')
        return sentence
    }

    const arry1 = [1,2,3,4,5,6,7,8,9,10];
    return (
        <Container>
            <MovieInfo imgUrl={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}>
                <Details>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div>
                        <h3>{movie.title}</h3>
                        <h4>Rating: {movie.vote_average}</h4>
                        <p><Wrapper>{movie?.runtime} min </Wrapper> <span>{getGenres()}</span></p>
                        <h5>Relese Date: {movie.release_date}</h5>           
                    </div>
                </Details>
                <Overview>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                </Overview>
            </MovieInfo>
            <CastInfo>
                <h3>Casts</h3>
                <CastContainer>
                    {
                        casters?.map(caster => (
                            <CastCart key={caster.id} caster={caster} />
                        ))
                    }
                </CastContainer>
            </CastInfo>
        </Container>
    )
}

export default SingleMovie
