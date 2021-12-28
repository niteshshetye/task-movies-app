import React, {useState} from 'react';
import styled from 'styled-components'

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {fetchSearch, searchClear} from '../redux/actions/SearchMoviesAction'
import { useHistory } from 'react-router-dom';

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
    cursor: pointer;

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
        padding: 5px 8px;
        letter-spacing: 1px;
        border-radius: 4px;
        outline: none;
        border: none;
        cursor: pointer;
        background-color: #064635;
        color: white;
        transition: all .5s ease;

        :hover{
            background-color: #519259;
        }
    }
`

const Navbar = () => {
    const [query, setQuery] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setQuery(e.target.value);
        if(e.target.value === ''){
            dispatch(searchClear());
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if(query.length !== 0){
            dispatch(fetchSearch(query));            
        } else{
            console.log('enter with empty');
            dispatch(searchClear());
        }
    }
    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            if(query.length !== 0){
                dispatch(fetchSearch(query));            
            } else{
                console.log('enter with empty');
                dispatch(searchClear());
            }
        }
    }
    return (
        <Nav>
            <Logo onClick={() => history.push('/')}>
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
                        onChange={handleChange} 
                        onKeyPress={handleEnter}
                    />
                    <button type='button' onClick={handleSearch}>Search</button>
                </SearchDiv>
            </NavMenu>
        </Nav>
    )
}

export default Navbar
