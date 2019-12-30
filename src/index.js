import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ProductProvider } from "./Context";

// const express = require('express')
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
// const app = express()

// let db = "mongodb://babastudio:bakmandi6@cluster0-shard-00-00-ufght.mongodb.net:27017,cluster0-shard-00-01-ufght.mongodb.net:27017,cluster0-shard-00-02-ufght.mongodb.net:27017/api_shop?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
// mongoose.connect(db)


// .then(db => console.log('db connected'))
// .catch(err => console.log(err))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended : true
// })
// )

ReactDOM.render(
<ProductProvider>
    <Router>
        <App />
    </Router>
</ProductProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
