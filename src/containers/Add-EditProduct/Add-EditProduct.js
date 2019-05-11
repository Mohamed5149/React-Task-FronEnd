import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Add-EditProduct.module.css';

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
            let productIndex = productsCopy.findIndex(pro => pro.id === productID);
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

    checkValidation(type, validType) {
        let result = type === "" ? false : true;
        let formValidation = this.state.formValid;
        this.setState({
            [validType]: result,
            formValid: !formValidation
        })
    }
    render() {
        let saveButtonClass;
        saveButtonClass = this.state.formValid ? classes.button : classes.disabled;
        return (
            <div className="formdata">
                <form className="container">
                    <div className="form-group">
                        <label>Product Image</label>
                        <img alt={this.props.productName} src={this.state.productImage}></img>
                        {/* <input type="file" onChange={(event) => { this.setState({ productImage: event.target.value }) }} className="form-control-file" id="exampleFormControlFile1"></input> */}
                        <input name="image" onBlur={() => { this.checkValidation(this.state.productImage, 'imageValid') }} onChange={(event) => { this.setState({ productImage: event.target.value }) }} className={this.state.imageValid ? "form-control" : `form-control + ${classes.error}`} value={this.state.productImage} id="exampleFormControlFile1"></input>
                    </div>

                    <div className="form-group">
                        <label>Product Name</label>
                        <input name="name" onBlur={() => { this.checkValidation(this.state.productName, 'nameValid') }} onChange={(event) => { this.setState({ productName: event.target.value }) }} className={this.state.nameValid ? "form-control" : `form-control + ${classes.error}`} value={this.state.productName} placeholder="Product Name"></input>
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input onBlur={() => { this.checkValidation(this.state.productPrice, 'priceValid') }} onChange={(event) => { this.setState({ productPrice: event.target.value }) }} type="number" className={this.state.priceValid ? "form-control" : `form-control + ${classes.error}`} value={this.state.productPrice} placeholder="Product Price"></input>
                    </div>
                    <div className="form-group">
                        <label>Producer Name</label>
                        <input onBlur={() => { this.checkValidation(this.state.producerName, 'producerValid') }} onChange={(event) => { this.setState({ producerName: event.target.value }) }} className={this.state.producerValid ? "form-control" : `form-control + ${classes.error}`} value={this.state.producerName} placeholder="Producer Name"></input>
                    </div>

                    <button disabled={!this.state.formValid} className={saveButtonClass}>Save</button>

                    <button onClick={(e) => {
                        e.preventDefault();
                        this.resetForm(e)
                    }}
                        className={classes.btnR}>Reset</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductForm) 