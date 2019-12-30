import React, { Component } from 'react';

import { storeProducts, detailProduct } from "./data";
import axios from "axios";

const ProductContext = React.createContext();
// createContext agar dapat mengakses state satu ke halaman lain;
// jadi dapat di gunakan di halaman lain;

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount() {
        // this.setProducts();
        axios.get("http://localhost:8000/kursus")
        .then((result) => {
            
            this.setState({
            products: result.data.response
        })
        // console.log(result)
    })
    }

  

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, handleDetail: this.handleDetail, addToCart: this.addToCart, openModal: this.openModal, closeModal: this.closeModal,
                increase: this.increase, decrease: this.decrease,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };