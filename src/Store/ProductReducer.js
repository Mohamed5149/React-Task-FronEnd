import * as actionTypes from './actions/actionTypes';

const initialState = {
    products: [{
        id:1,
        image: 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/7965.jpg',
        name: 'test0', price: '1000', producerName: 'BMW'
    }, {
        id:2,
        image: 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/7965.jpg',
        name: 'test1', price: '1000', producerName: 'BMW'
    }, {
        id:3,
        image: 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/7965.jpg',
        name: 'test2', price: '1000', producerName: 'BMW'
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INITPRODUCTS:
            
            return {
                ...state
            }

        case actionTypes.EDITPRODUCT:
            let productsCopy = state.products;
            let productID = action.product.id;
            let productIndex = productsCopy.findIndex(pro => pro.id === productID);
            productsCopy[productIndex] = action.product;
            return {
                ...state,
                products: productsCopy
            }
        default:
            return state;
    }
}
export default reducer;