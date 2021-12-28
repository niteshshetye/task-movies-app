import React from 'react'
import Movies from '../../components/Movies'

const TopPage = () => {
    // console.log("TOP", props)
    return (
        <>
            <Movies moviesType='toprated' />   
        </>
    )
}

export default TopPage
