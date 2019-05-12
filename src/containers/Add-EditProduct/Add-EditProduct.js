import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Add-EditProduct.module.css';
import BackLink from '../../Components/BackLink/BackLink';
import * as ProductAPI from '../../API/ProductsAPI';

class ProductForm extends Component {
    state = {
        product_id: '',
        productName: '',
        productPrice: '',
        producerName: '',
        productImage: '',

        formValid: true,

        nameValid: true,
        priceValid: true,
        producerValid: true,
        imageValid: true,
    }

    componentDidMount() {
        let productID = this.props.match.params.id;
        if (productID) {

            let productsCopy = [...this.props.products];
            let productIndex = productsCopy.findIndex(pro => pro.id == productID);
            let productDetails = productsCopy[productIndex];
            this.setState({
                product_id: productDetails.id,
                productName: productDetails.name,
                productPrice: productDetails.price,
                producerName: productDetails.producerName,
                productImage: productDetails.image
            })
        }
    }
    resetForm() {
        this.setState({
            productName: '',
            productPrice: '',
            producerName: '',
            productImage: ''
        })
    }

    saveHandler() {
        let product = {};
        product.id = this.state.product_id;
        product.image = this.state.productImage;
        product.name = this.state.productName;
        product.price = this.state.productPrice;
        product.producerName = this.state.producerName;
        this.props.edit(product);
    }

    checkValidation(type, validType) {
        let result = type === '' ? false : true;
        this.setState({
            [validType]: result,
        })
    }

    checkFormValid() {
        if (this.state.nameValid && this.state.priceValid && this.state.producerValid && this.state.imageValid) {
            return true;
        }
        else { return false; }


    }
    render() {
        let saveButtonClass;
        saveButtonClass = this.checkFormValid() ? classes.button : classes.disabled;
        let imageErrorLabel = this.state.imageValid ? null : <label className={classes.errorlabel}>Product Image Is Required</label>;
        let nameErrorLabel = this.state.nameValid ? null : <label className={classes.errorlabel}>Product Name Is Required</label>;
        let priceErrorLabel = this.state.priceValid ? null : <label className={classes.errorlabel}>Product Price Is Required</label>;
        let producerErrorLabel = this.state.producerValid ? null : <label className={classes.errorlabel}>Product's Producer Name Is Required</label>;
        return (
            <>
                <div className="formdata">
                    <form className="container">
                        <div className="form-group">
                            <label>Product Image</label>
                            <br></br>
                            <img alt={this.props.productName} src={this.state.productImage}></img>
                            {imageErrorLabel}
                            <input name="image" onBlur={() => { this.checkValidation(this.state.productImage, 'imageValid') }} onChange={(event) => { this.setState({ productImage: event.target.value }) }} className={this.state.imageValid ? "form-control" : `form-control + ${classes.error}`} value={this.state.productImage} id="exampleFormControlFile1"></input>
                        </div>

                        <div className="form-group">
                            <label>Product Name</label> <br></br>
                            {nameErrorLabel}
                            <input name="name" onBlur={() => { this.checkValidation(this.state.productName, 'nameValid') }} onChange={(event) => { this.setState({ productName: event.target.value }) }} className={this.state.nameValid ? "form-control" : `form-control + ${classes.error}`} value={this.state.productName} placeholder="Product Name"></input>
                        </div>

                        <div className="form-group">
                            <label>Product Price</label><br></br>
                            {priceErrorLabel}
                            <input onBlur={() => { this.checkValidation(this.state.productPrice, 'priceValid') }} onChange={(event) => { this.setState({ productPrice: event.target.value }) }} type="number" className={this.state.priceValid ? "form-control" : `form-control + ${classes.error}`} value={this.state.productPrice} placeholder="Product Price"></input>
                        </div>

                        <div className="form-group">
                            <label>Producer Name</label><br></br>
                            {producerErrorLabel}
                            <input onBlur={() => { this.checkValidation(this.state.producerName, 'producerValid') }} onChange={(event) => { this.setState({ producerName: event.target.value }) }} className={this.state.producerValid ? "form-control" : `form-control + ${classes.error}`} value={this.state.producerName} placeholder="Producer Name"></input>
                        </div>

                        <button onClick={(e) => {
                            e.preventDefault();
                            this.saveHandler();
                        }}
                            disabled={!this.checkFormValid()}
                            className={saveButtonClass}>Save</button>

                        <button onClick={(e) => {
                            e.preventDefault();
                            this.resetForm();
                        }}
                            className={classes.btnR}>Reset</button>
                    </form>
                </div>
                <BackLink></BackLink>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        edit: (product) => dispatch(ProductAPI.editProduct(product))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm) 