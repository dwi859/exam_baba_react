import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from '../logo.svg'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={require('../img/logo_baba.png')} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-2">
                        <Link to="/" className="nav-link" >
                            Categories
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                    <form className="form-inline my-2 my-lg-0" action="https://academy.babastudio.com/course-package-frontend" method="get">
                        <input type="text" name="search" className="input" placeholder="Search for Courses..." required=""/>
                            {/* <button type="submit" className="btn btn-outline-success my-2 my-sm-0"><i className="fa fa-search" aria-hidden="true"></i></button> */}
                            <div className="iconcari">
                                <img src={require('../img/search_30px.png')}/>
                            </div>
                    
                    </form>
                       
                      
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center kanan">
                    <li className="nav-item ml-2">
                        <Link to="/" className="right " >
                            Teachfor Community
                        </Link>
                    </li>
                    <li className="nav-item ml-3">
                        <Link to="/" className="right" >
                            Login
                        </Link>
                    </li>
                    <li className="nav-item ml-3">
                        <Link to="/" className="right-border" >
                           Sign Up
                        </Link>
                    </li>
                </ul>
               
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--lightBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`;
