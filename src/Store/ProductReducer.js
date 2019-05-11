import * as actionTypes from './actions/actionTypes';

const initialState = {
    products: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INITPRODUCTS:
            console.log('arrived');
            console.log(action.products + ' from reducer');
            let ProductResult = [];
            for (const key in action.products) {
                ProductResult.push(
                    action.products[key] = {
                        id: key,
                        image: action.products[key].image,
                        name: action.products[key].name,
                        price: action.products[key].price,
                        producerName: action.products[key].producerName
                    }
                )
            }
            console.log(ProductResult);
            return {
                ...state,
                products: ProductResult
            }
        default:
            return state;
    }
}

export default reducer;