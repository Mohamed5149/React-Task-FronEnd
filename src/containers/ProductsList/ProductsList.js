import React, { Component } from 'react';
import './ProductsList.module.css';
import { connect } from 'react-redux';
import * as ProductAPI from '../../API/ProductsAPI';
import ProductRow from '../../Components/ProductRow/ProductRow';

class ProductsList extends Component {
    componentDidMount() {
        this.props.get();
        console.log('renderd');
    }

    editProduct(proid){
        console.log('fired');
        // let id = parseInt(proid);
        this.props.history.push(`/editproduct/${proid}`);
    }

    render() {
        let rows;
        rows = this.props.products.map((product) => {
            return (
                <tbody key={product.id}>
                    <ProductRow
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        producerName={product.producerName}
                        edit={()=>this.editProduct(product.id)}
                    ></ProductRow>
                </tbody>
            )
        })
        return (
            <section>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Producer</th>
                            <th></th>
                        </tr>
                    </thead>
                    {rows}
                </table>
            </section>
        )

    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        get: () => dispatch(ProductAPI.getProducts())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);