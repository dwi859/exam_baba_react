import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from '../logo.svg'

export default class Footer extends Component {
    render() {
        return (
           <div className="footer">
               <div class="container">
                    <div class="content-footer">
                        <div className="row">
                            <div class="col-md-5 col-sm-5 col-xs-12">
                                <div class="widget">
                                    <div class="widget__title">
                                    <Link to="https://academy.babastudio.com">
                                        <img src={require('../img/logo_baba.png')} alt="store" className="navbar-brand"  alt="vector logo" class="img-fluid"/>
                                    </Link>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12">
                                <div class="widget">
                                    <div class="widget__title">
                                        Tentang
                                    </div>
                                    <div class="widget__description">
                                        <ul>
                                            <li><Link to="#" className="ab">Kupon</Link></li>
                                            
                                            <li><Link to="https://academy.babastudio.com/course-package-frontend" className="ab">Kursus</Link></li>
                                            <li><Link to="https://academy.babastudio.com/login" className="ab">Login</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12">
                                <div class="widget">
                                    <div class="widget__title">
                                        Customer Service
                                    </div>
                                    <div class="widget__description">
                                        <ul>
                                            <li><Link to ="#" className="ab">FAQ</Link></li>
                                            <li><Link to="https://academy.babastudio.com/contact-us" className="ab">Kontak Kami</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-12">
                                <div class="widget">
                                    <div class="widget__title">
                                        Subscribe
                                    </div>
                                    <div class="widget__description">
                                        <p>Ikuti berita kami</p>
                                        <form class="form-inline" action="https://academy.babastudio.com/suscribe" method="post">
                                            <input type="hidden" name="_token" value="hiyq0z43aFZjWHWiPM5wYFqVmLOPy9pTJkHzHyA3"/>                
                                            <div class="form-group">
                                            <input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Enter your email"/>
                                            </div>
                                            <button type="submit" class="btn btn-default btn-plane-send"><i class="icon ion-md-paper-plane"></i></button>
                                        </form>
                                        <p>Terkoneksi dengan kami</p>
                                        <ul class="media">
                                            <li><Link to="#facebook" class="facebook"><i class="fLink fa-facebook"></i></Link></li>
                                            <li><Link to="#twitter" class="twitter"><i class="fLink fa-twitter"></i></Link></li>
                                            <li><Link to="#gplus" class="gplus"><i class="fLink fa-google-plus"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
                <hr/> 
                <div class="copyright">
                <hr />
                    <div class="container">
                        <div class="copyright-text text-center">
                         <p>Copyright @2018  <Link to="https://academy.babastudio.com" className="ac">techfor.id</Link>, All right reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
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
