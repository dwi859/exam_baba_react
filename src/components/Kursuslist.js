import React, { Component } from 'react'
import Kursus from './Kursus';

import { storeProducts } from '../data';
import { ProductConsumer } from "../Context";

export default class Kursuslist extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="kursus">
                    <div className="container">
                         All Courses <br/>
                        <div className="filtering">
                            <div className="split">
                                Filter By
                            </div>
                            <div className="split">
                            <select className="form-control searchable" name="type" id="category">
                                <option value="" selected="">Pilih</option>
                                <option value="courses">Kursus</option>
                                <option value="package">Paket Kursus</option>
                                <option value="kategory">Kategori</option>
                                <option value="subkategory">Sub Kategori</option>
                                <option value="price">Harga Kursus</option>
                            </select>
                            </div>
                            <div className="split-search">
                                <form className="form-inline my-2 my-lg-0" action="https://academy.babastudio.com/course-package-frontend" method="get">
                                    <input type="text" name="search" className="input" placeholder="Search " required=""/>
                                    <span>
                                        <button type="submit" className="button btn-outline-successs">Search</button>
                                        </span>
                                </form>
                            </div>
                            <div className="content">
                                <ProductConsumer>
                                    {value => {
                                        return value.products.map(product => {
                                            return <Kursus key={product.id} product={product}>

                                            </Kursus>
                                        })
                                    }}
                                </ProductConsumer>
                                </div>
                            </div>
                        </div>
                </div>
               
            </React.Fragment>
            // <div>
            //     <Product />
            // </div>
        )
    }
}
