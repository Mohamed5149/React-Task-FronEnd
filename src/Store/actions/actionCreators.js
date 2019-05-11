import * as actionTypes from '../actions/actionTypes';

export const InitProducts = (products) => {
    console.log(products+' from action creators');
    return {
        type: actionTypes.INITPRODUCTS,
        products: products
    }
}