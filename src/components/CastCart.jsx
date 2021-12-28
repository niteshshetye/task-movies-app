import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    // display: flex;
    // flex-wrap: wrap;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // border: 1px solid white;
    width: 200px;
    height: 350px;
    margin-bottom: 25px;
    img{
        width: 100%;
        // height: 174px;
        object-fit: cover;
    }
    h6{
        font-size: 1.2rem;
    }
`


const CastCart = ({caster}) => {
    return (
        <Container>
            <img src={`https://image.tmdb.org/t/p/w500${caster.profile_path}`} alt={caster.name} />
            <h6>{caster.name}</h6>
            <p>Character: {caster.character}</p>
        </Container>
    )
}

export default CastCart
