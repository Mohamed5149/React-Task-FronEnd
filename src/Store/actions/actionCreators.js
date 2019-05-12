import * as actionTypes from '../actions/actionTypes';

export const InitProducts = (products) => {
    return {
        type: actionTypes.INITPRODUCTS
    }
}

export const EditProduct = (product) => {
    return {
        type: actionTypes.EDITPRODUCT,
        product: product
    }
}