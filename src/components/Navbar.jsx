import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {fetchSearch} from '../redux/actions/SearchMoviesAction'

const Nav = styled.div`
    background-color: #1A374D;
    // border: 1px solid black;
    padding: 10px 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

`
const Logo = styled.div`
    // border: 1px solid black;
    letter-spacing: 2px;
`
const NavMenu = styled.div`
    // border: 1px solid black;
    display: flex;
    align-items: center;

    ul{
        display: flex;
        align-items: center;
        list-style: none;

        li{
            margin-right: 15px; 
            cursor: pointer;

            a{
                text-decoration: none;
                color: white;
            }
        }
    }
`

const SearchDiv = styled.div`
    // border: 1px solid black;
    input{
        padding: 5px;
        outline: none;
        border: 1px solid black;
        border-radius: 4px;
        margin-right: 4px;
    }

    button{
        padding: 5px;
        border-radius: 4px;
        outline: none;
        border: 1px solid black;
    }
`

const Navbar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch()

    // useEffect(() => {
    //     console.log(query)
    // }, [query])

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(query));
    }
    return (
        <Nav>
            <Logo>
                MovieDb
            </Logo>
            <NavMenu>
                <ul>
                    <li><Link to='/'>Popular</Link></li>
                    <li><Link to='/toprated'>Top Rated</Link></li>
                    <li><Link to='/upcoming'>Upcoming</Link></li>
                </ul>
                <SearchDiv>
                    <input type="text" 
                        placeholder='Movie Name'
                        value={query}
                        onChange={e => setQuery(e.target.value)} 
                    />
                    <button type='button' onClick={handleSearch}>Search</button>
                </SearchDiv>
            </NavMenu>
        </Nav>
    )
}

export default Navbar
