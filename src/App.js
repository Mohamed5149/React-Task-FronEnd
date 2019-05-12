import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import ProductsList from '../src/containers/ProductsList/ProductsList';
import ProductForm from './containers/Add-EditProduct/Add-EditProduct';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/products" exact component={ProductsList}></Route>
                    <Route path="/editproduct/:id" exact component={ProductForm}></Route>
                    <Redirect from="" to="/products"></Redirect>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;