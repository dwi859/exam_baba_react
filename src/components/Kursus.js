import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from '../logo.svg'
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Kursus extends Component {
    render() {
        const { id, nama_kursus, image, total_durasi, total_murid,jumlah_video,harga,diskon } = this.props.product;
        // console.log(this.props.product)
        return (
            <ProductWrapper >
                        <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div className="img-container p-1" onClick={() =>
                                value.handleDetail(id)
                            }>

                                <Link to="/details">
                                    <img src={image} alt="product" className="card-img-top" />
                                </Link>
                                {/* <button className="cart-btn" disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id)
                                        value.openModal(id);
                                    }}
                                >
                                    {inCart ? (
                                        <p className="text-capitalize mb-0" disabled>{" "} in Cart</p>
                                    ) : (
                                            <i className="fas fa-cart-plus" />
                                        )}
                                </button> */}
                            </div>
                        )}

                    </ProductConsumer>

                    {/* Product Footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{nama_kursus}</p>
                       
                    </div>
                    <div className="list">
                        <p className="list">Total durasi video kursus {total_durasi}</p>
                       
                    </div>
                    
                    <div className="list">
                        <p className="list">{total_murid} Murid</p>
                       
                    </div>
                    <div className="list">
                        <p className="list">{jumlah_video} Materi Kursus</p>
                       
                    </div>
                    <div className="harga">
                    <div className="harga1">
                    <strike> Rp. {harga}</strike>
                    </div>
                       <p className="diskon">Rp. {diskon}</p>
                       
                    </div>
                </div>
                   </ProductWrapper>
        )
    }
}
Kursus.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        nama_kursus: PropTypes.string,
        price: PropTypes.number,
        total_durasi: PropTypes.number,
        total_murid: PropTypes.number,
        jumlah_video: PropTypes.number,
        harga: PropTypes.number,
    }).isRequired
};


const ProductWrapper = styled.div`
.card{
    border-color : transparent;
    transition : all 1s linear;
    float:left;
    margin-top: 30px;
    margin-right: 10px;
    width:267px;
  
}
.list{
    background: transparent;
    border-top: transparent;
    transition : all 1s linear;
    font-size:12px;
    color:grey;
    margin-left:10px;
    margin-top:-3px;
    font-family:calibry;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition : all 1s linear;
    font-size:16px;
    color:blue;
}
.harga{
    margin-left:10px;
    background: transparent;
    border-top: transparent;
    transition : all 1s linear;
    font-size:16px;
    color:blue;
}
&:hover{
    .card{
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
    background: rgba(247,247,247);
    }
}
.img-container{
    position: relative;
    overflow: hidden;
}
.card-img-top{
    
    width:263px;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transition : all 1s linear;
    transform: translate(100%, 100%);
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover{
    color: var(--mainBlue);
    cursor:pointer;
}
`;