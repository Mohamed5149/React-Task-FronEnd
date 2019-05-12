import * as actionCreators from '../Store/actions/actionCreators';

//to get the products from the API
export const getProducts = () => {
    return (actionCreators.InitProducts());
}

//to Edit product
export const editProduct = (product) => {
    return (actionCreators.EditProduct(product));
}